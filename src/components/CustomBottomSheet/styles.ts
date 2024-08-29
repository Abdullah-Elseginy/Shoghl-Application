import {StyleSheet} from 'react-native';
import {COLORS, hp, wp} from '../../constants';

export const styles = StyleSheet.create({
  sheetView: {
    backgroundColor: COLORS.white,
    paddingHorizontal: wp(5),
    paddingBottom: hp(1),
    overflow: 'hidden',
  },
  dragFromTopOnly: {
    width: wp(20),
    height: hp(0.8),
    borderRadius: wp(5),
    alignSelf: 'center',
    backgroundColor: COLORS.black,
    marginVertical: hp(2),
  },
  container: {
    borderTopLeftRadius: wp(5),
    borderTopRightRadius: wp(5),
  },
  DraglbleIcon: {
    backgroundColor: COLORS.black,
    width: wp(40),
    marginTop: hp(3),
  },
});
