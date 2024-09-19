import {StyleSheet} from 'react-native';
import {COLORS, FONTS, hp, wp} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  MainHeader: {
    marginTop: hp(2),
  },
  headerTExt: {
    color: COLORS.black,
    fontSize: wp(4),
    fontFamily: FONTS.SemiBold,
  },
  SupTExt: {
    color: COLORS.primary,
    fontFamily: FONTS.SemiBold,
    marginLeft: wp(1),
    textDecorationLine: 'underline',
  },
  SeconBox: {
    paddingHorizontal: wp(4),
  },
  InputSearch: {
    marginTop: hp(2),
    borderColor: COLORS.grayLight,
    borderWidth: wp(0.2),
  },
  Serxhbtn: {
    width: wp(20),
    height: hp(4),
  },
  filtersText: {
    fontSize: wp(4),
    fontFamily: FONTS.Bold,
    marginBottom: hp(0.8),
  },
  filterTextComplate: {marginRight: wp(2)},
  filterBottm: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: hp(1),
    borderRadius: hp(1),
    padding: hp(0.5),
    marginTop: hp(2),
  },
  Line: {
    height: hp(0.1),
    backgroundColor: COLORS.grayLight,
    marginBottom: hp(1),
  },
  filtersSections: {
    marginBottom: hp(1),
  },
  contencontainer: {paddingLeft: 20},
  filterChoices: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: hp(1),
  },
  ItemText: {marginLeft: hp(0.8)},
  buttomSheetScroll: {
    // backgroundColor:"#cce",
    paddingBottom: hp(10),
    marginTop: hp(2),
  },
  FilterBox: {
    padding: hp(2),
    borderWidth: wp(0.1),
    borderRadius: wp(1),
  },
  PrimaryColor: {
    color: COLORS.primary,
  },
  SectionTitle: {
    fontFamily: FONTS.SemiBold,
    marginVertical: hp(1),
  },
  DoneFilter: {
    marginTop: hp(4),
  },
  New: {
    paddingVertical: wp(0.2),
    paddingHorizontal: wp(2),
    backgroundColor: COLORS.primaryMoreLight,
    borderRadius: wp(2),
    marginLeft: wp(2),
  },
  nomber: {
    paddingVertical: wp(0.2),
    paddingHorizontal: wp(2),
    backgroundColor: COLORS.blueLight,
    marginLeft: wp(2),
    borderRadius: wp(2),
  },
  viewMoreButton: {
    paddingVertical: hp(1),
    marginTop: hp(-1),
  },
  viewMoreText: {
    color: COLORS.primary,
    textAlign: 'left',
  },
  SerchStyle: {
    borderWidth: wp(0.13),
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    height: hp(4.5),
    paddingVertical: hp(0),
    marginBottom: hp(1),
  },
  input: {
    paddingVertical: hp(0),
  },
  headerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Exit: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp(1),
    backgroundColor: COLORS.blueMoresmothy,
    borderRadius: wp(2),
    marginRight: wp(2),
  },
  SuggsionBox: {
    flexDirection: 'row',
    marginTop: hp(2),
  },
  tex2: {
    color: COLORS.blue,
  },
  texone: {
    color: COLORS.black,
    marginRight: wp(1),
  },
  bg: {
    // backgroundColor: COLORS.primary,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: hp(2),
    alignItems: 'center',
  },
  nobg: {
    backgroundColor: COLORS.white,
  },
  MainBox: {
    // backgroundColor: '#0ddd',
    marginTop: hp(2),
  },
  Box: {
    borderWidth: wp(0.13),
    borderColor: COLORS.grayLight,
    borderRadius: wp(1),
    padding: wp(2),
    backgroundColor: COLORS.blueMoresmothy,
    marginBottom: hp(2),
  },
  textsBox: {
    marginLeft: wp(2),
  },
  name: {
    fontSize: wp(4.3),
    fontFamily: FONTS.Bold,
    color: COLORS.blue,
  },
  supproftext: {
    color: COLORS.gray,
    width: wp(72),
  },
  lastseen: {
    color: COLORS.primary,
    fontStyle: 'italic',
  },
  Lock: {
    backgroundColor: COLORS.blue,
    borderRadius: wp(3),
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp(1),
    marginLeft: wp(1),
  },
  CV: {
    fontSize: wp(2.5),
    color: COLORS.blue,
    fontFamily: FONTS.SemiBold,
  },
  CVbg: {
    backgroundColor: COLORS.blueMoresmothy,
  },
  Apply: {
    fontSize: wp(2.1),
    fontFamily: FONTS.Bold,
    marginLeft: wp(1),
  },
  applyBox: {
    borderWidth: wp(0.3),
    borderColor: COLORS.primary,
    borderRadius: wp(1),
    padding: wp(0.4),
    alignSelf: 'flex-end',
    marginLeft: wp(3),
    paddingHorizontal: wp(0.5),
    backgroundColor: COLORS.primaryMoreLight,
  },
  namesbox: {
    marginBottom: hp(0.5),
  },
  Sectionmeduim: {
    marginLeft: wp(4),
  },
  medtexBox: {
    marginTop: hp(0.5),
    marginLeft: wp(2),
  },
  tex1: {
    color: COLORS.black,
    fontFamily: FONTS.SemiBold,
    width: wp(77),
  },
  jobtitle: {
    fontFamily: FONTS.Regular,
    color: COLORS.gray,
  },
  immmediatstart: {
    backgroundColor: COLORS.blueMoresmothy,
    padding: wp(1),
    borderRadius: wp(1),
    borderWidth: wp(0.1),
    borderColor: COLORS.blue,
  },
});
