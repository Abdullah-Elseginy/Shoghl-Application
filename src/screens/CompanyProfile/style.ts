import {StyleSheet} from 'react-native';
import {COLORS, FONTS, hp, wp} from '../../constants';

export const styles = StyleSheet.create({
  profileBox: {
    padding: hp(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageProfile: {
    width: wp(25),
    height: hp(11),
    borderRadius: hp(5),
  },
  JobNameText: {
    fontFamily: FONTS.Bold,
    fontSize: hp(2.5),
    marginRight: wp(1),
  },
  companydetailsText: {
    marginTop: hp(0.2),
    textAlign: 'center',
    fontSize: hp(2),
    color: COLORS.grayLight,
  },
  CompanyNameBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(1.3),
  },
  LinkText: {
    color: COLORS.primary,
    marginLeft: wp(1),
  },
  ShareLink: {
    marginTop: hp(1.6),
  },
  JobRequirementBoxs: {
    backgroundColor: COLORS.grayMoreLight,
    borderWidth: wp(0.1),
    borderColor: COLORS.grayLight,
    padding: hp(2),
    borderRadius: wp(1),
    marginBottom: hp(2),
  },
  Titles: {
    fontFamily: FONTS.Bold,
    fontSize: hp(2),
    marginBottom: hp(2),
  },
  relatedjobText: {
    fontFamily: FONTS.Bold,
    color: COLORS.primary,
  },
  textRequrments: {flex: 3},
  textRequrments2: {flex: 1},
  SkillsBox: {
    backgroundColor: COLORS.white,
    padding: hp(2),
    borderRadius: hp(1),
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  Telimed2: {
    fontFamily: FONTS.ExtraLight,
    marginLeft: wp(2),
  },
  Telimed1: {
    fontFamily: FONTS.Bold,
    // marginLeft: wp(5),
    // backgroundColor: '#00f',
  },
  location: {
    fontFamily: FONTS.ExtraLight,
  },
  MArginTop: {
    marginTop: hp(1.2),
    flexDirection: 'row',
    alignItems: 'center',
  },
  MArginRight: {marginRight: wp(1.5)},
  DescriptionText: {
    marginLeft: wp(4),
    marginTop: hp(1.5),
  },
});
