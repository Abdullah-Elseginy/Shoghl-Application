/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  AppInput,
  Apploader,
  AppScreenContainer,
  Button,
  CustomModal,
  CustomText,
  Dropdown,
} from '../../components';
import {styles} from './styles';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {Cash, Crown, Help, Location, Riyadh, UploadDoc} from '../../assets';
import {generalStyles, hp, wp} from '../../constants';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {CAREERLEVEL, HOWITWORK, JOBSHOME, PARTENERS} from '../../utils/Data';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {
  getAllHelperJobs,
  getCategoryWithSearch,
  SearchJobs,
} from '../../redux/slices/JobsSlice';
import Toast from 'react-native-toast-message';
import ScreenNames from '../../navigations/ScreenNames';
import {getAllCities} from '../../redux/slices/helpersSlice';
import {
  getHomeCities,
  getParteners,
  getRecentJobs,
} from '../../redux/slices/appdataSlice';

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>;
};

const HomeScreen = ({navigation}: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const {loadinJobs, allCategories} = useSelector((state: any) => state.jobs);
  console.log('allCategories--' + JSON.stringify(allCategories));
  const {allCities} = useSelector((state: any) => state.helpers);
  const {homeCities, parteners, recentJobs} = useSelector(
    (state: any) => state.appdata,
  );
  console.log('recentJobs' + recentJobs);
  const [city, setCity] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [CategoryVal, setCategoryVal] = React.useState('');
  const [modalVisible, SetModalVisable] = React.useState(true);

  const HowItWork = ({item}: any) => {
    return (
      <View style={styles.HowItWorkBox}>
        {item.imag}
        <CustomText textStyle={styles.job} text={item.title} />
        <CustomText
          textStyle={[styles.sectionSubTitle, styles.HIWContentText]}
          text={item.content}
        />
      </View>
    );
  };

  const Job = ({item}: any) => {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate(ScreenNames.JobDetails, {jobCode: '400'});
        }}
        style={styles.jobBox}>
        <View style={styles.jobTopBox}>
          <View style={generalStyles.row}>
            <Image
              source={{
                uri:
                  item?.company_logo ||
                  'https://images.unsplash.com/photo-1619454016518-697bc231e7cb?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              }}
              style={styles.im2}
            />
            <View style={styles.jobTopContent}>
              <CustomText
                text={item?.career_level?.default_name || 'Telimed'}
                textStyle={styles.status}
              />
              <CustomText
                text={item?.title || 'electcian'}
                textStyle={styles.job}
              />
              <CustomText
                text={item.period || 'full time'}
                textStyle={styles.period}
              />
            </View>
          </View>
        </View>
        <View style={styles.jobBottomBox}>
          <View style={[generalStyles.rowBetween, styles.JobButtomBox2]}>
            <View style={generalStyles.row}>
              <Crown width={hp(2)} height={hp(2)} style={styles.btnIcon} />
              <CustomText
                text={item?.category?.default_name || 'Telemid'}
                textStyle={styles.jobBottomTxt}
              />
            </View>
            <View style={generalStyles.row}>
              <Location width={hp(2)} height={hp(2)} style={[styles.btnIcon]} />
              <CustomText
                text={
                  item?.country?.names?.en + ',' + item?.city?.names?.en ||
                  'france,paris'
                }
                textStyle={styles.jobBottomTxt}
              />
            </View>
          </View>
          <View style={generalStyles.row}>
            <Cash width={hp(2)} height={hp(2)} style={styles.btnIcon} />
            <CustomText
              text={
                item?.salary_from +
                  ' -' +
                  item.salary_to +
                  ' ' +
                  item?.salary_currency?.default_name || '30.0000-50.0000 $'
              }
              textStyle={styles.jobBottomTxt}
            />
          </View>
        </View>
      </Pressable>
    );
  };

  const Parteners = ({item}: any) => {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate(ScreenNames.CompanyProfile);
        }}>
        <Image
          source={{
            uri:
              item?.company_logo ||
              'https://images.unsplash.com/photo-1619454016518-697bc231e7cb?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.im}
        />
      </Pressable>
    );
  };

  const CareerLevels = ({item}: any) => {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate(ScreenNames.ComplateCompanyProfile);
        }}
        style={styles.SearchByCareer}>
        {item.imag}
        <CustomText
          text={item.title}
          textStyle={[styles.CareerLevelTitle, styles.sectionSubTitle]}
        />
      </Pressable>
    );
  };

  const BrowesLocation = ({item, SerchJobs}: any) => {
    return (
      <Pressable
        onPress={() => {
          SerchJobs(item.code);
        }}
        style={styles.SearchByLocation}>
        <Riyadh width={'50%'} />
        <CustomText
          text={item.default_name}
          textStyle={styles.BrowseLocationTitle}
        />
      </Pressable>
    );
  };

  const ModalContent = () => {
    return (
      <>
        {/* Step 1 */}
        <View style={styles.stepContainer}>
          <View style={styles.stepNumber}>
            <CustomText text="1" textStyle={styles.stepText} />
          </View>
          <View style={styles.stepInfo}>
            <CustomText
              text="Confirm your email address"
              textStyle={styles.stepTitle}
            />
            <CustomText
              text="An email confirmation has been sent to"
              textStyle={styles.stepSubtitle}
            />
            <CustomText
              textStyle={styles.email}
              text="infinitySolution1@gmail.com"
            />
            <TouchableOpacity>
              <CustomText
                textStyle={styles.resend}
                text="Resend Confirmation email"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Step 2 */}
        <View style={styles.stepContainer}>
          <View style={styles.stepNumber}>
            <CustomText textStyle={styles.stepText} text="2" />
          </View>
          <View style={styles.stepInfo}>
            <CustomText
              textStyle={styles.stepTitle}
              text="Add your Company Tax Card or Commercial Register."
            />
            <CustomText
              textStyle={styles.stepSubtitle}
              text="In order to approve your company account, we need your Tax Card or your Commercial Registration Document."
            />
            <TouchableOpacity>
              <CustomText
                text="Why do we need these documents?"
                textStyle={styles.whyText}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.uploadButton}>
              <UploadDoc width={wp(5)} height={hp(3)} />
              <CustomText
                text="Upload Documents"
                textStyle={styles.uploadText}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Skip For Now */}
        <View style={generalStyles.rowBetween}>
          <TouchableOpacity style={styles.helpCenter}>
            <Help width={wp(5)} height={hp(3)} />
            <CustomText text="Help Center" textStyle={styles.helpCenterText} />
          </TouchableOpacity>
          <Button
            text="Skip For Now"
            style={styles.skipButton}
            onPress={() => SetModalVisable(false)}
          />
        </View>
      </>
    );
  };
  // const [formErrors, setFormErrors] = React.useState({
  //   search: '',
  // });
  // const validateForm = () => {
  //   const errors: {[key: string]: string} = {};
  //   if (!city?.length && !CategoryVal?.length && !title?.length) {
  //     errors.search = 'Select at least one to search ';
  //   }
  //   setFormErrors(errors);
  //   return Object.keys(errors).length === 0;
  // };
  const ClearInputs = () => {
    setCity('');
    setTitle('');
    setCategoryVal('');
  };
  // ----------------------------APIs-----------------------------------------
  const SerchJobs = (cityCode: any) => {
    const paramsdata = {
      title: title,
      city: (city && [city]) || (cityCode && [cityCode]),
      category: CategoryVal,
    };
    // if (!validateForm()) {
    dispatch(SearchJobs(paramsdata))
      .unwrap()
      .then(() => {
        navigation.navigate(ScreenNames.SearchedJobs);
        ClearInputs();
      })
      .catch(err => {
        Toast.show({
          text2: err,
          type: 'error',
          text1: 'ERROR',
        });
      });
    // }
  };

  const getMyHomeCities = () => {
    const date = {
      lang: 'en',
    };
    dispatch(getHomeCities(date));
  };
  React.useEffect(() => {
    if (
      !allCities &&
      !homeCities &&
      !allCategories &&
      !parteners &&
      !recentJobs
    ) {
      dispatch(getAllCities(1));
      getMyHomeCities();
      dispatch(getCategoryWithSearch());
      dispatch(getParteners());
      dispatch(getRecentJobs());
    }
  }, []);

  const MemoCities = React.useMemo(() => allCities || [], [allCities]);
  return (
    <AppScreenContainer style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        {loadinJobs && <Apploader />}
        <View style={styles.SearchBox}>
          <CustomText text="find job" textStyle={styles.sectionTitle} />
          <CustomText
            text="Hire Experts or be hired in sales & marketing"
            textStyle={styles.sectionSubTitle}
          />
          <AppInput
            placeholder="Job Tittle, Skill, Industry"
            appInputStyle={styles.containerStyle}
            value={title}
            onChangeText={val => setTitle(val)}
          />
          <Dropdown
            placeholder="City"
            value={city}
            onChangeValue={(value: any) => setCity(value.code)}
            list={MemoCities}
          />
          <View style={styles.categoryBox}>
            <Dropdown
              placeholder="Category"
              value={CategoryVal}
              onChangeValue={(value: any) => setCategoryVal(value.code)}
              list={allCategories}
              search
              schema={{
                label: 'name_en',
                value: 'code',
              }}
            />
          </View>

          <Button
            isDisapled={loadinJobs}
            text="search"
            style={styles.btn}
            onPress={() => SerchJobs(null)}
          />
          {/* {formErrors.search && (
            <CustomText text={formErrors.search} textStyle={styles.ErrorMSG} />
          )} */}
        </View>
        <View style={styles.HowItWorkSection}>
          <CustomText text="Recent Jobs" textStyle={styles.sectionTitle} />
        </View>
        <FlatList
          data={recentJobs}
          horizontal={true}
          keyExtractor={item => item.code.toString()}
          renderItem={({item}) => <Job item={item} />}
        />
        <Button text="show more jobs" style={styles.btn} onPress={() => null} />
        {/* How it Work Section */}
        <View>
          <View style={styles.HowItWorkSection}>
            <CustomText text="How it works?" textStyle={styles.sectionTitle} />
            <CustomText
              text="Shoghl helps you achieve your goals!"
              textStyle={styles.sectionSubTitle}
            />
          </View>
          <FlatList
            horizontal={true}
            data={HOWITWORK}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <HowItWork item={item} />}
          />
        </View>
        {/* Global Parteners */}
        <View>
          <View style={styles.HowItWorkSection}>
            <CustomText
              text="Global partners that trusted us"
              textStyle={styles.sectionTitle}
            />
          </View>
          <FlatList
            horizontal={true}
            data={parteners}
            keyExtractor={item => item.code.toString()}
            renderItem={({item}) => <Parteners item={item} />}
          />
        </View>
        {/*browes career level */}
        <View style={styles.careerSearchSection}>
          <CustomText
            text="Browse Jobs by Career Level"
            textStyle={[styles.sectionTitle, styles.BrowseJobbyCareerLevel]}
          />
        </View>
        <View>
          <FlatList
            horizontal={true}
            data={CAREERLEVEL}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <CareerLevels item={item} />}
          />
        </View>
        {/* Browse Jobs By location */}
        <View>
          <View style={styles.HowItWorkSection}>
            <CustomText
              text="Browse Jobs by Career Location"
              textStyle={[
                styles.sectionTitle,
                styles.BrowseJobsbCareerLocation,
              ]}
            />
          </View>
          <View style={styles.SearchLocationContainer}>
            <FlatList
              horizontal
              data={homeCities}
              keyExtractor={item => item.code?.toString()}
              renderItem={({item}) => (
                <BrowesLocation item={item} SerchJobs={SerchJobs} />
              )}
            />
          </View>
          <Button text="show more" style={styles.btn} onPress={() => null} />
        </View>
      </ScrollView>
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={() => SetModalVisable(prev => !prev)}
        title="You are almost done!"
        subtitle="Complete these two simple steps to publish your first job post."
        closeIcon={true}
        children={<ModalContent />}
      />
    </AppScreenContainer>
  );
};

export default HomeScreen;
