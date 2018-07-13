import * as React from 'react';
import { View, WebView, Platform, StyleSheet, ActivityIndicator, Alert, Text, ViewProps } from 'react-native';
import { FileSystem } from 'expo';
import EDITOR_JS from '../assets/QuillEditorJS';
import EDITOR_HTML_BUILDER from '../assets/QuillEditorHTML';

const editorUri = FileSystem.documentDirectory + 'editor.html';
const editorJSUri = FileSystem.documentDirectory + 'quill.js';
if (Platform.OS === 'android') {
	const Buffer = require('buffer').Buffer;
	(async () => {
		try {
			await FileSystem.deleteAsync(editorUri);
			await FileSystem.deleteAsync(editorJSUri);
		} catch (err) {
			console.info(err);
		}
		const info = await FileSystem.getInfoAsync(editorUri);
		if (!info.exists) {
			try {
				await FileSystem.writeAsStringAsync(editorJSUri, new Buffer(EDITOR_JS, 'base64').toString());
				await FileSystem.writeAsStringAsync(editorUri, EDITOR_HTML_BUILDER(editorJSUri));
			} catch (err) {
				console.error(err);
			}
		}
	})();
}

export interface IQuillEditorProps {}

export default class QuillEditor extends React.Component<IQuillEditorProps> {
	state = {
		webViewNotLoaded: false
	};
	private web: WebView | null = null;
	private lastResolve: (v: any) => void = () => null;
	private lastId: string = '';

	getText(): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			this.lastResolve = resolve;
			this.lastId = Math.random().toString();
			this.web!.postMessage(JSON.stringify({ action: 'GET', id: this.lastId }));
		});
	}

	setText(text: any) {
		this.web!.postMessage(JSON.stringify({ action: 'SET', text }));
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<WebView
					ref={(r) => (this.web = r)}
					style={{ flex: 1 }}
					source={Platform.OS === 'ios' ? require('../assets/QuillEditor.html') : { uri: editorUri }}
					javaScriptEnabled={true}
					domStorageEnabled={true}
					scalesPageToFit={false}
					mixedContentMode={'always'}
					startInLoadingState={true}
					renderLoading={this.showLoadingIndicator}
					onLoadStart={() => {
						this.setState({ webViewNotLoaded: true });
					}}
					onLoadEnd={() => {
						this.setState({ webViewNotLoaded: false });
					}}
					onMessage={(e) => {
						const resp = JSON.parse(e.nativeEvent.data);
						resp.id === this.lastId && this.lastResolve(resp.text);
					}}
				/>
			</View>
		);
	}

	private showLoadingIndicator = () => {
		return (
			<View style={styles.activityOverlayStyle}>
				<View style={styles.activityIndicatorContainer}>
					<ActivityIndicator size="large" animating={this.state.webViewNotLoaded} color="green" />
				</View>
			</View>
		);
	};

}

const styles = StyleSheet.create({
	activityOverlayStyle: {
		...StyleSheet.absoluteFillObject,
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
		borderRadius: 0
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
