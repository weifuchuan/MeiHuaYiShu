import * as React from "react";
import { Provider } from "mobx-react/native";
import store from "./store";
import { NativeRouter } from "react-router-native";
import App from "./components";

export default class Application extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<NativeRouter>
					<App />
				</NativeRouter>
			</Provider>
		);
	}
}
