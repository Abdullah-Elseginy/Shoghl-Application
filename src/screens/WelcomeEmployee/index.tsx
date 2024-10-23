import React from 'react';
import {
  AppHeader,
  AppScreenContainer,
  Button,
  CustomText,
} from '../../components';
import {Pressable, View} from 'react-native';
import {styles} from './styles';
import {generalStyles, hp, wp} from '../../constants';
import {Cash, Crown, Edit, ExitXicon, Location} from '../../assets';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import ScreenNames from '../../navigations/ScreenNames';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {WelComJOBS} from '../../utils/Data';
import {useSelector} from 'react-redux';
type Props = {
  navigation: NativeStackNavigationProp<ParamListBase, string>;
};
const Job = ({item}: any) => {
  return (
    <Pressable onPress={() => {}} style={[styles.jobBox]}>
      <View style={styles.jobTopBox}>
        <View style={generalStyles.row}>
          {item.img}
          <View style={styles.jobTopContent}>
            <CustomText text={item.status} textStyle={styles.status} />
            <CustomText text={item.job} textStyle={styles.job} />
            <View style={[generalStyles.rowBetween, styles.PeriodBox]}>
              {item.period ? (
                <CustomText text={item.period} textStyle={styles.period} />
              ) : (
                ''
              )}
              {item.intern ? (
                <CustomText text={item.intern} textStyle={[styles.period2]} />
              ) : (
                ''
              )}
              {item.freelance ? (
                <CustomText
                  text={item.freelance}
                  textStyle={[styles.period3]}
                />
              ) : (
                ''
              )}
            </View>
          </View>
        </View>
      </View>
      <View style={styles.jobBottomBox}>
        <View style={[generalStyles.row, styles.JocBttomBox]}>
          <Crown width={hp(2)} height={hp(2)} style={styles.btnIcon} />
          <CustomText text={item.status} textStyle={styles.jobBottomTxt} />
          <Location
            width={hp(2)}
            height={hp(2)}
            style={[styles.btnIcon, styles.LocationIcon]}
          />
          <CustomText text={item.location} textStyle={styles.jobBottomTxt} />
        </View>
        <View style={generalStyles.row}>
          <Cash width={hp(2)} height={hp(2)} style={styles.btnIcon} />
          <CustomText text={item.price} textStyle={styles.jobBottomTxt} />
        </View>

        {/* Edit DEllate */}
        <View style={generalStyles.rowBetween}>
          <Pressable style={[generalStyles.row, styles.editDelateBox]}>
            <ExitXicon />
            <CustomText text="Delete" />
          </Pressable>
          <Pressable
            style={[generalStyles.row, styles.editDelateBox, styles.Color]}>
            <Edit />
            <CustomText text="Edit" />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};
const WelcomeEmployee = ({navigation}: Props) => {
  const {user} = useSelector((state: any) => state.auth);

  return (
    <AppScreenContainer>
      <AppHeader arrowBack={true} title={'Welcome ' + user?.data?.first_name} />
      <View style={styles.AppContainer}>
        {/* welcome and post job */}
        <View style={generalStyles.rowCenter}>
          <CustomText
            text={'Welcome ' + user?.data?.first_name}
            textStyle={styles.WelcomeTExt}
          />
          <Button
            onPress={() => navigation.navigate(ScreenNames.JobPost)}
            style={{
              width: wp(30),
            }}
            text="+ Post job"
          />
        </View>
        <ScrollView contentContainerStyle={styles.Scroll}>
          {/* hiring */}
          <View style={styles.HringBox}>
            <CustomText text="Hiring?" textStyle={styles.TextTitle} />
            <CustomText
              text="If you looking for hire right candidate start hire now.?"
              textStyle={styles.subText}
            />
            <Button
              onPress={() => {
                null;
              }}
              text="Start Hiring"
              style={styles.bottomStyle}
            />
          </View>
          {/* CVs */}
          <View style={styles.HringBox}>
            <CustomText text="CVs" textStyle={styles.TextTitle} />
            <CustomText
              text="If you looking for hire right candidate start hire now.?"
              textStyle={styles.subText}
            />
            <Button
              onPress={() => {
                navigation.navigate(ScreenNames.SearchCV);
              }}
              text="Brows CVs"
              style={styles.bottomStyle}
            />
          </View>
          {/* Jobs*/}
          <View style={styles.FlatBox}>
            <FlatList
              data={WelComJOBS}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <Job navigation={navigation} item={item} />
              )}
            />
          </View>
        </ScrollView>
      </View>
    </AppScreenContainer>
  );
};

export default WelcomeEmployee;
