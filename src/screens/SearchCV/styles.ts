import {StyleSheet} from 'react-native';
import {COLORS, FONTS, hp, wp} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  MainHeader: {
    height: hp(28),
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTExt: {
    color: COLORS.white,
    fontSize: wp(4),
    fontFamily: FONTS.SemiBold,
  },
  SupTExt: {
    color: COLORS.white,
    fontFamily: FONTS.SemiBold,
    marginLeft: wp(1),
  },
  SeconBox: {
    paddingHorizontal: wp(4),
  },
  InputSearch: {
    marginTop: hp(-3),
    borderColor: COLORS.black,
    borderWidth: wp(0.2),
  },
  Serxhbtn: {
    width: wp(20),
    height: hp(4),
  },
});
