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
    width: wp(30),
    alignSelf: 'center',
  },
  CVname: {
    textAlign: 'center',
  },
  Langtxt: {
    fontFamily: FONTS.SemiBold,
    fontSize: wp(3.5),
    width: wp(30),
    marginRight: wp(2),
  },
  delate: {
    backgroundColor: COLORS.danger,
    width: wp(20),
    height: hp(4.5),
    alignSelf: 'flex-end',
  },
  margnbtn: {
    marginBottom: hp(1.5),
  },
});
