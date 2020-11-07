import React from "react";
import TextLink from "./TextLink";

const Banner = () => {
	return (
		<div style={{ display: "flex" }}>
			<TextLink route={routes.HOME} text={"home"} />
			<div style={{ width: 50 }} />
			<TextLink route={routes.FEE_MARKET} text={"fee market"} />
		</div>
	);
};

export default Banner;

const routes = {
	HOME: "/",
	FEE_MARKET: "/fee-market",
};
