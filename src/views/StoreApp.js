import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackAuth } from '../Stacks/StackAuth';
import { AuthContext } from '../Auth/context/AuthProvider';
import { StackTop } from '../Stacks/StackTop';
import SearchBar from '../components/SearchBar';
import { Ionicons } from '@expo/vector-icons';

export const StoreApp = () => {
  const { initialState: { isLogged } } = useContext(AuthContext);
  const { logout } = useContext(AuthContext)
  return (
    <View style={{ flex: 1, backgroundColor: '#00297f' }}>
      {isLogged ? (
        <View style={{ paddingTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontWeight: 'bold', padding: 20, color: '#ffff', fontSize: 25 }}>
            Store Online
          </Text>
          <TouchableOpacity 
            onPress={() => logout()}
            style={{ margin: 20 }}>
            <Ionicons name="exit-outline" size={34} color="#888" />
          </TouchableOpacity>
        </View>
      ) : null}
      {isLogged ? (
        <View style={{ flexDirection: 'row' }}>
          <SearchBar />
        </View>
      ) : null}
      {isLogged ? <StackTop /> : <StackAuth />}
    </View>
  );
};