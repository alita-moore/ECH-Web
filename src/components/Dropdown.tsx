import React, { CSSProperties } from "react";
import { Menu, Dropdown } from "antd";
import "antd/dist/antd.css";
import { DownOutlined } from "@ant-design/icons";
import { Text } from "../design";
import { Link } from "react-router-dom";

type RouteType = "internal" | "external";

type Route = {
	to: string;
	type: RouteType;
};

type MenuItem = {
	route: Route;
	label: string;
	disabled?: boolean;
};

export type MenuItems = MenuItem[];

type DropdownTypes = "header";

export type DropdownProps = {
	title: string;
	options: MenuItems;
	type?: DropdownTypes;
	route?: Route;
};

const _Dropdown = ({ title, options, type = "header" }: DropdownProps) => {
	const createLink = ({ to, type }: Route, label: string) => {
		if (type === "internal") {
			return <Link to={to}>{label}</Link>;
		} else if (type === "external") {
			return (
				<a target="_blank" rel="noopener noreferrer" href={to}>
					{label}
				</a>
			);
		}
	};

	const createMenuItem = ({ route, label, disabled }: MenuItem) => (
		<Menu.Item>{createLink(route, label)}</Menu.Item>
	);

	const menu = <Menu>{options.map(createMenuItem)}</Menu>;

	return (
		<Dropdown overlay={menu}>
			<div
				className="ant-dropdown-link"
				onClick={(e) => e.preventDefault()}
				style={styles[type]}
			>
				{title} <DownOutlined />
			</div>
		</Dropdown>
	);
};

export default _Dropdown;

const styles = {
	header: {
		cursor: "pointer",
		...Text.HEADER,
	} as CSSProperties,
};
