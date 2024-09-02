import {StyleSheet} from 'react-native';
import {COLORS, FONTS, hp, wp} from '../../constants';

export const styles = StyleSheet.create({
  ScreenContainer: {
    // padding: wp(2),
  },
  Header: {
    backgroundColor: COLORS.primaryMoreLight,
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp(5),
  },
  PAddingContainer: {paddingHorizontal: wp(5), paddingTop: hp(1)},
  HeaderMainText: {
    fontSize: wp(5),
    marginTop: hp(4),
  },
  HeaderSubText: {
    color: COLORS.primary,
  },
  HowItWorkSection: {
    marginVertical: hp(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: hp(2.5),
    textTransform: 'capitalize',
    fontFamily: FONTS.Medium,
  },
  CarousalStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp(4),
  },
  carosalContentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: hp(3),
    backgroundColor: COLORS.blueLight,
    borderWidth: wp(0.1),
    marginRight: wp(2),
    borderColor: COLORS.grayLight,
  },
  desctext: {textAlign: 'center'},
  Text2: {
    fontFamily: FONTS.Bold,
  },
  SavongTimeSection: {
    padding: hp(2),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(1),
    marginBottom: hp(5),
    borderWidth: wp(0.1),
    borderColor: COLORS.grayLight,
  },
  savingTimeMainText: {
    fontFamily: FONTS.Bold,
    fontSize: wp(5),
    textAlign: 'center',
  },
});
