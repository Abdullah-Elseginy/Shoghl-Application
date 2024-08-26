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
        paddingTop: hp(18),
        marginBottom: hp(3),
    },
    contentContainer: {
        flex: 1,
        backgroundColor: COLORS.grayMoreLight,
        borderTopStartRadius: hp(7),
        borderTopEndRadius: hp(7),
    },
    signin: {
        fontSize: hp(2.5),
        marginTop: hp(2),
        marginBottom: hp(1.5),
        letterSpacing: hp(-0.2),
        textAlign: 'center',
    },
    loginContent: {
        flex: 1,
        backgroundColor: COLORS.white,
        borderTopStartRadius: hp(7),
        borderTopEndRadius: hp(7),
        paddingHorizontal: hp(4.5),
        paddingTop: hp(8),
    },
    containerStyle: {
        marginBottom: hp(3),
    },
    inputLabel: {
        textTransform: 'uppercase'
    },
    btn: {
        marginVertical: hp(4.5),
        alignSelf: 'center',
        height: hp(7),
        borderRadius: hp(4)
    },
    btnTxt: {
        textTransform: 'uppercase',
        letterSpacing: hp(0.2)
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
        fontSize: hp(1.8),
        color: COLORS.primary,
        fontFamily: FONTS.Medium
    }
});
