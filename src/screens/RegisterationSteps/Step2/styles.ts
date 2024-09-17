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

  MArginBtn: {
    marginBottom: hp(1),
  },
});
