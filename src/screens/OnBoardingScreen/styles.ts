import {StyleSheet} from 'react-native';
import {COLORS, FONTS, wp} from '../../constants';

const styles = StyleSheet.create({
  subtitle: {
    color: COLORS.grayLight,
    fontSize: 18,
    maxWidth: '80%',
    textAlign: 'center',
    lineHeight: 33,
    fontFamily: FONTS.Medium,
  },
  subtitle_top: {
    color: COLORS.grayLight,
    fontSize: 18,
    maxWidth: '80%',
    textAlign: 'center',
    lineHeight: 33,
    fontFamily: FONTS.Medium,
    marginBottom: 30,
  },
  title_head_top: {
    color: COLORS.primary,
    fontSize: 30,
    marginTop: 20,
    fontFamily: FONTS.SemiBold,
    textAlign: 'center',
  },
  title_top: {
    color: COLORS.black,
    fontSize: 16,
    marginTop: 20,
    fontFamily: FONTS.Regular,
    textAlign: 'center',
    width: wp(80),
  },
  title: {
    color: COLORS.black,
    fontSize: 20,
    marginTop: 40,
    fontFamily: FONTS.Regular,
    textAlign: 'center',
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: COLORS.grayLight,
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    backgroundColor: '#fff',
    marginLeft: 12,
    marginTop: 18,
    fontFamily: FONTS.Medium,
  },
  btn_start: {
    flex: 1,
    height: 50,
    backgroundColor: COLORS.primary,
    borderRadius: 4,
    color: COLORS.white,
    fontFamily: FONTS.Medium,
  },
  startNowBtn: {
    color: COLORS.white,
    textAlign: 'center',
    lineHeight: 52,
    fontSize: wp(4),
    fontFamily: FONTS.Medium,
    textTransform: 'uppercase',
  },
  skip_btn: {
    fontFamily: FONTS.Medium,
    fontSize: wp(5),
    color: COLORS.grayLight,
    textAlign: 'left',
    textTransform: 'capitalize',
  },
  bottomSheetBlock: {
    textAlign: 'right',
    padding: 12,
  },
  actionItemBlock: {
    padding: 0,
    margin: 0,
  },
  actionItem: {
    width: '100%',
  },
  actionBlock: {
    width: '100%',
    padding: 16,
  },
  actionBtns: {
    width: '100%',
    marginVertical: 16,
  },
  textTitle: {
    fontFamily: FONTS.Medium,
    marginBottom: 16,
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  frameRadius: {
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 16,
  },
});
export default styles;
