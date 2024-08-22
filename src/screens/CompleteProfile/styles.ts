import { StyleSheet } from 'react-native';
import { COLORS, FONTS, hp, wp } from '../../constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: wp(5),
    },
    contentTitle: {
        fontSize: hp(2.4),
        fontFamily: FONTS.SemiBold,
        marginTop: hp(2.5),
        marginBottom: hp(1.5),
        textTransform: 'capitalize',
    },
    inputContainerStyle: {
        marginBottom: hp(3),
    },
    inputLabel: {
        textTransform: 'capitalize',
        fontSize: hp(2),
        fontFamily: FONTS.Medium,
    },
    birthContainerStyle: {
        marginBottom: hp(3),
        width: '32%',
    },
    checkTxt: {
        marginStart: hp(1),
        fontSize: hp(1.8),
        textTransform: 'capitalize',
        fontFamily: FONTS.Medium,
    },
    smallTxt: {
        fontSize: hp(1.8),
        fontFamily: FONTS.Medium,
        color: COLORS.grayLight,
    }
});
