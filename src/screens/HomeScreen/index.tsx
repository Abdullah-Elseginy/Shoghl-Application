import * as React from 'react';
import { AppScreenContainer, CustomText } from '../../components';
import { styles } from './styles';

const HomeScreen = () => {
  
  return (
   <AppScreenContainer  style={styles.container}>
    <CustomText text='HomeScreen'/>
   </AppScreenContainer>
  );
};

export default HomeScreen;
