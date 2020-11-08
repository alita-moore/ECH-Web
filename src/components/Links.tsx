import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Text } from "../design";

type TextProps = {
	route: string;
	text: string;
};

const TextLink = ({ route, text }: TextProps) => (
	<Link to={route}>
		<span>{text}</span>
	</Link>
);

const HeaderLink = ({ route, text }: TextProps) => (
	<Link to={route} style={styles.headerLink}>
		<span>{text}</span>
	</Link>
);

export { TextLink, HeaderLink };

const styles = {
	headerLink: {
		textDecoration: "none",
		...Text.HEADER,
	} as CSSProperties,
};
