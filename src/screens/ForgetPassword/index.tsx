import React, {useState} from 'react';
import {
  AppInput,
  AppScreenContainer,
  Button,
  CustomText,
} from '../../components';
import {ScrollView, View} from 'react-native';
import {styles} from './styles';
import {PackSVG} from '../../assets';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import ScreenNames from '../../navigations/ScreenNames';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {companyForgetPasswordStepOnePhoneNumber} from '../../redux/slices/authSlice';
import Toast from 'react-native-toast-message';

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>;
};

const ForgetPassword = ({navigation}: Props) => {
  const {loading} = useSelector((state: any) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneErr, seterrorPhone] = useState('');
  const handlePhone = () => {
    if (!phoneNumber) {
      seterrorPhone('phone Required');
    } else if (!/^\d{11}$/.test(phoneNumber)) {
      seterrorPhone(`phone must be 11 digits and start 0x0${phoneNumber}`);
    } else {
      return true;
    }
  };
  const VeriyfyPhoneNumber = () => {
    const data = {mobile_number: phoneNumber};
    if (handlePhone()) {
      dispatch(companyForgetPasswordStepOnePhoneNumber(data))
        .unwrap()
        .then(() => {
          Toast.show({
            text1: 'Success',
            text2: 'Verification code sent to your mobile',
            type: 'success',
            position: 'top',
            visibilityTime: 2000,
            autoHide: true,
          });
          seterrorPhone('');
          setPhoneNumber('');
          navigation.navigate(ScreenNames.OTPScreen, {
            type: 'Reset Password',
            phone: phoneNumber,
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
    }
  };

  return (
    <AppScreenContainer style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.center}>
          <PackSVG />
          <CustomText text="Forget Password" textStyle={styles.signup} />
        </View>
        <View>
          <AppInput
            placeholder="Enter Your Phone or email"
            label="Enter Your Phone or email"
            labelStyle={styles.inputLabel}
            containerStyle={styles.inputContainerStyle}
            isNumericKeyboard
            maxLength={11}
            value={phoneNumber}
            onChangeText={val => {
              setPhoneNumber(val);
            }}
          />
          {phoneErr && <CustomText text={phoneErr} textStyle={styles.error} />}
          <Button
            text="Get OTP"
            style={styles.Bottom}
            loading={loading}
            onPress={() => {
              VeriyfyPhoneNumber();
            }}
          />
        </View>
      </ScrollView>
    </AppScreenContainer>
  );
};

export default ForgetPassword;
