import {StyleSheet} from 'react-native';
import {COLORS, FONTS, hp, wp} from '../../constants';

export const styles = StyleSheet.create({
  SearchBox: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    backgroundColor: COLORS.white,
    borderRadius: wp(1.5),
    padding: hp(1),
    marginBottom: hp(2),
  },
  container: {
    paddingHorizontal: wp(5),
    paddingTop: hp(1),
  },
  sectionTitle: {
    fontSize: hp(2.5),
    textTransform: 'capitalize',
    fontFamily: FONTS.Medium,
  },
  sectionSubTitle: {
    fontSize: hp(1.7),
    textTransform: 'capitalize',
    fontFamily: FONTS.Medium,
    color: COLORS.grayLight,
  },
  CareerLevelTitle: {marginTop: hp(-15)},
  containerStyle: {
    marginVertical: hp(2),
  },
  btn: {
    width: wp(50),
    alignSelf: 'center',
    marginTop: hp(2),
    marginBottom: hp(3),
  },
  jobBox: {
    borderWidth: hp(0.1),
    borderColor: COLORS.grayLight,
    borderRadius: hp(1),
    marginBottom: hp(3),
    marginRight: wp(2),
  },
  jobTopBox: {
    paddingHorizontal: wp(6),
    paddingVertical: hp(5),
  },
  jobTopContent: {
    marginStart: wp(8),
  },
  status: {
    color: COLORS.grayLight,
    fontSize: hp(1.8),
    textTransform: 'capitalize',
    marginBottom: hp(0.5),
  },
  job: {
    fontSize: hp(1.8),
    textTransform: 'capitalize',
    marginBottom: hp(0.5),
    fontFamily: FONTS.Medium,
  },
  HIWContentText: {textAlign: 'center'},
  period: {
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    borderRadius: hp(0.5),
    paddingHorizontal: hp(1),
    paddingTop: hp(0.4),
    paddingBottom: hp(0.1),
    fontSize: hp(1.8),
    textTransform: 'capitalize',
  },
  jobBottomBox: {
    backgroundColor: COLORS.grayMoreLight,
    paddingHorizontal: wp(6),
    paddingVertical: hp(3),
  },
  JobButtomBox2: {marginBottom: hp(2)},
  btnIcon: {
    marginEnd: wp(1.5),
  },
  LocationBTN: {marginStart: wp(20)},
  jobBottomTxt: {
    fontSize: hp(1.8),
    textTransform: 'capitalize',
  },
  HowItWorkBox: {
    marginRight: wp(2),
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(60),
    padding: hp(1),
    borderRadius: hp(1),
    borderWidth: hp(0.1),
    borderColor: COLORS.grayLight,
    marginBottom: hp(2),
  },
  SearchByCareer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(4),
    width: wp(60),
    borderWidth: wp(0.1),
    borderColor: COLORS.grayLight,
  },
  SearchByLocation: {
    width: wp(30),
    alignItems: 'center',
  },
  BrowseLocationTitle: {marginTop: hp(-3.5)},
  SearchLocationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Line: {
    height: hp(0.1),
    backgroundColor: COLORS.grayLight,
    marginVertical: hp(3),
  },
  HowItWorkSection: {
    marginVertical: hp(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  careerSearchSection: {
    textAlign: 'center',
    marginBottom: hp(9),
    justifyContent: 'center',
    alignItems: 'center',
  },
  MarginVertical: {
    marginVertical: wp(2),
  },
  BrowseJobbyCareerLevel: {
    marginBottom: hp(-11),
  },
  BrowseJobsbCareerLocation: {marginBottom: hp(-4)},
});
