/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenNames from './ScreenNames';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { FONTS } from '../constants/Fonts';
import { HomeSVG } from '../assets';
import { hp, wp } from '../constants/Dimensions';
import { COLORS } from '../constants/COLORS';
import { HomeScreen, JobsScreen, ProfileScreen } from '../screens';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarLabel: ({ focused }) => {
          return (
            <View>
              <Text
                style={[
                  styles.tabBarName,
                  {
                    color: focused ? COLORS.primary : COLORS.grayLight,
                    fontFamily: focused ? FONTS.SemiBold : FONTS.Regular,
                  },
                ]}>
                {route.name}
              </Text>
            </View>
          );
        },
        tabBarIcon: ({ focused }) => {
          let Icon;
          if (route.name === ScreenNames.Home) {
            Icon = focused ? <HomeSVG /> : <HomeSVG />;
          }
          if (route.name === ScreenNames.Jobs) {
            Icon = focused ? <HomeSVG /> : <HomeSVG />;
          }
          if (route.name === ScreenNames.Profile) {
            Icon = focused ? <HomeSVG /> : <HomeSVG />;
          }
          return Icon;
        },
        headerShown: false,
        tabBarStyle: [styles.tapStyles],
      })}>
      <Tab.Screen name={ScreenNames.Home} component={HomeScreen} />
      <Tab.Screen name={ScreenNames.Jobs} component={JobsScreen} />
      <Tab.Screen name={ScreenNames.Profile} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tapStyles: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Platform.OS === 'ios' ? hp(12.5) : hp(9),
    width: wp('100%'),
    borderWidth: 1,
    backgroundColor: COLORS.white,
    borderTopWidth: 0.1,
    borderTopColor: COLORS.black,
    paddingTop: Platform.OS === 'ios' ? hp(2) : hp(1.5),
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.22,
  },
  tabBarName: {
    fontSize: wp(3.5),
    paddingTop: hp(1.5),
    marginBottom: Platform.OS === 'ios' ? hp(0.8) : hp(1.5),
    textAlign: 'center',
    alignSelf: 'center',
  },
});
