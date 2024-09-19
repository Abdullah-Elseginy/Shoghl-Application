import * as React from 'react';
import {AppScreenContainer, Button, CustomText} from '../../components';
import {styles} from './styles';
import ScreenNames from '../../navigations/ScreenNames';

const JobsScreen = ({navigation}) => {
  return (
    <AppScreenContainer style={styles.container}>
      <CustomText text="JobsScreen" />
      <Button
        text="applications"
        onPress={() => navigation.navigate(ScreenNames.Applications)}
      />
      <Button
        text="Save"
        onPress={() => navigation.navigate(ScreenNames.SaveScreen)}
      />
      <Button
        text="Explore"
        onPress={() => navigation.navigate(ScreenNames.ExploreScreen)}
      />
    </AppScreenContainer>
  );
};

export default JobsScreen;
