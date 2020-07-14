import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/mainScreen';
import EditScreen from './screens/editScreen';
const Stack = createStackNavigator();
export default function App() {
  global.api = 'http://192.168.0.8:3001';
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Todo List" component={MainScreen} />
        <Stack.Screen name="Edit Todo" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

