/* eslint-disable react-native/no-inline-styles */
/* eslint-disable curly */
import * as React from 'react';
import {
  AppInput,
  AppScreenContainer,
  Button,
  CustomText,
  Dropdown,
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
import {
  changeRegisterationType,
  signUpOne,
  signUpOneCorporate,
} from '../../redux/slices/authSlice';
import {AppDispatch} from '../../redux/store';
import Toast from 'react-native-toast-message';
import {
  getCareeerLevel,
  getEducationalLvel,
  getFeildOfStudy,
  getGender,
  getGrades,
  getJobTypes,
  getLanguage,
  getLanguageLevel,
  GetSalaryCurrency,
  getSalaryPer,
  getSkills,
  getUniveristies,
  getWorkSpaceSettings,
  getYearsEx,
} from '../../redux/slices/helpersSlice';
const roleList = [
  {
    default_name: 'manger',
    code: '1',
  },
  {
    default_name: 'client',
    code: '2',
  },
  {
    default_name: 'kol',
    code: '3',
  },
  {
    default_name: 'giant',
    code: '4',
  },
];
type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>;
};

const SignupScreen = ({navigation}: Props) => {
  const [LoginType, SetLoginType] = React.useState('candidate');
  const [BorderName, SetBorderName] = React.useState('');
  const [errBordername, setErrorBordername] = React.useState('');
  const {loading} = useSelector((state: any) => state.auth);
  const [role, setrole] = React.useState([]);
  const [openDropdown, setOpenDropdown] = React.useState(null);

  const handleDropdownOpen = (dropdownId: any) => {
    if (openDropdown === dropdownId) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdownId);
    }
  };
  const [formData, setFormData] = React.useState({
    company_name: '',
    first_name: '',
    last_name: '',
    mobile_number: '',
    business_email: '',
    password: '',
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

  const dispatch = useDispatch<AppDispatch>();

  const handleInputChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: field === 'hiring_for' ? [value] : value,
    });
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
      if (!formData.company_name) {
        errors.companyName = 'Company Name is required';
      }
      if (!formData.first_name) errors.firstName = 'First Name is required';
      if (!formData.last_name) errors.lastName = 'Last Name is required';
      if (!formData.mobile_number?.match(/^[0-9]{11}$/)) {
        errors.mobileNumber = 'Enter a valid 11-digit mobile number';
      }
      if (!formData.business_email?.match(/^[a-zA-Z0-9._%+-]+@company\.com$/)) {
        errors.businessMail =
          "The business email field must'n end with one of the following: gmail.com, outlook.com";
      }
      if (formData.password?.length < 8) {
        errors.password = 'Password must be at least 6 characters';
      }
      // if (!formData.role) errors.role = 'Role is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0 && !errBordername; // Ensure no errors
  };

  const handleSubmit = () => {
    const formToSend = {
      ...formData,
      hiring_for: role,
    };
    if (validateForm()) {
      console.log('form data2----', formToSend);
      dispatch(signUpOneCorporate(formToSend))
        .unwrap()
        .then((res: any) => {
          dispatch(changeRegisterationType('corporate'));
          console.log('SignUpCorporate Success==' + res);
          Toast.show({
            text1: 'Success',
            text2: 'Registration successful',
            type: 'success',
            visibilityTime: 2500,
          });

          navigation.replace(ScreenNames.RegisterationSteps);
        })
        .catch(err => {
          Toast.show({
            type: 'error',
            text1: 'Error',
            text2: err,
            position: 'top',
            visibilityTime: 3500,
          });
        });
    }
  };

  const HandleNextCandidate = (userdata: {border_number: string}) => {
    dispatch(signUpOne(userdata))
      .unwrap()
      .then((res: any) => {
        dispatch(changeRegisterationType('candidate'));
        Toast.show({
          text1: 'Success',
          text2: 'Right Border Number',
          type: 'success',
        });
        console.log('Sign Up Respone Data=>', res.data.phone);

        // navigation.replace(ScreenNames.SignUpStepTwoCandidate, {
        //   phone: res?.data?.phone,
        //   name: res?.data?.first_name + ' ' + res?.data?.last_name,
        //   borderno: BorderName,
        // });
        navigation.reset({
          index: 0,
          routes: [
            {
              name: ScreenNames.SignUpStepTwoCandidate,
              params: {
                phone: res?.data?.phone,
                name: res?.data?.first_name + ' ' + res?.data?.last_name,
                borderno: BorderName,
              },
            },
          ],
        });

        // SetModlVisable(true);
      })
      .catch(err => {
        Toast.show({
          text1: 'Error',
          text2: err,
          type: 'error',
        });
        console.log('signupone ', err);
      });
  };

  React.useEffect(() => {
    dispatch(getCareeerLevel());
    dispatch(getSalaryPer());
    dispatch(getJobTypes());
    dispatch(getWorkSpaceSettings());
    dispatch(GetSalaryCurrency());
    dispatch(getGender());
    dispatch(getEducationalLvel());
    dispatch(getYearsEx());
    dispatch(getFeildOfStudy());
    dispatch(getUniveristies());
    dispatch(getGrades());
    dispatch(getLanguage());
    dispatch(getLanguageLevel());
    dispatch(getSkills());
  }, [dispatch]);
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
              {errBordername && (
                <CustomText text={errBordername} textStyle={styles.ErrorMSG} />
              )}
              <Button
                loading={loading}
                text="Next"
                style={styles.Bottom}
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
                value={formData.company_name}
                onChangeText={value => handleInputChange('company_name', value)}
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
                    value={formData.first_name}
                    onChangeText={value =>
                      handleInputChange('first_name', value)
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
                    value={formData.last_name}
                    onChangeText={value =>
                      handleInputChange('last_name', value)
                    }
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
                isNumericKeyboard
                labelStyle={[styles.inputLabel, styles.CoporateInput]}
                containerStyle={styles.inputContainerStyle}
                value={formData.mobile_number}
                onChangeText={value =>
                  handleInputChange('mobile_number', value)
                }
              />
              {formErrors.mobileNumber && (
                <CustomText
                  textStyle={styles.ErrorMSG}
                  text={formErrors.mobileNumber}
                />
              )}
              <Dropdown
                placeholder="which role you are open to?"
                label="which role you are open to?"
                labelStyle={[styles.inputLabel, styles.CoporateInput]}
                value={role}
                dropDownStyle={generalStyles.DropBorder}
                list={roleList}
                maxSelect={3}
                multiBle={true}
                onChangeValue={(value: any) => setrole(value.code)}
              />
              {formErrors.role && (
                <CustomText
                  textStyle={styles.ErrorMSG}
                  text={formErrors.role}
                />
              )}

              <AppInput
                placeholder="Enter Your Business Mail"
                label="Business Mail"
                keyboardType="email-address"
                labelStyle={[styles.inputLabel, styles.CoporateInput]}
                containerStyle={styles.inputContainerStyle}
                value={formData.business_email}
                onChangeText={value =>
                  handleInputChange('business_email', value)
                }
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
                rightIcon
              />
              {formErrors.password && (
                <CustomText
                  textStyle={styles.ErrorMSG}
                  text={formErrors.password}
                />
              )}

              <Button
                loading={loading}
                text="Submit"
                onPress={handleSubmit}
                style={styles.btn2}
              />
            </>
          )}
        </View>
        {/* Modal */}
        {/* <CustomModal
          modalVisible={modalVisable}
          setModalVisible={SetModlVisable}
          closeIcon={true}
          title="Details"
          children={
            <>
              <View>
                <AppInput
                  placeholder="Enter Mobile number"
                  label="Mobile Number"
                  labelStyle={[styles.inputLabel, styles.CoporateInput]}
                  value={candidatePhone}
                  onChangeText={val => setCandidatePhone(val)}
                />
                <Button
                  text="Get OTP In This Number"
                  onPress={() => {
                    SetModlVisable(false);
                    navigation.navigate(ScreenNames.OTPScreen, {
                      borderNo: 'scsc',
                      type: 'signup',
                    });
                  }}
                />
              </View>
            </>
          }
        /> */}
      </ScrollView>
    </AppScreenContainer>
  );
};

export default SignupScreen;
