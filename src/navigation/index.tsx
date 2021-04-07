import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../pages/home';
import { createStackNavigator } from '@react-navigation/stack'
import Dashboard from '../pages/dashboard';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home' headerMode='none'>
        <Stack.Screen name="home" component={Home}></Stack.Screen>
        <Stack.Screen name="dashboard" component={Dashboard}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}