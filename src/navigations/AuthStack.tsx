import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenNames from './ScreenNames';
import {CommunityScreen, Congratulations, JoinUs, Login, MoreScreen, ReviewScreen} from '../screens';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ScreenNames.JoinUs}>
      <Stack.Screen name={ScreenNames.JoinUs} component={JoinUs} />
      <Stack.Screen name={ScreenNames.Login} component={Login} />
      <Stack.Screen
        name={ScreenNames.Congratulations}
        component={Congratulations}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
