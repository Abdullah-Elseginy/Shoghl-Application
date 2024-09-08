import React from 'react';
import {View} from 'react-native';
import {
  AppScreenContainer,
  Button,
  CaroselComponent,
  CustomText,
} from '../../components';
import {styles} from './style';
import {
  CompanyLAnding,
  Dreams,
  FeaturdLogo,
  Progress,
  SavaTime,
} from '../../assets';
import {hp, wp} from '../../constants';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
const PARTENERS = [
  {
    id: 1,
    imag: <Dreams />,
  },
  {
    id: 2,
    imag: <FeaturdLogo />,
  },
  {
    id: 3,
    imag: <Dreams />,
  },
  {
    id: 4,
    imag: <FeaturdLogo />,
  },
  {
    id: 5,
    imag: <Dreams />,
  },
  {
    id: 6,
    imag: <FeaturdLogo />,
  },
];
const CAROUSELDATA = [
  {
    imag: <Progress width={wp(60)} height={hp(15)} />,
    title: 'progress with one tool',
    description:
      'Gain control over the whole process by using WUZZUF, all the way from screening to short-listing, till interviewing and hiring, and better manage the process with your team.',
  },
  {
    imag: <Progress width={wp(60)} height={hp(15)} />,
    title: 'progress with one tool',
    description:
      'Gain control over the whole process by using WUZZUF, all the way from screening to short-listing, till interviewing and hiring, and better manage the process with your team.',
  },
  {
    imag: <Progress width={wp(60)} height={hp(15)} />,
    title: 'progress with one tool',
    description:
      'Gain control over the whole process by using WUZZUF, all the way from screening to short-listing, till interviewing and hiring, and better manage the process with your team.',
  },
];
const Parteners = ({item}: any) => {
  return <View>{item.imag}</View>;
};

const ForEmployee = ({navigation}) => {
  return (
    <AppScreenContainer style={styles.ScreenContainer}>
      {/* Header */}
      <ScrollView>
        <View style={styles.Header}>
          <CompanyLAnding width={wp(70)} height={hp(30)} />
          <CustomText
            text="Hire Smarter. Grow Faster"
            textStyle={styles.HeaderMainText}
          />
          <CustomText
            text="Hire Smarter. Grow Faster"
            textStyle={styles.HeaderSubText}
          />
          <Button
            text="Hire Now"
            onPress={() => navigation.navigate('WelcomeEmployee')}
          />
        </View>
        {/* Join Saudi Top Companies */}
        <View style={styles.PAddingContainer}>
          <View>
            <View style={styles.HowItWorkSection}>
              <CustomText
                text="Join Saudi Top Companies"
                textStyle={styles.sectionTitle}
              />
            </View>
            <FlatList
              horizontal={true}
              data={PARTENERS}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => <Parteners item={item} />}
            />
          </View>
          {/* Carousal */}
          <View style={styles.CarousalStyle}>
            <CaroselComponent
              data={CAROUSELDATA}
              height={hp(33)}
              autoplay={true}
              animationduration={3000}
              renderItems={({item}: any) => (
                <View style={styles.carosalContentContainer}>
                  {item.imag}
                  <CustomText text2={item.title} textStyle2={styles.Text2} />
                  <CustomText
                    text={item.description}
                    textStyle={styles.desctext}
                  />
                </View>
              )}
            />
          </View>

          {/* Save time contacting */}
          <View style={styles.SavongTimeSection}>
            <SavaTime width={wp(80)} height={hp(20)} />
            <CustomText
              text2="Save time contacting the right candidates"
              textStyle={styles.savingTimeMainText}
            />
            <CustomText
              readMore
              maxLength={70}
              textStyle={styles.desctext}
              redmoreText="Instead of wasting time reaching out to passive candidates to check their interest in your jobs, you can invite them to apply with one simple click. Better utilize your time and effort with candidates who are passionate about your company and accept your invitation"
            />
          </View>
        </View>
      </ScrollView>
    </AppScreenContainer>
  );
};

export default ForEmployee;
