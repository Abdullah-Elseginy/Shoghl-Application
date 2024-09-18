import {StyleSheet} from 'react-native';
import {COLORS, FONTS, hp, wp} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  MainHeader: {
    // height: hp(28),
    // backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
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
    backgroundColor: COLORS.primary,
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
});
