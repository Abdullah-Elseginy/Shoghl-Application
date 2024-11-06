import {StyleSheet} from 'react-native';
import {COLORS, hp, wp} from '../../constants';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: wp(4),
    borderRadius: wp(2),
    alignItems: 'center',
    paddingHorizontal: wp(8),
  },
  message: {
    marginTop: hp(2),
    fontSize: wp(3),
    color: COLORS.black,
    textAlign: 'center',
  },
});

export default styles;
