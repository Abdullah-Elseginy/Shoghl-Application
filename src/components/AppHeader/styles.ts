import {StyleSheet} from 'react-native';
import {COLORS, FONTS, hp, wp} from '../../constants';

export const styles = StyleSheet.create({
  arrowBack: {
    justifyContent: 'center',
    padding: wp(1.5),
    borderRadius: wp(1.5),
  },
  headerContainer: {
    paddingVertical: hp(2),
    width: '100%',
    paddingHorizontal: wp(4),
    alignSelf: 'center',
    borderColor: COLORS.grayLight,
    borderBottomWidth: hp(0.1),
    borderStartWidth: hp(0.1),
    borderEndWidth: hp(0.1),
    borderBottomStartRadius: hp(2),
    borderBottomEndRadius: hp(2),
  },
  titleBox: {
    flex: 1,
  },
  title: {
    fontSize: wp(4.5),
    color: COLORS.black,
    textTransform: 'capitalize',
    fontFamily: FONTS.Medium,
  },
});
