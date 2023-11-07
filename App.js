import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, Text, StatusBar, View} from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import Back from './components/Back';
import Checkout from "./screens/Checkout";
import Address from "./screens/Address";
import ItemDetail from "./screens/ItemDetail";
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();
const noHead = { headerShown: false };

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ItemDetail" component={ItemDetail} options={noHead}/>
          <Stack.Screen name="Checkout" component={Checkout} />
          <Stack.Screen name="Address" component={Address}/>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
    
    
  );
}
