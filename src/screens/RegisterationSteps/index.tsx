import React, {useCallback, useState} from 'react';
import {ScrollView} from 'react-native';
import {AppScreenContainer, Button, StepIndecater} from '../../components';
import {styles} from './styles';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import {useFocusEffect} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {
  get_careeerLevel_jobTypes_workspaceSetting_MinnuimNetSalaryPer,
  GetChoicesStep3,
} from '../../redux/slices/appdataSlice';

const labels = ['Career Interests', 'General Info', 'Professional Info'];

const RegiterationSteps = ({navigation}: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const [currentPosition, setCurrentPosition] = useState(0);
  const [mounted, setMounted] = useState(false);
  useFocusEffect(
    useCallback(() => {
      if (!mounted) {
        dispatch(
          get_careeerLevel_jobTypes_workspaceSetting_MinnuimNetSalaryPer(),
        );
        dispatch(GetChoicesStep3());
        setMounted(true);
      }
    }, [dispatch, mounted]),
  );
  return (
    <AppScreenContainer style={styles.container}>
      <StepIndecater
        labels={labels}
        currentPosition={currentPosition}
        stepcount={3}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {currentPosition === 0 ? (
          <Step1
            setCurrentPosition={setCurrentPosition}
            currentPosition={currentPosition}
          />
        ) : currentPosition === 1 ? (
          <Step2
            setCurrentPosition={setCurrentPosition}
            currentPosition={currentPosition}
          />
        ) : (
          <Step3
            setCurrentPosition={setCurrentPosition}
            currentPosition={currentPosition}
          />
        )}
      </ScrollView>
    </AppScreenContainer>
  );
};

export default RegiterationSteps;
