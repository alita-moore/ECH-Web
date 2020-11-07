import { createBrowserHistory } from "history";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./redux/reducers";
import React from "react";
import logo from "./assets/logo.svg";
import "./css/App.css";
import Navigation from "./navigation";

let store = createStore(reducers);
let history = createBrowserHistory();

const App = () => {
	return (
		<Provider store={store}>
			<Navigation history={history} />
		</Provider>
	);
};

export default App;
