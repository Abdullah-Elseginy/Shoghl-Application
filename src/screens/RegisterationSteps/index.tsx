import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {
  AppScreenContainer,
  Button,
  StepIndecater,
} from '../../components';
import {styles} from './styles';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import ScreenNames from '../../navigations/ScreenNames';

const labels = ['Career Interests', 'General Info', 'Professional Info'];

const RegiterationSteps = ({navigation}: any) => {
  const [currentPosition, setCurrentPosition] = useState(0);

  const HandleNext = () => {
    setCurrentPosition(prev => prev + 1);
  };

  return (
    <AppScreenContainer style={styles.container}>
      <StepIndecater
        labels={labels}
        currentPosition={currentPosition}
        stepcount={3}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {currentPosition === 0 ? (
          <Step1 />
        ) : currentPosition === 1 ? (
          <Step2 />
        ) : (
          <Step3 />
        )}

        <Button
          text={currentPosition === 2 ? 'Finsh' : 'Next'}
          onPress={() => {
            HandleNext();
            if (currentPosition === 2) {
              navigation.navigate(ScreenNames.BottomTabs);
            }
          }}
          style={styles.Bottom}
        />
        {currentPosition === 1 || currentPosition === 2 ? (
          <Button
            text={'Back'}
            onPress={() => {
              setCurrentPosition(pre => pre - 1);
            }}
          />
        ) : (
          ''
        )}
      </ScrollView>
    </AppScreenContainer>
  );
};

export default RegiterationSteps;
