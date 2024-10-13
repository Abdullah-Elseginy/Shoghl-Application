import {StyleSheet} from 'react-native';
import {COLORS, FONTS, hp, wp} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(5),
    paddingTop: hp(1),
  },
  userInfoBox: {
    alignItems: 'center',
  },
  username: {
    marginTop: hp(2),
    fontSize: hp(2.5),
    fontFamily: FONTS.Medium,
    textTransform: 'capitalize',
  },
  nickname: {
    fontSize: hp(2),
    fontFamily: FONTS.Medium,
    textTransform: 'capitalize',
  },
  infoBox: {
    width: wp(85),
    marginVertical: hp(1.3),
  },
  starting: {
    backgroundColor: COLORS.grayMoreLight,
    borderRadius: hp(1),
    padding: hp(0.5),
    fontSize: hp(1.8),
  },
  country: {
    fontSize: hp(1.8),
    textTransform: 'capitalize',
    color: COLORS.grayLight,
  },
  location: {
    fontSize: hp(1.8),
    textTransform: 'capitalize',
  },
  age: {
    fontSize: hp(1.8),
    textTransform: 'capitalize',
    color: COLORS.grayLight,
  },
  messageBtn: {
    width: wp(50),
    borderRadius: hp(1),
    marginTop: hp(1.5),
  },
  btnTxt: {
    color: COLORS.black,
    fontSize: wp(3.5),
  },
  btnIcon: {
    marginEnd: wp(1.5),
  },
  titleBox: {
    marginTop: hp(2),
    marginBottom: hp(1),
  },
  sectionTitle: {
    fontSize: hp(2.3),
    textTransform: 'capitalize',
    fontFamily: FONTS.Medium,
  },
  overviewBox: {
    backgroundColor: COLORS.grayMoreLight,
    borderRadius: hp(1),
    padding: hp(1),
    width: '45%',
    alignItems: 'center',
  },
  overviewData: {
    fontSize: hp(2),
  },
  overviewDataTitle: {
    fontSize: hp(2),
    textTransform: 'capitalize',
    color: COLORS.grayLight,
  },
  contactData: {
    fontSize: hp(1.8),
  },
  checkTxt: {
    marginStart: hp(1),
    fontSize: hp(1.8),
    textTransform: 'capitalize',
    color: COLORS.grayLight,
  },
  skillsBox: {
    width: '100%',
    flexWrap: 'wrap',
  },
  progresscontainer: {
    width: '70%',
    marginBottom: hp(1.5),
  },
  progressBox: {
    height: hp(0.7),
    borderRadius: hp(10),
    backgroundColor: COLORS.grayMoreLight,
  },
  bar: {
    backgroundColor: COLORS.primary,
    height: '100%',
    borderRadius: hp(10),
  },
  subject: {
    textTransform: 'capitalize',
  },
  copyBox: {
    borderColor: COLORS.black,
    borderWidth: hp(0.2),
    borderRadius: hp(0.5),
    marginTop: hp(2),
    marginBottom: hp(3),
    height: hp(5.5),
    backgroundColor: COLORS.white,
  },
  copyInputContainer: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 0,
    paddingTop: 0,
  },
  copyIconBox: {
    backgroundColor: COLORS.primary,
    borderRadius: hp(1),
    padding: hp(1.5),
    height: '100%',
    justifyContent: 'center',
  },
  shareBox: {
    padding: hp(1.5),
    backgroundColor: COLORS.primary,
    borderRadius: hp(1),
  },
  shareTxt: {
    marginStart: wp(2),
    textTransform: 'capitalize',
  },
  shareIt: {
    marginStart: wp(2),
    textTransform: 'capitalize',
    color: COLORS.blue,
  },
  switchTxt: {
    marginStart: hp(1),
    fontSize: hp(2),
  },
  about: {
    fontSize: hp(2.5),
    textTransform: 'capitalize',
    fontFamily: FONTS.SemiBold,
  },
  characteristics: {
    fontSize: hp(2),
    textTransform: 'capitalize',
  },
  protfolioBox: {
    backgroundColor: COLORS.grayMoreLight,
    padding: hp(2),
    borderRadius: hp(1),
    marginTop: hp(2.2),
    marginBottom: hp(1.5),
  },
  imagesTxt: {
    color: COLORS.black,
    fontSize: hp(1.5),
    textTransform: 'capitalize',
    position: 'absolute',
    bottom: 15,
    right: 15,
    paddingVertical: hp(0.3),
    paddingHorizontal: wp(4),
    paddingTop: hp(0.8),
    borderRadius: hp(1),
    backgroundColor: COLORS.white,
  },
  portfolioData: {
    fontSize: hp(2),
    textTransform: 'capitalize',
    fontFamily: FONTS.Medium,
  },
  prtfolioIcon: {
    marginStart: wp(6),
  },
  portfolioSubTxt: {
    fontSize: hp(1.8),
    marginStart: wp(5),
  },
  Logout: {
    backgroundColor: COLORS.danger,
  },
  loadinbox: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  aboutmeInput: {
    height: hp(25),
    paddingVertical: hp(0),
  },
});
