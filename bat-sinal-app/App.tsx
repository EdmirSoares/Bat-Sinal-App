import { StatusBar } from "expo-status-bar";
import Provider from "./src/routes/Provider";

export default function App() {
	return (
		<>
			<StatusBar style="light" />
			<Provider />
		</>
	);
}
