import {StyleSheet} from 'react-native';
import {COLORS, FONTS, hp, wp} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(5),
    backgroundColor: COLORS.primaryLight,
    justifyContent: 'center',
    paddingBottom: hp(5),
  },
  signup: {
    fontSize: hp(4),
    fontFamily: FONTS.Bold,
    marginTop: hp(0.5),
    letterSpacing: hp(-0.1),
  },
  btn: {
    width: '48%',
  },
  residence: {
    fontSize: hp(2.2),
    fontFamily: FONTS.SemiBold,
    marginTop: hp(4),
    marginBottom: hp(1.5),
  },
  checkTxt: {
    marginStart: hp(1),
    fontSize: hp(1.8),
    textTransform: 'capitalize',
    fontFamily: FONTS.Medium,
  },
  inputContainerStyle: {
    marginBottom: hp(0.5),
  },
  Firstname: {
    width: wp(43),
  },
  inputLabel: {
    textTransform: 'capitalize',
    fontSize: hp(2.2),
    fontFamily: FONTS.SemiBold,
    marginBottom: hp(1.4),
    marginTop: hp(5),
  },
  CoporateInput: {
    marginTop: hp(2),
    marginBottom: hp(1),
  },
  haveAcc: {
    fontSize: hp(1.8),
    marginStart: hp(1),
  },
  login: {
    fontSize: hp(1.6),
    marginStart: hp(3),
    textTransform: 'uppercase',
    color: COLORS.primary,
    fontFamily: FONTS.SemiBold,
  },
  empAcc: {
    fontSize: hp(1.6),
    marginStart: hp(1),
    color: COLORS.primary,
    fontFamily: FONTS.Medium,
  },
  bottmStyle: {
    marginTop: hp(4),
  },
  ErrorMSG: {
    color: COLORS.danger,
  },
});
