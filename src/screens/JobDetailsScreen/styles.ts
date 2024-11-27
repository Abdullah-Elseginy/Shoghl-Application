import {StyleSheet} from 'react-native';
import {COLORS, FONTS, hp, wp} from '../../constants';

export const styles = StyleSheet.create({
  profileBox: {
    padding: hp(2),
    // backgroundColor: '#ff0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageProfile: {
    width: wp(25),
    height: wp(25),
    borderRadius: wp(100),
  },
  JobNameText: {
    fontFamily: FONTS.Bold,
    fontSize: hp(2.5),
    marginTop: hp(1.2),
  },
  JobsiteText: {
    backgroundColor: COLORS.bluesmothy,
    padding: hp(0.6),
    borderRadius: hp(1),
    marginRight: wp(1),
  },
  FullTimeText: {marginBottom: hp(1.5)},
  locationBox: {
    marginTop: hp(1),
    // backgroundColor:COLORS.blue
  },
  Jobslocationtext: {
    color: COLORS.primary,
    fontFamily: FONTS.Bold,
    marginRight: hp(0.4),
  },
  ApplicationNumber: {
    fontFamily: FONTS.Bold,
    fontSize: wp(4.5),
    backgroundColor: COLORS.blueLight,
    borderRadius: wp(5),
    width: wp(7),
    textAlign: 'center',
    marginRight: wp(1),
  },
  Line: {
    height: hp(8),
    width: wp(0.5),
    backgroundColor: COLORS.grayMoreLight,
  },
  Viewers: {
    justifyContent: 'space-around',
    // backgroundColor: '#00f',
    width: '100%',
    marginTop: hp(1),
  },
  ViewrsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
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
  requrmentSectionBox: {
    marginBottom: hp(1),
  },

  textRequrments: {flex: 3},
  textRequrments2: {flex: 1},
  textRequrments3: {flex: 4},
  SkillsBox: {
    backgroundColor: COLORS.white,
    padding: hp(2),
    borderRadius: hp(1),
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  similarJobMainContainer: {
    backgroundColor: COLORS.white,
  },
  SimilarJobBoxs: {
    width: 200,
    // backgroundColor:COLO,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(1),
    borderColor: COLORS.grayMoreLight,
    borderWidth: hp(0.12),
    padding: hp(2),
  },
  similarjobtext: {
    fontFamily: FONTS.Bold,
    color: COLORS.primary,
    marginTop: hp(0.6),
  },
  location: {
    fontFamily: FONTS.ExtraLight,
  },
  company: {
    fontFamily: FONTS.Bold,
  },
  days: {
    fontFamily: FONTS.ExtraLight,
    color: COLORS.blue,
  },
  SimilarFuncDetails: {
    width: '100%',
    marginTop: hp(1),
  },
  Telimed: {
    fontFamily: FONTS.ExtraLight,
    marginLeft: wp(1),
  },
  relatedjobText: {
    fontFamily: FONTS.Bold,
    color: COLORS.primary,
  },
  LoaderBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Time: {
    color: COLORS.blue,
  },
  aplay: {
    width: wp(35),
    height: hp(4),
    marginRight: wp(4),
  },
  SavBox: {
    backgroundColor: COLORS.blueLight,
    borderRadius: wp(2),
    width: wp(8),
    height: hp(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  similarIm: {
    width: wp(22),
    height: hp(10),
  },
});
