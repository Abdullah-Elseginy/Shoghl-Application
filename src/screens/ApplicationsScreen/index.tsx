import {FlatList, Pressable, ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import {
  AppHeader,
  AppScreenContainer,
  CustomText,
  Dropdown,
} from '../../components';
import styles from './style';
import {COLORS, generalStyles, hp, wp} from '../../constants';
import {
  Add,
  Adidas,
  Cash,
  Crown,
  Location,
  Nike,
  Photoshop,
  Samsung,
  Search,
  Tiktok,
  Udacity,
} from '../../assets';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
const list = [
  {label: 'Egypt', value: 'apple'},
  {label: 'Morroco', value: 'banana'},
  {label: 'Italy', value: 'orange'},
];
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
type Props = {
  navigation: NativeStackNavigationProp<ParamListBase, string>;
  item: any;
};
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
const Applications = ({navigation}) => {
  const [selected, setSelected] = useState('Application');
  const handlePress = choice => {
    setSelected(choice);
  };
  return (
    <AppScreenContainer style={styles.maincontainer}>
      <AppHeader arrowBack title="Applications" />
      <View style={styles.container}>
        <View style={styles.MAinheader}>
          <Pressable
            onPress={() => handlePress('Application')}
            style={
              selected == 'Application'
                ? styles.selected
                : styles.applicationBox
            }>
            <CustomText text="Application" textStyle={styles.appication} />
          </Pressable>
          <Pressable
            onPress={() => handlePress('Archive')}
            style={
              selected == 'Archive' ? styles.selected : styles.applicationBox
            }>
            <CustomText text="Archive" textStyle={styles.appication} />
          </Pressable>
        </View>
        <View style={styles.dropBox}>
          <CustomText text="Sorted by" textStyle={styles.sortedby} />
          <View>
            <Dropdown list={list} dropDownStyle={styles.dropdwon} />
          </View>
        </View>
        <ScrollView>
          <View style={[generalStyles.rowBetween, styles.mainbox]}>
            <View style={[generalStyles.row, styles.Box]}>
              <View style={styles.searchBox}>
                <Search width={wp(6)} height={hp(3)} />
              </View>
              <View style={generalStyles.marginLeft}>
                <CustomText text="15" textStyle={styles.Bold} />
                <CustomText
                  text="Search appearance"
                  textStyle={styles.searchText}
                />
              </View>
            </View>
            <View style={[generalStyles.row, styles.Box]}>
              <View style={styles.searchBox}>
                <Search width={wp(6)} height={hp(3)} />
              </View>
              <View style={generalStyles.marginLeft}>
                <CustomText text="15" textStyle={styles.Bold} />
                <CustomText
                  text="Search appearance"
                  textStyle={styles.searchText}
                />
              </View>
            </View>
          </View>
          <View style={[generalStyles.row, styles.Box]}>
            <View style={styles.searchBox}>
              <Search width={wp(6)} height={hp(3)} />
            </View>
            <View style={generalStyles.marginLeft}>
              <CustomText text="15" textStyle={styles.Bold} />
              <CustomText
                text="Search appearance"
                textStyle={styles.searchText}
              />
            </View>
          </View>
          {/* Jobs*/}
          <View style={styles.marTop}>
            <FlatList
              data={JOBS}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <Job navigation={navigation} item={item} />
              )}
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
      </View>
    </AppScreenContainer>
  );
};

export default Applications;
