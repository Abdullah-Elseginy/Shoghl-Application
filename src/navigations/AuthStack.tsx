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
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const {ShowOnBoarding} = useSelector((state: any) => state.auth);

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={
        ShowOnBoarding ? ScreenNames.OnBoarding : ScreenNames.Login
      }>
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
