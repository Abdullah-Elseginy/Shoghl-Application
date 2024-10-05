/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  AppHeader,
  AppInput,
  AppScreenContainer,
  Button,
  Checkbox,
  CustomText,
  Dropdown,
} from '../../components';
import {styles} from './styles';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {generalStyles, hp} from '../../constants';
import ScreenNames from '../../navigations/ScreenNames';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {ArrowLeftSVG} from '../../assets';
import {FlatList} from 'react-native-gesture-handler';
import {City} from '../../utils/Data';

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>;
};

const CompleteProfile = ({navigation}: Props) => {
  const countryList = [
    {id: 1, label: 'Saudi Arabia'},
    {id: 2, label: 'India'},
    {id: 3, label: 'Bangladesh'},
    {id: 4, label: 'Pakistan'},
  ];

  const [JopTypes4, SetJopTypes4] = React.useState([
    {id: '1', title: 'Bucher'},
    {id: '2', title: 'Carpenter'},
    {id: '3', title: 'Blacksmith'},
  ]);
  const [SelectedJops, SetSelectedJops] = React.useState([]);
  const [currentSlectedindex, setcurrentSlectedindex] = React.useState(-1);
  const [isSalaryHidden, setIsSalaryHidden] = React.useState(false);
  // DropDwens
  const [openDropdown, setOpenDropdown] = React.useState(null);
  const [selectedLocation, setSelectedLocation] = React.useState('');
  const [selectedCity, setSelectedCity] = React.useState('');
  const handleDropdownOpen = (dropdownId: any) => {
    if (openDropdown === dropdownId) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdownId);
    }
  };
  const hadleAddJobToinput = (index: number, item: any) => {
    SetSelectedJops(prevState => [...prevState, item]);
    SetJopTypes4(prev => prev.filter((_, i) => i !== index));
    setcurrentSlectedindex(index);
  };

  const renderItem6 = ({
    item,
    index,
  }: {
    item: {id: string; title: string};
    index: number;
  }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          hadleAddJobToinput(index, item.title);
        }}
        style={[styles.choise]}>
        <CustomText
          text={`${item.title}\t\t +`}
          textStyle={styles.textSlected}
        />
      </TouchableOpacity>
    );
  };
  return (
    <AppScreenContainer>
      <AppHeader
        title="complete your profile"
        titleStyle={{textAlign: 'center'}}
        leftIcon={<ArrowLeftSVG />}
      />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <CustomText text="Your Profile" textStyle={styles.MainText} />
        <CustomText
          text="Main Step"
          textStyle={[styles.smallTxt, styles.Aling]}
        />

        <CustomText text="your location" textStyle={styles.contentTitle} />
        <Dropdown
          placeholder="Location"
          label="Location"
          value={selectedLocation}
          setValue={setSelectedLocation}
          dropDownStyle={generalStyles.DropBorder}
          list={countryList}
          containerStyle={{
            zIndex: openDropdown === 'dropdown1' ? 10000 : 1,
          }}
          isOpen={openDropdown === 'dropdown1'}
          onDropdownOpen={isOpen =>
            handleDropdownOpen(isOpen ? 'dropdown1' : null)
          }
        />
        <Dropdown
          placeholder="City"
          label="City"
          labelStyle={styles.marginTop}
          value={selectedCity}
          setValue={setSelectedCity}
          dropDownStyle={generalStyles.DropBorder}
          list={City}
          containerStyle={{
            zIndex: openDropdown === 'dropdown2' ? 10000 : 1,
          }}
          isOpen={openDropdown === 'dropdown2'}
          onDropdownOpen={isOpen =>
            handleDropdownOpen(isOpen ? 'dropdown2' : null)
          }
        />
        <CustomText text="contact info" textStyle={styles.contentTitle} />
        <AppInput
          placeholder="mobile number"
          label="mobile number"
          labelStyle={styles.inputLabel}
          containerStyle={styles.inputContainerStyle}
          isNumericKeyboard
          // value={InputValues.phone}
          // onChangeText={(val: any) => {
          //   UpdateInputsVAlue('phone', val);
          // }}
        />
        <CustomText
          text="What Type(S) of job are you open to?"
          textStyle={styles.contentTitle}
          text2={' Add 1 or More'}
          textStyle2={styles.smallTxt}
        />
        <AppInput
          placeholder="Add Your Job Type"
          containerStyle={styles.inputContainerStyle}
          Flatdata={SelectedJops}
          // value={InputValues.jobs}
          // onChangeText={vals => {
          //   UpdateInputsVAlue('jobs', vals);
          // }}
        />
        <CustomText text="suggestion:" textStyle={styles.smallTxt} />
        <FlatList data={JopTypes4} numColumns={2} renderItem={renderItem6} />
        <CustomText
          text="What is the minnuim salary you would accept?"
          textStyle={styles.contentTitle}
          text2={' Add a net salary'}
          textStyle2={styles.smallTxt}
        />
        <View style={[generalStyles.rowBetween, styles.MArgins]}>
          <AppInput
            placeholder="Expected Salary"
            containerStyle={styles.inputContainerStyleSalary}
            appInputStyle={{width: '70%'}}
            isNumericKeyboard
            // value={InputValues.expected_salary}
            // onChangeText={val => {
            //   UpdateInputsVAlue('expected_salary', val);
            // }}
          />
          <CustomText
            text="SAR / Task"
            textStyle={[styles.inputLabel, {textTransform: 'uppercase'}]}
          />
        </View>
        <View style={[generalStyles.rowStart, {marginBottom: hp(1)}]}>
          <Checkbox
            isChecked={isSalaryHidden}
            setIsChecked={setIsSalaryHidden}
          />
          <CustomText text="Hide Minimum salary" textStyle={styles.checkTxt} />
        </View>
        <Button
          text="save"
          onPress={() => {
            // HandleProfile();
            navigation.replace(ScreenNames.Login);
          }}
          style={{marginVertical: hp(3)}}
        />
      </ScrollView>
    </AppScreenContainer>
  );
};

export default CompleteProfile;
