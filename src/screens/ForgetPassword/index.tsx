import React from 'react';
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

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>;
};

const ForgetPassword = ({navigation}: Props) => {
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
          />
          {/* {errors.borderno && (
            <CustomText text={errors.borderno} textStyle={styles.error} />
          )} */}
          <Button
            text="Get OTP"
            style={styles.Bottom}
            onPress={() => {
              navigation.navigate(ScreenNames.OTPScreen, {
                type: 'Reset Password',
              });
            }}
          />
        </View>
      </ScrollView>
    </AppScreenContainer>
  );
};

export default ForgetPassword;
