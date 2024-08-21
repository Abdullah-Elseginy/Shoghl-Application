import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenNames from './ScreenNames';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {FONTS} from '../constants/Fonts';
import { HomeSVG } from '../assets';
import { hp, wp } from '../constants/Dimensions';
import { COLORS } from '../constants/COLORS';
import { HomeScreen } from '../screens';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarLabel: ({focused}) => {
          return (
            <View>
              <Text
                style={[
                  styles.tabBarName,
                  {
                    color: focused ? COLORS.black : COLORS.white,
                    fontFamily: focused ? FONTS.SemiBold : FONTS.Regular,
                  },
                ]}>
                {route.name}
              </Text>
            </View>
          );
        },
        tabBarIcon: ({focused}) => {
          let Icon;
          if (route.name === ScreenNames.HomeScreen) {
            Icon = focused ? <HomeSVG /> : <HomeSVG />;
          } 
          return Icon;
        },
        headerShown: false,
        tabBarStyle: [styles.tapStyles],
      })}>
      <Tab.Screen name={ScreenNames.HomeScreen} component={HomeScreen} />
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
