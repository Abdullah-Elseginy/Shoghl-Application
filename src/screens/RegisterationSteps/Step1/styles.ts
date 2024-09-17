import {StyleSheet} from 'react-native';
import {COLORS, FONTS, hp, wp} from '../../../constants';

export const styles = StyleSheet.create({
  SectionBox: {
    marginTop: hp(3),
  },
  StepTitle: {
    fontFamily: FONTS.Bold,
    fontSize: hp(2),
    // marginRight: wp(0),
  },
  StepTitlechoice: {
    color: COLORS.grayLight,
    fontSize: wp(2.5),
  },
  CareerLevel: {
    // justifyContent: 'center',
    alignItems: 'center',
  },
  Careerchoise: {
    width: wp(40),
    padding: hp(0.8),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(5),
    borderRadius: wp(2),
    marginTop: hp(2),
    height: hp(4),
  },
  selected: {
    backgroundColor: COLORS.primary,
  },
  unselected: {
    backgroundColor: COLORS.white,
    borderWidth: wp(0.1),
    borderColor: COLORS.primary,
  },
  textSlected: {
    color: COLORS.white,
    fontSize: wp(3.7),
  },
  textunselected: {
    color: COLORS.primary,
    fontSize: wp(3.7),
  },
  choise: {
    width: wp(40),
    padding: hp(0.8),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(5),
    borderRadius: wp(2),
    marginTop: hp(2),
    height: hp(4),
  },
  ContanerInput: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    borderWidth: hp(0.1),
    marginTop: hp(1),
  },
  OptopnTExt: {
    marginTop: hp(2),
    marginBottom: hp(0.5),
  },
  DropBorder: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    borderWidth: hp(0.1),
  },
  Checkbox: {
    marginTop: hp(4),
  },
});
