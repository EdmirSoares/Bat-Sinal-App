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
		onCloseModal,
		setModalVisible,
		focused,
		setFocused,
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
						<Ionicons
							name="chevron-back"
							size={24}
							color="#1DAC92"
						/>
						<Text style={styles.baseText}>go back</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.inputContainer}>
					<Text style={styles.logoText}>
						.<Text style={styles.logoTextWhite}>SignalWave</Text>
					</Text>
					<View style={styles.inputItens}>
						<Text style={styles.labelText}>Name</Text>
						<TextInput
							value={name}
							placeholder="What's your name?"
							placeholderTextColor={"#6e7f98"}
							onChangeText={(value) => setName(value)}
							onFocus={() => setFocused("name")}
							onBlur={() => setFocused("")}
							style={[
								styles.textInput,
								focused === "name"
									? { borderWidth: 1 }
									: { borderWidth: 0 },
							]}
						/>
					</View>
					<View style={styles.inputItens}>
						<Text style={styles.labelText}>Contact Number</Text>
						<MaskInput
							value={contactNumber}
							placeholder="How can we call you?"
							placeholderTextColor={"#6e7f98"}
							keyboardType={"numeric"}
							mask={Masks.USA_PHONE}
							style={[
								styles.textInput,
								focused === "contactNumber"
									? { borderWidth: 1 }
									: { borderWidth: 0 },
							]}
							onFocus={() => setFocused("contactNumber")}
							onBlur={() => setFocused("")}
							onChangeText={(value) => setContactNumber(value)}
						/>
					</View>
					<View style={styles.inputItens}>
						<Text style={styles.labelText}>Adress</Text>
						<TextInput
							value={adress}
							placeholder="Where do you live?"
							placeholderTextColor={"#6e7f98"}
							style={[
								styles.textInput,
								focused === "adress"
									? { borderWidth: 1 }
									: { borderWidth: 0 },
							]}
							onFocus={() => setFocused("adress")}
							onBlur={() => setFocused("")}
							onChangeText={(value) => setAdress(value)}
						/>
					</View>
					<View style={styles.inputItens}>
						<Text style={styles.labelText}>Your message</Text>
						<TextInput
							value={textDescription}
							placeholder="Write your message here..."
							placeholderTextColor={"#6e7f98"}
							textAlignVertical={"top"}
							multiline={true}
							onFocus={() => setFocused("textDescription")}
							onBlur={() => setFocused("")}
							onChangeText={(value) => setTextDescription(value)}
							style={[
								styles.textDescriptionInput,
								focused === "textDescription"
									? { borderWidth: 1 }
									: { borderWidth: 0 },
							]}
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
						<View style={styles.modalContent}>
							<Text style={styles.modalTextHeader}>
								Mensage sent successfully!
							</Text>
							<View style={styles.modalTextContainer}>
								<Text style={styles.modalTitleText}>
									To:{" "}
									<Text style={styles.modalText}>
										{data.name}
									</Text>
								</Text>
								<Text style={styles.modalTitleText}>
									Contact Number:{" "}
									<Text style={styles.modalText}>
										{data.contactNumber}
									</Text>
								</Text>
								<Text style={styles.modalTitleText}>
									Adress:{" "}
									<Text style={styles.modalText}>
										{data.adress}
									</Text>
								</Text>
								<Text
									style={styles.modalTitleText}
									numberOfLines={3}
									ellipsizeMode="tail"
								>
									Message:{" "}
									<Text style={styles.modalText}>
										{data.textDescription}
									</Text>
								</Text>
							</View>
							<TouchableOpacity
								style={styles.btnAreaModal}
								onPress={() => onCloseModal()}
							>
								<Text style={styles.btnText}>Close</Text>
							</TouchableOpacity>
						</View>
					</View>
				</Modal>
			)}
		</KeyboardAvoidingView>
	);
};

export default SingIn;
