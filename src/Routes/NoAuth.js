import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Screens/Inicio/Login";
import CriarConta from "../Screens/Inicio/CriarConta";
import Categoria from "../Components/Categoria";
const Stack = createNativeStackNavigator();

export default function NoAuthRotas() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CriarConta"
        component={CriarConta}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Livros"
        component={Categoria}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
