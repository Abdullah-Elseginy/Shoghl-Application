import { StyleSheet } from 'react-native';
import { COLORS, FONTS, hp, wp } from '../../constants';

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: wp(5),
        paddingTop: hp(1),
    },
    sectionTitle: {
        fontSize: hp(2.5),
        textTransform: 'capitalize',
        fontFamily: FONTS.Medium,
    },
    sectionSubTitle: {
        fontSize: hp(1.7),
        textTransform: 'capitalize',
        fontFamily: FONTS.Medium,
        color: COLORS.grayLight,
    },
    containerStyle: {
        marginVertical: hp(2),
    },
    btn: {
        width: wp(50),
        alignSelf: 'center',
        marginTop: hp(2),
        marginBottom: hp(3),
    },
    jobBox: {
        borderWidth: hp(0.1),
        borderColor: COLORS.grayLight,
        borderRadius: hp(1),
        marginBottom: hp(3)
    },
    jobTopBox: {
        paddingHorizontal: wp(6),
        paddingVertical: hp(5)
    },
    jobTopContent: {
        marginStart: wp(8)
    },
    status: {
        color: COLORS.grayLight,
        fontSize: hp(1.8),
        textTransform: 'capitalize',
        marginBottom: hp(0.5)
    },
    job: {
        fontSize: hp(1.8),
        textTransform: 'capitalize',
        marginBottom: hp(0.5),
        fontFamily: FONTS.Medium
    },
    period: {
        backgroundColor: COLORS.primary,
        color: COLORS.white,
        borderRadius: hp(0.5),
        paddingHorizontal: hp(1),
        paddingTop: hp(0.4),
        paddingBottom: hp(0.1),
        fontSize: hp(1.8),
        textTransform: 'capitalize',
    },
    jobBottomBox: {
        backgroundColor: COLORS.grayMoreLight,
        paddingHorizontal: wp(6),
        paddingVertical: hp(3)
    },
    btnIcon: {
        marginEnd: wp(1.5),
    },
    jobBottomTxt: {
        fontSize: hp(1.8),
        textTransform: 'capitalize',
    },
});
