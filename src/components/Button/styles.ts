import { StyleSheet } from 'react-native';
import { hp, wp } from '../../constants';

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: wp(3),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp(1),
    paddingTop: hp(0.3),
  },
});
