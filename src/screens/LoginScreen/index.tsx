import React, { useState } from 'react';
import { AppInput, AppScreenContainer, Button, CustomText } from '../../components';
import { Pressable, View } from 'react-native';
import { styles } from './styles';
import LogoBlackSVG from '../../assets/svg/LogoBlackSVG';
import { generalStyles, hp } from '../../constants';
import { CheckboxSVG, CheckedboxSVG, EyeOffSVG, EyeSVG } from '../../assets';

const LoginScreen = () => {
  const [isSecure, setIsSecure] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <AppScreenContainer style={styles.container}>
      <View style={styles.center}>
        <LogoBlackSVG />
        <CustomText text='Sign in' textStyle={styles.signin} />
      </View>
      <View style={styles.loginContent}>
        <AppInput placeholder='example@gmail.com' label='email' labelStyle={styles.inputLabel} containerStyle={styles.containerStyle} />
        <AppInput placeholder='* * * * * * * *' label='password' labelStyle={styles.inputLabel} containerStyle={styles.containerStyle} secureTextEntry={isSecure} rightIcon={isSecure ? <EyeSVG /> : <EyeOffSVG />} onRightIconPress={() => setIsSecure(!isSecure)} />
        <View style={styles.rowBetween}>
          <View style={styles.rowStart}>
            <Pressable onPressIn={() => setIsChecked(!isChecked)} style={{ height: hp(0) }}>
              {isChecked ? <CheckedboxSVG /> : <CheckboxSVG />}
            </Pressable>
          <CustomText text='Remember me' textStyle={styles.remember} />
          </View>
          <Pressable>
            <CustomText text='forgot password' textStyle={styles.forgot} />
          </Pressable>
        </View>
        <Button text='log in' style={styles.btn} buttonTextStyle={styles.btnTxt} onPress={() => null} />
        <View style={generalStyles.rowCenter}>
          <CustomText text="Don't have an account?" textStyle={styles.dont} />
          <Pressable>
            <CustomText text='sign up' textStyle={styles.signup} />
          </Pressable>
        </View>
      </View>
    </AppScreenContainer>
  );
};

export default LoginScreen;
