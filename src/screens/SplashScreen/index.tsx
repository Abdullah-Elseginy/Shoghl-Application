import React, { useEffect } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';
import { View } from 'react-native';
import ScreenNames from '../../navigations/ScreenNames';
import { AppScreenContainer, CustomText } from '../../components';
import { styles } from './styles';

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>;
};

const SplashScreen = ({ navigation }: Props) => {
  // const { appLang } = useSelector((state: AppRootState) => state.appSetting);

  useEffect(() => {
  //   if (appLang === 'en') {
  //     i18n.changeLanguage('en');
  //     console.log('EN');
  //   } else {
  //     i18n.changeLanguage('ar');
  //     console.log('AR');
  //   }
    setTimeout(() => {
      navigation.replace(ScreenNames.LoginScreen);
    }, 3000);
  }, []);

  return (
    <AppScreenContainer style={styles.container}>
      <CustomText text='Splash' />
    </AppScreenContainer>
  );
};

export default SplashScreen;
