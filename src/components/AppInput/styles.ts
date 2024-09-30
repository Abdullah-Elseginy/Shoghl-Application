import {StyleSheet} from 'react-native';
import {COLORS, FONTS, hp, wp} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontSize: wp(3.5),
    color: COLORS.black,
    letterSpacing: hp(-0.1),
    fontFamily: FONTS.Regular,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: wp(2.5),
    borderRadius: wp(2.5),
    paddingTop: hp(0.3),
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    borderWidth: hp(0.1),
  },
  input: {
    flex: 1,
    marginHorizontal: wp(1),
    fontSize: wp(3.5),
    color: 'black',
    fontFamily: FONTS.Regular,
  },

  ChildernView2: {
    flexDirection: 'row',
    borderRadius: wp(1),
    maxWidth: wp(42),
  },
  FlatListText: {
    marginRight: wp(2),
    padding: hp(0.8),
    backgroundColor: COLORS.primaryMoreLight,
    borderRadius: wp(2),
    fontFamily: FONTS.SemiBold,
    fontSize: wp(3),
  },
  menueOptions: {
    borderRadius: wp(2),
    width: wp(90),
    backgroundColor: COLORS.primaryMoreLight,
    position: 'relative',
    // elevation: 1,
    alignSelf: 'center',
    marginTop: hp(0.1),
  },
  rowOptions: {
    height: hp(5),
  },
  txt: {
    textTransform: 'capitalize',
    fontSize: wp(3.2),
    fontFamily: FONTS.Medium,
  },
});
