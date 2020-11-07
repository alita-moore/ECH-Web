import React, { CSSProperties } from "react";

const FeeMarket = () => {
	return (
		<div style={styles.container}>
			<div style={styles.containerText}>
				<span style={styles.headerText}>1559 Fee Market Change</span>
				<Return />
				<Return />
				<Return />
				<span style={styles.boldText}>Resources:</span>
				<Return />
				<Return />
				<span style={styles.normalText}>
					<a href={"https://hackmd.io/@timbeiko/1559-update-001"}>
						The State of 1559 - Update 001 🔥
					</a>
				</span>
				<Return />
				<span style={styles.normalText}>
					Barnabe’s Notebook September 2020 -
				</span>
				<br />
				<span style={styles.normalText}>
					<a
						href={
							"https://nbviewer.jupyter.org/github/barnabemonnot/abm1559/blob/master/notebooks/strategicUser.ipynb"
						}
					>
						Strategic users in EIP 1559
					</a>
				</span>
				<Return />
				<span style={styles.normalText}>
					<a href={"https://www.youtube.com/watch?v=kNSpugOwQ1o"}>
						EIP1559 - Ethereum Magicians Summer Sessions
					</a>
				</span>
				<br />
				............. and so on
			</div>
		</div>
	);
};

const Return = () => <div style={{ height: 30 }} />;
export default FeeMarket;

const styles = {
	container: {
		display: "flex",
		flexDirection: "column",
		textAlign: "center",
	} as CSSProperties,
	avatar: {
		width: "500px",
		height: "500px",
		alignSelf: "center",
	} as CSSProperties,
	containerText: {
		maxWidth: "75vw",
		alignSelf: "center",
	} as CSSProperties,
	normalText: {
		fontSize: 20,
	} as CSSProperties,
	headerText: {
		fontSize: 50,
	} as CSSProperties,
	boldText: {
		fontWeight: 800,
		fontSize: 25,
	} as CSSProperties,
};
