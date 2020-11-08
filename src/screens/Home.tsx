import React, { CSSProperties } from "react";
import avatar from "../assets/avatar-icon.png";

const Home = () => {
	return (
		<div style={styles.container}>
			<img src={avatar} alt={"icon"} style={styles.avatar} />
			<div style={styles.containerText}>
				<span style={styles.headerText}>Ethereum Cat Herders</span>
				<Return />
				<Return />
				<Return />
				<span style={styles.normalText}>
					Welcome to the Ethereum cat Herders’ website, the go-to place to get
					the latest news on upcoming Network Upgrades (Hard Forks), EIP’s,
					announcements and overall core developer and community coordination
					efforts.
				</span>
				<Return />
				<Return />
				<span style={{ ...styles.boldText, ...styles.normalText }}>
					Our aim is to bring the minimum amount of order that chaos needs to
					move Ethereum forward.
				</span>
			</div>
		</div>
	);
};

const Return = () => <div style={{ height: 30 }} />;
export default Home;

const styles = {
	container: {
		display: "flex",
		flexDirection: "column",
		textAlign: "center",
	} as CSSProperties,
	avatar: {
		width: "300px",
		height: "300px",
		alignSelf: "center",
	} as CSSProperties,
	containerText: {
		maxWidth: "75vw",
		alignSelf: "center",
	} as CSSProperties,
	normalText: {
		fontSize: 25,
	} as CSSProperties,
	headerText: {
		fontSize: 50,
	} as CSSProperties,
	boldText: {
		fontWeight: 800,
	} as CSSProperties,
};
