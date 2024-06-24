import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from ".";

const Provider = () => {
	return (
		<NavigationContainer>
			<Routes />
		</NavigationContainer>
	);
};

export default Provider;
