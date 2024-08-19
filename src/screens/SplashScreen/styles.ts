import { StyleSheet } from 'react-native';
import { FONTS } from '../../constants/Fonts';
import { COLORS } from '../../constants/COLORS';
import { wp } from '../../constants/Dimensions';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    title: {
        marginStart: wp(2),
        fontSize: wp(10),
        color: COLORS.black,
        // fontFamily: FONTS.SemiBold,
    }
});
