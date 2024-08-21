import { StyleSheet } from 'react-native';
import { hp, wp } from './Dimensions';
import { FONTS } from './Fonts';

export const generalStyles = StyleSheet.create({
  ScreenContainer: {
    paddingHorizontal: wp(5),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  flex: {
    flex: 1
  },
  btn: {
    height: hp(6),
  },
  btnTxt: {
    fontSize: wp(4),
    textTransform: 'capitalize',
    // fontFamily: FONTS.Medium,
  },
  txt: {
    fontSize: wp(6),
    textTransform: 'capitalize',
    // color: COLORS.primary,
  },
  toAlignTxt: {
    marginTop: hp(-1),
  },
  contentContainerStyle: {
    paddingBottom: hp(5)
  },
  circle: {
    width: wp(9),
    height: wp(9),
    borderRadius: wp(5),
    // backgroundColor: COLORS.blue_extra_light,
    alignItems: "center",
    justifyContent: "center"
  }
});
