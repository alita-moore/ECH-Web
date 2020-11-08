import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";
import systemColors from "../design/SystemColors";

type TextProps = {
	route: string;
	text: string;
};

const TextLink = ({ route, text }: TextProps) => (
	<Link to={route}>
		<span>{text}</span>
	</Link>
);

export const HeaderLink = ({ route, text }: TextProps) => (
	<Link to={route} style={styles.headerLink}>
		<span>{text}</span>
	</Link>
);

export default TextLink;

const styles = {
	headerLink: {
		color: systemColors.blueSoft,
		textDecoration: "none",
		fontWeight: 700,
		fontSize: 20,
	} as CSSProperties,
};
