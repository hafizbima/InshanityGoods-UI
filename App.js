import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Text, StatusBar, View } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import Back from './components/Back';
import ItemDetail from "./screens/ItemDetail";
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <NativeBaseProvider>
      <View >
      <StatusBar/>
      <ItemDetail/>
      {/* <Back/> */}
      </View>
    </NativeBaseProvider>
    
  );
}
