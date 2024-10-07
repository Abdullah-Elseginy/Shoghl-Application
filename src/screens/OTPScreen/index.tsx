import React, {useState} from 'react';
import {AppScreenContainer, Button, CustomText} from '../../components';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {COLORS, generalStyles} from '../../constants';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CommonActions, ParamListBase} from '@react-navigation/native';
import ScreenNames from '../../navigations/ScreenNames';
import {useDispatch, useSelector} from 'react-redux';
import {changeRegisterationType, loginTwo} from '../../redux/slices/authSlice';
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
  const {borderNo} = route.params;
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
        .then((res: any) => {
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
          console.log('abdullahhhaahhaahha' + res);
        })
        .catch((err: any) => {
          console.log('loginTwo error ', err);
        });
    }
  };
  return (
    <AppScreenContainer style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.center}>
          <PackSVG />
          <CustomText text="OTP" textStyle={styles.signup} />
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
            text="login"
            loading={loading}
            style={styles.Bottom}
            onPress={handlesumit2}
          />
        </View>
      </ScrollView>
    </AppScreenContainer>
  );
};

export default OTPScreen;
