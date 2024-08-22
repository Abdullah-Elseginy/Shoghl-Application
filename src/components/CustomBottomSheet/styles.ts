import { StyleSheet } from 'react-native';
import { COLORS, hp, wp } from '../../constants';

export const styles = StyleSheet.create({
  sheetView: {
    backgroundColor: COLORS.white,
    paddingHorizontal: wp(5),
    paddingBottom: hp(1),
    overflow: 'hidden'
  },
  dragFromTopOnly: {
    width: wp(20),
    height: hp(.8),
    borderRadius: wp(5),
    alignSelf: "center",
    backgroundColor: COLORS.black,
    marginVertical: hp(2),
  }

});
