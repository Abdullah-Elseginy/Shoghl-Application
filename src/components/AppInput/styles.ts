import { StyleSheet } from "react-native";
import { COLORS, Fonts, hp, wp } from "../../constants";

export const styles = StyleSheet.create({

    container: {
        width: wp(90),
        paddingHorizontal: wp(2.5),
        alignSelf: 'center',
    },
    label: {
        marginStart: wp(-2),
        fontSize: wp(3.5),
        // fontFamily: Fonts.Medium,
        color: COLORS.black
    },
    inputContainer: {
        flexDirection: 'row',
        width: wp(90),
        backgroundColor: COLORS.black,
        paddingVertical: hp(1.8),
        alignSelf: 'center',
        paddingHorizontal: wp(2.5),
        borderRadius: wp(2),
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: hp(1.5),
        marginTop: hp(0.5)
    },
    input: {
        flex: 1,
        marginHorizontal: wp(1.5),
        fontSize: wp(3.5),
        color: 'black',
    },
});
