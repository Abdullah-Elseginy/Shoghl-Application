/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {
  AppHeader,
  AppScreenContainer,
  Button,
  CustomText,
} from '../../components';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {COLORS, generalStyles, hp, wp} from '../../constants';
import {ActivityIndicator, Image, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {Documentation, Location, SAVEJOB, Temlid, Unsave} from '../../assets';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {
  applyJob,
  getJobsDetails,
  saveJob,
  unApplyJob,
  unSaveJob,
  ViewedJobs,
} from '../../redux/slices/JobsSlice';
import ScreenNames from '../../navigations/ScreenNames';
import Toast from 'react-native-toast-message';

const SimilarJobs = ({item, setjobcode, GETGobDtetails}: any) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setjobcode(item?.code);
        GETGobDtetails(item?.code);
      }}
      style={styles.SimilarJobBoxs}>
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
    </TouchableOpacity>
  );
};
type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>;
  route: any;
};
const SimilarFunctions = ({item, setjobcode, GETGobDtetails}: any) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setjobcode(item?.code);
        GETGobDtetails(item?.code);
      }}
      style={styles.SimilarJobBoxs}>
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
    </TouchableOpacity>
  );
};
const JobDetailsScreen = ({route, navigation}: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const {jobDetails, saveloading, lodingApply} = useSelector(
    (state: any) => state.jobs,
  );
  const {jobCode} = route.params;
  const [jobcode, setjobcode] = useState(jobCode);
  const scrollViewRef = useRef(null);
  const scrollToTop = () => {
    if (scrollViewRef?.current) {
      scrollViewRef?.current?.scrollTo({y: 0, animated: true});
    }
  };
  //--------------------------Job Deutails API------------

  const GETGobDtetails = (code: any) => {
    const codeToSend = {
      job_code: code,
    };
    dispatch(getJobsDetails(codeToSend))
      .unwrap()
      .then(() => {
        scrollToTop();
      })
      .catch(err => {});
  };

  const SAVEJob = (code: any) => {
    const job_Code = {
      job_code: code,
    };
    dispatch(saveJob(job_Code))
      .unwrap()
      .then(() => {
        GETGobDtetails(code);
      })
      .catch(err => {
        Toast.show({
          text1: 'Error',
          text2: err,
          type: 'error',
        });
      });
  };

  const UNSAVEJob = (code: any) => {
    const job_Code = {
      job_code: code,
    };
    dispatch(unSaveJob(job_Code))
      .unwrap()
      .then(() => {
        GETGobDtetails(code);
      })
      .catch(err => {
        Toast.show({
          text1: 'Error',
          text2: err,
          type: 'error',
        });
      });
  };

  const ApplyJob = (code: any) => {
    const job_Code = {
      job_code: code,
    };
    dispatch(applyJob(job_Code))
      .unwrap()
      .then(() => {
        GETGobDtetails(code);
      })
      .catch(err => {
        Toast.show({
          text1: 'Error',
          text2: err,
          type: 'error',
        });
      });
  };

  const UnApplyJob = (code: any) => {
    const job_Code = {
      job_code: code,
    };
    dispatch(unApplyJob(job_Code))
      .unwrap()
      .then(() => {
        GETGobDtetails(code);
      })
      .catch(err => {
        Toast.show({
          text1: 'Error',
          text2: err,
          type: 'error',
        });
      });
  };

  useEffect(() => {
    GETGobDtetails(jobcode);
    const CODE = {
      job_code: jobcode,
    };
    dispatch(ViewedJobs(CODE));
  }, []);

  return (
    <AppScreenContainer style={{flex: 1}}>
      <AppHeader arrowBack={true} title="Job Details" />
      <ScrollView
        contentContainerStyle={generalStyles.container}
        ref={scrollViewRef}>
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
          <CustomText text={jobDetails?.title} textStyle={styles.JobNameText} />
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
              <CustomText text={jobDetails?.statics?.total_in_consideration} />
              <CustomText text="In Consideration" />
            </View>
            <View style={styles.Line} />
            <View style={styles.ViewrsContainer}>
              <CustomText text="0" />
              <CustomText text="Not Selected" />
            </View>
          </View>
          <View style={generalStyles.row}>
            {!jobDetails?.is_applied ? (
              <Button
                text="Apply for Job"
                loading={lodingApply}
                style={styles.aplay}
                onPress={() => ApplyJob(jobcode)}
              />
            ) : (
              <Button
                text="Cancel Apply?"
                style={styles.aplay}
                loading={lodingApply}
                onPress={() => UnApplyJob(jobcode)}
              />
            )}
            {!saveloading ? (
              jobDetails?.is_saved ? (
                <TouchableOpacity
                  onPress={() => {
                    UNSAVEJob(jobcode);
                  }}
                  style={styles.SavBox}>
                  <Unsave width={wp(8)} height={hp(4)} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    SAVEJob(jobcode);
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
          <View style={[generalStyles.rowBetween, styles.requrmentSectionBox]}>
            <CustomText
              text="Experience Needed"
              textStyle={styles.textRequrments}
            />
            <CustomText
              text="0 to 2 years"
              textStyle={styles.textRequrments2}
            />
          </View>
          <View style={[generalStyles.rowBetween, styles.requrmentSectionBox]}>
            <CustomText text="The Computer" textStyle={styles.textRequrments} />
            <CustomText text="Very Good" textStyle={styles.textRequrments2} />
          </View>
          <View style={[generalStyles.rowBetween, styles.requrmentSectionBox]}>
            <CustomText
              text="Education Level"
              textStyle={styles.textRequrments}
            />
            <CustomText
              text="Medium Qualification"
              textStyle={styles.textRequrments2}
            />
          </View>
          <View style={[generalStyles.rowBetween, styles.requrmentSectionBox]}>
            <CustomText
              text="Microsoft office"
              textStyle={styles.textRequrments}
            />
            <CustomText text="Basics" textStyle={styles.textRequrments2} />
          </View>
          <View style={[generalStyles.rowBetween, styles.requrmentSectionBox]}>
            <CustomText text="English" textStyle={styles.textRequrments} />
            <CustomText text="Basics" textStyle={styles.textRequrments2} />
          </View>
          <View style={[generalStyles.rowBetween, styles.requrmentSectionBox]}>
            <CustomText text="Required Age" textStyle={styles.textRequrments} />
            <CustomText text="20-30" textStyle={styles.textRequrments2} />
          </View>
          <View style={[generalStyles.rowBetween, styles.requrmentSectionBox]}>
            <CustomText
              text="Skills And Tools:"
              textStyle={styles.textRequrments}
            />
          </View>
          <View style={styles.SkillsBox}>
            {jobDetails?.keywords?.map((item: any) => (
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
          <View style={[generalStyles.rowBetween, styles.requrmentSectionBox]}>
            <CustomText text="Basic Salary" textStyle={styles.textRequrments} />
            <CustomText
              text={`${jobDetails?.salary_from} - ${jobDetails?.salary_to} ${jobDetails?.country?.currency} / ${jobDetails?.salary_per?.en}`}
              textStyle={styles.textRequrments3}
            />
          </View>
          <View style={[generalStyles.rowBetween, styles.requrmentSectionBox]}>
            <CustomText text="Type of Job" textStyle={styles.textRequrments} />
            <CustomText
              text={jobDetails?.contract_type?.en}
              textStyle={styles.textRequrments3}
            />
          </View>
        </View>
        {/* Job Features */}
        <View style={styles.JobRequirementBoxs}>
          <CustomText text="Job Features" textStyle={styles.Titles} />
          <View style={[generalStyles.rowBetween, styles.requrmentSectionBox]}>
            <CustomText
              text="Feeding allowance"
              textStyle={styles.textRequrments}
            />
            <CustomText
              text="Provide a meal"
              textStyle={styles.textRequrments2}
            />
          </View>
          <View style={[generalStyles.rowBetween, styles.requrmentSectionBox]}>
            <CustomText text="Overtime" textStyle={styles.textRequrments} />
            <CustomText text="counted" textStyle={styles.textRequrments2} />
          </View>
        </View>
        {/* Job Details */}
        <View style={styles.JobRequirementBoxs}>
          <CustomText text="Job Details" textStyle={styles.Titles} />
          <View style={[generalStyles.rowBetween, styles.requrmentSectionBox]}>
            <CustomText text="Job Field" textStyle={styles.textRequrments} />
            <CustomText
              text="Financial ana legal"
              textStyle={styles.textRequrments2}
            />
          </View>
          <View style={[generalStyles.rowBetween, styles.requrmentSectionBox]}>
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
            renderItem={({item}) => (
              <SimilarJobs
                item={item}
                dispatch={dispatch}
                setjobcode={setjobcode}
                GETGobDtetails={GETGobDtetails}
              />
            )}
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
            renderItem={({item}) => (
              <SimilarFunctions
                item={item}
                setjobcode={setjobcode}
                GETGobDtetails={GETGobDtetails}
              />
            )}
          />
          <Button text="See All Financial Mangment Jobs" onPress={() => null} />
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
    </AppScreenContainer>
  );
};
export default JobDetailsScreen;
