/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Pressable,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import {
  AppHeader,
  AppScreenContainer,
  Button,
  Checkbox,
  CustomBottomSheet,
  CustomText,
} from '../../components';
import {styles} from './styles';
import {
  Add,
  Adidas,
  Cash,
  Crown,
  DowenArrow,
  Filte,
  Location,
  Nike,
  Photoshop,
  Samsung,
  Tiktok,
  Udacity,
  UpperArrow2,
} from '../../assets';
import {COLORS, generalStyles, hp, wp} from '../../constants';
import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
const Optionsdata = [
  {
    id: '1',
    title: 'Workplace',
    options: [
      {
        title: 'choice1',
        selected: false,
      },
      {
        title: 'choice1',
        selected: false,
      },
      {
        title: 'choice1',
        selected: false,
      },
    ],
  },
  {
    id: '2',

    title: 'Country',
    options: [
      {
        title: 'choice1',
        selected: false,
      },
      {
        title: 'choice1',
        selected: false,
      },
      {
        title: 'choice1',
        selected: false,
      },
    ],
  },
  {
    id: '3',
    title: 'City',
    options: [
      {
        title: 'choice1',
        selected: false,
      },
      {
        title: 'choice1',
        selected: false,
      },
      {
        title: 'choice1',
        selected: false,
      },
    ],
  },
  {
    id: '5',
    title: 'Career Level',
    options: [
      {
        title: 'choice1',
        selected: false,
      },
      {
        title: 'choice1',
        selected: false,
      },
      {
        title: 'choice1',
        selected: false,
      },
    ],
  },
  {
    id: '5',
    title: 'Area',
    options: [
      {
        title: 'choice1',
        selected: false,
      },
      {
        title: 'choice1',
        selected: false,
      },
      {
        title: 'choice1',
        selected: false,
      },
    ],
  },
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
const FilterSection = ({item}: {item: any}) => {
  const [expanded, setExpanded] = useState(false);
  const [options, setOptions] = useState(item.options);

  const toggleCheckbox = (index: number) => {
    setOptions(prevOptions =>
      prevOptions.map((opt, i) =>
        i === index ? {...opt, selected: !opt.selected} : opt,
      ),
    );
  };

  return (
    <View>
      <View style={styles.Line} />
      <TouchableOpacity
        style={[styles.filtersSections, generalStyles.rowBetween]}
        onPress={() => setExpanded(!expanded)}>
        <CustomText text={item.title} textStyle={styles.filtersText} />
        {expanded ? <UpperArrow2 /> : <DowenArrow />}
      </TouchableOpacity>
      {expanded && (
        <FlatList
          data={options}
          keyExtractor={(option, index) => index.toString()} // Using index as key for options
          contentContainerStyle={styles.contencontainer}
          renderItem={({item, index}) => (
            <View>
              <View style={styles.filterChoices}>
                <Checkbox
                  isChecked={item.selected}
                  setIsChecked={() => toggleCheckbox(index)}
                />
                <CustomText text={item.title} textStyle={styles.ItemText} />
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
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
const ExploreScreen = ({navigation}: any) => {
  const [openSheet, SetOpenSheet] = useState(false);
  return (
    <AppScreenContainer>
      <AppHeader arrowBack={true} title="Search jobs" />
      <ScrollView contentContainerStyle={styles.container}>
        {/* Section1 Search Title */}
        <View style={styles.Secion1Box}>
          <CustomText
            text="Senior Management Jobs in Saudi Arabia"
            textStyle={styles.sectionTitle}
          />
          <CustomText text="123 jobs found" textStyle={styles.jobsNumber} />
        </View>
        {/* Section2 Filter */}
        <TouchableOpacity
          onPress={() => SetOpenSheet(true)}
          style={styles.filterBottm}>
          <Filte width={wp(5.5)} height={hp(4)} />
        </TouchableOpacity>
        <CustomBottomSheet
          isOpen={openSheet}
          height={hp(60)}
          onClose={() => SetOpenSheet(false)}
          children={
            <ScrollView contentContainerStyle={styles.buttomSheetScroll}>
              <View style={styles.FilterBox}>
                <View style={styles.filtersSections}>
                  <CustomText text="Filters" textStyle={styles.filtersText} />
                  <View style={generalStyles.rowBetween}>
                    <CustomText text="1 filterd selection" />
                    <TouchableOpacity>
                      <CustomText
                        text="clear all filters"
                        textStyle={styles.PrimaryColor}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <FlatList
                  data={Optionsdata}
                  keyExtractor={item => item.id}
                  renderItem={({item}) => <FilterSection item={item} />}
                />
              </View>
              <Button
                text="done"
                onPress={() => SetOpenSheet(false)}
                style={styles.btn}
              />
            </ScrollView>
          }
        />
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
export default ExploreScreen;
