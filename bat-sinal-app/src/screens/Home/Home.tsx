import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

const Home = () => {
	const navigation = useNavigation();
	return (
		<View style={styles.Container}>
			<TouchableOpacity
				onPress={() => navigation.navigate("SingIn")}
				style={styles.btnArea}
			>
				<Text style={styles.btnText}>Call Signal</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Home;
