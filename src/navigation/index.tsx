import { History } from "history";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavigationBanner from "../components/NavigationBanner";

import Home from "../screens/Home";
import FeeMarket from "../screens/FeeMarket";
import { routes } from "../utils";

type Props = {
	history: History | undefined;
};

const Navigation = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<NavigationBanner />
					<Switch>
						<Route
							path={routes.EIP.FEE_MARKET.to}
							component={FeeMarket}
							exact
						/>
						<Route path="/" component={Home} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default Navigation;
