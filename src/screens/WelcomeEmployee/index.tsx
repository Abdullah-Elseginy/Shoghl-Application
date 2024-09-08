import React from 'react';
import {AppScreenContainer, Button, CustomText} from '../../components';
import {Pressable, View} from 'react-native';
import {styles} from './styles';
import { generalStyles, hp, wp} from '../../constants';
import {Cash, Crown, Edit, ExitXicon, Location, Raya} from '../../assets';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
const JOBS = [
  {
    id: 1,
    img: <Raya />,
    status: 'telimed',
    job: 'Office Boy',
    period: 'full time',
    intern: 'internship',
    freelance: '',
    location: 'Paris, France',
    price: '0 - 2 Yrs of Exp · males_only. 2500-6200 LE ',
  },
  {
    id: 2,
    img: <Raya />,
    status: 'telimed',
    job: 'Restaurant Dishwasher',
    period: 'full time',
    intern: '',
    freelance: 'freelance',
    location: 'Paris, France',
    price: '$30,000.00 - $35,000.00',
  },
  {
    id: 3,
    img: <Raya />,
    status: 'telimed',
    job: 'electrician',
    period: '',
    intern: 'internship',
    freelance: '',
    location: 'Paris, France',
    price: '$30,000.00 - $35,000.00',
  },
  {
    id: 4,
    img: <Raya />,
    status: 'telimed',
    job: 'electrician',
    period: 'full time',
    intern: '',
    freelance: '',
    location: 'Paris, France',
    price: '$30,000.00 - $35,000.00',
  },
  {
    id: 5,
    img: <Raya />,
    status: 'telimed',
    job: 'electrician',
    period: 'full time',
    intern: 'internship',
    freelance: '',
    location: 'Paris, France',
    price: '$30,000.00 - $35,000.00',
  },
  {
    id: 6,
    img: <Raya />,
    status: 'telimed',
    job: 'electrician',
    period: '',
    intern: '',
    freelance: 'freelance',
    location: 'Paris, France',
    price: '$30,000.00 - $35,000.00',
  },
];
const Job = ({item, navigation}: Props) => {
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
const WelcomeEmployee = ({navigation}) => {
  return (
    <AppScreenContainer style={styles.AppContainer}>
      {/* welcome and post job */}
      <View style={generalStyles.rowCenter}>
        <CustomText text="Welcome Ahmed " textStyle={styles.WelcomeTExt} />
        <Button
          onPress={() => navigation.navigate('ComplateCompanyProfile')}
          style={{
            width: wp(30),
          }}
          text="+ Post job"
        />
      </View>
      <ScrollView>
        {/* hiring */}
        <View style={styles.HringBox}>
          <CustomText text="Hiring?" textStyle={styles.TextTitle} />
          <CustomText
            text="If you looking for hire right candidate start hire now.?"
            textStyle={styles.subText}
          />
          <Button text="Start Hiring" style={styles.bottomStyle} />
        </View>
        {/* CVs */}
        <View style={styles.HringBox}>
          <CustomText text="CVs" textStyle={styles.TextTitle} />
          <CustomText
            text="If you looking for hire right candidate start hire now.?"
            textStyle={styles.subText}
          />
          <Button text="Brows CVs" style={styles.bottomStyle} />
        </View>
        {/* Jobs*/}
        <View style={styles.FlatBox}>
          <FlatList
            data={JOBS}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <Job navigation={navigation} item={item} />}
          />
        </View>
      </ScrollView>
    </AppScreenContainer>
  );
};

export default WelcomeEmployee;
