import {StyleSheet} from 'react-native';
import {COLORS, FONTS, hp, wp} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(5),
  },
  MainText: {
    fontSize: wp(5),
    marginTop: hp(2),
    textAlign: 'center',
    fontFamily: FONTS.Bold,
  },
  Aling: {
    textAlign: 'center',
  },
  contentTitle: {
    fontSize: hp(2.4),
    fontFamily: FONTS.SemiBold,
    marginTop: hp(2.5),
    marginBottom: hp(1.5),
    textTransform: 'capitalize',
  },
  inputLabel: {
    textTransform: 'capitalize',
    fontSize: hp(2),
    fontFamily: FONTS.Medium,
  },
  inputContainerStyle: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    borderWidth: hp(0.1),
    marginBottom: hp(3),
    marginTop: hp(1),
  },
  inputContainerStyleSalary: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    borderWidth: hp(0.1),
  },
  MArgins: {
    marginTop: hp(1),
    marginBottom: hp(2),
  },
  DropBorder: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    borderWidth: hp(0.1),
  },
  birthContainerStyle: {
    marginBottom: hp(3),
    width: '32%',
  },
  checkTxt: {
    marginStart: hp(1),
    fontSize: hp(1.8),
    textTransform: 'capitalize',
    fontFamily: FONTS.Medium,
  },
  smallTxt: {
    fontSize: hp(1.8),
    fontFamily: FONTS.Medium,
    color: COLORS.grayLight,
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
    backgroundColor: COLORS.primary,
  },
  textSlected: {
    color: COLORS.white,
    fontSize: wp(3.7),
  },
});
