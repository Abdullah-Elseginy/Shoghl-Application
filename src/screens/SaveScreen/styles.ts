import {StyleSheet} from 'react-native';
import {COLORS, FONTS, hp, wp} from '../../constants';

const styles = StyleSheet.create({
  jobBox: {
    borderWidth: hp(0.1),
    borderColor: COLORS.grayLight,
    borderRadius: hp(1),
    marginBottom: hp(2),
    padding: wp(4),
  },
  jobTopBox: {
    // paddingHorizontal: wp(6),
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
  // PeriodBox: {width:'100%'},
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
    // paddingHorizontal: wp(6),
    paddingTop: hp(3),
    marginBottom: hp(1),
  },
  JocBttomBox: {marginBottom: hp(2)},
  btnIcon: {
    marginEnd: wp(1.5),
  },
  jobBottomTxt: {
    fontSize: hp(1.8),
    textTransform: 'capitalize',
  },
  LocationIcon: {marginStart: wp(2)},
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
  contencontainer: {paddingLeft: 20},
  container: {
    paddingHorizontal: wp(5),
    paddingTop: hp(1),
  },
  Secion1Box: {
    minHeight: hp(15),
    padding: hp(2),
    justifyContent: 'center',
    alignItems: 'center',
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
  contanBox: {
    marginTop: hp(5),
  },
  LoadingBox: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  im: {
    minWidth: wp(20),
    height: hp(10),
    borderRadius: wp(10),
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
  unsavebtn: {
    alignSelf: 'flex-end',
    height: hp(3.5),
    backgroundColor: COLORS.blueLight,
    padding: wp(1),
    borderRadius: wp(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
