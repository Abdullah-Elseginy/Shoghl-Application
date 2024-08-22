import React, { useState } from 'react';
import { AppInput, AppScreenContainer, Button, Checkbox, CustomText } from '../../components';
import { Pressable, View } from 'react-native';
import { styles } from './styles';
import LogoBlackSVG from '../../assets/svg/LogoBlackSVG';
import { generalStyles } from '../../constants';
import { EyeOffSVG, EyeSVG } from '../../assets';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';
import ScreenNames from '../../navigations/ScreenNames';

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>;
};

const LoginScreen = ({ navigation }: Props) => {
  const [isSecure, setIsSecure] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <AppScreenContainer style={styles.container}>
      <View style={styles.center}>
        <LogoBlackSVG />
        <CustomText text="Sign in" textStyle={styles.signin} />
      </View>
      <View style={styles.loginContent}>
        <AppInput placeholder="example@gmail.com" label="email" labelStyle={styles.inputLabel} containerStyle={styles.containerStyle} />
        <AppInput placeholder="* * * * * * * *" label="password" labelStyle={styles.inputLabel} containerStyle={styles.containerStyle} secureTextEntry={isSecure} rightIcon={isSecure ? <EyeSVG /> : <EyeOffSVG />} onRightIconPress={() => setIsSecure(!isSecure)} />
        <View style={generalStyles.rowBetween}>
          <View style={generalStyles.rowStart}>
            <Checkbox isChecked={isChecked} setIsChecked={setIsChecked} />
            <CustomText text="Remember me" textStyle={styles.remember} />
          </View>
          <Pressable>
            <CustomText text="forgot password" textStyle={styles.forgot} />
          </Pressable>
        </View>
        <Button text="log in" style={styles.btn} buttonTextStyle={styles.btnTxt} onPress={() => navigation.replace(ScreenNames.BottomTabs)} />
        <View style={generalStyles.rowCenter}>
          <CustomText text="Don't have an account?" textStyle={styles.dont} />
          <Pressable onPressIn={() => navigation.navigate(ScreenNames.Signup)}>
            <CustomText text="sign up" textStyle={styles.signup} />
          </Pressable>
        </View>
      </View>
    </AppScreenContainer>
  );
};

export default LoginScreen;
