type RouteType = "internal" | "external";

export type Route = {
	to: string;
	type: RouteType;
};

export const routes = {
	HOME: { to: "/", type: "internal" } as Route,
	EIP_HOME: { to: "/eip", type: "internal" } as Route,
	EIP: {
		FEE_MARKET: { to: "/eip/fee-market", type: "internal" } as Route,
	},
	INITIATIVES_HOME: { to: "/initiatives", type: "internal" } as Route,
	INITIATIVES: {
		PEEP: { to: "/initiatives/peep", type: "internal" } as Route,
	},
	NOTES_HOME: { to: "/notes", type: "internal" } as Route,
	NOTES: {
		FEE_MARKET: { to: "/notes/fee-market", type: "internal" } as Route,
	},
	NETWORK_UPGRADES_HOME: { to: "/upgrades", type: "internal" } as Route,
	NETWORK_UPGRADES: {
		BERLIN: { to: "/upgrades/berlin", type: "internal" } as Route,
	},
	GET_INVOLVED: { to: "/get-involved", type: "internal" } as Route,
};
