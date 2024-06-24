import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	TextInput,
	Modal,
	Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaskInput, { Masks } from "react-native-mask-input";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";
import useApp from "./useApp";

const SingIn = () => {
	const navigation = useNavigation();

	const {
		data,
		name,
		adress,
		modalVisible,
		contactNumber,
		textDescription,
		setName,
		setAdress,
		setContactNumber,
		setTextDescription,
		handleData,
		setModalVisible,
	} = useApp();

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<ScrollView
				contentContainerStyle={styles.Container}
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.navigationContainer}>
					<TouchableOpacity
						style={styles.navigationItems}
						onPress={() => navigation.goBack()}
					>
						<Ionicons name="chevron-back" size={24} color="white" />
						<Text style={styles.baseText}>go back</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.inputContainer}>
					<View style={styles.inputItens}>
						<Text style={styles.labelText}>Name</Text>
						<TextInput
							value={name}
							onChangeText={(value) => setName(value)}
							style={styles.textInput}
						/>
					</View>
					<View style={styles.inputItens}>
						<Text style={styles.labelText}>Contact Number</Text>
						<MaskInput
							value={contactNumber}
							keyboardType={"numeric"}
							mask={Masks.BRL_PHONE}
							style={styles.textInput}
							onChangeText={(value) => setContactNumber(value)}
						/>
					</View>
					<View style={styles.inputItens}>
						<Text style={styles.labelText}>Adress</Text>
						<TextInput
							value={adress}
							onChangeText={(value) => setAdress(value)}
							style={styles.textInput}
						/>
					</View>
					<View style={styles.inputItens}>
						<Text style={styles.labelText}>Your message</Text>
						<TextInput
							value={textDescription}
							onChangeText={(value) => setTextDescription(value)}
							textAlignVertical={"top"}
							multiline={true}
							style={styles.textDescriptionInput}
						/>
					</View>
					<TouchableOpacity
						onPress={() => handleData()}
						style={styles.btnArea}
					>
						<Text style={styles.btnText}>Send</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
			{modalVisible && data && (
				<Modal
					visible={modalVisible}
					animationType="fade"
					transparent={true}
					onRequestClose={() => {
						setModalVisible(!modalVisible);
					}}
				>
					<View style={styles.modalContainer}>
						<TouchableOpacity
							onPress={() => setModalVisible(!modalVisible)}
							style={{ alignSelf: "flex-end" }}
						>
							<Ionicons name="close" size={24} color="#1DAC92" />
						</TouchableOpacity>
						<View style={styles.inputContainer}>
							<Text style={styles.baseText}>
								Name: {data.name}
							</Text>
							<Text style={styles.baseText}>
								Contact Number: {data.contactNumber}
							</Text>
							<Text style={styles.baseText}>
								Adress: {data.adress}
							</Text>
							<Text style={styles.baseText}>
								Message: {data.textDescription}
							</Text>
						</View>
					</View>
				</Modal>
			)}
		</KeyboardAvoidingView>
	);
};

export default SingIn;
