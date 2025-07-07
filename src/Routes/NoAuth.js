import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from "../Screens/Inicio/Login"
import CriarConta from "../Screens/Inicio/CriarConta"

const Stack = createNativeStackNavigator()

export default function NoAuthRotas() {
    return (
      <Stack.Navigator>
        <Stack.Screen
                name='Login'
                component={Login}
                options={{ headerShown: false }}
            />
          <Stack.Screen
              name='CriarConta'
              component={CriarConta}
              options={{ headerShown: false }}
          />
            
        </Stack.Navigator>
    )
}