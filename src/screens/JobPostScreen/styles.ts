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
  choise1: {
    width: wp(43),
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
    backgroundColor: COLORS.white,
    borderWidth: hp(0.1),
    marginTop: hp(1),
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
  ContaibYear: {
    marginLeft: wp(6),
  },
  DropStyles: {
    width: wp(40),
    marginTop: hp(2),
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    borderWidth: hp(0.1),
  },
  InputBox: {
    width: wp(40),
    marginRight: wp(6),
    marginTop: hp(2),
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    borderWidth: hp(0.1),
  },

  errorView: {
    width: wp(40),
    marginRight: wp(6),
  },
  DropBorder: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    borderWidth: hp(0.1),
  },
  ChecedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textHide: {
    fontFamily: FONTS.Medium,
    marginLeft: wp(2),
  },
  StepText: {
    marginBottom: hp(2),
  },
  JobDEs: {
    height: hp(20),
    marginTop: hp(1),
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    borderWidth: hp(0.1),
  },
  KetWords: {
    marginTop: hp(1),
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    borderWidth: hp(0.1),
  },
  TextKeywords: {
    color: COLORS.grayLight,
  },
  Buttom: {
    marginTop: hp(4),
  },
  TexyBox: {
    marginLeft: wp(2),
  },
  JopOptionsupbox: {
    marginBottom: hp(2),
  },
  SubSelectionbox: {
    marginLeft: wp(12),
    marginTop: hp(1),
  },
  SubCheckBox: {
    marginLeft: wp(12),
    marginBottom: hp(1.2),
  },
  subcheckText: {
    marginLeft: wp(2),
  },
  ErrorMSG: {
    color: COLORS.danger,
    marginTop: hp(0.5),
  },
  mt: {
    marginTop: hp(2),
  },
  DrobOx: {
    marginTop: hp(2),
  },
  drop: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    borderWidth: hp(0.1),
    width: wp(40),
    marginRight: wp(6),
  },
});
