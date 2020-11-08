import React, { CSSProperties } from "react";
import { HeaderLink } from "./TextLink";
import logo from "../assets/avatar-icon.png";
import { Link } from "react-router-dom";

const Banner = () => {
	return (
		<div style={styles.container}>
			<Links />
		</div>
	);
};

const Links = () => (
	<div style={styles.linksContainer}>
		<Link to={routes.HOME}>
			<img src={logo} alt={"top bar logo"} style={styles.homeIcon} />
		</Link>
		<HeaderLink route={routes.FEE_MARKET} text={"Fee Market"} />
		<HeaderLink route={routes.PEEP} text={"Peep an EIP"} />
		<HeaderLink
			route={routes.NETWORK_UPGRADES}
			text={"Upcoming Ethereum Network Upgrade"}
		/>
	</div>
);

export default Banner;

const routes = {
	HOME: "/",
	FEE_MARKET: "/fee-market",
	PEEP: "/peep",
	NETWORK_UPGRADES: "/upgrades",
};

const styles = {
	container: {
		width: "40vw",
		margin: "auto",
		marginTop: 15,
		marginBottom: 30,
	} as CSSProperties,
	linksContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	} as CSSProperties,
	homeIcon: {
		width: 50,
		height: 50,
	} as CSSProperties,
	whiteSpace: {
		width: 50,
	} as CSSProperties,
};
