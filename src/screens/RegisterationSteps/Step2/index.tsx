/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppInput, Button, CustomText, Dropdown} from '../../../components';
import {generalStyles} from '../../../constants';
import {styles} from './styles';
import {Nationality, GenderList} from '../../../utils/Data';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import {signUpThreeCorporate} from '../../../redux/slices/authSlice';
import {AppDispatch} from '../../../redux/store';
import {
  getAllCities,
  getAllCountries,
} from '../../../redux/slices/appdataSlice';
const Step2 = ({setCurrentPosition, currentPosition}: any) => {
  const {allCities, allCountries} = useSelector((state: any) => state.appdata);

  // DropDwens
  const dispatch = useDispatch<AppDispatch>();
  const {loading} = useSelector((state: any) => state.auth);
  const [openDropdown, setOpenDropdown] = useState(null); // Track the currently open dropdown
  const [selectedGender, setSelectedGEnder] = useState('');
  const [selectedNationality, setSelectedNationality] = useState<number>();
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleDropdownOpen = (dropdownId: any) => {
    if (openDropdown === dropdownId) {
      setOpenDropdown(null); // Close it if it's already open
    } else {
      setOpenDropdown(dropdownId); // Open the new dropdown
    }
  };

  const [formData, SetformData] = useState({
    first_name: '',
    last_name: '',
    birth_year: '',
    birth_month: '',
    birth_day: '',
    phone: '',
  });

  const [formErrors, setFormErrors] = React.useState({
    first_name: '',
    last_name: '',
    birth_year: '',
    birth_month: '',
    birth_day: '',
    phone: '',
    gendar: '',
    nationality: '',
    country: '',
    city: '',
  });

  const DropDwenValues = {
    gendar: selectedGender,
    nationality: Number(selectedNationality),
    country: selectedCountry,
    city: selectedCity,
  };

  const handleInputChange = (field: string, value: string) => {
    SetformData({...formData, [field]: value});
  };
  const validateForm = () => {
    // setCurrentPosition(2);
    const errors: {[key: string]: string} = {};
    if (!formData.first_name) {
      errors.first_name = 'First Name Required';
    }
    if (!formData.last_name) errors.last_name = 'Last Name Required';
    if (!formData.birth_year) errors.birth_year = 'Year Required';
    if (!formData.birth_month) {
      errors.birth_month = 'Month Required';
    }
    if (!formData.birth_day) {
      errors.birth_day = 'Day Required';
    }
    if (!DropDwenValues.gendar) {
      errors.gendar = 'Gender Required';
    }
    if (!DropDwenValues.nationality) {
      errors.nationality = 'Nationality Required';
    }
    if (!DropDwenValues.country) {
      errors.country = 'Country Required';
    }
    if (!DropDwenValues.city) {
      errors.city = 'City Required';
    }
    if (!formData.phone) {
      errors.phone = 'Phone Required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = () => {
    // setCurrentPosition(2);
    const concatFormData = {...formData, ...DropDwenValues};
    if (validateForm()) {
      dispatch(signUpThreeCorporate(concatFormData))
        .unwrap()
        .then(() => {
          Toast.show({
            text1: 'Success',
            text2: 'Good Step Two Complated',
            type: 'success',
            visibilityTime: 1500,
          });
          setCurrentPosition(2);
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
    }
  };

  const getCities = () => {
    dispatch(getAllCities(187));
  };

  useEffect(() => {
    getCities();
    dispatch(getAllCountries());
  }, []);
  return (
    <>
      {/*Personal Info */}
      <View style={[styles.SectionBox]}>
        <View style={generalStyles.row}>
          <CustomText text="Your Personal Info" textStyle={styles.StepTitle} />
        </View>
        <View style={generalStyles.rowBetween}>
          <View>
            <AppInput
              containerStyle={styles.ContanerInput}
              placeholder="e.g Ahmed"
              label="First Name"
              labelStyle={styles.LapelStyle}
              value={formData.first_name}
              onChangeText={(val: any) => handleInputChange('first_name', val)}
            />
          </View>
          <View>
            <AppInput
              containerStyle={styles.ContanerInput}
              placeholder="e.g Salem"
              label="Last Name"
              labelStyle={styles.LapelStyle}
              value={formData.last_name}
              onChangeText={(val: any) => handleInputChange('last_name', val)}
            />
          </View>
        </View>
        <View style={generalStyles.rowBetween}>
          {formErrors.first_name && (
            <CustomText
              text={formErrors.first_name}
              textStyle={[styles.ErrorMSG, styles.width]}
            />
          )}
          {formErrors.last_name && (
            <CustomText
              text={formErrors.last_name}
              textStyle={[styles.ErrorMSG, styles.width]}
            />
          )}
        </View>
        {/* BirhDay */}
        <View style={generalStyles.rowBetween}>
          <View>
            <AppInput
              containerStyle={styles.ContanerInput2}
              placeholder="Day"
              label="Birthdate"
              maxLength={2}
              isNumericKeyboard
              labelStyle={styles.LapelStyle}
              value={formData.birth_day}
              onChangeText={(val: any) => handleInputChange('birth_day', val)}
            />
          </View>
          <View>
            <AppInput
              containerStyle={styles.ContanerInput2}
              placeholder="Month"
              label=" "
              isNumericKeyboard
              maxLength={2}
              labelStyle={styles.LapelStyle}
              value={formData.birth_month}
              onChangeText={(val: any) => handleInputChange('birth_month', val)}
            />
          </View>
          <View>
            <AppInput
              containerStyle={styles.ContanerInput2}
              placeholder="Year"
              label=" "
              isNumericKeyboard
              maxLength={4}
              labelStyle={styles.LapelStyle}
              value={formData.birth_year}
              onChangeText={(val: any) => handleInputChange('birth_year', val)}
            />
          </View>
        </View>
        <View style={generalStyles.rowBetween}>
          {formErrors.birth_day && (
            <CustomText
              text={formErrors.birth_day}
              textStyle={[styles.ErrorMSG, styles.width2]}
            />
          )}
          {formErrors.birth_month && (
            <CustomText
              text={formErrors.birth_month}
              textStyle={[styles.ErrorMSG, styles.width2]}
            />
          )}
          {formErrors.birth_year && (
            <CustomText
              text={formErrors.birth_year}
              textStyle={[styles.ErrorMSG, styles.width2]}
            />
          )}
        </View>
        {/* Gender and nationalaty */}
        <View style={generalStyles.rowBetween}>
          <View>
            <CustomText
              text="Gender"
              textStyle={[styles.LapelStyle, styles.MArginBtn]}
            />
            <Dropdown
              placeholder="Select Gender"
              value={selectedGender}
              setValue={setSelectedGEnder}
              dropDownStyle={generalStyles.DropBorder2}
              list={GenderList}
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
          <View>
            <CustomText
              text="Nationality"
              textStyle={[styles.LapelStyle, styles.MArginBtn]}
            />
            <Dropdown
              placeholder="Select Nationality"
              value={selectedNationality}
              setValue={setSelectedNationality}
              dropDownStyle={generalStyles.DropBorder2}
              list={Nationality}
              containerStyle={{
                zIndex: openDropdown === 'dropdown2' ? 10000 : 1,
              }}
              isOpen={openDropdown === 'dropdown2'}
              onDropdownOpen={isOpen =>
                handleDropdownOpen(isOpen ? 'dropdown2' : null)
              }
              schema={{
                label: 'label',
                value: 'id',
              }}
            />
          </View>
        </View>
        <View style={generalStyles.rowBetween}>
          {formErrors.gendar && (
            <CustomText
              text={formErrors.gendar}
              textStyle={[styles.ErrorMSG, styles.width]}
            />
          )}
          {formErrors.nationality && (
            <CustomText
              text={formErrors.nationality}
              textStyle={[styles.ErrorMSG, styles.width]}
            />
          )}
        </View>
      </View>
      {/* Location */}
      <View style={styles.SectionBox}>
        <View style={generalStyles.row}>
          <CustomText text="Your Location" textStyle={styles.StepTitle} />
        </View>
        <View style={generalStyles.rowBetween}>
          <View>
            <CustomText
              text="Country"
              textStyle={[styles.LapelStyle, styles.MArginBtn]}
            />
            <Dropdown
              placeholder="Select Country"
              value={selectedCountry}
              setValue={setSelectedCountry}
              dropDownStyle={generalStyles.DropBorder2}
              list={allCountries}
              containerStyle={{
                zIndex: openDropdown === 'dropdown3' ? 10000 : 1,
              }}
              isOpen={openDropdown === 'dropdown3'}
              onDropdownOpen={isOpen =>
                handleDropdownOpen(isOpen ? 'dropdown3' : null)
              }
              schema={{
                label: 'name_en',
                value: 'id',
              }}
            />
          </View>
          <View>
            <CustomText
              text="City"
              textStyle={[styles.LapelStyle, styles.MArginBtn]}
            />
            <Dropdown
              placeholder="Select Country"
              value={selectedCity}
              setValue={setSelectedCity}
              dropDownStyle={generalStyles.DropBorder2}
              list={allCities}
              containerStyle={{
                zIndex: openDropdown === 'dropdown4' ? 10000 : 1,
              }}
              isOpen={openDropdown === 'dropdown4'}
              onDropdownOpen={isOpen =>
                handleDropdownOpen(isOpen ? 'dropdown4' : null)
              }
              schema={{
                label: 'name_en',
                value: 'id',
              }}
            />
          </View>
        </View>
        <View style={generalStyles.rowBetween}>
          {formErrors.country && (
            <CustomText
              text={formErrors.country}
              textStyle={[styles.ErrorMSG, styles.width]}
            />
          )}
          {formErrors.city && (
            <CustomText
              text={formErrors.city}
              textStyle={[styles.ErrorMSG, styles.width]}
            />
          )}
        </View>
      </View>
      <View style={styles.SectionBox}>
        <View style={generalStyles.row}>
          <CustomText text="Contact Info" textStyle={styles.StepTitle} />
        </View>
        <AppInput
          containerStyle={styles.ContanerInput3}
          placeholder="01557888124"
          label="Mobile Number"
          labelStyle={styles.LapelStyle}
          value={formData.phone}
          onChangeText={val => handleInputChange('phone', val)}
          isNumericKeyboard
        />
        {formErrors.phone && (
          <CustomText text={formErrors.phone} textStyle={styles.ErrorMSG} />
        )}
      </View>
      <Button
        text={currentPosition === 2 ? 'Finsh' : 'Next'}
        onPress={() => {
          handleSubmit();
        }}
        loading={loading}
        style={styles.Bottom}
      />
      {currentPosition === 1 || currentPosition === 2 ? (
        <Button
          text={'Back'}
          onPress={() => {
            setCurrentPosition((pre: any) => pre - 1);
          }}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default Step2;
