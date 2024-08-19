import { StyleSheet } from 'react-native';
import { hp, wp } from '../../constants/Dimensions';
import { COLORS } from '../../constants/COLORS';
import { FONTS } from '../../constants/Fonts';
// import { COLORS, Fonts, hp, wp } from '../../constants';

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
    },
    modalView: {
        margin: wp('5%'),
        width: wp('90%'),
        backgroundColor: 'white',
        borderRadius: wp(5),
        paddingHorizontal: wp(8),
        alignItems: 'center',
        position: 'absolute',
        zIndex: 9999,
        top: hp(30),
        paddingVertical: hp(3),
        justifyContent: 'center',
    },
    image: {
        width: wp(40),
        height: hp(40),
    },
    modalTitleStyle: {
        textAlign: 'center',
        fontSize: wp(7),
        color: COLORS.black,
        fontWeight: '700',
        marginTop: wp(1),
        marginBottom: hp(1),
    },
    modalSubTitleStyle: {
        textAlign: 'center',
        fontSize: hp(2),
        color: COLORS.black,
    },

    primaryBtnStyle: {
        width: '100%',
        height: hp(6),
        borderRadius: hp(1),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        marginVertical: hp(2),
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1,
        shadowColor: COLORS.primary_light,
    },
    primaryBtnTxt: {
        fontSize: wp(4.5),
        fontWeight: '700',
        color: COLORS.white,
    },
    cancleBtnStyle: {
        width: '100%',
        height: hp(6),
        borderRadius: hp(1),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 1,
        shadowColor: COLORS.black,
    },
    cancle: {
        // fontFamily: FONTS.SemiBold,
        fontSize: wp(4.5),
        color: COLORS.primary,
    },
});
