/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Pressable, TouchableOpacity, View} from 'react-native';
import {
  AppHeader,
  AppScreenContainer,
  Button,
  Checkbox,
  CustomBottomSheet,
  CustomText,
} from '../../components';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
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

const FilterSection = ({title, options}) => {
  const [expanded, setExpanded] = useState(false);
  type Option = {
    id: number;
    name: string;
  };
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const toggleOption = (option: Option) => {
    setSelectedOptions(prevState =>
      prevState.includes(option)
        ? prevState.filter(item => item !== option)
        : [...prevState, option],
    );
  };
  return (
    <View>
      <View style={styles.Line} />
      <TouchableOpacity
        style={[styles.filtersSections, generalStyles.rowBetween]}
        onPress={() => setExpanded(!expanded)}>
        <CustomText text={title} textStyle={styles.filtersText} />
        {expanded ? <UpperArrow2 /> : <DowenArrow />}
      </TouchableOpacity>
      {expanded && (
        <FlatList
          data={options}
          keyExtractor={item => item}
          contentContainerStyle={styles.contencontainer}
          renderItem={({item}) => (
            <View>
              <View style={styles.filterChoices}>
                <Checkbox isChecked={true} setIsChecked={false} />
                <CustomText text={item} textStyle={styles.ItemText} />
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};
const Job = ({item, navigation}) => {
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
const Quetions = ({item}) => {
  return (
    <View style={styles.quetionBox}>
      <CustomText text={item.text} textStyle={styles.filtersText} />
      <Add />
    </View>
  );
};
const SearchedJobs = ({navigation}) => {
  const [openSheet, SetOpenSheet] = useState(false);
  return (
    <AppScreenContainer>
      <AppHeader arrowBack={true} />
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
          onPress={() => SetOpenSheet(prev => !prev)}
          style={styles.filterBottm}>
          <CustomText
            text="Filter"
            textStyle={[styles.filtersText, styles.filterTextComplate]}
          />
          <Filte width={wp(7)} height={hp(4)} />
        </TouchableOpacity>
        <CustomBottomSheet
          isOpen={openSheet}
          height={hp(70)}
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
                <FilterSection
                  title="Workplace"
                  options={['Option 1', 'Option 2', 'Option 3']}
                />
                <FilterSection
                  title="Country"
                  options={['Country 1', 'Country 2']}
                />
                <FilterSection
                  title="City"
                  options={['City 1', 'City 2', 'City 3']}
                />
                <FilterSection title="Area" options={['Area 1', 'Area 2']} />
                <FilterSection
                  title="Career Level"
                  options={['Level 1', 'Level 2']}
                />
              </View>
              <Button text="done" onPress={() => SetOpenSheet(false)} />
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
export default SearchedJobs;
