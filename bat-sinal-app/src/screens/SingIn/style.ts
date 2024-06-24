import { StyleSheet } from "react-native"
import { TextInput } from "react-native-gesture-handler";

const styles = StyleSheet.create({
    Container:{
        height: '100%',
        padding: 32,
        backgroundColor: "#121826"
    },
    navigationContainer:{
        marginTop: 8,
        height: '6%',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: 32,
    },
    navigationItems:{
        width: '100%',
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
    labelText: {
        color: "#FFF",
        fontSize: 12,
        fontWeight: "600",
        marginBottom: 8,
    },
    inputContainer:{
        flex: 1,
        width: '100%',
        flexDirection: "column",
        gap: 16,
    },
    inputItens:{
        alignItems: "flex-start",
    },
    textInput:{
        width: '100%',
        height: 52,
        color: "#FFF",
        backgroundColor: "#334155",
        borderRadius: 8,
        padding: 16,
    },
    textDescriptionInput:{
        width: '100%',
        height: 192,
        color: "#FFF",
        backgroundColor: "#334155",
        borderRadius: 8,
        padding: 16,
    },
    btnArea: {
        backgroundColor: "#1DAC92",
        padding: 10,
        marginTop: 32,
        width: '100%',
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "center",
    },
    btnText:{
        color: "#FFF",
        fontSize: 18,
        fontWeight: "600"
    },

    modalContainer:{
        flex:1,
        backgroundColor: "rgba(18, 24, 38, 1)",
        padding: 32,
    },
})

export default styles;