import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StoreApp } from './src/views/StoreApp';
import 'react-native-gesture-handler';
import { AuthProvider } from './src/Auth/context/AuthProvider';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StoreApp/>
        <StatusBar style="inverted" />
      </AuthProvider>
    </NavigationContainer>
  );
}
