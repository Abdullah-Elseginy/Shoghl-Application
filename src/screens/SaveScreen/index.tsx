import {FlatList, Pressable, ScrollView, View} from 'react-native';
import React from 'react';
import {AppHeader, AppScreenContainer, CustomText} from '../../components';
import styles from './styles';
import {COLORS, generalStyles, hp} from '../../constants';
import {
  Add,
  Adidas,
  Cash,
  Crown,
  Location,
  Nike,
  Photoshop,
  Samsung,
  Tiktok,
  Udacity,
} from '../../assets';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
type Props = {
  navigation: NativeStackNavigationProp<ParamListBase, string>;
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
const QUETIONS = [
  {
    id: 1,
    text: 'What are the top 10 popular jobs in Saudi Arabia Now?',
  },
  {
    id: 2,
    text: 'What are the top 10 popular jobs in Saudi Arabia Now?',
  },
  {
    id: 3,
    text: 'What are the top 10 popular jobs in Saudi Arabia Now?',
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
const Quetions = ({item}: any) => {
  return (
    <View style={styles.quetionBox}>
      <CustomText text={item.text} textStyle={styles.filtersText} />
      <Add />
    </View>
  );
};
const SaveScreen = ({navigation}: any) => {
  return (
    <AppScreenContainer>
      <AppHeader arrowBack={true} title="Saved" />
      <ScrollView contentContainerStyle={styles.container}>
        {/* Section1 Search Title */}
        <View style={styles.Secion1Box}>
          <CustomText
            text="Senior Management Jobs in Saudi Arabia"
            textStyle={styles.sectionTitle}
          />
          <CustomText text="123 jobs found" textStyle={styles.jobsNumber} />
        </View>
        {/* Jobs*/}
        <View>
          <FlatList
            data={JOBS}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <Job navigation={navigation} item={item} />}
          />
        </View>
        {/* َQuetions */}
        <View>
          <FlatList
            data={QUETIONS}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <Quetions item={item} />}
          />
        </View>
      </ScrollView>
    </AppScreenContainer>
  );
};

export default SaveScreen;
