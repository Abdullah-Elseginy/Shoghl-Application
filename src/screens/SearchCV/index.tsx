import {ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import {
  AppHeader,
  AppInput,
  Apploader,
  AppScreenContainer,
  Button,
  CustomText,
} from '../../components';
import {styles} from './styles';
import {generalStyles, hp, wp} from '../../constants';
import {Search, Tips} from '../../assets';
import ScreenNames from '../../navigations/ScreenNames';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {getSearchedCVs} from '../../redux/slices/JobsSlice';
import Toast from 'react-native-toast-message';

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase, string>;
};

const SearchCV = ({navigation}: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const {loadinJobs} = useSelector((state: any) => state.jobs);
  const [JobTitle, setJobTitle] = useState('');
  const [error, setError] = useState('');

  const GETCVs = () => {
    // Validate the input
    if (!JobTitle.trim()) {
      setError('Please enter a job title.');
      return;
    }
    setError('');

    const dataForSearch = {
      job_title: JobTitle?.toLocaleLowerCase(),
    };

    dispatch(getSearchedCVs(dataForSearch))
      .unwrap()
      .then(() => {
        navigation.navigate(ScreenNames.ComplateSearchedCv, {
          searchVal: JobTitle,
        });
      })
      .catch(() => {
        Toast.show({
          text1: 'Error',
          text2: 'Failed to get CVs',
          type: 'error',
          position: 'top',
          visibilityTime: 3000,
        });
      });
  };

  return (
    <AppScreenContainer style={styles.container}>
      <AppHeader arrowBack={true} title="Search CV" />
      {loadinJobs && <Apploader message="loading.." visible={loadinJobs} />}
      <ScrollView>
        <View style={styles.MainHeader}>
          <CustomText
            text="Search Candidates CVs"
            textStyle={styles.headerTExt}
          />
          <View style={generalStyles.rowCenter}>
            <Tips width={wp(5)} height={hp(2.5)} />
            <CustomText
              text="Tips for better search"
              textStyle={styles.SupTExt}
            />
          </View>
        </View>
        {/* padding View */}
        <View style={styles.SeconBox}>
          <AppInput
            containerStyle={styles.InputSearch}
            leftIcon={<Search width={wp(5)} height={hp(3)} />}
            placeholder="Search by job title"
            rightIcon={
              <Button
                text="Search"
                style={styles.Serxhbtn}
                onPress={() => {
                  GETCVs();
                }}
              />
            }
            value={JobTitle}
            onChangeText={val => setJobTitle(val)}
          />
          {/* Error message */}
          {error ? (
            <CustomText text={error} textStyle={styles.errorText} />
          ) : null}
        </View>
      </ScrollView>
    </AppScreenContainer>
  );
};

export default SearchCV;
