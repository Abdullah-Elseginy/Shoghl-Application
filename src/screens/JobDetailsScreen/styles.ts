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
    height: hp(11),
    borderRadius: hp(5),
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
  JobRequirementBox: {
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
  SkillsBox: {
    backgroundColor: COLORS.white,
    padding: hp(2),
    borderRadius: hp(1),
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
});
