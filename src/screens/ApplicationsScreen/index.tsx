/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {
  Apploader,
  AppScreenContainer,
  CustomText,
  Dropdown,
} from '../../components';
import styles from './style';
import {generalStyles, hp, wp} from '../../constants';
import {
  Add,
  Cash,
  Crown,
  Delate,
  Eye,
  Location,
  Lock,
  Search,
} from '../../assets';
import {JOBS, QUETIONS} from '../../utils/Data';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {getAllApplied} from '../../redux/slices/JobsSlice';
import {useFocusEffect} from '@react-navigation/native';
import ScreenNames from '../../navigations/ScreenNames';

const Quetions = ({item}: any) => {
  return (
    <View style={styles.quetionBox}>
      <CustomText text={item.text} textStyle={styles.filtersText} />
      <Add />
    </View>
  );
};

const Job = ({item, navigation}: any) => {
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(ScreenNames.JobDetails, {
          jobCode: item?.job?.code,
        })
      }
      style={[styles.jobBox, {backgroundColor: item.color}]}>
      <View style={styles.jobTopBox}>
        <View style={generalStyles.row}>
          <Image
            source={{uri: item?.job?.company?.company_logo}}
            style={styles.im}
          />
          <View style={styles.jobTopContent}>
            <View style={generalStyles.rowBetween}>
              <CustomText text={item?.job?.title} textStyle={styles.job} />
              <CustomText text={item?.job?.since} textStyle={styles.status} />
            </View>
            <View style={[generalStyles.rowBetween]}>
              <FlatList
                data={item?.job?.job_types?.en}
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
          <View style={[generalStyles.row, styles.marginT]}>
            <Crown width={hp(2)} height={hp(2)} style={styles.btnIcon} />
            <CustomText
              text={item?.job?.company?.company_name}
              textStyle={styles.jobBottomTxt}
            />
          </View>
          <View style={generalStyles.row}>
            <Location width={hp(2)} height={hp(2)} style={[styles.btnIcon]} />
            <CustomText
              text={
                item?.job?.country?.name_en + ' | ' + item?.job?.city?.name_en
              }
              textStyle={styles.jobBottomTxt}
            />
          </View>
        </View>
        <View style={generalStyles.row}>
          <Cash width={hp(2)} height={hp(2)} style={styles.btnIcon} />
          <CustomText
            text={
              item?.job?.category_name?.en +
              ' | ' +
              item?.job?.career_level?.en +
              ' | ' +
              item?.job?.contract_type?.en
            }
            textStyle={styles.jobBottomTxt}
          />
        </View>
      </View>
    </Pressable>
  );
};
const Applications = ({navigation}: any) => {
  const {appliedJobs, lodingApply} = useSelector((state: any) => state.jobs);
  const dispatch = useDispatch<AppDispatch>();
  const [selected, setSelected] = useState<String>('Application');
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedCountr, setSelectedCountry] = useState('');

  const handleDropdownOpen = (dropdownId: any) => {
    if (openDropdown === dropdownId) {
      setOpenDropdown(null);
      setOpenDropdown(dropdownId);
    }
  };
  const handlePress = (choice: string) => {
    setSelected(choice);
  };
  const GETALLAPPLIED = () => {
    dispatch(getAllApplied());
  };

  useFocusEffect(
    useCallback(() => {
      GETALLAPPLIED();
    }, []),
  );

  console.log('Applied Jobsss------', appliedJobs);

  return (
    <AppScreenContainer style={styles.maincontainer}>
      {/* <AppHeader arrowBack title="Applications" /> */}
      {lodingApply && <Apploader visible={lodingApply} message="loading..." />}
      <View style={styles.container}>
        <View style={styles.MAinheader}>
          <Pressable
            onPress={() => handlePress('Application')}
            style={
              selected == 'Application'
                ? styles.selected
                : styles.applicationBox
            }>
            <CustomText
              text="Application"
              text2={`(${appliedJobs?.length})`}
              textStyle={styles.appication}
            />
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
            <Dropdown
              placeholder="Select Your Country"
              value={selectedCountr}
              setValue={setSelectedCountry}
              dropDownStyle={styles.dropdwon}
              list={[{label: 'KSA', id: '1'}]}
              containerStyle={{
                zIndex: openDropdown === 'dropdown1' ? 10000 : 1,
              }}
              isOpen={openDropdown === 'dropdown1'}
              onDropdownOpen={isOpen =>
                handleDropdownOpen(isOpen ? 'dropdown1' : null)
              }
              schema={{
                label: 'label',
                value: 'id',
              }}
            />
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
                <Eye width={wp(6)} height={hp(3)} />
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
              <Lock width={wp(6)} height={hp(3)} />
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
              data={appliedJobs}
              keyExtractor={item => item?.job?.code}
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
