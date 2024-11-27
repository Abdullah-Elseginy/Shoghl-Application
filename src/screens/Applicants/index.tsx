import * as React from 'react';
import {
  Apploader,
  AppScreenContainer,
  Button,
  Checkbox,
  CustomBottomSheet,
  CustomText,
} from '../../components';
import {styles} from './styles';
import {FlatList, ScrollView, TouchableOpacity, View} from 'react-native';
import {Optionsdata} from '../../utils/Data';
import {generalStyles, hp, wp} from '../../constants';
import {useState} from 'react';
import {
  DowenArrow,
  Filte,
  JobTitle,
  Location,
  NotFound,
  Skills,
  UpperArrow2,
} from '../../assets';
import ScreenNames from '../../navigations/ScreenNames';
import {useDispatch, useSelector} from 'react-redux';
import {
  getAllAppliedUsers,
  getCvsDetailsShowUserProfile,
} from '../../redux/slices/JobsSlice';
import {useFocusEffect} from '@react-navigation/native';
import {AppDispatch} from '../../redux/store';
import Toast from 'react-native-toast-message';
const applicantsItems = ({item, getUserCVDetails}: any) => (
  <TouchableOpacity
    onPress={() => {
      getUserCVDetails(item.code);
    }}
    activeOpacity={0.5}
    style={styles.CardBox}>
    <View style={styles.nameBox}>
      <CustomText text={item.name} textStyle={[styles.name]} />
    </View>
    <View style={styles.SkillsBox}>
      <JobTitle width={wp(6)} height={hp(2.5)} />
      <CustomText
        text={item.job_titles?.default_name?.join(' | ') || 'no job title '}
        textStyle={styles.title}
      />
    </View>
    <View style={styles.SkillsBox}>
      <Skills width={wp(6)} height={hp(2.5)} />
      <CustomText text={item.job_titles?.toString() || 'no job titles '} />
    </View>
    <View style={styles.SkillsBox}>
      <Location width={wp(6)} height={hp(2.5)} />
      <CustomText text={item?.country_name?.en + ',' + item?.city_name?.en} />
    </View>
  </TouchableOpacity>
);

const FilterSection = ({
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
  React.useEffect(() => {
    const selectedOptions = FilterOptions.filter(opt => opt.selected).map(
      opt => opt.id || opt.code,
    );
    onSelectionChange(item.title2, selectedOptions);
  }, [FilterOptions]);

  React.useEffect(() => {
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
                <CustomText text={item.label} textStyle={styles.ItemText} />
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

const Applicants = ({navigation}: any) => {
  const {loadinJobs, aplliedUsers} = useSelector((state: any) => state.jobs);
  const dispatch = useDispatch<AppDispatch>();
  // ----------Filter ------------------
  const [openSheet, SetOpenSheet] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [filterdcount, setfilterdcount] = useState(0);
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

  const getUserCVDetails = (code: any) => {
    const userCode = {
      code: code,
    };
    dispatch(getCvsDetailsShowUserProfile(userCode))
      .unwrap()
      .then(() => {
        navigation.navigate(ScreenNames.CVProfile);
      })
      .catch(() => {
        Toast.show({
          text2: 'Failed to fetch CV details',
          text1: 'Error',
          type: 'error',
        });
      });
  };

  useFocusEffect(
    React.useCallback(() => {
      dispatch(getAllAppliedUsers());
    }, []),
  );

  return (
    <AppScreenContainer style={styles.container}>
      {loadinJobs && <Apploader message="loading.." visible={loadinJobs} />}
      <ScrollView>
        <TouchableOpacity
          onPress={() => SetOpenSheet(true)}
          style={styles.filterBottm}>
          <Filte width={wp(5.5)} height={hp(4)} />
        </TouchableOpacity>
        {aplliedUsers?.length == 0 && (
          <View style={styles.noJobs}>
            <CustomText
              text="No Applicants Founded"
              textStyle={styles.nottext}
            />
            <NotFound />
          </View>
        )}
        <FlatList
          data={aplliedUsers}
          keyExtractor={item => item.code}
          renderItem={({item}) =>
            applicantsItems({item, navigation, getUserCVDetails})
          }
        />

        {/* Fitlter */}
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
              <Button text="done" onPress={() => null} style={styles.btn} />
            </ScrollView>
          }
        />
      </ScrollView>
    </AppScreenContainer>
  );
};

export default Applicants;
