import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../Screens/Dashboard/Dashboard";
import DetalheProdutos from "../Screens/Dashboard/DetalheProdutos";

const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetalheProdutos"
        component={DetalheProdutos}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Auth;

const styles = StyleSheet.create({});
