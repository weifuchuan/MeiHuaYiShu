import * as React from 'react';
import { View, Dimensions } from 'react-native';

const { Overlay } = require('teaset');
const { width, height } = Dimensions.get('window');

export default class ModalKit {
	static show(elem: React.ReactElement<any>) {
		Overlay.show(
			<Overlay.View style={{ alignItems: 'center', justifyContent: 'center' }} modal={false} overlayOpacity={0.6}>
				<View style={{ height: height * 0.8, width: width * 0.9, borderRadius: 5 }}>
					<View style={{ flex: 1, backgroundColor:"#fff", padding:3 }}>{elem}</View>
				</View>
			</Overlay.View>
		);
	}
}
