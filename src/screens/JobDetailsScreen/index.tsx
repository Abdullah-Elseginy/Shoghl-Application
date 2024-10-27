/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  AppHeader,
  AppScreenContainer,
  Button,
  CustomText,
} from '../../components';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {COLORS, generalStyles, hp, IMAGES, wp} from '../../constants';
import {ActivityIndicator, Image, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {Documentation, Location, SAVEJOB, SaveJob, Temlid} from '../../assets';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {SIMILARFUNCTIONS, SIMILARJOBS} from '../../utils/Data';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {
  getJobsDetails,
  getSavedJobs,
  saveJob,
} from '../../redux/slices/JobsSlice';
import ScreenNames from '../../navigations/ScreenNames';
import Toast from 'react-native-toast-message';

const SimilarJobs = ({item}: any) => {
  return (
    <View style={styles.SimilarJobBoxs}>
      <Image
        source={{uri: item?.company?.company_logo}}
        style={styles.similarIm}
      />
      <CustomText text={item?.title} textStyle={styles.similarjobtext} />
      <CustomText
        text={item?.company?.company_name}
        textStyle={styles.company}
      />
      <CustomText
        text={item?.country?.name_en + ' | ' + item?.city?.name_en}
        textStyle={styles.location}
      />
      <CustomText text={item?.since} textStyle={styles.days} />
    </View>
  );
};
type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>;
  route: any;
};
const SimilarFunctions = ({item}: any) => {
  return (
    <View style={styles.SimilarJobBoxs}>
      <Image
        source={{uri: item?.company?.company_logo}}
        style={styles.similarIm}
      />
      <CustomText text={item?.title} textStyle={styles.similarjobtext} />
      <View style={[generalStyles.center, styles.SimilarFuncDetails]}>
        <View style={generalStyles.row}>
          <Temlid width={wp(4)} height={hp(2)} />
          <CustomText
            text={' ' + item?.company?.company_name}
            textStyle={styles.location}
          />
        </View>
        <View style={[generalStyles.rowBetween, styles.SimilarFuncDetails]}>
          <View style={generalStyles.row}>
            <Location />
            <CustomText
              text={item?.country?.name_en}
              textStyle={styles.Telimed}
            />
          </View>
          <View style={generalStyles.row}>
            <Temlid />
            <CustomText
              text={item?.contract_type?.en}
              textStyle={styles.Telimed}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
const JobDetailsScreen = ({route, navigation}: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const {jobDetails, loadinJobs, saveloading} = useSelector(
    (state: any) => state.jobs,
  );
  const {jobCode} = route.params;
  const [Saved, seSaved] = useState(false);
  //--------------------------Job Deutails API------------
  const GETGobDtetails = () => {
    const codeToSend = {
      job_code: jobCode,
    };
    dispatch(getJobsDetails(codeToSend));
  };

  const SAVEJob = () => {
    const job_Code = {
      job_code: jobCode,
    };
    dispatch(saveJob(job_Code))
      .unwrap()
      .then(res => {
        Toast.show({
          text1: 'Success',
          text2: res.message,
          type: 'success',
        });
        seSaved(true);
        dispatch(getSavedJobs());
      })
      .catch(err => {
        Toast.show({
          text1: 'Error',
          text2: err,
          type: 'danger',
        });
      });
  };

  useEffect(() => {
    GETGobDtetails();
  }, []);

  return (
    <AppScreenContainer style={{flex: 1}}>
      <AppHeader arrowBack={true} title="Job Details" />
      {!loadinJobs ? (
        <ScrollView contentContainerStyle={generalStyles.container}>
          {/* Section1 company Profle */}
          <View style={styles.profileBox}>
            <TouchableOpacity
              onPress={() => navigation.navigate(ScreenNames.CompanyProfile)}>
              <Image
                source={{uri: jobDetails?.company?.company_logo}}
                resizeMode="cover"
                style={styles.ImageProfile}
              />
            </TouchableOpacity>
            <CustomText
              text={jobDetails?.title}
              textStyle={styles.JobNameText}
            />
            <View style={generalStyles.row}>
              {jobDetails?.job_types?.en.map((item: any) => (
                <CustomText text={item} textStyle={styles.JobsiteText} />
              ))}
            </View>
            <View style={[generalStyles.row, styles.locationBox]}>
              <TouchableOpacity
                onPress={() => navigation.navigate(ScreenNames.CompanyProfile)}>
                <CustomText
                  text={jobDetails?.company?.company_name}
                  textStyle={styles.Jobslocationtext}
                />
              </TouchableOpacity>
              <Documentation />
              <CustomText
                text={
                  ' ' +
                  jobDetails?.city?.name_en +
                  ' | ' +
                  jobDetails?.country?.name_en
                }
              />
            </View>
            <CustomText
              text={'Posted ' + jobDetails?.since}
              textStyle={styles.Time}
            />
            <View style={generalStyles.row}>
              <CustomText
                text={jobDetails?.statics?.total_applications}
                textStyle={styles.ApplicationNumber}
              />
              <CustomText text="Applicants for open " />
              <CustomText text="1" textStyle={styles.ApplicationNumber} />
              <CustomText text=" position" />
            </View>
            <View style={[generalStyles.row, styles.Viewers]}>
              <View style={styles.ViewrsContainer}>
                <CustomText text={jobDetails?.statics?.total_viewed} />
                <CustomText text="View" />
              </View>
              <View style={styles.Line} />
              <View style={styles.ViewrsContainer}>
                <CustomText
                  text={jobDetails?.statics?.total_in_consideration}
                />
                <CustomText text="In Consideration" />
              </View>
              <View style={styles.Line} />
              <View style={styles.ViewrsContainer}>
                <CustomText text="0" />
                <CustomText text="Not Selected" />
              </View>
            </View>
            <View style={generalStyles.row}>
              <Button
                text="Apply for Job"
                style={styles.aplay}
                onPress={() => null}
              />
              {!saveloading ? (
                Saved ? (
                  <CustomText text="Saved" />
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      SAVEJob();
                    }}
                    style={styles.SavBox}>
                    <SAVEJOB width={wp(8)} height={hp(4)} />
                  </TouchableOpacity>
                )
              ) : (
                <TouchableOpacity style={styles.SavBox}>
                  <ActivityIndicator size={'small'} color={COLORS.primary} />
                </TouchableOpacity>
              )}
            </View>
          </View>
          {/* Section Two Job Requirments */}
          <View style={styles.JobRequirementBoxs}>
            <CustomText text="Job Requirement" textStyle={styles.Titles} />
            <View
              style={[generalStyles.rowBetween, styles.requrmentSectionBox]}>
              <CustomText
                text="Experience Needed"
                textStyle={styles.textRequrments}
              />
              <CustomText
                text="0 to 2 years"
                textStyle={styles.textRequrments2}
              />
            </View>
            <View
              style={[generalStyles.rowBetween, styles.requrmentSectionBox]}>
              <CustomText
                text="The Computer"
                textStyle={styles.textRequrments}
              />
              <CustomText text="Very Good" textStyle={styles.textRequrments2} />
            </View>
            <View
              style={[generalStyles.rowBetween, styles.requrmentSectionBox]}>
              <CustomText
                text="Education Level"
                textStyle={styles.textRequrments}
              />
              <CustomText
                text="Medium Qualification"
                textStyle={styles.textRequrments2}
              />
            </View>
            <View
              style={[generalStyles.rowBetween, styles.requrmentSectionBox]}>
              <CustomText
                text="Microsoft office"
                textStyle={styles.textRequrments}
              />
              <CustomText text="Basics" textStyle={styles.textRequrments2} />
            </View>
            <View
              style={[generalStyles.rowBetween, styles.requrmentSectionBox]}>
              <CustomText text="English" textStyle={styles.textRequrments} />
              <CustomText text="Basics" textStyle={styles.textRequrments2} />
            </View>
            <View
              style={[generalStyles.rowBetween, styles.requrmentSectionBox]}>
              <CustomText
                text="Required Age"
                textStyle={styles.textRequrments}
              />
              <CustomText text="20-30" textStyle={styles.textRequrments2} />
            </View>
            <View
              style={[generalStyles.rowBetween, styles.requrmentSectionBox]}>
              <CustomText
                text="Skills And Tools:"
                textStyle={styles.textRequrments}
              />
            </View>
            <View style={styles.SkillsBox}>
              {jobDetails?.keywords.map((item: any) => (
                <CustomText text={item} textStyle={styles.JobsiteText} />
              ))}
            </View>
          </View>
          {/* Salary and type of work */}
          <View style={styles.JobRequirementBoxs}>
            <CustomText
              text="Salary and type of work"
              textStyle={styles.Titles}
            />
            <View
              style={[generalStyles.rowBetween, styles.requrmentSectionBox]}>
              <CustomText
                text="Basic Salary"
                textStyle={styles.textRequrments}
              />
              <CustomText
                text={`${jobDetails?.salary_from} - ${jobDetails?.salary_to} ${jobDetails?.country?.currency} / ${jobDetails?.salary_per.en}`}
                textStyle={styles.textRequrments3}
              />
            </View>
            <View
              style={[generalStyles.rowBetween, styles.requrmentSectionBox]}>
              <CustomText
                text="Type of Job"
                textStyle={styles.textRequrments}
              />
              <CustomText
                text={jobDetails?.contract_type.en}
                textStyle={styles.textRequrments3}
              />
            </View>
          </View>
          {/* Job Features */}
          <View style={styles.JobRequirementBoxs}>
            <CustomText text="Job Features" textStyle={styles.Titles} />
            <View
              style={[generalStyles.rowBetween, styles.requrmentSectionBox]}>
              <CustomText
                text="Feeding allowance"
                textStyle={styles.textRequrments}
              />
              <CustomText
                text="Provide a meal"
                textStyle={styles.textRequrments2}
              />
            </View>
            <View
              style={[generalStyles.rowBetween, styles.requrmentSectionBox]}>
              <CustomText text="Overtime" textStyle={styles.textRequrments} />
              <CustomText text="counted" textStyle={styles.textRequrments2} />
            </View>
          </View>
          {/* Job Details */}
          <View style={styles.JobRequirementBoxs}>
            <CustomText text="Job Details" textStyle={styles.Titles} />
            <View
              style={[generalStyles.rowBetween, styles.requrmentSectionBox]}>
              <CustomText text="Job Field" textStyle={styles.textRequrments} />
              <CustomText
                text="Financial ana legal"
                textStyle={styles.textRequrments2}
              />
            </View>
            <View
              style={[generalStyles.rowBetween, styles.requrmentSectionBox]}>
              <CustomText text="Job Major" textStyle={styles.textRequrments} />
              <CustomText
                text="Financial management"
                textStyle={styles.textRequrments2}
              />
            </View>
          </View>
          {/* Similar jobs */}
          <View
            style={[styles.JobRequirementBoxs, styles.similarJobMainContainer]}>
            <CustomText text="Similar Job" textStyle={styles.Titles} />

            <FlatList
              horizontal
              data={jobDetails?.similar_jobs}
              keyExtractor={item => item.code}
              renderItem={({item}) => <SimilarJobs item={item} />}
            />
            <Button text="Search other opportunities" onPress={() => null} />
          </View>
          {/*Similar functions */}
          <View
            style={[styles.JobRequirementBoxs, styles.similarJobMainContainer]}>
            <CustomText text="Similar Functions" textStyle={styles.Titles} />

            <FlatList
              horizontal
              data={jobDetails?.similar_functions}
              keyExtractor={item => item.code}
              renderItem={({item}) => <SimilarFunctions item={item} />}
            />
            <Button
              text="See All Financial Mangment Jobs"
              onPress={() => null}
            />
          </View>
          {/* About Egyptian Culture Center */}
          <View style={styles.JobRequirementBoxs}>
            <CustomText
              text="About Egyptian Culture Center"
              textStyle={styles.Titles}
            />
            <CustomText text="Education" textStyle={styles.textRequrments} />
            <CustomText
              text="Cairo, Egypt - 101-500 employees"
              textStyle={styles.textRequrments2}
            />
            <CustomText
              redmoreText="Learning needs the right environment to flourish, And because we're experts in Learning needs the right environment"
              readMore
              maxLength={50}
            />
          </View>
          {/* Find Related Jobs */}
          <View style={styles.JobRequirementBoxs}>
            <CustomText text={`Find Related Jobs`} textStyle={styles.Titles} />
            <CustomText
              text={`-All Vacancies at Egyptian Cultural Center\n-General Manager jobs in Cairo\n-General Manager jobs in Egypt\n-Operations/Management jobs in Egypt\n-Education/Teaching jobs in Egypt\n-jobs in Egypt`}
              textStyle={styles.relatedjobText}
            />
          </View>
        </ScrollView>
      ) : (
        <View style={styles.LoaderBox}>
          <ActivityIndicator size={'large'} color={COLORS.primary} />
        </View>
      )}
    </AppScreenContainer>
  );
};
export default JobDetailsScreen;
