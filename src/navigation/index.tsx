import { createBrowserHistory, History } from "history";
import React from "react";
import { Router, Route } from "react-router-dom";

type Props = {
	history: History | null;
};

const TestComponent = () => {
	return (
		<div>
			<span>THIS IS A TEST YO</span>
		</div>
	);
};

const Navigation = ({ history }: Props) => {
	const search = window.location.search;
	const params = new URLSearchParams(search);
	return (
		<Router history={history || createBrowserHistory({})}>
			<Route exact path="/" component={TestComponent} />
			<Route exact path="/test" component={TestComponent} />
		</Router>
	);
};

export default Navigation;
