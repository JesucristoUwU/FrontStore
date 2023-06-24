import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StoreApp } from './src/views/StoreApp';
// import { AuthProvider } from './src/Auth/context/AuthProvider';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
      {/* <AuthProvider> */}
        <StoreApp/>
        <StatusBar style="inverted" />
      {/* </AuthProvider> */}
    </NavigationContainer>
  );
}
