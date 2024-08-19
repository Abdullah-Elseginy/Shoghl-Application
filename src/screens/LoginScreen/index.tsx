import React, {useState} from 'react';
import { AppScreenContainer, CustomText } from '../../components';
import { View } from 'react-native';
import { styles } from './styles';

const LoginScreen = () => {
  
  return (
   <AppScreenContainer style={styles.container}>
    <CustomText text='LoginScreen'/>
   </AppScreenContainer>
  );
};

export default LoginScreen;
