import { StyleSheet } from 'react-native';
import { COLORS, Fonts, hp, wp } from '../../constants';


export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
  },
  arrowBack: {
    justifyContent: 'center',
    transform: [{ rotateY: '180deg' }],
    padding: wp(1.5),
    borderRadius: wp(1.5)
  }
  ,
  headerContainer: {
    paddingVertical: hp(3),
    width: wp(90),
    alignSelf: 'center',
  },
  titleBox: {
    flex: 1,
  },
  title: {
    fontSize: wp(4.5),
    // fontFamily: Fonts.Medium,
    marginStart: wp(3),
    color: COLORS.black,
    textTransform: 'capitalize'
  },
  xp: {
    backgroundColor: COLORS.black,
    marginEnd: wp(3),
    color: COLORS.white,
    paddingHorizontal: wp(3.3),
    paddingVertical: hp(0.6),
    borderRadius: wp(3),
    fontSize: wp(3),
    overflow: 'hidden'
  },
});
