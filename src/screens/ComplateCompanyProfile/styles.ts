import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS, hp, wp} from '../../constants';

export const styles = StyleSheet.create({
  CoverBackgroud: {
    backgroundColor: COLORS.white,
    height: hp(15),
    // flexDirection: 'row',
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
    marginBottom: hp(0.5),
    justifyContent: 'center',
    alignItems: 'center',
    // height: hp(12),
    marginTop: hp(3),
  },
  TextsBox: {
    // alignItems: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
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
  },
  Container: {
    paddingHorizontal: hp(2),
    marginTop: hp(2),
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
    minHeight: hp(32),
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
    width: wp(20),
    backgroundColor: COLORS.danger,
    padding: hp(0.5),
    justifyContent: 'space-around',
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
  Logout: {
    backgroundColor: COLORS.danger,
  },
  Logout2: {
    marginHorizontal: wp(4),
  },

  container: {
    height: 400,
    backgroundColor: '#0dd',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  PDFVEw: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  im: {
    minWidth: wp(15),
    height: wp(15),
    borderRadius: wp(60),
  },
  Conten: {
    justifyContent: 'space-between',
    width: wp(58),
  },
  period4: {
    backgroundColor: COLORS.primaryMoreLight,
    color: COLORS.primary,
    borderColor: COLORS.primary,
  },
  marginT: {
    marginTop: hp(2),
  },
});
