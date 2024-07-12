import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	Container: {
		height: "100%",
		padding: 32,
		backgroundColor: "#121826",
	},
	navigationContainer: {
		marginTop: 8,
		height: "6%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingRight: 32,
	},
	navigationItems: {
		width: "100%",
		justifyContent: "flex-start",
		alignItems: "center",
		flexDirection: "row",
	},
	baseText: {
		color: "#FFF",
		fontSize: 12,
		fontWeight: "600",
		marginLeft: 8,
	},
	logoText: {
		color: "#1DAC92",
		fontSize: 48,
		fontWeight: "800",
		marginBottom: 16,
	},
	logoTextWhite: {
		color: "#fff",
		fontSize: 32,
		fontWeight: "800",
		marginBottom: 16,
	},
	labelText: {
		color: "#FFF",
		fontSize: 12,
		fontWeight: "600",
		marginBottom: 8,
	},
	inputContainer: {
		flex: 1,
		width: "100%",
		flexDirection: "column",
		gap: 16,
	},
	inputItens: {
		alignItems: "flex-start",
	},
	textInput: {
		width: "100%",
		height: 52,
		color: "#FFF",
		backgroundColor: "#334155",
		borderColor: "#1DAC92",
		borderRadius: 8,
		padding: 16,
	},
	textDescriptionInput: {
		width: "100%",
		height: 192,
		color: "#FFF",
		backgroundColor: "#334155",
		borderColor: "#1DAC92",
		borderRadius: 8,
		padding: 16,
	},
	btnArea: {
		backgroundColor: "#1DAC92",
		padding: 10,
		marginTop: 32,
		width: "100%",
		borderRadius: 5,
		flexDirection: "row",
		justifyContent: "center",
	},
	btnText: {
		color: "#FFF",
		fontSize: 18,
		fontWeight: "600",
	},

	modalContainer: {
		flex: 1,
		backgroundColor: "rgba(18, 24, 38, 1)",
		justifyContent: "center",
		paddingHorizontal: 32,
		opacity: 0.9,
	},
	modalContent: {
		height: 350,
		justifyContent: "space-between",
		backgroundColor: "#fff",
		borderRadius: 12,
		borderColor: "#1DAC92",
		gap: 8,
		padding: 24,
	},
	modalTextContainer: {
		flex: 1,
		justifyContent: "space-between",
		paddingVertical: 24,
	},
	modalTextHeader: {
		color: "#334155",
		fontSize: 24,
		fontWeight: "700",
		textAlign: "center",
	},
	modalTitleText: {
		color: "#1DAC92",
		fontSize: 14,
		fontWeight: "700",
	},
	modalText: {
		color: "#334155",
		fontSize: 14,
		fontWeight: "500",
	},
	btnAreaModal: {
		backgroundColor: "#1DAC92",
		padding: 10,
		width: "100%",
		borderRadius: 5,
		flexDirection: "row",
		justifyContent: "center",
	},
});

export default styles;
