import { StyleSheet } from 'react-native';
import { COLORS, FONTS, hp, wp } from '../../constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: wp(5),
    },
    userInfoBox: {
        paddingTop: hp(1),
        alignItems: 'center',
    },
    username: {
        marginTop: hp(2),
        fontSize: hp(2.5),
        fontFamily: FONTS.Medium,
        textTransform: 'capitalize',
    },
    nickname: {
        fontSize: hp(2),
        fontFamily: FONTS.Medium,
        textTransform: 'capitalize',
    },
    infoBox: {
        width: wp(85),
        marginVertical: hp(1.3),
    },
    starting: {
        backgroundColor: COLORS.grayMoreLight,
        borderRadius: hp(1),
        padding: hp(1),
        fontSize: hp(1.8),
    },
    country: {
        fontSize: hp(1.8),
        textTransform: 'capitalize',
        color: COLORS.grayLight,
    },
    location: {
        fontSize: hp(1.8),
        textTransform: 'capitalize',
    },
    age: {
        fontSize: hp(1.8),
        textTransform: 'capitalize',
        color: COLORS.grayLight,
    },
    messageBtn: {
        width: wp(50),
        borderRadius: hp(1),
        marginTop: hp(1.5),
    },
    btnTxt: {
        color: COLORS.black,
        fontSize: wp(3.5),
    },
    btnIcon: {
        marginEnd: wp(1.5),
    },
});
