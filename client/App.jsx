import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import Main from './components/Main';
import Users from './components/Users';
import Details from './components/Details';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="register">
        <Stack.Screen name="register" component={Main} options={{
          headerShown: false
        }} />
        <Stack.Screen name="admin" component={Users} />
        <Stack.Screen name="details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
