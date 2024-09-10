import {StyleSheet} from 'react-native';
import {COLORS, FONTS, hp, wp} from '../../constants';

export const styles = StyleSheet.create({
  Container: {
    padding: hp(2),
    // paddingBottom: hp(12),
    marginBottom: hp(12),
  },
  Scrollstyle: {
    marginBottom: hp(20),
  },
  MainStep: {
    height: hp(10),
    // backgroundColor: COLORS.blue,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: FONTS.SemiBold,
  },
  MainStepText: {
    color: COLORS.black,
    fontSize: hp(2.7),
  },
  StepTitle: {
    fontFamily: FONTS.Bold,
    fontSize: hp(2),
  },
  choise: {
    width: wp(25),
    padding: hp(0.8),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(2),
    borderRadius: wp(2),
    marginTop: hp(2),
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
  SectionBox: {
    marginTop: hp(3),
  },
  ContanerInput: {
    borderColor: COLORS.primary,
    borderWidth: hp(0.1),
    marginTop: hp(1),
    backgroundColor: COLORS.white,
  },
  OptopnTExt: {
    marginTop: hp(2),
    marginBottom: hp(0.5),
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
  },
});
