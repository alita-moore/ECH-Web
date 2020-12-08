import React, { CSSProperties } from "react";
import Link from "gatsby-link";
import { Text } from "../design";
import { Route } from ".";

type TextProps = {
	route: Route;
	text: string;
};

export const TextLink = ({ route, text }: TextProps) => (
	<Link to={route.to}>
		<span>{text}</span>
	</Link>
);

export const HeaderLink = ({ route, text }: TextProps) =>
	createLink(text, route, styles.headerLink);

export const createLink = (
	label: string,
	route: Route,
	style?: CSSProperties
) => {
	if (route.type === "internal") {
		return (
			<Link to={route.to} style={style}>
				{label}
			</Link>
		);
	} else {
		return (
			<a
				target="_blank"
				rel="noopener noreferrer"
				href={route.to}
				style={style}
			>
				{label}
			</a>
		);
	}
};

const styles = {
	headerLink: {
		textDecoration: "none",
		...Text.HEADER,
	} as CSSProperties,
};
