/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {
  AppHeader,
  AppScreenContainer,
  Button,
  Checkbox,
  CustomBottomSheet,
  CustomText,
} from '../../components';
import {FlatList, Pressable, ScrollView} from 'react-native-gesture-handler';
import {styles} from './styles';
import {
  Add,
  Cash,
  Crown,
  DowenArrow,
  Filte,
  Location,
  UpperArrow2,
} from '../../assets';
import {generalStyles, hp, IMAGES, wp} from '../../constants';
import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {QUETIONS} from '../../utils/Data';
import {useDispatch, useSelector} from 'react-redux';
import ScreenNames from '../../navigations/ScreenNames';
import {AppDispatch} from '../../redux/store';
import {getAllHelperJobs} from '../../redux/slices/JobsSlice';

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase, string>;
  item: any;
};
const Job = ({item, navigation}: Props) => {
  return (
    <Pressable
      onPress={() => navigation.navigate(ScreenNames.JobDetails)}
      style={[styles.jobBox, {backgroundColor: item.color}]}>
      <View style={styles.jobTopBox}>
        <View style={generalStyles.row}>
          <View>
            <Image
              source={IMAGES.companyProfile}
              style={styles.im}
              resizeMode="cover"
            />
          </View>
          <View style={styles.jobTopContent}>
            <CustomText text={item.since} textStyle={styles.status} />
            <CustomText text={item.title} textStyle={styles.job} />
            <View style={[generalStyles.rowBetween, styles.PeriodBox]}>
              <FlatList
                data={item?.job_types?.en}
                horizontal
                contentContainerStyle={styles.Conten}
                renderItem={({item}: any) =>
                  item == 'Full Time' ? (
                    <CustomText text={item} textStyle={[styles.period2]} />
                  ) : item == 'Shift based' ? (
                    <CustomText text={item} textStyle={[styles.period]} />
                  ) : (
                    <CustomText
                      text={item}
                      textStyle={[styles.period, styles.period3]}
                    />
                  )
                }
              />
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
const FilterSection = ({
  item,
  onSelectionChange,
}: {
  item: any;
  onSelectionChange: (category: string, selectedOptions: string[]) => void;
}) => {
  const [expanded, setExpanded] = useState(false);
  const [FilterOptions, setOptions] = useState<Array<any>>(item.options);
  const toggleCheckbox = (index: number) => {
    setOptions(prevOptions =>
      prevOptions.map((opt: any, i: number) =>
        i === index ? {...opt, selected: !opt.selected} : opt,
      ),
    );
  };

  useEffect(() => {
    const selectedOptions = FilterOptions.filter(opt => opt.selected).map(
      opt => opt.code || opt.name_en,
    );
    onSelectionChange(item.title, selectedOptions);
  }, [FilterOptions]);
  return (
    <View>
      <View style={styles.Line} />
      <TouchableOpacity
        style={[styles.filtersSections, generalStyles.rowBetween]}
        onPress={() => setExpanded(!expanded)}>
        <View style={generalStyles.row}>
          <CustomText text={item.title} textStyle={styles.filtersText} />
          <View style={styles.countBox}>
            <CustomText
              text={FilterOptions.length + ''}
              textStyle={styles.Count}
            />
          </View>
        </View>
        {expanded ? <UpperArrow2 /> : <DowenArrow />}
      </TouchableOpacity>
      {expanded && (
        <FlatList
          data={FilterOptions}
          keyExtractor={(option, index) => index.toString()}
          contentContainerStyle={styles.contencontainer}
          renderItem={({item, index}) => (
            <View>
              <View style={styles.filterChoices}>
                <Checkbox
                  isChecked={item.selected}
                  setIsChecked={() => toggleCheckbox(index)}
                />
                <CustomText text={item.name_en} textStyle={styles.ItemText} />
              </View>
            </View>
          )}
        />
      )}
    </View>
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
const SearchedJobs = ({navigation}: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const {allJobs, helpersJobs} = useSelector((state: any) => state.jobs);
  const {allCities} = useSelector((state: any) => state.appdata);
  console.log('Helperrssss------' + JSON.stringify(helpersJobs));
  const [openSheet, SetOpenSheet] = useState(false);
  // const [Count, SetCount] = useState(0);
  const Optionsdata = [
    {
      id: '1',
      title: 'Workplace',
      options: [...helpersJobs?.contract_type],
    },
    {
      id: '3',
      title: 'City',
      options: [...allCities],
    },
    {
      id: '5',
      title: 'Career Level',
      options: [...helpersJobs?.career_level],
    },
  ];
  // ---------------------------filter-----------------------
  const [myfilterData, setMyfilterData] = useState({
    careerLevelData: [],
    cityData: [],
    contractType: [],
  });

  console.log('MyFliterDAtaa-----', myfilterData);

  const handleSelectionChange = (
    category: string,
    selectedOptions: string[],
  ) => {
    setMyfilterData(prevState => ({
      ...prevState,
      [category]: selectedOptions,
    }));
  };

  // -----------------------------------API-----------------------------
  useEffect(() => {
    dispatch(getAllHelperJobs());
  }, []);
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
          height={hp(50)}
          onClose={() => SetOpenSheet(false)}
          children={
            <ScrollView contentContainerStyle={styles.buttomSheetScroll}>
              <View style={styles.FilterBox}>
                <FlatList
                  data={Optionsdata}
                  keyExtractor={item => item.id}
                  ListHeaderComponent={
                    <View style={styles.filtersSections}>
                      <CustomText
                        text="Filters"
                        textStyle={styles.filtersText}
                      />
                      <View style={generalStyles.rowBetween}>
                        <CustomText text={'  filterd selection'} />
                        <TouchableOpacity>
                          <CustomText
                            text="clear all filters"
                            textStyle={styles.PrimaryColor}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  }
                  renderItem={({item}) => (
                    <FilterSection
                      item={item}
                      onSelectionChange={handleSelectionChange}
                    />
                  )}
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
            data={allJobs}
            keyExtractor={item => item.code.toString()}
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
