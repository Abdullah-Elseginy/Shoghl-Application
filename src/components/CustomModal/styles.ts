import {StyleSheet} from 'react-native';
import {COLORS, FONTS, hp, wp} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.Overlay,
  },
  modalContent: {
    backgroundColor: COLORS.white,
    borderRadius: wp(2),
    padding: hp(2),
    width: wp(90),
    position: 'relative',
  },
  closeIcon: {
    position: 'absolute',
    top: hp(1),
    right: wp(3),
    padding: wp(2),
  },
  title: {
    fontSize: wp(3.5),
    fontFamily: FONTS.Bold,
    textAlign: 'center',
    marginBottom: hp(2),
    color: COLORS.black,
  },
  subtitle: {
    fontSize: wp(3),
    textAlign: 'center',
    color: COLORS.gray,
    marginBottom: 20,
  },
  stepContainer: {
    flexDirection: 'row',
    marginBottom: wp(4.5),
  },
  stepNumber: {
    width: wp(6),
    height: wp(6),
    borderRadius: wp(3),
    backgroundColor: COLORS.grayMoreLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(2),
  },
  stepText: {
    fontSize: wp(3),
    color: COLORS.gray,
  },
  stepInfo: {
    flex: 1,
  },
  stepTitle: {
    fontSize: wp(4),
    fontWeight: 'bold',
    color: COLORS.black,
  },
  stepSubtitle: {
    fontSize: wp(3),
    color: COLORS.gray,
  },
  email: {
    color: COLORS.black,
    fontWeight: 'bold',
  },
  resend: {
    color: COLORS.primary,
    marginTop: hp(0.7),
  },
  whyText: {
    color: COLORS.primary,
    marginBottom: hp(1),
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(0.5),
    paddingHorizontal: wp(2),
    marginBottom: wp(2),
  },
  uploadText: {
    color: COLORS.primary,
    fontSize: 14,
  },
  skipButton: {
    width: wp(30),
    height: hp(4.5),
  },
  skipButtonText: {
    color: COLORS.white,
    fontSize: wp(4),
  },
  helpCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  helpCenterText: {
    color: COLORS.primary,
    fontSize: wp(3.5),
    marginLeft: wp(1),
    fontFamily: FONTS.Bold,
  },
});
