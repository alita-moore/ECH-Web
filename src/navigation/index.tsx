import { createBrowserHistory, History } from "history";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavigationBanner from "../components/NavigationBanner";

import Home from "../screens/Home";
import FeeMarket from "../screens/FeeMarket";

type Props = {
	history: History | undefined;
};

const Navigation = ({ history }: Props) => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<NavigationBanner />
					<Switch>
						<Route path="/fee-market" component={FeeMarket} exact />
						<Route path="/" component={Home} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default Navigation;
