import * as React from 'react';
import { View, WebView, StyleSheet, ActivityIndicator } from 'react-native';
const QuillDeltaToHtmlConverter = require('quill-delta-to-html');

export default class QuillViewer extends React.Component<{
	text: any;
}> {
	state = {
		webViewNotLoaded: false
	};
	render() {
		return (
			<View style={{ flex: 1 }}>
				<WebView
          style={{ flex: 1 }}
					source={{ html: `
					<!DOCTYPE html>
<html>
<head>

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
</head>
<body>	
					${new QuillDeltaToHtmlConverter(this.props.text.ops, {}).convert()}
</body>
</html>					
					`, baseUrl: ''}}
					renderLoading={this.showLoadingIndicator}
					onLoadStart={() => {
						this.setState({ webViewNotLoaded: true });
					}}
					onLoadEnd={() => {
						this.setState({ webViewNotLoaded: false });
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
