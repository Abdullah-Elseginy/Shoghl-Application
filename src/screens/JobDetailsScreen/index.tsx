/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {AppHeader, AppScreenContainer, CustomText} from '../../components';
import {ScrollView} from 'react-native-gesture-handler';
import {generalStyles, hp, IMAGES} from '../../constants';
import {Image, View} from 'react-native';
import {styles} from './styles';
import {Documentation} from '../../assets';

const JobDetailsScreen = ({navigation}) => {
  return (
    <AppScreenContainer style={{flex: 1}}>
      <AppHeader arrowBack={true} />
      <ScrollView contentContainerStyle={generalStyles.container}>
        {/* Section1 company Profle */}
        <View style={styles.profileBox}>
          <View>
            <Image
              source={IMAGES.companyProfile}
              resizeMode="cover"
              style={styles.ImageProfile}
            />
          </View>
          <CustomText text="Cashier (Girl)" textStyle={styles.JobNameText} />
          <View style={generalStyles.row}>
            <CustomText text="Full time" textStyle={styles.JobsiteText} />
            <CustomText text="on-site" textStyle={styles.JobsiteText} />
          </View>
          <View style={[generalStyles.row, styles.locationBox]}>
            <CustomText
              text="Egyptian Cultural Center"
              textStyle={styles.Jobslocationtext}
            />
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
        <View style={styles.JobRequirementBox}>
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
              textStyle={[styles.JobsiteText, {marginBottom: hp(1.5)}]}
            />
            <CustomText text="Full time" textStyle={styles.JobsiteText} />
            <CustomText text="Full time" textStyle={styles.JobsiteText} />
            <CustomText text="Full time" textStyle={styles.JobsiteText} />
            <CustomText text="Full time" textStyle={styles.JobsiteText} />
            <CustomText text="Full time" textStyle={styles.JobsiteText} />
          </View>
        </View>
      </ScrollView>
    </AppScreenContainer>
  );
};
export default JobDetailsScreen;
