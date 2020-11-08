import React, { CSSProperties } from "react";
import logo from "../../assets/avatar-icon.png";
import { Link } from "react-router-dom";
import { HeaderLink } from "../../utils/Links";
import { routes } from "../../utils";
import Dropdown from "../Dropdown";
import { Notes, EIPs, Initiatives, NetworkUpgrades } from "./Dropdowns";

const Banner = () => {
	return (
		<div style={styles.container}>
			<div style={styles.linksContainer}>
				<Link to={routes.HOME}>
					<img src={logo} alt={"top bar logo"} style={styles.homeIcon} />
				</Link>
				<Dropdown
					title="ECH Initiatives"
					options={Initiatives}
					route={routes.INITIATIVES_HOME}
				/>
				<Dropdown title="Notes" options={Notes} route={routes.NOTES_HOME} />
				<Dropdown
					title="Network Upgrades"
					options={NetworkUpgrades}
					route={routes.NETWORK_UPGRADES_HOME}
				/>
				<Dropdown title="EIPs" options={EIPs} route={routes.EIP_HOME} />

				<HeaderLink route={routes.GET_INVOLVED} text={"Get Involved"} />
			</div>
		</div>
	);
};

export default Banner;

const styles = {
	container: {
		width: "60vw",
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
