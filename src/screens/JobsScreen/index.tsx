import * as React from 'react';
import {AppScreenContainer, CustomText} from '../../components';
import {styles} from './styles';

const JobsScreen = () => {
  return (
    <AppScreenContainer style={styles.container}>
      <CustomText text="JobsScreen" />
    </AppScreenContainer>
  );
};

export default JobsScreen;
