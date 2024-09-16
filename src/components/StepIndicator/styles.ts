import {StyleSheet} from 'react-native';
import {COLORS, hp, wp} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    marginTop: hp(2),
    padding: hp(2),
    justifyContent: 'center',
  },
  labelContainer: {
    marginTop: hp(2.5),
    alignItems: 'center',
  },
  label: {
    fontSize: wp(3.7),
    fontWeight: 'bold',
    color: COLORS.black,
  },
  label2: {
    fontSize: wp(3.3),
    color: COLORS.grayLight,
  },
  customStyle: {
    stepIndicatorSize: wp(10),
    currentStepIndicatorSize: 40,
    separatorStrokeWidth: wp(0.5),
    currentStepStrokeWidth: wp(0.2),
    stepStrokeCurrentColor: COLORS.primary,
    stepStrokeWidth: wp(0.5),
    stepStrokeFinishedColor: COLORS.primary,
    stepStrokeUnFinishedColor: COLORS.primary,
    separatorFinishedColor: COLORS.primary,
    separatorUnFinishedColor: COLORS.primary,
    stepIndicatorFinishedColor: COLORS.primary,
    stepIndicatorUnFinishedColor: COLORS.white,
    stepIndicatorCurrentColor: COLORS.primary,
    stepIndicatorLabelFontSize: wp(4),
    currentStepIndicatorLabelFontSize: wp(4),
    stepIndicatorLabelCurrentColor: COLORS.white,
    stepIndicatorLabelFinishedColor: COLORS.white,
    stepIndicatorLabelUnFinishedColor: COLORS.primary,
    labelColor: COLORS.grayLight,
    labelSize: wp(3.5),
    currentStepLabelColor: COLORS.primary,
  },
});
