import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenNames from './ScreenNames';
import AuthStack from './AuthStack';
import BottomTabNavigator from './BottomNavigation';
import {JobDetailsScreen, SearchedJobs} from '../screens';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={ScreenNames.JobDetails}>
        {/* <Stack.Screen name={ScreenNames.AuthStack} component={AuthStack} /> */}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
