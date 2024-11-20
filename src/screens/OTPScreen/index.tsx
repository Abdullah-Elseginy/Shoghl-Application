import React, {useState} from 'react';
import {AppScreenContainer, Button, CustomText} from '../../components';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {COLORS, generalStyles} from '../../constants';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CommonActions, ParamListBase} from '@react-navigation/native';
import ScreenNames from '../../navigations/ScreenNames';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeRegisterationType,
  companyForgetPasswordStepTwoOTP,
  loginTwo,
  ResendOTP,
  signUpThreeVerifyOTP,
} from '../../redux/slices/authSlice';
import {OtpInput} from 'react-native-otp-entry';
import {PackSVG} from '../../assets';
import Toast from 'react-native-toast-message';
import {AppDispatch} from '../../redux/store';

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>;
  route: any;
};

const OTPScreen = ({route, navigation}: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const {loading, loadingResendOTP} = useSelector((state: any) => state.auth);
  const [InputVal, SetInputVal] = useState({
    otp: '',
  });
  const [errorOTP, seterrorOTP] = useState('');
  const {borderNo, type, phone} = route.params;
  console.log('Phoneeee-----', phone);
  const handleCandiditeInputsStep2 = () => {
    if (!InputVal.otp) {
      seterrorOTP('OTP Required');
    } else if (!/^\d{6}$/.test(InputVal.otp)) {
      seterrorOTP('OTP must be 6 digits');
    } else {
      return true;
    }
  };

  const candidateLogin = () => {
    const isValid = handleCandiditeInputsStep2();
    if (isValid) {
      const candidateData = {
        border_number: borderNo,
        otp: InputVal.otp,
      };
      dispatch(loginTwo(candidateData))
        .unwrap()
        .then(() => {
          dispatch(changeRegisterationType('candidate'));
          Toast.show({
            text1: 'Logged In Successfully',
            type: 'success',
            position: 'top',
            visibilityTime: 1500,
            autoHide: true,
          });
          setTimeout(() => {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{name: ScreenNames.BottomTabs}],
              }),
            );
          }, 800);
        })
        .catch((err: any) => {
          Toast.show({
            text2: err,
            text1: 'Error',
            type: 'error',
            position: 'top',
            visibilityTime: 1500,
            autoHide: true,
          });
        });
    }
  };

  const handlesubmitSignUpCandidate = () => {
    const isValid = handleCandiditeInputsStep2();
    if (isValid) {
      const candidateDataSignUp = {
        border_number: borderNo,
        otp: InputVal.otp,
      };
      dispatch(signUpThreeVerifyOTP(candidateDataSignUp))
        .unwrap()
        .then(() => {
          dispatch(changeRegisterationType('candidate'));
          Toast.show({
            text1: 'SignUp Successfully',
            type: 'success',
            position: 'top',
            visibilityTime: 1500,
            autoHide: true,
          });
          setTimeout(() => {
            navigation.navigate(ScreenNames.CompleteProfile);
          }, 800);
        })
        .catch((err: any) => {
          Toast.show({
            text2: err,
            text1: 'Error',
            type: 'error',
            position: 'top',
            visibilityTime: 1500,
            autoHide: true,
          });
        });
    }
  };

  const handleResetPassword = () => {
    const data = {
      mobile_number: phone,
      code: InputVal.otp,
    };
    dispatch(companyForgetPasswordStepTwoOTP(data))
      .unwrap()
      .then(() => {
        Toast.show({
          text1: 'success',
          text2: 'right OTP please enter your new password',
          type: 'success',
          position: 'top',
          visibilityTime: 2000,
          autoHide: true,
        });
        navigation.navigate(ScreenNames.NewPassword, {
          phoneNumber: phone,
        });
      })
      .catch((err: any) => {
        Toast.show({
          text1: 'Error',
          text2: err,
          type: 'error',
          position: 'top',
          visibilityTime: 3000,
          autoHide: true,
        });
      });
  };

  const RESENDOTP = () => {
    const ResenData = {
      border_number: borderNo,
      phone: phone,
    };
    console.log('RESEND DATA----', ResenData);
    dispatch(ResendOTP(ResenData))
      .unwrap()
      .then(() => {
        Toast.show({
          text1: 'OTP sent successfully',
          type: 'success',
          position: 'top',
          visibilityTime: 1500,
          autoHide: true,
        });
      })
      .catch(err => {
        Toast.show({
          text2: err,
          text1: 'Error',
          type: 'error',
          position: 'top',
          visibilityTime: 1500,
          autoHide: true,
        });
      });
  };

  return (
    <AppScreenContainer style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.center}>
          <PackSVG />
          <CustomText text={`Enter OTP To ${type}`} textStyle={styles.signup} />
        </View>
        {/* candidate section */}
        <View>
          <>
            {/* OTP INPUTS */}
            <CustomText text="OTP Number" textStyle={styles.inputLabel} />
            <OtpInput
              numberOfDigits={6}
              focusColor={COLORS.primary}
              focusStickBlinkingDuration={500}
              onTextChange={val => SetInputVal({...InputVal, otp: val})}
              // onFilled={text => console.log(`OTP is ${text}`)}
              textInputProps={{
                accessibilityLabel: 'One-Time Password',
              }}
              theme={{
                containerStyle: styles.containerOTP,
                pinCodeContainerStyle: styles.pinCodeContainer,
                pinCodeTextStyle: styles.pinCodeText,
                //   focusStickStyle: styles.focusStick,
                //   focusedPinCodeContainerStyle: styles.activePinCodeContainer,
              }}
            />
            <CustomText text={errorOTP} textStyle={styles.error} />
            <View style={generalStyles.rowBetween}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(ScreenNames.Login);
                }}>
                <CustomText text="Change Number?" textStyle={styles.Resend} />
              </TouchableOpacity>
              <TouchableOpacity
                disabled={loadingResendOTP}
                onPress={() => {
                  RESENDOTP();
                }}>
                {loadingResendOTP ? (
                  <CustomText text="Sending otp..." textStyle={styles.Resend} />
                ) : (
                  <CustomText text="Resend OTP?" textStyle={styles.Resend} />
                )}
              </TouchableOpacity>
            </View>
          </>
          <Button
            text={`${'Continue'}`}
            loading={loading}
            style={styles.Bottom}
            onPress={() => {
              switch (type) {
                case 'login':
                  candidateLogin();
                  break;
                case 'Reset Password':
                  handleResetPassword();
                  break;
                case 'signup':
                  handlesubmitSignUpCandidate();
                  break;
                default:
                  candidateLogin();
              }
            }}
          />
        </View>
      </ScrollView>
    </AppScreenContainer>
  );
};

export default OTPScreen;
