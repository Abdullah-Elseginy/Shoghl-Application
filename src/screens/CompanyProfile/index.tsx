import React from 'react';
import {Pressable, ScrollView, TouchableOpacity, View} from 'react-native';
import {
  AppHeader,
  AppScreenContainer,
  Button,
  CustomText,
} from '../../components';
import {COLORS, generalStyles, hp, wp} from '../../constants';
import {
  Adidas,
  Cash,
  Crown,
  Description,
  Documentation,
  Globaly,
  Location,
  Nike,
  People,
  Photoshop,
  Raya,
  Samsung,
  ShareLink,
  Temlid,
  Tiktok,
  Udacity,
} from '../../assets';
import {styles} from './style';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';
type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>;
  item: any;
};
const JOBS = [
  {
    id: 1,
    img: <Photoshop />,
    status: 'telimed',
    job: 'electrician',
    period: 'full time',
    intern: 'internship',
    location: 'Paris, France',
    price: '$30,000.00 - $35,000.00',
    color: COLORS.yellowlight,
  },
  {
    id: 2,
    img: <Nike />,
    status: 'telimed',
    job: 'electrician',
    period: 'full time',
    intern: 'internship',
    location: 'Paris, France',
    price: '$30,000.00 - $35,000.00',
    color: COLORS.blueLight,
  },
  {
    id: 3,
    img: <Tiktok />,
    status: 'telimed',
    job: 'electrician',
    period: 'full time',
    intern: 'internship',
    location: 'Paris, France',
    price: '$30,000.00 - $35,000.00',
    color: COLORS.grayMoreLight,
  },
  {
    id: 4,
    img: <Samsung />,
    status: 'telimed',
    job: 'electrician',
    period: 'full time',
    intern: 'internship',
    location: 'Paris, France',
    price: '$30,000.00 - $35,000.00',
  },
  {
    id: 5,
    img: <Udacity />,
    status: 'telimed',
    job: 'electrician',
    period: 'full time',
    intern: 'internship',
    location: 'Paris, France',
    price: '$30,000.00 - $35,000.00',
    color: COLORS.grayMoreLight,
  },
  {
    id: 6,
    img: <Adidas />,
    status: 'telimed',
    job: 'electrician',
    period: 'full time',
    intern: 'internship',
    location: 'Paris, France',
    color: COLORS.yellowlight,
    price: '$30,000.00 - $35,000.00',
  },
];

const Job = ({item, navigation}: Props) => {
  return (
    <Pressable
      onPress={() => navigation.navigate('JobDetails')}
      style={[styles.jobBox, {backgroundColor: item.color}]}>
      <View style={styles.jobTopBox}>
        <View style={generalStyles.row}>
          {item.img}
          <View style={styles.jobTopContent}>
            <CustomText text={item.status} textStyle={styles.status} />
            <CustomText text={item.job} textStyle={styles.job} />
            <View style={[generalStyles.rowBetween, styles.PeriodBox]}>
              <CustomText text={item.period} textStyle={styles.period} />
              <CustomText text={item.intern} textStyle={[styles.period2]} />
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
      </View>
    </Pressable>
  );
};

const CompanyProfile = ({navigation}: Props) => {
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
        {/* Open vacancies */}
        <View style={[styles.openVacansis]}>
          <CustomText
            text={`Open vacancies at Raya Distribution`}
            textStyle={styles.Titles}
          />
          <FlatList
            data={JOBS}
            horizontal
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <Job navigation={navigation} item={item} />}
          />
        </View>
        {/* Hiring? */}
        <View style={styles.JobRequirementBoxs}>
          <CustomText text="Hiring ?" textStyle={styles.Titles} />
          <CustomText
            text="Sign up for an employer account and post your job"
            textStyle={styles.textRequrments}
          />
          <Button onPress={() => {}} text="Start Hiring" />
        </View>
        {/* Discover more jobs */}
        <View style={styles.JobRequirementBoxs}>
          <CustomText text="Discover more jobs" textStyle={styles.Titles} />
          <CustomText
            text="Join Shoghl now and learn about all companies hiring in egypt"
            textStyle={styles.textRequrments}
          />
          <Button onPress={() => {}} text="Join And Find Your Job" />
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
