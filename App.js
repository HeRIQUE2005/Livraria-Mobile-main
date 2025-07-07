import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RotasIndex from "./src/Routes/Index";
import AutProvider from "./src/Context/Contexts";

export default function App() {
  return (
    <NavigationContainer>
      <AutProvider>
        <StatusBar
          backgroundColor="#000000"
          barStyle="light-content"
          translucent={false}
        />
        <RotasIndex />
      </AutProvider>
    </NavigationContainer>
  );
}
