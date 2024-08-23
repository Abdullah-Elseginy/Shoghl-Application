import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenNames from './ScreenNames';
import { CompleteProfile, LoginScreen, OnBoardingScreen, SignupScreen, SplashScreen } from '../screens';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={ScreenNames.Splash}>
      <Stack.Screen name={ScreenNames.Splash} component={SplashScreen} />
      <Stack.Screen name={ScreenNames.OnBoarding} component={OnBoardingScreen} />
      <Stack.Screen name={ScreenNames.Login} component={LoginScreen} />
      <Stack.Screen name={ScreenNames.Signup} component={SignupScreen} />
      <Stack.Screen name={ScreenNames.CompleteProfile} component={CompleteProfile} />
    </Stack.Navigator>
  );
};

export default AuthStack;
