import { routes } from "../../../utils";
import { MenuItems } from "../../HomebrewDropdown";

export const Notes: MenuItems = [
	{
		route: routes.NOTES.FEE_MARKET,
		label: "1559 Fee Market",
	},
];

export const EIPs: MenuItems = [
	{
		route: routes.EIP.FEE_MARKET,
		label: "1559 Fee Market",
	},
];

export const Initiatives: MenuItems = [
	{
		route: routes.INITIATIVES.PEEP,
		label: "Peep an EIP",
	},
];

export const NetworkUpgrades: MenuItems = [
	{
		route: routes.NETWORK_UPGRADES.BERLIN,
		label: "Berlin",
	},
];
