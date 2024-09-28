import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/COLORS';
import {hp, wp} from '../../constants/Dimensions';
import {FONTS} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryLight,
    paddingHorizontal: wp(5),
    paddingVertical: hp(3),
  },
  center: {
    alignItems: 'center',
    paddingTop: hp(10),
    marginBottom: hp(3),
  },

  btn: {
    width: '48%',
  },

  signup: {
    fontSize: hp(3),
    color: COLORS.black,
    fontFamily: FONTS.Bold,
    marginTop: hp(1),
  },
  error: {
    color: COLORS.danger,
    marginBottom: hp(1),
  },
  inputContainerStyle: {
    marginBottom: hp(0.5),
  },
  inputLabel: {
    fontSize: hp(2.2),
    fontFamily: FONTS.SemiBold,
    marginBottom: hp(1.4),
    marginTop: hp(3),
  },
  remember: {
    fontFamily: FONTS.Medium,
  },
  remeBox: {
    marginTop: hp(1.5),
  },
  Bottom: {
    marginTop: hp(4),
  },
  singUpp: {
    fontFamily: FONTS.Medium,
    color: COLORS.primary,
  },
  DontBox: {
    alignSelf: 'center',
    marginTop: hp(1),
  },
  donthave: {
    color: COLORS.black,
  },
});
