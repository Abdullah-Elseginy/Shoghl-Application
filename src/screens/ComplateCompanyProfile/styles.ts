import {StyleSheet} from 'react-native';
import {COLORS, FONTS, hp, wp} from '../../constants';

export const styles = StyleSheet.create({
  CoverBackgroud: {
    backgroundColor: COLORS.white,
    height: hp(15),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(4),
  },
  coverImage: {
    alignItems: 'center',
    height: hp(20),
  },
  coverText: {
    color: COLORS.black,
    fontSize: hp(2),
    fontFamily: FONTS.SemiBold,
    textAlign: 'center',
  },
  ProfilePhotoBox: {
    backgroundColor: COLORS.white,
    marginBottom: hp(2),
    marginLeft: hp(2),
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(12),
  },
  TextsBox: {
    alignItems: 'flex-start',
  },
  HringBox: {
    borderWidth: wp(0.1),
    borderColor: COLORS.grayLight,
    padding: wp(3.5),
    marginTop: wp(8),
    borderRadius: wp(1.5),
    backgroundColor: COLORS.blueMoresmothy,
  },
  bottomStyle: {
    height: hp(4.5),
  },
  TextTitle: {
    fontSize: hp(2),
    fontFamily: FONTS.SemiBold,
  },
  subText: {
    color: COLORS.grayLight,
    marginVertical: hp(1),
  },
  subText2: {
    color: COLORS.grayLight,
    marginLeft: wp(1),
    width: wp(60),
  },
  Container: {
    paddingHorizontal: hp(2),
  },
  Section: {
    marginVertical: wp(8),
  },
  SectionTXT: {
    fontFamily: FONTS.Bold,
    fontSize: hp(2),
  },
  jobBox: {
    borderWidth: hp(0.1),
    borderColor: COLORS.grayLight,
    borderRadius: hp(1),
    marginBottom: hp(3),
    backgroundColor: COLORS.grayMoreLight,
    height: hp(31),
  },
  jobTopBox: {
    paddingHorizontal: wp(6),
    paddingVertical: hp(2),
    // backgroundColor:"#0dd"
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
  period3: {
    backgroundColor: COLORS.GreenSmothy2,
    borderColor: COLORS.GreenSmothy,
    color: COLORS.GreenSmothy,
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
  FlatBox: {marginTop: hp(0)},
  editDelateBox: {
    width: wp(16),
    backgroundColor: COLORS.danger,
    padding: hp(0.5),
    justifyContent: 'space-between',
    marginTop: hp(1),
    borderRadius: hp(1),
    height: hp(4),
  },
  Color: {
    backgroundColor: COLORS.primaryMoreLight,
  },
  EditBtn: {
    width: wp(25),
    height: hp(4.5),
  },
  InputContainerStyle: {
    width: wp(40),
    backgroundColor: COLORS.white,
    marginTop: hp(0.7),
  },
  InputContainerStyle2: {
    width: wp(40),
    backgroundColor: COLORS.grayMoreLight,
    marginTop: hp(0.7),
  },
  InputsSction: {
    marginTop: hp(2),
  },
  FlatBox2: {
    marginRight: wp(4),
    marginBottom: hp(2),
  },
});
