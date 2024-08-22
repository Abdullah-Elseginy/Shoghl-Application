import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/COLORS';
import { hp } from '../../constants/Dimensions';
import { FONTS } from '../../constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primaryLight
    },
    center: {
        alignItems: 'center',
        paddingTop: hp(12)
    },
    signin: {
        fontSize: hp(4.1),
        marginTop: hp(3),
        marginBottom: hp(3),
        letterSpacing: hp(-0.2)
    },
    loginContent: {
        flex: 1,
        backgroundColor: COLORS.white,
        borderTopStartRadius: hp(3),
        borderTopEndRadius: hp(3),
        paddingHorizontal: hp(3),
        paddingVertical: hp(3),
    },
    containerStyle: {
        marginBottom: hp(6.5),
    },
    inputLabel: {
        textTransform: 'uppercase'
    },
    btn: {
        marginVertical: hp(5.5),
        alignSelf: 'center'
    },
    btnTxt: {
        textTransform: 'uppercase',
    },
    remember: {
        marginStart: hp(1),
        color: COLORS.grayLight
    },
    forgot: {
        fontSize: hp(1.8),
        marginStart: hp(1),
        color: COLORS.primary,
        textTransform: 'capitalize',
    },
    dont: {
        fontSize: hp(1.8),
        marginStart: hp(1),
    },
    signup: {
        fontSize: hp(1.6),
        marginStart: hp(3),
        textTransform: 'uppercase',
        color: COLORS.primary,
        fontFamily: FONTS.SemiBold
    }
});
