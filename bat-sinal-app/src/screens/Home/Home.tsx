import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

const Home = () => {
	const navigation = useNavigation();
	return (
		<View style={styles.Container}>
			<Text style={styles.logoText}>
				.<Text style={styles.logoTextWhite}>SignalWave</Text>
			</Text>
			<TouchableOpacity
				onPress={() => navigation.navigate("SingIn")}
				style={styles.btnArea}
			>
				<Text style={styles.btnText}>Make a Call</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Home;
