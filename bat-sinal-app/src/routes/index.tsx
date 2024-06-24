import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home/Home";
import SingIn from "../screens/SingIn/SingIn";

const Stack = createStackNavigator();

export default function Routes() {
	return (
		<Stack.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerShown: false,
				animationEnabled: false,
			}}
		>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="SingIn" component={SingIn} />
		</Stack.Navigator>
	);
}
