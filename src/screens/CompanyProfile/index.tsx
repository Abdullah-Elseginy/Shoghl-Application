import React from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {
  AppHeader,
  AppScreenContainer,
  Button,
  CustomText,
} from '../../components';
import {generalStyles, hp, IMAGES, wp} from '../../constants';
import {
  Description,
  Documentation,
  Globaly,
  Location,
  People,
  Raya,
  ShareLink,
  Temlid,
} from '../../assets';
import {styles} from './style';

const CompanyProfile = ({navigation}) => {
  return (
    <AppScreenContainer>
      <AppHeader arrowBack={true} title="Company Profile" />
      <ScrollView contentContainerStyle={generalStyles.container}>
        {/* Section One Company Profile */}
        <View style={styles.profileBox}>
          <TouchableOpacity
            onPress={() => navigation.navigate('CompanyProfile')}>
            <Raya width={wp(50)} height={hp(15)} />
          </TouchableOpacity>
          <View style={styles.CompanyNameBox}>
            <CustomText
              text="Raya Distribution"
              textStyle={styles.JobNameText}
            />
            <Documentation />
          </View>
          <View>
            <CustomText
              textStyle={styles.companydetailsText}
              text="Consumer Electronics . Retail . Cairo, Egypt . 501-1000 employees"
            />
          </View>
          <View style={[generalStyles.center, generalStyles.row]}>
            <Globaly />
            <CustomText textStyle={styles.LinkText} text="www.Rayacorp.com" />
          </View>
          <View
            style={[generalStyles.center, generalStyles.row, styles.ShareLink]}>
            <ShareLink />
            <CustomText textStyle={styles.LinkText} text="Share Company Link" />
          </View>
        </View>
        {/* Company Profile Details */}

        <View style={styles.JobRequirementBoxs}>
          <CustomText text="Company Profile" textStyle={styles.Titles} />
          <View>
            <View style={generalStyles.row}>
              <View style={styles.MArginRight}>
                <Location width={wp(4.5)} height={hp(2)} />
              </View>
              <CustomText text2="Location:" textStyle2={styles.Telimed1} />
              <CustomText text={'Cairo, Egypt'} textStyle={styles.Telimed2} />
            </View>
            <View style={[generalStyles.row, styles.MArginTop]}>
              <View style={styles.MArginRight}>
                <Temlid />
              </View>
              <CustomText text2="Industry:" textStyle2={styles.Telimed1} />
              <CustomText
                text={'Consumer Electronics . Retail'}
                textStyle={styles.Telimed2}
              />
            </View>
            <View style={[generalStyles.row, styles.MArginTop]}>
              <View style={styles.MArginRight}>
                <People />
              </View>
              <CustomText
                text2="Company Size : "
                textStyle2={styles.Telimed1}
              />
              <CustomText
                text={'501-1000 employees'}
                textStyle={styles.Telimed2}
              />
            </View>
            <View style={[styles.MArginTop]}>
              <View style={styles.MArginRight}>
                <Description width={wp(5)} height={hp(2.9)} />
              </View>
              <CustomText
                text2="Company Description : "
                textStyle2={styles.Telimed1}
              />
            </View>
            <View style={styles.DescriptionText}>
              <CustomText
                maxLength={80}
                readMore
                redmoreText="Raya’s Trade Line of Business caters primarily to the consumer market through three main functions distribution, retail andmaintenance services for cellular phones and IT product under globalbrand names. Raya Trade sells directly to the retail market throughits stores, distributes through a nationwide network of wholesalersand provides maintenance for its products. The portfolio of productsoffered through the distribution, retail and maintenance servicefunctions includes cellul"
              />
            </View>
          </View>
        </View>

        {/* Hiring? */}
        <View style={styles.JobRequirementBoxs}>
          <CustomText text="Hiring ?" textStyle={styles.Titles} />
          <CustomText
            text="Sign up for an employer account and post your job"
            textStyle={styles.textRequrments}
          />
          <Button text="Start Hiring" />
        </View>
        {/* Discover more jobs */}
        <View style={styles.JobRequirementBoxs}>
          <CustomText text="Discover more jobs" textStyle={styles.Titles} />
          <CustomText
            text="Join Shoghl now and learn about all companies hiring in egypt"
            textStyle={styles.textRequrments}
          />
          <Button text="Join And Find Your Job" />
        </View>
        {/* Jobs By Field?*/}
        <View style={styles.JobRequirementBoxs}>
          <CustomText text={`Jobs By Field`} textStyle={styles.Titles} />
          <CustomText
            text={`-All Vacancies at Egyptian Cultural Center\n-General Manager jobs in Cairo\n-General Manager jobs in Egypt\n-Operations/Management jobs in Egypt\n-Education/Teaching jobs in Egypt\n-jobs in Egypt`}
            textStyle={styles.relatedjobText}
          />
        </View>
      </ScrollView>
    </AppScreenContainer>
  );
};

export default CompanyProfile;
