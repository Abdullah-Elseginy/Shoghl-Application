import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenNames from './ScreenNames';
import AuthStack from './AuthStack';
import BottomTabNavigator from './BottomNavigation';
import {
  CompanyProfile,
  ComplateCompanyProfile,
  JobDetailsScreen,
  JobPost,
  SearchedJobs,
  WelcomeEmployee,
} from '../screens';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={ScreenNames.BottomTabs}>
        <Stack.Screen name={ScreenNames.AuthStack} component={AuthStack} />
        <Stack.Screen
          name={ScreenNames.BottomTabs}
          component={BottomTabNavigator}
        />
        <Stack.Screen
          name={ScreenNames.SearchedJobs}
          component={SearchedJobs}
        />
        <Stack.Screen
          name={ScreenNames.JobDetails}
          component={JobDetailsScreen}
        />
        <Stack.Screen
          name={ScreenNames.CompanyProfile}
          component={CompanyProfile}
        />
        <Stack.Screen
          name={ScreenNames.WelcomeEmployee}
          component={WelcomeEmployee}
        />
        <Stack.Screen
          name={ScreenNames.ComplateCompanyProfile}
          component={ComplateCompanyProfile}
        />
        <Stack.Screen name={ScreenNames.JobPost} component={JobPost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
