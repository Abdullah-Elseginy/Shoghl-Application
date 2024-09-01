/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  AppHeader,
  AppScreenContainer,
  Button,
  CustomText,
} from '../../components';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {generalStyles, hp, IMAGES, wp} from '../../constants';
import {Image, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {
  Documentation,
  Location,
  Photoshop,
  SimilsrJobs,
  Temlid,
} from '../../assets';
const SIMILARJOBS = [
  {
    id: 1,
    title: 'General Manager',
    imag: <SimilsrJobs />,
    company: 'Next Gen Supplements',
    location: '-Ad-Diriyah, Riyadh',
    days: '16 days ago',
  },
  {
    id: 2,
    title: 'General Manager',
    imag: <SimilsrJobs />,
    company: 'Next Gen Supplements',
    location: '-Ad-Diriyah, Riyadh',
    days: '16 days ago',
  },
  {
    id: 3,
    title: 'General Manager',
    imag: <SimilsrJobs />,
    company: 'Next Gen Supplements',
    location: '-Ad-Diriyah, Riyadh',
    days: '16 days ago',
  },
  {
    id: 4,
    title: 'General Manager',
    imag: <SimilsrJobs />,
    company: 'Next Gen Supplements',
    location: '-Ad-Diriyah, Riyadh',
    days: '16 days ago',
  },
];
const SIMILARFUNCTIONS = [
  {
    id: 1,
    title: 'Senior Health and Nutrition Advisor',
    imag: <Photoshop />,
    location: 'EGP',
    Telimed: 'Telimed',
  },
  {
    id: 2,
    title: 'Senior Health and Nutrition Advisor',
    imag: <Photoshop />,
    location: 'MOC',
    Telimed: 'Telimed',
  },
  {
    id: 3,
    title: 'Senior Health and Nutrition Advisor',
    imag: <Photoshop />,
    location: 'KSA',
    Telimed: 'Telimed',
  },
  {
    id: 4,
    title: 'Senior Health and Nutrition Advisor',
    imag: <Photoshop />,
    location: 'KSA',
    Telimed: 'Telimed',
  },
];
const SimilarJobs = ({item}) => {
  return (
    <View style={styles.SimilarJobBoxs}>
      <View>{item.imag}</View>
      <CustomText text={item.title} textStyle={styles.similarjobtext} />
      <CustomText text={item.company} textStyle={styles.company} />
      <CustomText text={item.location} textStyle={styles.location} />
      <CustomText text={item.days} textStyle={styles.days} />
    </View>
  );
};
const SimilarFunctions = ({item}) => {
  return (
    <View style={styles.SimilarJobBoxs}>
      <View>{item.imag}</View>
      <CustomText text={item.title} textStyle={styles.similarjobtext} />
      <View style={[generalStyles.center, styles.SimilarFuncDetails]}>
        <View style={generalStyles.row}>
          <Location width={wp(4)} height={hp(2)} />
          <CustomText text={item.location} textStyle={styles.location} />
        </View>
        <View style={[generalStyles.rowBetween, styles.SimilarFuncDetails]}>
          <View style={generalStyles.row}>
            <Temlid />
            <CustomText text={item.Telimed} textStyle={styles.Telimed} />
          </View>
          <View style={generalStyles.row}>
            <Temlid />
            <CustomText text={item.Telimed} textStyle={styles.Telimed} />
          </View>
        </View>
      </View>
    </View>
  );
};
const JobDetailsScreen = ({navigation}) => {
  return (
    <AppScreenContainer style={{flex: 1}}>
      <AppHeader
        arrowBack={true}
        title="Job Details"
      />
      <ScrollView contentContainerStyle={generalStyles.container}>
        {/* Section1 company Profle */}
        <View style={styles.profileBox}>
          <TouchableOpacity
            onPress={() => navigation.navigate('CompanyProfile')}>
            <Image
              source={IMAGES.companyProfile}
              resizeMode="cover"
              style={styles.ImageProfile}
            />
          </TouchableOpacity>
          <CustomText text="Cashier (Girl)" textStyle={styles.JobNameText} />
          <View style={generalStyles.row}>
            <CustomText text="Full time" textStyle={styles.JobsiteText} />
            <CustomText text="on-site" textStyle={styles.JobsiteText} />
          </View>
          <View style={[generalStyles.row, styles.locationBox]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('CompanyProfile')}>
              <CustomText
                text="Egyptian Cultural Center"
                textStyle={styles.Jobslocationtext}
              />
            </TouchableOpacity>
            <Documentation />
            <CustomText text=" - Nasr City, Cairo" />
          </View>
          <CustomText text="Posted 4 hours ago" />
          <View style={generalStyles.row}>
            <CustomText text=" 8 " textStyle={styles.ApplicationNumber} />
            <CustomText text="Applicants for open " />
            <CustomText text="1" textStyle={styles.ApplicationNumber} />
            <CustomText text=" position" />
          </View>
          <View style={[generalStyles.row, styles.Viewers]}>
            <View style={styles.ViewrsContainer}>
              <CustomText text="0" />
              <CustomText text="View" />
            </View>
            <View style={styles.Line} />
            <View style={styles.ViewrsContainer}>
              <CustomText text="0" />
              <CustomText text="In Consideration" />
            </View>
            <View style={styles.Line} />
            <View style={styles.ViewrsContainer}>
              <CustomText text="0" />
              <CustomText text="Not Selected" />
            </View>
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
            <CustomText
              text="Full time"
              textStyle={[styles.JobsiteText, styles.FullTimeText]}
            />
            <CustomText text="React" textStyle={styles.JobsiteText} />
            <CustomText text="java script" textStyle={styles.JobsiteText} />
            <CustomText text="CCNA" textStyle={styles.JobsiteText} />
            <CustomText text="Mocha" textStyle={styles.JobsiteText} />
            <CustomText text="React Native" textStyle={styles.JobsiteText} />
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
              text="1000 - 2000 LE / month"
              textStyle={styles.textRequrments2}
            />
          </View>
          <View style={[generalStyles.rowBetween, styles.requrmentSectionBox]}>
            <CustomText text="Type of Job" textStyle={styles.textRequrments} />
            <CustomText text="Full day" textStyle={styles.textRequrments2} />
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
            data={SIMILARJOBS}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <SimilarJobs item={item} />}
          />
          <Button text="Search other opportunities" />
        </View>
        {/*Similar functions */}
        <View
          style={[styles.JobRequirementBoxs, styles.similarJobMainContainer]}>
          <CustomText text="Similar Functions" textStyle={styles.Titles} />

          <FlatList
            horizontal
            data={SIMILARFUNCTIONS}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <SimilarFunctions item={item} />}
          />
          <Button text="See All Financial Mangment Jobs" />
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
