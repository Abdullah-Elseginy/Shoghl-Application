import {StyleSheet} from 'react-native';
import {COLORS, FONTS, hp, wp} from '../../../constants';

export const styles = StyleSheet.create({
  SectionBox: {
    marginTop: hp(3),
  },
  StepTitle: {
    fontFamily: FONTS.Bold,
    fontSize: hp(2),
  },
  ContanerInput: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    borderWidth: hp(0.1),
    marginTop: hp(1),
    width: wp(42),
  },
  ContanerInput3: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    borderWidth: hp(0.1),
    marginTop: hp(1),
  },
  ContanerInput2: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    borderWidth: hp(0.1),
    marginTop: hp(1),
    width: wp(27),
  },
  LapelStyle: {
    marginTop: hp(2),
    fontFamily: FONTS.Regular,
    fontSize: hp(1.6),
  },
  DropBorder: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    borderWidth: hp(0.1),
  },
  DropBorder2: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    borderWidth: hp(0.1),
    width: wp(42),
  },
  menuOptopn: {
    width: wp(42),
  },

  MArginBtn: {
    marginBottom: hp(1),
  },
  sefeAreaView: {
    height: hp(15.2),
  },
  Bottom: {
    marginTop: hp(5),
  },
  ErrorMSG: {
    color: COLORS.danger,
    marginTop: hp(0.5),
  },
  width: {
    width: wp(42),
  },
  width2: {
    width: wp(28),
  },
});
