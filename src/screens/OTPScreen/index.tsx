import React, {useState} from 'react';
import {AppScreenContainer, Button, CustomText} from '../../components';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../constants';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import ScreenNames from '../../navigations/ScreenNames';
import {useDispatch, useSelector} from 'react-redux';
import {changeRegisterationType, loginTwo} from '../../redux/slices/authSlice';
import {OtpInput} from 'react-native-otp-entry';
import {PackSVG} from '../../assets';

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>;
  route: any;
};

const OTPScreen = ({route, navigation}: Props) => {
  const dispatch = useDispatch();
  const {loading, error} = useSelector((state: any) => state.auth);
  const [InputVal, SetInputVal] = useState({
    otp: '',
  });
  const [errorOTP, seterrorOTP] = useState('');
  const {borderNo} = route.params;
  console.log('first', borderNo);
  console.log('Route=>', route);
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
      let candidateData = {
        border_number: borderNo,
        otp: InputVal.otp,
      };
      dispatch(loginTwo(candidateData))
        .unwrap()
        .then(() => {
          dispatch(changeRegisterationType('candidate'));
          navigation.replace(ScreenNames.BottomTabs);
        })
        .catch(err => {
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
            <TouchableOpacity>
              <CustomText text="Resend OTP?" textStyle={styles.Resend} />
            </TouchableOpacity>
            <CustomText text={errorOTP} textStyle={styles.error} />
            <CustomText text={error} textStyle={styles.error} />
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
