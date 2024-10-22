import {StyleSheet} from 'react-native';
import {COLORS, FONTS, hp, wp} from '../../../constants';

export const styles = StyleSheet.create({
  ContanerInput: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    borderWidth: hp(0.1),
    marginTop: hp(1),
    width: wp(42),
  },
  SectionBox: {
    marginTop: hp(3),
  },
  StepTitle: {
    fontFamily: FONTS.Bold,
    fontSize: hp(2),
  },
  LapelStyle: {
    marginTop: hp(2),
  },
  marginbtn: {
    marginBottom: hp(2),
  },
  DropBorder: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    borderWidth: hp(0.1),
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

  MArginBtn: {
    marginBottom: hp(1),
  },
  Add: {
    width: wp(20),
    height: hp(4.5),
    alignSelf: 'flex-end',
    marginTop: hp(2),
  },
  MArgintop: {
    marginTop: hp(3),
  },
  CV: {
    width: wp(42),
    alignSelf: 'center',
  },
  CVname: {
    textAlign: 'center',
  },
  Langtxt: {
    fontFamily: FONTS.SemiBold,
    fontSize: wp(2.5),
  },
  Langtxt2: {
    fontFamily: FONTS.SemiBold,
    fontSize: wp(2.5),
    marginRight: wp(1.5),
    color: COLORS.primary,
  },
  delate: {
    backgroundColor: COLORS.danger,
    width: wp(5.5),
    height: hp(2.6),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(50),
  },
  margnbtn: {
    marginBottom: hp(1),
  },
  Bottom: {
    marginTop: hp(5),
  },
  ErrorMSG: {
    color: COLORS.danger,
    marginTop: hp(0.5),
  },
  centerTExt: {
    textAlign: 'center',
  },
  conlang: {
    backgroundColor: COLORS.primaryMoreLight,
    borderRadius: wp(2),
    marginBottom: wp(1),
    marginRight: wp(1),
    padding: wp(1),
    marginTop: hp(1),
  },
  texdel: {
    color: COLORS.white,
  },
});
