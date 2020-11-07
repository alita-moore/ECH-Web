import React from "react";
import { Link } from "react-router-dom";

type TextProps = {
	route: string;
	text: string;
};

const TextLink = ({ route, text }: TextProps) => (
	<Link to={route}>
		<span>{text}</span>
	</Link>
);

export default TextLink;
