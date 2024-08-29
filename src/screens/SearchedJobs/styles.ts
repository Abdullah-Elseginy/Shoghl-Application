/* eslint-disable quotes */
import {StyleSheet} from 'react-native';
import {COLORS, FONTS, hp, wp} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(5),
    paddingTop: hp(1),
  },
  sectionTitle: {
    fontSize: hp(2.5),
    textTransform: 'capitalize',
    fontFamily: FONTS.Bold,
    textAlign: 'center',
  },
  jobsNumber: {
    color: COLORS.grayLight,
  },
  Secion1Box: {
    minHeight: hp(15),
    padding: hp(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  FilterBox: {
    padding: hp(2),
    borderWidth: wp(0.1),
    borderRadius: wp(1),
  },
  buttomSheetScroll: {
    // backgroundColor:"#cce",
    paddingBottom: hp(10),
    marginTop: hp(2),
  },
  filtersSections: {
    marginBottom: hp(1),
  },
  filtersText: {
    fontSize: wp(4),
    fontFamily: FONTS.Bold,
    marginBottom: hp(0.8),
  },
  filterTextComplate: {marginRight: wp(2)},
  Line: {
    height: hp(0.1),
    backgroundColor: COLORS.grayLight,
    marginBottom: hp(1),
  },
  PrimaryColor: {
    color: COLORS.primary,
  },
  filterBottm: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: hp(1),
    backgroundColor: COLORS.primary,
    borderRadius: hp(1),
    padding: hp(1),
  },
  contencontainer: {paddingLeft: 20},
  filterChoices: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: hp(1),
  },
  ItemText: {marginLeft: hp(0.8)},
  jobBox: {
    borderWidth: hp(0.1),
    borderColor: COLORS.grayLight,
    borderRadius: hp(1),
    marginBottom: hp(3),
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
  PeriodBox: {width: wp(50)},
  period: {
    backgroundColor: COLORS.yellowlight,
    borderColor: COLORS.yellow,
    borderWidth: wp(0.2),
    color: COLORS.yellow,
    borderRadius: hp(0.5),
    paddingHorizontal: hp(1),
    paddingTop: hp(0.4),
    paddingBottom: hp(0.1),
    fontSize: hp(1.8),
    textTransform: 'capitalize',
    alignSelf: 'center',
  },
  period2: {
    backgroundColor: COLORS.blueLight,
    borderColor: COLORS.blue,
    color: COLORS.blue,
    borderWidth: wp(0.2),
    borderRadius: hp(0.5),
    paddingHorizontal: hp(1),
    paddingTop: hp(0.4),
    paddingBottom: hp(0.1),
    fontSize: hp(1.8),
    textTransform: 'capitalize',
    alignSelf: 'center',
  },
  jobBottomBox: {
    paddingHorizontal: wp(6),
    paddingVertical: hp(3),
  },
  JocBttomBox: {marginBottom: hp(2)},
  btnIcon: {
    marginEnd: wp(1.5),
  },
  jobBottomTxt: {
    fontSize: hp(1.8),
    textTransform: 'capitalize',
  },
  LocationIcon: {marginStart: wp(20)},
  quetionBox: {
    padding: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: wp(0.1),
    borderColor: COLORS.grayLight,
    alignItems: 'center',
    marginBottom: hp(2),
    borderRadius: hp(1),
  },
});
