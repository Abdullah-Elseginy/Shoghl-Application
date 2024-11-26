import {StyleSheet} from 'react-native';
import {COLORS, FONTS, hp, wp} from '../../constants';

export const styles = StyleSheet.create({
  dropDownStyle: {
    paddingHorizontal: wp(3),
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    borderWidth: hp(0.1),
    height: hp(6),
    borderRadius: wp(2),
    width: '100%',
  },
  dropDownContainerStyle: {
    borderRadius: wp(2),
    alignItems: 'center',
    elevation: 1,
    borderColor: COLORS.primary,
    borderWidth: wp(0.1),
  },

  listItemLabelStyle: {
    color: COLORS.black,
    fontFamily: FONTS.Medium,
  },
  itemsContaienrStyle: {
    marginTop: wp(1),
    borderRadius: wp(2),
    padding: wp(1.5),
    alignItems: 'flex-start',
    width: wp(90),
  },
  selectedTextStyle: {
    color: COLORS.black,
    fontFamily: FONTS.Medium,
  },
  selectedItemLabelStyle: {
    color: COLORS.black,
    fontFamily: FONTS.Bold,
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
  bagetextStyle: {color: COLORS.gray},
  itemContainerStyle: {
    borderRadius: wp(2),
    marginTop: wp(1),
  },
  selectedIndicator: {
    color: COLORS.primaryLight, // Use the desired color for checkmark
    fontSize: 18,
  },
});
