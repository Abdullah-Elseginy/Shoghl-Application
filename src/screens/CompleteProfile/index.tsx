/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { AppHeader, AppInput, AppScreenContainer, Button, Checkbox, CustomText, Dropdown } from '../../components';
import { styles } from './styles';
import { ScrollView, View } from 'react-native';
import { generalStyles, hp } from '../../constants';
import ScreenNames from '../../navigations/ScreenNames';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>;
};

const CompleteProfile = ({ navigation }: Props) => {
  const genderList = [{ id: 1, label: 'male' }, { id: 2, label: 'female' }];
  const nationalityList = [{ id: 1, label: 'Saudi' }, { id: 2, label: 'Hindi' }, { id: 3, label: 'Bangladeshi' }, { id: 4, label: 'Pakistani' }];
  const countryList = [{ id: 1, label: 'Saudi Arabia' }, { id: 2, label: 'India' }, { id: 3, label: 'Bangladesh' }, { id: 4, label: 'Pakistan' }];
  const cityList = [{ id: 1, label: 'alex' }, { id: 2, label: 'cairo' }];

  const [gender, setGender] = React.useState(null);
  const [nationality, setNationality] = React.useState(null);
  const [country, setCountry] = React.useState(null);
  const [city, setCity] = React.useState(null);
  const [isSalaryHidden, setIsSalaryHidden] = React.useState(false);
  console.log(gender);

  return (
    <AppScreenContainer>
      <AppHeader title="complete your profile" titleStyle={{ textAlign: 'center' }} />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <CustomText text="your personal info" textStyle={styles.contentTitle} />
        <AppInput placeholder="First Name" label="First Name" labelStyle={styles.inputLabel} containerStyle={styles.inputContainerStyle} />
        <AppInput placeholder="Last Name" label="Last Name" labelStyle={styles.inputLabel} containerStyle={styles.inputContainerStyle} />
        <View style={[generalStyles.rowBetween, { alignItems: 'flex-end' }]}>
          <AppInput placeholder="Day" label="Birthday" labelStyle={styles.inputLabel} appInputStyle={styles.birthContainerStyle} isNumericKeyboard />
          <AppInput placeholder="Month" appInputStyle={styles.birthContainerStyle} isNumericKeyboard />
          <AppInput placeholder="Year" appInputStyle={styles.birthContainerStyle} isNumericKeyboard />
        </View>
        <Dropdown placeholder={'choose an option'} list={genderList} label={'gender'} value={gender} setValue={setGender} dropDownStyle={styles.inputContainerStyle} />
        <Dropdown placeholder={'choose an option'} list={nationalityList} label={'nationality'} value={nationality} setValue={setNationality} dropDownStyle={styles.inputContainerStyle} />
        <CustomText text="your location" textStyle={styles.contentTitle} />
        <Dropdown placeholder={'choose an option'} list={countryList} label={'country'} value={country} setValue={setCountry} dropDownStyle={styles.inputContainerStyle} />
        <Dropdown placeholder={'choose an option'} list={cityList} label={'city'} value={city} setValue={setCity} dropDownStyle={styles.inputContainerStyle} />
        <CustomText text="contact info" textStyle={styles.contentTitle} />
        <AppInput placeholder="mobile number" label="mobile number" labelStyle={styles.inputLabel} containerStyle={styles.inputContainerStyle} isNumericKeyboard />
        <CustomText text="What Type(S) of job are you open to?" textStyle={styles.contentTitle} text2={' Add 1 or More'} textStyle2={styles.smallTxt} />
        <AppInput placeholder="Add Your Job Type" containerStyle={styles.inputContainerStyle} />
        <CustomText text="What is the minnuim salary you would accept?" textStyle={styles.contentTitle} text2={' Add a net salary'} textStyle2={styles.smallTxt} />
        <View style={[generalStyles.rowBetween, styles.inputContainerStyle]}>
          <AppInput placeholder="Expected Salary" appInputStyle={{ width: '70%' }} isNumericKeyboard />
          <CustomText text="SAR / Task" textStyle={[styles.inputLabel, { textTransform: 'uppercase' }]} />
        </View>
        <View style={[generalStyles.rowStart, { marginBottom: hp(1) }]}>
          <Checkbox isChecked={isSalaryHidden} setIsChecked={setIsSalaryHidden} />
          <CustomText text="Hide Minimum salary" textStyle={styles.checkTxt} />
        </View>
        <Button text="save" onPress={() => navigation.replace(ScreenNames.BottomTabs)} style={{ marginVertical: hp(3) }} />
      </ScrollView>
    </AppScreenContainer>
  );
};

export default CompleteProfile;
