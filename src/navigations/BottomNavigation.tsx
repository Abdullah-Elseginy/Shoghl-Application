/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenNames from './ScreenNames';
import {Platform, StyleSheet, View} from 'react-native';
import {FONTS} from '../constants/Fonts';
import {
  ApplicantsActive,
  ApplicantsUnactive,
  AppsActive,
  AppsUnActive,
  EmployeeActive,
  EmployeeUnactive,
  ExploreActive,
  ExploreUnActive,
  HomeActive,
  HomeSVG,
  HomeUnActive,
  ProfileActive,
  ProfileUnActive,
  SaveActive,
  SaveUnActive,
} from '../assets';
import {hp, wp} from '../constants/Dimensions';
import {COLORS} from '../constants/COLORS';
import {
  Applications,
  Explore,
  ForEmployee,
  HomeScreen,
  Applicants,
  ProfileScreen,
  Save,
} from '../screens';
import {CustomText} from '../components';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const {registerationType} = useSelector((state: any) => state.auth);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarLabel: ({focused}) => {
          return (
            <View>
              <CustomText
                text={route.name}
                textStyle={[
                  styles.tabBarName,
                  {
                    color: focused ? COLORS.primary : COLORS.grayLight,
                    fontFamily: focused ? FONTS.SemiBold : FONTS.Regular,
                  },
                ]}
              />
            </View>
          );
        },
        tabBarIcon: ({focused}) => {
          let Icon;
          if (route.name === ScreenNames.Home) {
            Icon = focused ? (
              <HomeActive width={wp(6.5)} height={hp(3)} />
            ) : (
              <HomeUnActive width={wp(6.5)} height={hp(3)} />
            );
          }
          if (route.name === ScreenNames.Jobs) {
            Icon = focused ? (
              <ApplicantsActive width={wp(6.5)} height={hp(3)} />
            ) : (
              <ApplicantsUnactive width={wp(6.5)} height={hp(3)} />
            );
          }
          if (route.name === ScreenNames.Profile) {
            Icon = focused ? (
              <ProfileActive width={wp(6.5)} height={hp(3)} />
            ) : (
              <ProfileUnActive width={wp(6.5)} height={hp(3)} />
            );
          }
          if (route.name === ScreenNames.ForEmployee) {
            Icon = focused ? (
              <EmployeeActive width={wp(6.5)} height={hp(3)} />
            ) : (
              <EmployeeUnactive width={wp(6.5)} height={hp(3)} />
            );
          }
          if (route.name === ScreenNames.ExploreScreen) {
            Icon = focused ? <HomeSVG /> : <HomeSVG />;
          }
          if (route.name === ScreenNames.Applications) {
            Icon = focused ? (
              <AppsActive width={wp(6.5)} height={hp(3)} />
            ) : (
              <AppsUnActive width={wp(6.5)} height={hp(3)} />
            );
          }
          if (route.name === ScreenNames.SaveScreen) {
            Icon = focused ? (
              <SaveActive width={wp(6.5)} height={hp(3)} />
            ) : (
              <SaveUnActive width={wp(6.5)} height={hp(3)} />
            );
          }
          if (route.name === ScreenNames.ExploreScreen) {
            Icon = focused ? (
              <ExploreActive width={wp(6.5)} height={hp(3)} />
            ) : (
              <ExploreUnActive width={wp(6.5)} height={hp(3)} />
            );
          }
          return Icon;
        },
        headerShown: false,
        tabBarStyle: [styles.tapStyles],
      })}>
      {registerationType === 'candidate' ? (
        <>
          <Tab.Screen name={ScreenNames.Home} component={HomeScreen} />
          <Tab.Screen name={ScreenNames.ExploreScreen} component={Explore} />
          <Tab.Screen
            name={ScreenNames.Applications}
            component={Applications}
          />
          <Tab.Screen name={ScreenNames.SaveScreen} component={Save} />
          <Tab.Screen name={ScreenNames.Profile} component={ProfileScreen} />
        </>
      ) : (
        <>
          <Tab.Screen name={ScreenNames.Jobs} component={Applicants} />
          <Tab.Screen name={ScreenNames.ForEmployee} component={ForEmployee} />
          <Tab.Screen name={ScreenNames.Profile} component={ProfileScreen} />
        </>
      )}
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
