import React, { CSSProperties } from "react";
import { Menu, Dropdown } from "antd";
import "antd/dist/antd.css";
import { DownOutlined } from "@ant-design/icons";
import { Text } from "../design";
import { createLink } from "../utils";
import { Route } from "../utils";

type MenuItem = {
	route: Route;
	label: string;
};

export type MenuItems = MenuItem[];

type DropdownTypes = "header";

export type DropdownProps = {
	title: string;
	options: MenuItems;
	type?: DropdownTypes;
	route?: Route;
};

const CustomDropdown = ({
	title,
	options,
	type = "header",
	route,
}: DropdownProps) => {
	const createMenuItem = ({ route, label }: MenuItem) => (
		<Menu.Item>{createLink(label, route)}</Menu.Item>
	);

	const menu = <Menu>{options.map(createMenuItem)}</Menu>;

	return (
		<Dropdown overlay={menu}>
			<div className="ant-dropdown-link" style={styles[type]}>
				{route ? createLink(title, route, styles.headerLink) : title}{" "}
				<DownOutlined />
			</div>
		</Dropdown>
	);
};

export default CustomDropdown;

const styles = {
	header: {
		cursor: "pointer",
		...Text.HEADER,
	} as CSSProperties,
	headerLink: {
		...Text.HEADER_LINK,
	} as CSSProperties,
};
