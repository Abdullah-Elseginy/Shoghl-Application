/* eslint-disable curly */
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
import {FlatList} from 'react-native-gesture-handler';
import {City} from '../../utils/Data';
import {useDispatch, useSelector} from 'react-redux';
import {signUpTwo} from '../../redux/slices/authSlice';
import Toast from 'react-native-toast-message';
import {AppDispatch} from '../../redux/store';

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>;
};

const CompleteProfile = ({navigation}: Props) => {
  const countryList = [{id: 1, label: 'Saudi Arabia'}];
  const dispatch = useDispatch<AppDispatch>();
  const {userCode, loading} = useSelector((state: any) => state.auth);

  const [JopTypes4, SetJopTypes4] = React.useState([
    {id: '1', title: 'Bucher'},
    {id: '2', title: 'Carpenter'},
    {id: '3', title: 'Blacksmith'},
  ]);
  const [SelectedJops, SetSelectedJops] = React.useState([]);
  const [currentSlectedindex, setcurrentSlectedindex] = React.useState(-1);
  const [isSalaryHidden, setIsSalaryHidden] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState(null);
  const [selectedLocation, setSelectedLocation] = React.useState('');
  const [selectedCity, setSelectedCity] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [expectedSalary, setExpectedSalary] = React.useState('');
  const [errors, setErrors] = React.useState<any>({});
  const [countryID] = React.useState(1);

  // Handles dropdown open/close state
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

  // Validate inputs
  const validateFields = () => {
    let newErrors: any = {};
    if (!selectedLocation) newErrors.selectedLocation = 'Location is required';
    if (!selectedCity) newErrors.selectedCity = 'City is required';
    // if (!phone) newErrors.phone = 'Phone number is required';
    // else if (!/^\d+$/.test(phone))
    //   newErrors.phone = 'Phone number must be numeric';
    if (SelectedJops.length === 0)
      newErrors.SelectedJops = 'Please add at least one job type';
    if (!expectedSalary)
      newErrors.expectedSalary = 'Expected salary is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlesubmit = () => {
    if (validateFields()) {
      const data = {
        user_code: userCode,
        country: countryID,
        city: 2,
        phone: phone,
        expected_salary: Number(expectedSalary),
        hide_salary: isSalaryHidden ? 'yes' : 'no',
        jobs: JSON.stringify(SelectedJops),
      };
      dispatch(signUpTwo(data))
        .unwrap()
        .then((res: any) => {
          console.log('ressignUpTwo=', res);
          Toast.show({
            text1: 'Success',
            text2: 'Registration successful',
            type: 'success',
          });
          navigation.replace(ScreenNames.Login);
        })
        .catch((err: any) => {
          Toast.show({
            text1: 'Error',
            text2: err,
            type: 'error',
          });
          console.log('signUpTwo error ', err);
        });
    }
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
        arrowBack={true}
      />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <CustomText text="Your Profile" textStyle={styles.MainText} />
        <CustomText
          text="Main Step"
          textStyle={[styles.smallTxt, styles.Aling]}
        />
        {/* Location Dropdown */}
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
        {errors.selectedLocation && (
          <CustomText
            text={errors.selectedLocation}
            textStyle={generalStyles.errortxt}
          />
        )}
        {/* City Dropdown */}
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
        {errors.selectedCity && (
          <CustomText
            text={errors.selectedCity}
            textStyle={generalStyles.errortxt}
          />
        )}
        {/* Mobile Number Input */}
        {/* <CustomText text="contact info" textStyle={styles.contentTitle} />
        <View>
          <AppInput
            placeholder="mobile number"
            label="mobile number"
            labelStyle={styles.inputLabel}
            containerStyle={styles.inputContainerStyle}
            isNumericKeyboard
            value={phone}
            onChangeText={(val: any) => setPhone(val)}
          />
          {errors.phone && (
            <CustomText
              text={errors.phone}
              textStyle={generalStyles.errortxt}
            />
          )}
        </View> */}
        {/* Job Type Input */}
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
          setFlatData={SetSelectedJops}
          setDelatedToJobTypesAgain={SetJopTypes4}
        />
        {errors.SelectedJops && (
          <CustomText
            text={errors.SelectedJops}
            textStyle={generalStyles.errortxt}
          />
        )}
        {/* Job Suggestions */}
        <CustomText text="suggestion:" textStyle={styles.smallTxt} />
        <FlatList data={JopTypes4} numColumns={2} renderItem={renderItem6} />
        {/* Salary Input */}
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
            value={expectedSalary}
            onChangeText={val => setExpectedSalary(val)}
          />
          <CustomText
            text="SAR / Task"
            textStyle={[styles.inputLabel, {textTransform: 'uppercase'}]}
          />
        </View>
        {errors.expectedSalary && (
          <CustomText
            text={errors.expectedSalary}
            textStyle={generalStyles.errortxt}
          />
        )}
        {/* Hide Salary Checkbox */}
        <View style={[generalStyles.rowStart, {marginTop: hp(2)}]}>
          <Checkbox
            isChecked={isSalaryHidden}
            setIsChecked={setIsSalaryHidden}
          />
          <CustomText text="Hide Minimum salary" textStyle={styles.checkTxt} />
        </View>
        {/* Submit Button */}
        {/* <CustomText text={error} textStyle={generalStyles.errortxt} /> */}
        <Button
          text="save"
          loading={loading}
          onPress={handlesubmit}
          style={{marginVertical: hp(3)}}
        />
      </ScrollView>
    </AppScreenContainer>
  );
};

export default CompleteProfile;
