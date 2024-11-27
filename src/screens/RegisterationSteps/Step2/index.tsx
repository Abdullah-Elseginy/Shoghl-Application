/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, CustomText, Dropdown} from '../../../components';
import {generalStyles} from '../../../constants';
import {styles} from './styles';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import {signUpThreeCorporate} from '../../../redux/slices/authSlice';
import {AppDispatch} from '../../../redux/store';
import {
  getAllCities,
  getAllCountries,
} from '../../../redux/slices/helpersSlice';
import {month, Monthdays, yearOptions} from '../../../utils/Data';
const Step2 = ({setCurrentPosition, currentPosition}: any) => {
  const {allCities, allCountries, genderList, allCountries2} = useSelector(
    (state: any) => state.helpers,
  );

  // DropDwens
  const dispatch = useDispatch<AppDispatch>();
  const {loading} = useSelector((state: any) => state.auth);

  const [selectedValues, setSelectedValues] = useState({
    first_name: 'agm',
    last_name: 'agm',
    birth_day: '',
    birth_month: '',
    birth_year: '',
    gender: '',
    nationality: '',
    country: '',
    city: '',
    phone: '01014216397',
  });

  const [formErrors, setFormErrors] = React.useState({
    birth_year: '',
    birth_month: '',
    birth_day: '',
    gendar: '',
    nationality: '',
    country: '',
    city: '',
  });

  const handleValueChange = (key: keyof typeof selectedValues, value: any) => {
    setSelectedValues(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  const validateForm = () => {
    // setCurrentPosition(2);
    const errors: {[key: string]: string} = {};
    if (!selectedValues.birth_year) {
      errors.birth_year = 'Year Required';
    }
    if (!selectedValues.birth_month) {
      errors.birth_month = 'Month Required';
    }

    if (!selectedValues.birth_day) {
      errors.birth_day = 'Day Required';
    }
    if (!selectedValues.gender) {
      errors.gendar = 'Gender Required';
    }
    if (!selectedValues.nationality) {
      errors.nationality = 'Nationality Required';
    }
    if (!selectedValues.country) {
      errors.country = 'Country Required';
    }
    if (!selectedValues.city) {
      errors.city = 'City Required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = () => {
    // setCurrentPosition(2);
    const concatFormData = {...selectedValues};
    console.log('firstSubmit', concatFormData);
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
    dispatch(getAllCities(1));
  };

  useEffect(() => {
    getCities();
    dispatch(getAllCountries());
  }, []);

  console.log('Countries2---' + JSON.stringify(allCountries2));
  return (
    <>
      {/*Personal Info */}
      <View style={[styles.SectionBox]}>
        <View style={generalStyles.row}>
          <CustomText text="Your Personal Info" textStyle={styles.StepTitle} />
        </View>
        {/* BirhDay */}
        <View style={generalStyles.rowBetween}>
          <View>
            <Dropdown
              label="Birth day"
              labelStyle={[styles.LapelStyle, styles.MArginBtn]}
              placeholder="Select day"
              value={selectedValues.birth_day}
              onChangeValue={(value: any) =>
                handleValueChange('birth_day', value.code)
              }
              dropDownStyle={generalStyles.DropBorder3}
              list={Monthdays}
            />
          </View>
          <View>
            <Dropdown
              label="Birth month"
              labelStyle={[styles.LapelStyle, styles.MArginBtn]}
              placeholder="Select month"
              value={selectedValues.birth_month}
              onChangeValue={(value: any) =>
                handleValueChange('birth_month', value.code)
              }
              dropDownStyle={generalStyles.DropBorder3}
              list={month}
            />
          </View>

          <View>
            <Dropdown
              label="Birth year"
              labelStyle={[styles.LapelStyle, styles.MArginBtn]}
              placeholder="Select year"
              value={selectedValues.birth_year}
              onChangeValue={(value: any) =>
                handleValueChange('birth_year', value.default_name)
              }
              dropDownStyle={generalStyles.DropBorder3}
              list={yearOptions}
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
            <Dropdown
              label="Gender"
              labelStyle={[styles.LapelStyle, styles.MArginBtn]}
              placeholder="Select Gender"
              value={selectedValues.gender}
              onChangeValue={(value: any) =>
                handleValueChange('gender', value.code)
              }
              dropDownStyle={generalStyles.DropBorder2}
              list={genderList}
            />
          </View>
          <View>
            <Dropdown
              label="Nationality"
              labelStyle={[styles.LapelStyle, styles.MArginBtn]}
              placeholder="Select Nationality"
              value={selectedValues.nationality}
              onChangeValue={(value: any) =>
                handleValueChange('nationality', value.code)
              }
              dropDownStyle={generalStyles.DropBorder2}
              list={allCountries2}
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
            <Dropdown
              label="Country"
              labelStyle={[styles.LapelStyle, styles.MArginBtn]}
              placeholder="Select Country"
              value={selectedValues.country}
              onChangeValue={(value: any) =>
                handleValueChange('country', value.code)
              }
              list={allCountries}
              dropDownStyle={generalStyles.DropBorder2}
            />
          </View>
          <View>
            <Dropdown
              label="City"
              labelStyle={[styles.LapelStyle, styles.MArginBtn]}
              placeholder="Select City"
              value={selectedValues.city}
              onChangeValue={(value: any) =>
                handleValueChange('city', value.code)
              }
              dropDownStyle={generalStyles.DropBorder2}
              list={allCities}
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
