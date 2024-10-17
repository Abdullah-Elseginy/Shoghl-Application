import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenNames from './ScreenNames';
import {
  CompleteProfile,
  ForgetPassword,
  LoginScreen,
  OnBoardingScreen,
  OTPScreen,
  SignupScreen,
  SignUpStepTwoCandidate,
} from '../screens';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ScreenNames.OnBoarding}>
      <Stack.Screen
        name={ScreenNames.OnBoarding}
        component={OnBoardingScreen}
      />
      <Stack.Screen name={ScreenNames.Login} component={LoginScreen} />
      <Stack.Screen name={ScreenNames.Signup} component={SignupScreen} />
      <Stack.Screen
        name={ScreenNames.CompleteProfile}
        component={CompleteProfile}
      />
      <Stack.Screen name={ScreenNames.OTPScreen} component={OTPScreen} />
      <Stack.Screen
        name={ScreenNames.SignUpStepTwoCandidate}
        component={SignUpStepTwoCandidate}
      />
      <Stack.Screen
        name={ScreenNames.ForgetPassword}
        component={ForgetPassword}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
