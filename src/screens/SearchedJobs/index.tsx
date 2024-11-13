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
  NotFound,
  UpperArrow2,
} from '../../assets';
import {COLORS, generalStyles, hp, wp} from '../../constants';
import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {QUETIONS} from '../../utils/Data';
import {useDispatch, useSelector} from 'react-redux';
import ScreenNames from '../../navigations/ScreenNames';
import {AppDispatch} from '../../redux/store';
import {getAllHelperJobs, SearchJobs} from '../../redux/slices/JobsSlice';
import Toast from 'react-native-toast-message';

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase, string>;
  item: any;
};
const Job = ({item, navigation}: Props) => {
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(ScreenNames.JobDetails, {
          jobCode: item?.code,
        })
      }
      style={[styles.jobBox, {backgroundColor: item.color}]}>
      <View style={styles.jobTopBox}>
        <View style={generalStyles.row}>
          <View>
            <Image
              source={{uri: item?.company?.company_logo}}
              style={styles.im}
              resizeMode="cover"
            />
          </View>
          <View style={styles.jobTopContent}>
            <View style={generalStyles.rowBetween}>
              <CustomText text={item.title} textStyle={styles.job} />
              <CustomText text={item.since} textStyle={styles.status} />
            </View>
            <View style={[generalStyles.rowBetween, styles.PeriodBox]}>
              <FlatList
                data={item?.job_types?.en}
                horizontal
                contentContainerStyle={styles.Conten}
                renderItem={({item}: any) =>
                  item == 'Full Time' ? (
                    <CustomText
                      text={item.slice(0, 9)}
                      textStyle={[styles.period2]}
                    />
                  ) : item == 'Shift based' ? (
                    <CustomText
                      text={item.slice(0, 9)}
                      textStyle={[styles.period]}
                    />
                  ) : item == 'Part Time' ? (
                    <CustomText
                      text={item.slice(0, 12)}
                      textStyle={[styles.period, styles.period4]}
                    />
                  ) : (
                    <CustomText
                      text={item.slice(0, 12) + '..'}
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
          <View style={generalStyles.row}>
            <Location width={hp(2)} height={hp(2)} style={[styles.btnIcon]} />
            <CustomText
              text={item?.country?.name_en + ' | ' + item?.city?.name_en}
              textStyle={styles.jobBottomTxt}
            />
          </View>
        </View>
        <View style={generalStyles.row}>
          <Cash width={hp(2)} height={hp(2)} style={styles.btnIcon} />
          <CustomText
            text={
              item?.contract_type?.en +
              ' | ' +
              item?.career_level?.en +
              ' | ' +
              item?.category_name?.en
            }
            textStyle={styles.jobBottomTxt}
          />
        </View>
      </View>
    </Pressable>
  );
};
export const FilterSection = ({
  item,
  onSelectionChange,
  index,
  expanded,
  setExpanded,
  setfilterdcount,
  myfilterData,
}: {
  item: any;
  onSelectionChange: (category: string, selectedOptions: string[]) => void;
  index: any;
  expanded: any;
  setExpanded: any;
  setfilterdcount: any;
  filterdcount: any;
  myfilterData: any;
}) => {
  const [FilterOptions, setOptions] = useState<Array<any>>(item.options ?? []);
  const [expanded1, setExpanded1] = useState(false);

  // Toggle selection for individual checkbox
  const toggleCheckbox = (index: number) => {
    setOptions(prevOptions =>
      prevOptions.map((opt: any, i: number) =>
        i === index ? {...opt, selected: !opt.selected} : opt,
      ),
    );
  };
  setfilterdcount(
    myfilterData?.career_level?.length +
      myfilterData?.city?.length +
      myfilterData?.contract_type?.length,
  );
  useEffect(() => {
    const selectedOptions = FilterOptions.filter(opt => opt.selected).map(
      opt => opt.id || opt.code,
    );
    onSelectionChange(item.title2, selectedOptions);
  }, [FilterOptions]);

  useEffect(() => {
    if (!expanded) {
      setOptions(prevOptions =>
        (prevOptions ?? []).map(opt => ({...opt, selected: false})),
      );
      setExpanded1(false);
    }
  }, [expanded1, expanded]);

  return (
    <View>
      <View style={styles.Line} />
      <TouchableOpacity
        style={[styles.filtersSections, generalStyles.rowBetween]}
        onPress={() => {
          setExpanded1(!expanded1);
          setExpanded(true);
        }}>
        <View style={generalStyles.row}>
          <CustomText text={item.title} textStyle={styles.filtersText} />
          <View style={styles.countBox}>
            <CustomText
              text={FilterOptions?.length + ''}
              textStyle={styles.Count}
            />
          </View>
        </View>
        {expanded1 ? <UpperArrow2 /> : <DowenArrow />}
      </TouchableOpacity>
      {expanded1 && expanded ? (
        <FlatList
          data={FilterOptions}
          keyExtractor={(option, index) => index.toString()}
          contentContainerStyle={styles.contencontainer}
          renderItem={({item, index}) => (
            <View style={styles.filterChoices}>
              <Checkbox
                isChecked={item.selected}
                setIsChecked={() => toggleCheckbox(index)}
              />
              <TouchableOpacity onPress={() => toggleCheckbox(index)}>
                <CustomText text={item.name_en} textStyle={styles.ItemText} />
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        ''
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
  const {allJobs, helpersJobs, loadinJobs} = useSelector(
    (state: any) => state.jobs,
  );
  const {allCities} = useSelector((state: any) => state.appdata);
  const [openSheet, SetOpenSheet] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [filterdcount, setfilterdcount] = useState(0);

  // const [Count, SetCount] = useState(0);
  const Optionsdata = [
    {
      id: '1',
      title: 'Workplace',
      title2: 'contract_type',
      options: [...helpersJobs?.contract_type],
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
      options: [...helpersJobs?.career_level],
    },
  ];
  // ---------------------------filter-----------------------
  const [myfilterData, setMyfilterData] = useState({});

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
  const FilterJobs = () => {
    const paramsdata = {
      ...myfilterData,
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
                      index={index}
                      onSelectionChange={handleSelectionChange}
                      expanded={expanded}
                      setExpanded={setExpanded}
                      setfilterdcount={setfilterdcount}
                      filterdcount={filterdcount}
                      myfilterData={myfilterData}
                    />
                  )}
                />
              </View>
              <Button
                text="done"
                isDisapled={loadinJobs}
                disabledBGColor={COLORS.grayLight}
                onPress={() => FilterJobs()}
                style={styles.btn}
              />
            </ScrollView>
          }
        />
        {/* Jobs*/}
        {allJobs?.length === 0 && (
          <View style={styles.noJobs}>
            <CustomText text="No Jobs Founded" textStyle={styles.nottext} />
            <NotFound />
          </View>
        )}
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
