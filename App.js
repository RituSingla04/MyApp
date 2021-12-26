import React from 'react'
import { View, Text } from 'react-native'
import MyTabs from './Bottomtab';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="All" >
        <Stack.Screen name="All" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
