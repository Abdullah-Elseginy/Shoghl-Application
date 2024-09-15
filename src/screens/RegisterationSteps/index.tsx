// import React from 'react';
// import {AppScreenContainer, CustomText} from '../../components';
// import {styles} from './styles';

// const RegiterationSteps = () => {
//   return (
//     <AppScreenContainer style={styles.container}>
//       <CustomText text="dvdvdvdvdved" />
//     </AppScreenContainer>
//   );
// };

// export default RegiterationSteps;
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import StepIndicator from 'react-native-step-indicator';

const labels = ['Career Interests', 'General Info', 'Professional Info'];

const customStyles = {
  stepIndicatorSize: 35,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#4CAF50',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#4CAF50',
  stepStrokeUnFinishedColor: '#4CAF50',
  separatorFinishedColor: '#4CAF50',
  separatorUnFinishedColor: '#4CAF50',
  stepIndicatorFinishedColor: '#4CAF50',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#4CAF50',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#ffffff',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#4CAF50',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#4CAF50',
};

const RegiterationSteps = () => {
  const [currentPosition, setCurrentPosition] = useState(0);

  return (
    <View style={styles.container}>
      <StepIndicator
        customStyles={customStyles}
        currentPosition={currentPosition}
        labels={labels}
        stepCount={3}
      />
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{labels[currentPosition]}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 20,
    backgroundColor: '#f5f5',
    justifyContent: 'center',
  },
  labelContainer: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#0dd',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegiterationSteps;
