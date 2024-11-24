import React, {useCallback} from 'react';
import {
  AppHeader,
  Apploader,
  AppScreenContainer,
  Button,
  CustomText,
} from '../../components';
import {Image, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {generalStyles, hp, wp} from '../../constants';
import {Cash, Crown, Edit, ExitXicon, Location} from '../../assets';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import ScreenNames from '../../navigations/ScreenNames';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase, useFocusEffect} from '@react-navigation/native';
import {deleteJob, getCompanyPostedJobs} from '../../redux/slices/JobsSlice';

import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import Toast from 'react-native-toast-message';
type Props = {
  navigation: NativeStackNavigationProp<ParamListBase, string>;
};
const Job = ({item, navigation, companyName, deletejob}: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.jobBox, {backgroundColor: item.color}]}>
      <View style={styles.jobTopBox}>
        <View style={generalStyles.row}>
          <View>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              }}
              style={styles.im}
              resizeMode="cover"
            />
          </View>
          <View style={styles.jobTopContent}>
            <View style={generalStyles.rowBetween}>
              <CustomText text={item.title} textStyle={styles.job} />
              <CustomText text={item.since} textStyle={styles.status} />
            </View>
            <View style={[generalStyles.rowBetween]}>
              <FlatList
                data={item?.job_types}
                horizontal
                contentContainerStyle={styles.Conten}
                renderItem={({item}: any) =>
                  item == 'Full Time' ? (
                    <CustomText
                      text={item?.default_name.slice(0, 9)}
                      textStyle={[styles.period2]}
                    />
                  ) : item == 'Shift based' ? (
                    <CustomText
                      text={item?.default_name.slice(0, 9)}
                      textStyle={[styles.period]}
                    />
                  ) : item == 'Part Time' ? (
                    <CustomText
                      text={item?.default_name.slice(0, 12)}
                      textStyle={[styles.period, styles.period4]}
                    />
                  ) : (
                    <CustomText
                      text={item?.default_name.slice(0, 12) + '..'}
                      textStyle={[styles.period, styles.period3]}
                    />
                  )
                }
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.jobBottomBox}>
        <View style={[generalStyles.rowBetween, styles.JocBttomBox]}>
          <View style={generalStyles.row}>
            <Crown width={hp(2)} height={hp(2)} style={styles.btnIcon} />
            <CustomText text={companyName} textStyle={styles.jobBottomTxt} />
          </View>
          <View style={[generalStyles.row, styles.marginT]}>
            <Location width={hp(2)} height={hp(2)} style={[styles.btnIcon]} />
            <CustomText
              text={item?.country?.default_name + ' | ' + item?.city?.default_name}
              textStyle={styles.jobBottomTxt}
            />
          </View>
        </View>
        <View style={generalStyles.row}>
          <Cash width={hp(2)} height={hp(2)} style={styles.btnIcon} />
          <CustomText
            text={item?.contract_type?.default_name + ' | ' + item?.career_level?.default_name}
            textStyle={styles.jobBottomTxt}
          />
        </View>
        <View style={[generalStyles.rowBetween, styles.marginT]}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={[generalStyles.row, styles.editDelateBox]}
            onPress={() => {
              deletejob(item.code);
              console.log('item.code' + item.code);
            }}>
            <ExitXicon />
            <CustomText text="Delete" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[generalStyles.row, styles.editDelateBox, styles.Color]}
            activeOpacity={0.5}
            onPress={() => {
              navigation.navigate(ScreenNames.JobPost, {jobData: item});
            }}>
            <Edit />
            <CustomText text="Edit" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const WelcomeEmployee = ({navigation}: Props) => {
  const {user, loading} = useSelector((state: any) => state.auth);
  const companyDataProfile = user;

  const {companyPostedJobs, lodingApply} = useSelector(
    (state: any) => state.jobs,
  );
  const dispatch = useDispatch<AppDispatch>();

  // ----------------APIs----------------------------------

  const DELETEJOB = (jobCode: any) => {
    const codeToSent = {
      job_code: jobCode,
    };
    console.log('code to send----' + JSON.stringify(codeToSent));
    dispatch(deleteJob(codeToSent))
      .unwrap()
      .then(res => {
        Toast.show({
          text1: 'Success',
          text2: res,
          type: 'success',
        });
        dispatch(getCompanyPostedJobs());
      })
      .catch(err => {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: err,
        });
      });
  };

  useFocusEffect(
    useCallback(() => {
      dispatch(getCompanyPostedJobs());
    }, []),
  );

  return (
    <AppScreenContainer>
      <AppHeader arrowBack={true} title={'Welcome ' + user?.first_name} />
      {lodingApply && <Apploader visible={lodingApply} message="loading.." />}
      <View style={styles.AppContainer}>
        {/* welcome and post job */}
        <View style={generalStyles.rowCenter}>
          <CustomText
            text={'Welcome ' + user?.first_name}
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
              data={companyPostedJobs}
              keyExtractor={item => item.code.toString()}
              renderItem={({item}) => (
                <Job
                  navigation={navigation}
                  item={item}
                  deletejob={DELETEJOB}
                  companyName={companyDataProfile?.company_name}
                />
              )}
            />
          </View>
        </ScrollView>
      </View>
    </AppScreenContainer>
  );
};

export default WelcomeEmployee;
