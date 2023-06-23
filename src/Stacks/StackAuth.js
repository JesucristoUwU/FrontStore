import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Register, Login } from "../Auth/views"

const Stack = createNativeStackNavigator()

export const StackAuth = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen options={{ headerShown: false }} name="register" component={ Register } />
         <Stack.Screen options={{ headerShown: false }} name="login" component={ Login } />
      </Stack.Navigator>
   )
}