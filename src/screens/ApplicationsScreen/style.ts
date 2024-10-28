import {StyleSheet} from 'react-native';
import {COLORS, FONTS, hp, wp} from '../../constants';

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
  },
  MAinheader: {
    marginTop: hp(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(2),
  },
  appication: {
    fontSize: wp(4),
    fontFamily: FONTS.SemiBold,
    color: COLORS.black,
  },
  applicationBox: {
    borderBottomWidth: hp(0.5),
    width: wp(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: COLORS.white,
  },
  selected: {
    borderBottomColor: COLORS.primary,
    borderBottomWidth: hp(0.5),
    width: wp(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdwon: {
    backgroundColor: COLORS.white,
    borderWidth: wp(0.21),
    borderColor: COLORS.primary,
    width: wp(73),
  },
  ItemsBox: {
    width: wp(73),
    marginRight: wp(6),
    marginTop: hp(2),
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    borderWidth: hp(0.1),
  },
  dropBox: {
    marginVertical: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sortedby: {
    fontFamily: FONTS.SemiBold,
    marginRight: wp(2.8),
  },
  searchBox: {
    backgroundColor: COLORS.grayMoreLight,
    borderRadius: wp(4),
    padding: wp(1),
  },
  searchText: {
    color: COLORS.primary,
  },
  Bold: {
    fontFamily: FONTS.Bold,
  },
  Box: {
    borderWidth: wp(0.21),
    borderColor: COLORS.primary,
    borderRadius: wp(2),
    padding: wp(2),
    width: wp(45),
    marginTop: hp(1),
  },
  mainbox: {
    marginTop: hp(2),
  },
  jobBox: {
    borderWidth: hp(0.1),
    borderColor: COLORS.grayLight,
    borderRadius: hp(1),
    marginBottom: hp(2),
  },
  jobTopBox: {
    paddingHorizontal: wp(6),
    paddingVertical: hp(2),
  },
  jobTopContent: {
    marginStart: wp(4),
  },
  status: {
    color: COLORS.primary,
    fontSize: hp(1.3),
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
  btn: {
    marginTop: hp(2),
  },
  marTop: {
    marginTop: hp(3),
  },
  filtersText: {
    fontSize: wp(4),
    fontFamily: FONTS.Bold,
    marginBottom: hp(0.8),
  },
  Conten: {
    justifyContent: 'space-between',
    width: wp(58),
  },
  period3: {
    backgroundColor: COLORS.dangerLight,
    color: COLORS.red,
    borderColor: COLORS.red,
  },
  period4: {
    backgroundColor: COLORS.primaryMoreLight,
    color: COLORS.primary,
    borderColor: COLORS.primary,
  },
  im: {
    minWidth: wp(20),
    height: hp(10),
    borderRadius: wp(10),
  },
});
export default styles;
