import React, { CSSProperties } from "react";
import logo from "app/assets/avatar-icon.png";
import Link from "gatsby-link";
import { HeaderLink } from "app/services/utils/Links";
import { routes } from "app/services/utils";
import HomebrewDropdown from "app/components/HomebrewDropdown";
import { Notes, EIPs, Initiatives, NetworkUpgrades } from "./HeaderMenus";

const Banner = () => {
	return (
		<div style={styles.container}>
			<div style={styles.linksContainer}>
				<Link to={routes.HOME.to}>
					<img src={logo} alt={"top bar logo"} style={styles.homeIcon} />
				</Link>
				<HomebrewDropdown
					title="ECH Initiatives"
					options={Initiatives}
					route={routes.INITIATIVES_HOME}
				/>
				<HomebrewDropdown
					title="Notes"
					options={Notes}
					route={routes.NOTES_HOME}
				/>
				<HomebrewDropdown
					title="Network Upgrades"
					options={NetworkUpgrades}
					route={routes.NETWORK_UPGRADES_HOME}
				/>
				<HomebrewDropdown title="EIPs" options={EIPs} route={routes.EIP_HOME} />
				<HeaderLink route={routes.GET_INVOLVED} text={"Get Involved"} />
			</div>
		</div>
	);
};

export default Banner;

const styles = {
	container: {
		width: "50vw",
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
