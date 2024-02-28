import { SafeAreaView, Text, TouchableOpacity,Button, Alert, View } from "react-native";
import { VStack, HStack, Flex } from "react-native-flex-layout";
import { useState } from "react"
import checkWinner from "./src/helper/checkWinner";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import ThreeScreen from "./src/pages/ThreeScreen";
import { HomeScreen } from "./src/pages/HomeScreen";
import FourScreen from "./src/pages/FourScreen";

const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen  name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ThreeScreen" component={ThreeScreen} />
        <Stack.Screen name="FourScreen" component={FourScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;