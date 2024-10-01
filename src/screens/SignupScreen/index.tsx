/* eslint-disable curly */
import * as React from 'react';
import {
  AppInput,
  AppScreenContainer,
  Button,
  CustomText,
} from '../../components';
import {styles} from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {generalStyles, hp} from '../../constants';
import {PackSVG} from '../../assets';
import {Pressable, View} from 'react-native';
import ScreenNames from '../../navigations/ScreenNames';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {changeRegisterationType, signUpOne} from '../../redux/slices/authSlice';

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>;
};

const SignupScreen = ({navigation}: Props) => {
  const [LoginType, SetLoginType] = React.useState('candidate');
  const [BorderName, SetBorderName] = React.useState('');
  const [errBordername, setErrorBordername] = React.useState('');
  const {loading} = useSelector(state => state.auth);
  const [formData, setFormData] = React.useState({
    companyName: '',
    firstName: '',
    lastName: '',
    mobileNumber: '',
    businessMail: '',
    password: '',
    role: '',
  });
  const [formErrors, setFormErrors] = React.useState({
    companyName: '',
    firstName: '',
    lastName: '',
    mobileNumber: '',
    businessMail: '',
    password: '',
    role: '',
  });
  const dispatch = useDispatch();
  const [candidateError, SetCAndidateError] = React.useState('');

  const handleInputChange = (field: string, value: string) => {
    setFormData({...formData, [field]: value});
  };
  const validateBorderNumber = () => {
    if (!BorderName) {
      setErrorBordername('Border Name is required');
      return;
    }
    if (!/^\d{10}$/.test(BorderName)) {
      setErrorBordername('Border Number should be at least 10 digits');
    } else {
      const candidateData = {border_number: BorderName};
      setErrorBordername('');
      HandleNextCandidate(candidateData);
    }
  };

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    if (LoginType === 'corporate') {
      // Corporate validation
      if (!formData.companyName) {
        errors.companyName = 'Company Name is required';
      }
      if (!formData.firstName) errors.firstName = 'First Name is required';
      if (!formData.lastName) errors.lastName = 'Last Name is required';
      if (!formData.mobileNumber.match(/^[0-9]{11}$/)) {
        errors.mobileNumber = 'Enter a valid 11-digit mobile number';
      }
      if (!formData.businessMail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        errors.businessMail = 'Enter a valid email address';
      }
      if (formData.password.length < 8) {
        errors.password = 'Password must be at least 6 characters';
      }
      if (!formData.role) errors.role = 'Role is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0 && !errBordername; // Ensure no errors
  };
  const handleSubmit = () => {
    if (validateForm()) {
      const corporateData = {...formData};
      dispatch(signUpOne(corporateData))
        .unwrap()
        .then(() => {
          dispatch(changeRegisterationType('corporate'));
          navigation.replace(ScreenNames.RegisterationSteps);
        })
        .catch(err => console.error('signup ', err));
    }
  };

  const HandleNextCandidate = (userdata: {border_number: string}) => {
    dispatch(signUpOne(userdata))
      .unwrap()
      .then(() => {
        dispatch(changeRegisterationType('candidate'));
        navigation.replace(ScreenNames.CompleteProfile);
      })
      .catch(err => {
        console.log('signup ', err);
      });
  };

  return (
    <AppScreenContainer style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[generalStyles.center, {paddingVertical: hp(3)}]}>
          <PackSVG />
          <CustomText text="Sign up" textStyle={styles.signup} />
        </View>
        <View>
          <View style={generalStyles.rowBetween}>
            <Button
              text="candidate"
              style={styles.btn}
              secondry={LoginType !== 'candidate'}
              onPress={() => SetLoginType('candidate')}
            />
            <Button
              text="corporate"
              style={styles.btn}
              secondry={LoginType !== 'corporate'}
              onPress={() => SetLoginType('corporate')}
            />
          </View>

          {/* Candidate Form */}
          {LoginType !== 'corporate' ? (
            <>
              <AppInput
                placeholder="Enter Your Border Number"
                label="Border Number"
                labelStyle={styles.inputLabel}
                containerStyle={styles.inputContainerStyle}
                maxLength={10}
                isNumericKeyboard
                value={BorderName}
                onChangeText={SetBorderName}
              />
              <CustomText text={errBordername} textStyle={styles.ErrorMSG} />
              <Button
                loading={loading}
                text="Next"
                onPress={() => validateBorderNumber()}
              />
              <View style={[generalStyles.rowCenter, {marginTop: hp(1.3)}]}>
                <CustomText
                  text="Have an account?"
                  textStyle={styles.haveAcc}
                />
                <Pressable
                  onPressIn={() => navigation.navigate(ScreenNames.Login)}>
                  <CustomText text="Log In" textStyle={styles.login} />
                </Pressable>
              </View>
              <View style={[generalStyles.rowCenter, {marginTop: hp(1.5)}]}>
                <CustomText
                  text="Looking to post jobs?"
                  textStyle={styles.haveAcc}
                />
                <Pressable
                  onPressIn={() => navigation.navigate(ScreenNames.Login)}>
                  <CustomText
                    text="Create an Employer Account"
                    textStyle={styles.empAcc}
                  />
                </Pressable>
              </View>
            </>
          ) : (
            <>
              {/* Corporate Form */}
              <AppInput
                placeholder="Enter Your Company name"
                label="Company Name"
                labelStyle={[styles.inputLabel, styles.CoporateInput]}
                containerStyle={styles.inputContainerStyle}
                value={formData.companyName}
                onChangeText={value => handleInputChange('companyName', value)}
              />
              {formErrors.companyName && (
                <CustomText
                  textStyle={styles.ErrorMSG}
                  text={formErrors.companyName}
                />
              )}

              <View style={generalStyles.rowBetween}>
                <View>
                  <AppInput
                    placeholder="First Name"
                    label="First Name"
                    labelStyle={[styles.inputLabel, styles.CoporateInput]}
                    containerStyle={[
                      styles.inputContainerStyle,
                      styles.Firstname,
                    ]}
                    value={formData.firstName}
                    onChangeText={value =>
                      handleInputChange('firstName', value)
                    }
                  />
                  {formErrors.firstName && (
                    <CustomText
                      textStyle={styles.ErrorMSG}
                      text={formErrors.firstName}
                    />
                  )}
                </View>
                <View>
                  <AppInput
                    placeholder="Last Name"
                    label="Last Name"
                    labelStyle={[styles.inputLabel, styles.CoporateInput]}
                    containerStyle={[
                      styles.inputContainerStyle,
                      styles.Firstname,
                    ]}
                    value={formData.lastName}
                    onChangeText={value => handleInputChange('lastName', value)}
                  />
                  {formErrors.lastName && (
                    <CustomText
                      textStyle={styles.ErrorMSG}
                      text={formErrors.lastName}
                    />
                  )}
                </View>
              </View>

              <AppInput
                placeholder="Enter Your Mobile Number"
                label="Mobile Number"
                labelStyle={[styles.inputLabel, styles.CoporateInput]}
                containerStyle={styles.inputContainerStyle}
                value={formData.mobileNumber}
                onChangeText={value => handleInputChange('mobileNumber', value)}
              />
              {formErrors.mobileNumber && (
                <CustomText
                  textStyle={styles.ErrorMSG}
                  text={formErrors.mobileNumber}
                />
              )}

              <AppInput
                placeholder="Enter Your Business Mail"
                label="Business Mail"
                labelStyle={[styles.inputLabel, styles.CoporateInput]}
                containerStyle={styles.inputContainerStyle}
                value={formData.businessMail}
                onChangeText={value => handleInputChange('businessMail', value)}
              />
              {formErrors.businessMail && (
                <CustomText
                  textStyle={styles.ErrorMSG}
                  text={formErrors.businessMail}
                />
              )}

              <AppInput
                placeholder="Enter Your Password"
                label="Create Password"
                labelStyle={[styles.inputLabel, styles.CoporateInput]}
                containerStyle={styles.inputContainerStyle}
                value={formData.password}
                onChangeText={value => handleInputChange('password', value)}
                secureTextEntry
              />
              {formErrors.password && (
                <CustomText
                  textStyle={styles.ErrorMSG}
                  text={formErrors.password}
                />
              )}

              <AppInput
                placeholder="Enter Your Role"
                label="Which role are you applying for?"
                labelStyle={[styles.inputLabel, styles.CoporateInput]}
                containerStyle={styles.inputContainerStyle}
                value={formData.role}
                onChangeText={value => handleInputChange('role', value)}
              />
              {formErrors.role && (
                <CustomText
                  textStyle={styles.ErrorMSG}
                  text={formErrors.role}
                />
              )}
              <Button loading={loading} text="Submit" onPress={handleSubmit} />
            </>
          )}
        </View>
      </ScrollView>
    </AppScreenContainer>
  );
};

export default SignupScreen;
