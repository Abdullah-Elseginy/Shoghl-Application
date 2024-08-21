import { StyleSheet } from "react-native";
import { COLORS, Fonts, hp, wp } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignSelf: 'center',
    },
    label: {
        fontSize: wp(3.5),
        color: COLORS.black,
        letterSpacing: hp(-0.1),
        marginBottom: hp(0.5)
    },
    inputContainer: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: COLORS.blueLight,
        paddingVertical: hp(0.1),
        paddingHorizontal: wp(2.5),
        borderRadius: wp(2.5),
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        flex: 1,
        marginHorizontal: wp(1),
        fontSize: wp(3.5),
        color: 'black',
    },
});
