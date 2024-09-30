import {StyleSheet} from 'react-native';
import {COLORS, FONTS, hp, wp} from '../../constants';

export const styles = StyleSheet.create({
  dropDownStyle: {
    backgroundColor: COLORS.blueLight,
    borderWidth: 0,
    paddingHorizontal: wp(3),
  },
  dropDownContainerStyle: {
    borderRadius: 10,
    zIndex: 12,
    alignItems: 'center',
  },
  listItemContainerStyle: {
    zIndex: 20,
  },
  listItemLabelStyle: {
    color: COLORS.black,
    fontFamily: FONTS.Medium,
  },
  itemsContaienrStyle: {
    borderWidth: 0,
    marginTop: wp(1),
    borderRadius: 10,
    backgroundColor: COLORS.blueLight,
    padding: wp(1.5),
  },
  selectedItemContainerStyle: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    paddingHorizontal: wp(1.5),
  },
  selectedItemLabelStyle: {
    color: COLORS.black,
    fontFamily: FONTS.Regular,
  },
  placeholderStyle: {
    color: COLORS.grayLight,
    fontFamily: FONTS.Regular,
  },
  labelStyle: {
    textTransform: 'capitalize',
    fontSize: hp(2),
    fontFamily: FONTS.Medium,
  },
});
