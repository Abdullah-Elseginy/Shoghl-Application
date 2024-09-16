import {StyleProp, View, ViewStyle} from 'react-native';
import React from 'react';
import CustomText from '../CustomText';
import {styles} from './styles';
import StepIndicator from 'react-native-step-indicator';

type Props = {
  labels?: any;
  stepcount?: number;
  currentPosition?: number;
  containerStyle?: StyleProp<ViewStyle>;
};

const StepIndicater = ({
  labels,
  stepcount,
  currentPosition,
  containerStyle,
}: Props) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <StepIndicator
        customStyles={styles.customStyle}
        currentPosition={currentPosition}
        labels={labels}
        stepCount={stepcount}
      />
      <View style={styles.labelContainer}>
        <CustomText
          textStyle={styles.labe2}
          text={`step ${currentPosition + 1} / 3`}
        />
        <CustomText textStyle={styles.label} text={labels[currentPosition]} />
      </View>
    </View>
  );
};

export default StepIndicater;
