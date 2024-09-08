import {StyleSheet} from 'react-native';
import {COLORS, FONTS, hp, wp} from '../../constants';

export const styles = StyleSheet.create({
  CoverBackgroud: {
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    height: hp(20),
  },
  coverText: {
    color: COLORS.white,
    fontSize: hp(2),
    fontFamily: FONTS.SemiBold,
    textAlign: 'center',
    marginBottom: hp(1),
    marginTop: hp(2),
  },
  ProfilePhotoBox: {
    backgroundColor: COLORS.white,
    borderRadius: hp(50),
    width: hp(15),
    height: hp(15),
    overflow: 'hidden',
    marginBottom: hp(2),
    marginLeft: hp(2),
    // alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(-7.5),
    borderWidth: wp(0.5),
    borderColor: COLORS.grayLight,
  },
});
