import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./redux/reducers";
import React from "react";
import "./css/App.css";
import Navigation from "./navigation";

let store = createStore(reducers);

const App = () => {
	return (
		<Provider store={store}>
			<Navigation />
		</Provider>
	);
};

export default App;
