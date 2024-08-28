import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenNames from './ScreenNames';
import AuthStack from './AuthStack';
import BottomTabNavigator from './BottomNavigation';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={ScreenNames.AuthStack}>
        {/* <Stack.Screen name={ScreenNames.AuthStack} component={AuthStack} /> */}
        <Stack.Screen name={ScreenNames.BottomTabs} component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
