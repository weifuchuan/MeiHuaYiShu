import * as React from "react";
import { Provider } from "mobx-react/native";
import store from "./store";
import App from "./components";

export default class Application extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<App />
			</Provider>
		);
	}
}
