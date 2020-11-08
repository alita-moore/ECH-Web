import { CSSProperties } from "react";

const SystemColors = {
	lightBlack: "#16161B",
	blueSoft: "#7D7DF7",
};

const Text = {
	HEADER: {
		color: SystemColors.lightBlack,
		fontWeight: 500,
		fontSize: 20,
	} as CSSProperties,
	HEADER_LINK: {
		color: SystemColors.lightBlack,
	} as CSSProperties,
};

export { Text, SystemColors };
