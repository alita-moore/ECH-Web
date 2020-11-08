import { routes } from "../../utils";
import { MenuItems } from "../Dropdown";

export const Notes: MenuItems = [
	{
		route: { to: routes.NOTES.FEE_MARKET, type: "internal" },
		label: "1559 Fee Market",
	},
];

export const EIPs: MenuItems = [
	{
		route: {
			to: routes.FEE_MARKET,
			type: "internal",
		},
		label: "1559 Fee Market",
	},
];

export const Initiatives: MenuItems = [
	{
		route: { to: routes.PEEP, type: "internal" },
		label: "Peep an EIP",
	},
];

export const NetworkUpgrades: MenuItems = [
	{
		route: { to: routes.NETWORK_UPGRADES.BERLIN, type: "internal" },
		label: "Berlin",
	},
];
