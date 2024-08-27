/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { AppInput, AppScreenContainer, Button, CustomText, Dropdown } from '../../components';
import { styles } from './styles';
import { FlatList, ScrollView, View } from 'react-native';
import { Adidas, Cash, Crown, Location, Nike, Photoshop, Samsung, Tiktok, Udacity } from '../../assets';
import { generalStyles, hp, wp } from '../../constants';

const CITY = [{ id: 1, label: 'Cairo' }, { id: 2, label: 'Alex' }, { id: 3, label: 'Giza' }]

const JOBS = [
  { id: 1, img: <Photoshop />, status: 'telimed', job: 'electrician', period: 'full time', location: 'Paris, France', price: '$30,000.00 - $35,000.00' },
  { id: 2, img: <Nike />, status: 'telimed', job: 'electrician', period: 'full time', location: 'Paris, France', price: '$30,000.00 - $35,000.00' },
  { id: 3, img: <Tiktok />, status: 'telimed', job: 'electrician', period: 'full time', location: 'Paris, France', price: '$30,000.00 - $35,000.00' },
  { id: 4, img: <Samsung />, status: 'telimed', job: 'electrician', period: 'full time', location: 'Paris, France', price: '$30,000.00 - $35,000.00' },
  { id: 5, img: <Udacity />, status: 'telimed', job: 'electrician', period: 'full time', location: 'Paris, France', price: '$30,000.00 - $35,000.00' },
  { id: 6, img: <Adidas />, status: 'telimed', job: 'electrician', period: 'full time', location: 'Paris, France', price: '$30,000.00 - $35,000.00' },
]

const HomeScreen = () => {
  const [city, setCity] = React.useState('');

  const Job = ({ item }) => {
    return (
      <View style={styles.jobBox}>
        <View style={styles.jobTopBox}>
          <View style={generalStyles.row}>
            {item.img}
            <View style={styles.jobTopContent}>
              <CustomText text={item.status} textStyle={styles.status} />
              <CustomText text={item.job} textStyle={styles.job} />
              <CustomText text={item.period} textStyle={styles.period} />
            </View>
          </View>
        </View>
        <View style={styles.jobBottomBox}>
          <View style={[generalStyles.row, { marginBottom: hp(2) }]}>
            <Crown width={hp(2)} height={hp(2)} style={styles.btnIcon} />
            <CustomText text={item.status} textStyle={styles.jobBottomTxt} />
            <Location width={hp(2)} height={hp(2)} style={[styles.btnIcon, { marginStart: wp(20) }]} />
            <CustomText text={item.location} textStyle={styles.jobBottomTxt} />
          </View>
          <View style={generalStyles.row}>
            <Cash width={hp(2)} height={hp(2)} style={styles.btnIcon} />
            <CustomText text={item.price} textStyle={styles.jobBottomTxt} />
          </View>
        </View>
      </View>
    )
  }

  return (
    <AppScreenContainer style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <CustomText text="find job" textStyle={styles.sectionTitle} />
        <CustomText text="Hire Experts or be hired in sales & marketing" textStyle={styles.sectionSubTitle} />
        <AppInput placeholder="Job Tittle, Skill, Industry" appInputStyle={styles.containerStyle} />
        <Dropdown placeholder={'City'} list={CITY} value={city} setValue={setCity} dropDownStyle={styles.containerStyle} />
        <AppInput placeholder="All Categories" appInputStyle={styles.containerStyle} />
        <Button text="search" style={styles.btn} onPress={() => null} />

        <CustomText text="recent jobs" textStyle={styles.sectionTitle} />
        <FlatList
          data={JOBS}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Job item={item} />}
        />
        <Button text="show more jobs" style={styles.btn} onPress={() => null} />
      </ScrollView>
    </AppScreenContainer>
  );
};

export default HomeScreen;
