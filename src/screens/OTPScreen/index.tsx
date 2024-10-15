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
  loginTwo,
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
  const {loading} = useSelector((state: any) => state.auth);
  const [InputVal, SetInputVal] = useState({
    otp: '',
  });
  const [errorOTP, seterrorOTP] = useState('');
  const {borderNo, type, borderNoCandidateSignUp} = route.params;
  console.log(borderNo, '____', type);
  const handleCandiditeInputsStep2 = () => {
    if (!InputVal.otp) {
      seterrorOTP('OTP Required');
    } else if (!/^\d{6}$/.test(InputVal.otp)) {
      seterrorOTP('OTP must be 6 digits');
    } else {
      return true;
    }
  };

  const handlesumit2 = () => {
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
        border_number: borderNoCandidateSignUp,
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
  return (
    <AppScreenContainer style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.center}>
          <PackSVG />
          <CustomText
            text={`Enter OTP To ${type === 'signup' ? 'SignUp' : 'Login'}`}
            textStyle={styles.signup}
          />
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
              <TouchableOpacity>
                <CustomText text="Resend OTP?" textStyle={styles.Resend} />
              </TouchableOpacity>
            </View>
          </>
          <Button
            text={`${type === 'signup' ? 'Sign Up' : 'Login'}`}
            loading={loading}
            style={styles.Bottom}
            onPress={() => {
              type === 'signup'
                ? handlesubmitSignUpCandidate()
                : handlesumit2();
            }}
          />
        </View>
      </ScrollView>
    </AppScreenContainer>
  );
};

export default OTPScreen;
