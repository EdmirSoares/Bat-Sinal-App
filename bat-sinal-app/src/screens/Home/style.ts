import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	Container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 32,
		backgroundColor: "#121826",
	},
	logoText: {
		color: "#1DAC92",
		fontSize: 56,
		fontWeight: "800",
		position: "absolute",
		top: 280,
	},
	logoTextWhite: {
		color: "#fff",
		fontSize: 32,
		fontWeight: "800",
		marginTop: 24,
		marginBottom: 16,
	},
	btnArea: {
		backgroundColor: "#1DAC92",
		padding: 10,
		width: "80%",
		borderRadius: 5,
		flexDirection: "row",
		justifyContent: "center",
	},
	btnText: {
		color: "#FFF",
		fontSize: 18,
		fontWeight: "600",
	},
});

export default styles;
