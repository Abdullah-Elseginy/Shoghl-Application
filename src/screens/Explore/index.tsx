/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useState} from 'react';
import {
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
  Image,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {
  Apploader,
  AppScreenContainer,
  Button,
  CustomBottomSheet,
  CustomText,
} from '../../components';
import {styles} from './styles';
import {Add, Cash, Crown, Filte, Location, NotFound} from '../../assets';
import {COLORS, generalStyles, hp, wp} from '../../constants';
import {ParamListBase, useFocusEffect} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {JOBS, QUETIONS} from '../../utils/Data';
import {FilterSection} from '../SearchedJobs';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {getAllHelperJobs, SearchJobs} from '../../redux/slices/JobsSlice';
import Toast from 'react-native-toast-message';
import ScreenNames from '../../navigations/ScreenNames';

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase, string>;
  item: any;
};
const jobTypeColors = {
  Internship: COLORS.dangerLight,
  'Full Time': COLORS.blueMoresmothy,
  Freelance: COLORS.primaryMoreLight,
  'Part Time': COLORS.yellow,
};

// Function to get border color based on job types
const getBorderColor = (types: any) => {
  if (types?.includes('Internship')) return jobTypeColors['Internship'];
  if (types?.includes('Full Time')) return jobTypeColors['Full Time'];
  if (types?.includes('Freelance')) return jobTypeColors['Freelance'];
  if (types?.includes('Part Time')) return jobTypeColors['Part Time'];
  if (types?.includes('Student activity')) return jobTypeColors['Part Time'];
  return '#e1d123'; // Default color if no types match
};
const Job = ({item, navigation}: Props) => {
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(ScreenNames.JobDetails, {
          jobCode: item?.code,
        })
      }
      style={[
        styles.jobBox,
        {backgroundColor: getBorderColor(item?.job_types?.default_name)},
      ]}>
      <View style={styles.jobTopBox}>
        <View style={generalStyles.row}>
          <View>
            <Image
              source={{
                uri:
                  item?.company?.company_logo ||
                  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
              }}
              style={styles.im}
              resizeMode="cover"
            />
          </View>
          <View style={styles.jobTopContent}>
            <View style={generalStyles.rowBetween}>
              <CustomText text={item.title} textStyle={styles.job} />
              <CustomText text={item.since} textStyle={styles.status} />
            </View>
            <View style={[generalStyles.rowBetween]}>
              <FlatList
                data={item?.job_types}
                horizontal
                contentContainerStyle={styles.Conten}
                renderItem={({item}: any) =>
                  item == 'Full Time' ? (
                    <CustomText
                      text={item?.default_name?.slice(0, 9)}
                      textStyle={[styles.period2]}
                    />
                  ) : item == 'Shift based' ? (
                    <CustomText
                      text={item?.default_name?.slice(0, 9)}
                      textStyle={[styles.period]}
                    />
                  ) : item == 'Part Time' ? (
                    <CustomText
                      text={item?.default_name?.slice(0, 12)}
                      textStyle={[styles.period, styles.period4]}
                    />
                  ) : (
                    <CustomText
                      text={item?.default_name?.slice(0, 12) + '..'}
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
        <View style={[generalStyles.rowBetween, styles.JocBttomBox]}>
          <View style={generalStyles.row}>
            <Crown width={hp(2)} height={hp(2)} style={styles.btnIcon} />
            <CustomText
              text={item?.company?.company_name}
              textStyle={styles.jobBottomTxt}
            />
          </View>
          <View style={[generalStyles.row, styles.marginT]}>
            <Location width={hp(2)} height={hp(2)} style={[styles.btnIcon]} />
            <CustomText
              text={
                item?.country?.default_name + ' | ' + item?.city?.default_name
              }
              textStyle={styles.jobBottomTxt}
            />
          </View>
        </View>
        <View style={generalStyles.row}>
          <Cash width={hp(2)} height={hp(2)} style={styles.btnIcon} />
          <CustomText
            text={
              item?.contract_type?.default_name +
              ' | ' +
              item?.career_level?.default_name +
              ' | ' +
              item?.category_name?.default_name
            }
            textStyle={styles.jobBottomTxt}
          />
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
const Explore = ({navigation}: Props) => {
  const {allJobs, helpersJobs, loadinJobs} = useSelector(
    (state: any) => state.jobs,
  );
  const {allCities, contractTypes, careerLevel} = useSelector(
    (state: any) => state.helpers,
  );
  const dispatch = useDispatch<AppDispatch>();
  const [expanded, setExpanded] = useState(false);
  const [filterdcount, setfilterdcount] = useState(0);
  const [openSheet, SetOpenSheet] = useState(false);
  // Pagination

  const Optionsdata = [
    {
      id: '1',
      title: 'Workplace',
      title2: 'contract_type',
      options: [...contractTypes],
    },
    {
      id: '3',
      title: 'City',
      title2: 'city',
      options: [...allCities],
    },
    {
      id: '5',
      title: 'Career Level',
      title2: 'career_level',
      options: [...careerLevel],
    },
  ];
  // ---------------------------filter-----------------------
  const [myfilterData, setMyfilterData] = useState({});

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
  const FilterJobs = () => {
    const paramsdata = {
      filterdata: {
        ...myfilterData,
      },
    };
    console.log('paramsdata======', paramsdata);
    dispatch(SearchJobs(paramsdata))
      .unwrap()
      .then(() => {
        SetOpenSheet(false);
      })
      .catch(err => {
        Toast.show({
          text2: err,
          type: 'error',
          text1: 'ERROR',
        });
      });
  };

  useEffect(() => {
    dispatch(getAllHelperJobs());
  }, []);

  useFocusEffect(
    useCallback(() => {
      dispatch(SearchJobs());
    }, []),
  );
  return (
    <AppScreenContainer>
      {/* <AppHeader arrowBack={true} title="Search jobs" /> */}
      <ScrollView contentContainerStyle={styles.container}>
        {/* Section2 Filter */}
        <TouchableOpacity
          onPress={() => SetOpenSheet(true)}
          style={styles.filterBottm}>
          <Filte width={wp(5.5)} height={hp(4)} />
        </TouchableOpacity>
        <CustomBottomSheet
          isOpen={openSheet}
          height={hp(80)}
          onClose={() => SetOpenSheet(false)}
          children={
            <ScrollView contentContainerStyle={styles.buttomSheetScroll}>
              <View style={styles.FilterBox}>
                <View
                  style={[styles.filtersSections, generalStyles.rowBetween]}>
                  <CustomText
                    text={filterdcount + ' Filters'}
                    textStyle={styles.filtersText}
                  />
                  <TouchableOpacity onPress={() => setExpanded(false)}>
                    <CustomText
                      text="Clear all filters"
                      textStyle={styles.PrimaryColor}
                    />
                  </TouchableOpacity>
                </View>
                <FlatList
                  data={Optionsdata}
                  keyExtractor={item => item.id}
                  renderItem={({item, index}) => (
                    <FilterSection
                      item={item}
                      setExpanded={setExpanded}
                      expanded={expanded}
                      setfilterdcount={setfilterdcount}
                      onSelectionChange={handleSelectionChange}
                      filterdcount={filterdcount}
                      myfilterData={myfilterData}
                      index={index}
                    />
                  )}
                />
              </View>
              <Button
                text="done"
                isDisapled={loadinJobs}
                onPress={() => FilterJobs()}
                style={styles.btn}
              />
            </ScrollView>
          }
        />
        {/* Jobs*/}
        {loadinJobs && <Apploader message="loading..." visible={loadinJobs} />}

        {allJobs?.length === 0 ? (
          <View style={styles.noJobs}>
            <CustomText text="No Jobs Founded" textStyle={styles.nottext} />
            <NotFound />
          </View>
        ) : (
          <View>
            <FlatList
              data={allJobs}
              keyExtractor={item => item.code.toString()}
              renderItem={({item}) => (
                <Job navigation={navigation} item={item} />
              )}
            />
          </View>
        )}

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
export default Explore;
