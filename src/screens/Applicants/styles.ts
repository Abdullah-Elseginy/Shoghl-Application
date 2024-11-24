import {StyleSheet} from 'react-native';
import {COLORS, FONTS, hp, wp} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(5),
  },
  btn: {
    marginTop: hp(2),
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
  PrimaryColor: {
    color: COLORS.primary,
    fontFamily: FONTS.SemiBold,
  },
  filterBottm: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: hp(1),
    borderRadius: hp(1),
    padding: hp(1),
    marginTop: hp(3),
  },
  Line: {
    height: hp(0.1),
    backgroundColor: COLORS.grayLight,
    marginBottom: hp(1),
  },
  Conten: {
    justifyContent: 'space-between',
    width: '100%',
  },
  Count: {
    fontFamily: FONTS.Bold,
  },
  countBox: {
    borderRadius: wp(2),
    backgroundColor: COLORS.blueLight,
    color: COLORS.black,
    marginLeft: wp(4),
    paddingVertical: wp(1),
    width: wp(7),
    justifyContent: 'center',
    alignItems: 'center',
  },
  contencontainer: {paddingLeft: 20},
  filterChoices: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: hp(1),
  },
  ItemText: {marginLeft: hp(0.8)},
  CardBox: {
    marginBottom: wp(4),
    borderRadius: wp(2),
    borderWidth: wp(0.1),
    borderColor: COLORS.grayLight,
  },
  name: {
    fontFamily: FONTS.Bold,
    textAlign: 'center',
  },
  nameBox: {
    backgroundColor: COLORS.blueMoresmothy,
    padding: wp(2),
    borderEndStartRadius: wp(2),
    borderStartStartRadius: wp(2),
  },
  SkillsBox: {
    flexDirection: 'row',
    paddingHorizontal: wp(2),
    paddingVertical: wp(2),
  },
  title: {
    fontFamily: FONTS.SemiBold,
    color: COLORS.blue,
  },
  noJobs: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(20),
  },
  nottext: {
    fontFamily: FONTS.SemiBold,
    color: COLORS.primary,
  },
});
