import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {Apploader, AppScreenContainer, CustomText} from '../../components';
import styles from './styles';
import {COLORS, generalStyles, hp, wp} from '../../constants';
import {Add, Cash, Crown, Delate, Location} from '../../assets';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase, useFocusEffect} from '@react-navigation/native';
import {JOBS3, QUETIONS} from '../../utils/Data';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {getSavedJobs, unSaveJob} from '../../redux/slices/JobsSlice';
import ScreenNames from '../../navigations/ScreenNames';
import Toast from 'react-native-toast-message';
type Props = {
  navigation: NativeStackNavigationProp<ParamListBase, string>;
  item: any;
  UnSaveJob: any;
};

const Job = ({item, navigation, UnSaveJob}: Props) => {
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
          <View style={generalStyles.row}>
            <Crown width={hp(2)} height={hp(2)} style={styles.btnIcon} />
            <CustomText
              text={item?.job?.company?.company_name}
              textStyle={styles.jobBottomTxt}
            />
          </View>
          <View style={generalStyles.row}>
            <Location
              width={hp(2)}
              height={hp(2)}
              style={[styles.btnIcon, styles.LocationIcon]}
            />
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
      <TouchableOpacity
        onPress={() => {
          UnSaveJob(item.job.code);
        }}
        style={styles.unsavebtn}>
        <Delate width={wp(8)} height={hp(3.5)} />
      </TouchableOpacity>
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
//---------------------------API--------------------
const SaveScreen = ({navigation}: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const {SavedJobs, loadinJobs, lodingUnsave} = useSelector(
    (state: any) => state.jobs,
  );
  console.log('------------' + JSON.stringify(SavedJobs));
  const getSAVEDJOBS = () => {
    dispatch(getSavedJobs());
  };

  const UnSaveJob = (code: any) => {
    const job_code = {
      job_code: code,
    };
    dispatch(unSaveJob(job_code))
      .unwrap()
      .then(res => {
        Toast.show({
          text1: 'Success',
          text2: res.message,
          type: 'success',
          visibilityTime: 1500,
        });
        getSAVEDJOBS();
      })
      .catch(err => {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: err,
          position: 'top',
          visibilityTime: 1500,
        });
      });
  };

  useFocusEffect(
    useCallback(() => {
      getSAVEDJOBS();
    }, []),
  );

  return (
    <AppScreenContainer>
      {/* <AppHeader arrowBack={true} title="Saved" /> */}
      {/* {loadinJobs && (
        <Apploader message="loading.." visible={loadinJobs} />
      )} */}
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.contanBox}>
          <FlatList
            data={SavedJobs}
            keyExtractor={item => item?.job?.code}
            renderItem={({item}) => (
              <Job navigation={navigation} item={item} UnSaveJob={UnSaveJob} />
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
    </AppScreenContainer>
  );
};

export default SaveScreen;
