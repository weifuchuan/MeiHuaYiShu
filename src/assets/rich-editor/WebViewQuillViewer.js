/********************************************
 * WebViewQuillViewer.js
 * A Delta viewer suitable for viewing output from a Quill.js
 * editor.  The Delta format is discussed here: https://quilljs.com/docs/delta/
 * This component is useful for applications that must avoid using native code
 *
 */
import React from 'react';
import { View, ActivityIndicator, StyleSheet, WebView, Alert,Text } from 'react-native';
import PropTypes from 'prop-types';
import renderIf from 'render-if';

// path to the file that the webview will load
// import INDEX_FILE from './assets/dist/reactQuillViewerHTML';
// @ts-ignore
const INDEX_FILE = require("./assets/dist/reactQuillViewer-index.html")

const MESSAGE_PREFIX = 'react-native-webview-quilljs';

export default class WebViewQuillViewer extends React.Component {
	constructor(props) {
		super(props);
		this.webview = null;
		this.state = {
			webViewNotLoaded: true // flag to show activity indicator
		};
	}

	createWebViewRef = (webview) => {
		this.webview = webview;
	};

	handleMessage = (event) => {
		let msgData;
		try {
			msgData = JSON.parse(event.nativeEvent.data);
			if (msgData.hasOwnProperty('prefix') && msgData.prefix === MESSAGE_PREFIX) {
				// console.log(`WebViewQuillEditor: received message ${msgData.type}`);
				this.sendMessage('MESSAGE_ACKNOWLEDGED');
				// console.log(`WebViewQuillEditor: sent MESSAGE_ACKNOWLEDGED`);

				switch (msgData.type) {
					case 'VIEWER_LOADED':
						this.viewerLoaded();
						break;
					case 'VIEWER_SENT':
						this.props.getViewerCallback(msgData.payload.viewer);
						break;
					default:
						console.warn(`WebViewQuillViewer Error: Unhandled message type received "${msgData.type}"`);
				}
			}
		} catch (err) {
			console.warn(err);
			return;
		}
	};

	onWebViewLoaded = () => {
		console.log('Webview loaded');
		this.setState({ webViewNotLoaded: false });
		this.sendMessage('LOAD_VIEWER');
		if (this.props.hasOwnProperty('backgroundColor')) {
			this.sendMessage('SET_BACKGROUND_COLOR', {
				backgroundColor: this.props.backgroundColor
			});
		}
		if (this.props.hasOwnProperty('onLoad')) {
			this.props.onLoad();
		}
		if (this.props.hasOwnProperty('getViewerCallback')) {
			this.sendMessage('SEND_VIEWER');
		}
	};

	viewerLoaded = () => {
		// send the content to the viewer if we have it
		if (this.props.hasOwnProperty('contentToDisplay')) {
			console.log(this.props.contentToDisplay);
			this.sendMessage('SET_CONTENTS', {
				ops: this.props.contentToDisplay
			});
		}
		if (this.props.hasOwnProperty('htmlContentToDisplay')) {
			this.sendMessage('SET_HTML_CONTENTS', {
				html: this.props.htmlContentToDisplay
			});
		}
	};

	sendContentToViewer = (delta) => {
		this.sendMessage('SET_CONTENTS', {
			ops: delta.ops
		});
	};

	sendMessage = (type, payload) => {
		// only send message when webview is loaded
		if (this.webview) {
			console.log(`WebViewQuillViewer: sending message ${type}`);
			this.webview.postMessage(
				JSON.stringify({
					prefix: MESSAGE_PREFIX,
					type,
					payload
				}),
				'*'
			);
		}
	};

	showLoadingIndicator = () => {
		return (
			<View style={styles.activityOverlayStyle}>
				<View style={styles.activityIndicatorContainer}>
					<ActivityIndicator size="large" animating={this.state.webViewNotLoaded} color="green" />
				</View>
			</View>
		);
	};

	onError = (error) => {
		Alert.alert('WebView onError', error, [ { text: 'OK', onPress: () => console.log('OK Pressed') } ]);
	};

	renderError = (error) => {
		Alert.alert('WebView renderError', error, [ { text: 'OK', onPress: () => console.log('OK Pressed') } ]);
		return <Text>{error}</Text>
	};

	render() {
		return (
			<View
				style={{
					flex: 1
				}}
			>
				<WebView
					style={{ ...StyleSheet.absoluteFillObject }}
					ref={this.createWebViewRef}
					source={INDEX_FILE}
					onLoadEnd={this.onWebViewLoaded}
					onMessage={this.handleMessage}
					startInLoadingState={true}
					renderLoading={this.showLoadingIndicator}
					renderError={this.renderError}
					javaScriptEnabled={true}
					onError={this.onError}
					scalesPageToFit={false}
					mixedContentMode={'always'}
				/>
			</View>
		);
	}
}

WebViewQuillViewer.propTypes = {
	backgroundColor: PropTypes.string,
	onLoad: PropTypes.func
};

// Specifies the default values for props:
WebViewQuillViewer.defaultProps = {
	theme: 'bubble'
};

const styles = StyleSheet.create({
	activityOverlayStyle: {
		...StyleSheet.absoluteFillObject,
		marginHorizontal: 20,
		marginVertical: 60,
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
		borderRadius: 5
	},
	activityIndicatorContainer: {
		backgroundColor: 'white',
		padding: 10,
		borderRadius: 50,
		alignSelf: 'center',
		shadowColor: '#000000',
		shadowOffset: {
			width: 0,
			height: 3
		},
		shadowRadius: 5,
		shadowOpacity: 1.0
	}
});
