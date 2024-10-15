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
  signup: {
    fontSize: hp(3),
    color: COLORS.black,
    fontFamily: FONTS.Bold,
    marginTop: hp(1),
    textAlign: 'center',
  },
  signupname: {
    fontSize: wp(3.9),
    fontFamily: FONTS.SemiBold,
  },
  error: {
    color: COLORS.danger,
    marginTop: hp(0.5),
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
  editwable: {
    backgroundColor: COLORS.grayMoreLight,
    borderWidth: 0,
  },
  errorText: {
    marginTop: hp(0.5),
    color: COLORS.danger,
  },
  edtittxt: {
    color: COLORS.primary,
    fontFamily: FONTS.Bold,
    textAlign: 'right',
    marginTop: hp(1),
  },
  btn: {
    marginTop: hp(5),
  },
});
