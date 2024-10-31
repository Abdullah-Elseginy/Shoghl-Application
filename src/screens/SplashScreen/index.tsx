import React, {useEffect} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {View} from 'react-native';
import {AppScreenContainer} from '../../components';
import {styles} from './styles';
import {LogoCircleSVG, LogoShoglSVG, SplashTxtSVG} from '../../assets';
import {hp} from '../../constants';
import ScreenNames from '../../navigations/ScreenNames';
import {useSelector} from 'react-redux';

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>;
};

const SplashScreen = ({navigation}: Props) => {
  const {token} = useSelector((state: any) => state.auth);
  useEffect(() => {
    setTimeout(() => {
      if (token) {
        navigation.replace(ScreenNames.BottomTabs);
      } else {
        navigation.replace(ScreenNames.AuthStack);
      }
    }, 3000);
  }, []);

  return (
    <AppScreenContainer style={styles.container}>
      <LogoCircleSVG />
      <View style={{marginVertical: hp(1.5)}}>
        <LogoShoglSVG />
      </View>
      <SplashTxtSVG />
    </AppScreenContainer>
  );
};

export default SplashScreen;
