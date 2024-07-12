import { useState } from "react";

export default function useApp() {
	const [contactNumber, setContactNumber] = useState("");
	const [name, setName] = useState("");
	const [adress, setAdress] = useState("");
	const [textDescription, setTextDescription] = useState("");
	const [modalVisible, setModalVisible] = useState(false);
	const [focused, setFocused] = useState("");
	const [data, setData] = useState({} as any);

	const handleData = async () => {
		try {
			if (
				contactNumber === "" ||
				contactNumber.length < 15 ||
				name === "" ||
				adress === "" ||
				textDescription === ""
			) {
				return alert("Fill in all fields");
			} else {
				setData({
					contactNumber,
					name,
					adress,
					textDescription,
				});
				setModalVisible(true);
			}
		} catch (error) {
			alert("Error");
		}
	};

	return {
		contactNumber,
		setContactNumber,
		name,
		setName,
		adress,
		setAdress,
		textDescription,
		setTextDescription,
		handleData,
		modalVisible,
		setModalVisible,
		focused,
		setFocused,
		data,
	};
}
