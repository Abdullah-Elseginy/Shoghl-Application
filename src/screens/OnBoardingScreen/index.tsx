/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    FlatList,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';
import { COLORS, FONTS, hp, wp } from '../../constants';
import { changeIsSkipping } from '../../redux/slices/authSlice';
import { ArrowRightSVG, FrameOneSVG, FrameThreeSVG, FrameTwoSVG } from '../../assets';
import ScreenNames from '../../navigations/ScreenNames';
import LogoBlackSVG from '../../assets/svg/LogoBlackSVG';
const { width, height } = Dimensions.get('window');

type Props = {
    navigation: NativeStackNavigationProp<ParamListBase>;
};

const slides = [
    {
        id: '1',
        titleHead: 'Post a Job',
        title: 'Select a package that suits your needs and submit your job details',
        bold: 'Shoghl',
        subtitle: ' helps you achieve your goals!',
    },
    {
        id: '2',
        titleHead: 'Advertise',
        title: 'Advertise your listings and find candidates interested in your job offer',
        bold: 'Shoghl',
        subtitle: ' helps you achieve your goals!',
    },
    {
        id: '3',
        titleHead: 'Recruit',
        title: 'Allow candidates to apply to jobs via a form and rate or comment them',
        bold: 'Shoghl',
        subtitle: ' helps you achieve your goals!',
    },
];

const Slide = ({ item }) => {
    return (
        <SafeAreaView
            style={{
                alignItems: 'center',
                padding: 0,
                justifyContent: 'center',
                width: width,
                maxHeight: '85%',
            }}
        >
            {item.id == 1 ? (
                <>
                    <View style={{ alignItems: 'center', marginBottom: hp(5) }}>
                        <LogoBlackSVG />
                    </View>
                    <Text style={styles.subtitle_top}>
                        <Text
                            style={{
                                fontFamily: FONTS.SemiBold,
                                color: COLORS.black,
                            }}
                        >
                            {item.bold}
                        </Text>{' '}
                        {item.subtitle}
                    </Text>
                    <FrameOneSVG />
                    <Text style={styles.title_head_top}>{item.titleHead}</Text>
                    <Text style={styles.title_top}>{item.title}</Text>
                </>
            ) : null}
            {item.id == 2 ? (
                <>
                    <View style={{ alignItems: 'center', marginBottom: hp(5) }}>
                        <LogoBlackSVG />
                    </View>
                    <Text style={styles.subtitle_top}>
                        <Text
                            style={{
                                fontFamily: FONTS.SemiBold,
                                color: COLORS.black,
                            }}
                        >
                            {item.bold}
                        </Text>{' '}
                        {item.subtitle}
                    </Text>
                    <FrameTwoSVG />
                    <Text style={styles.title_head_top}>{item.titleHead}</Text>
                    <Text style={styles.title_top}>{item.title}</Text>
                </>
            ) : null}
            {item.id == 3 ? (
                <>
                    <View style={{ alignItems: 'center', marginBottom: hp(5) }}>
                        <LogoBlackSVG />
                    </View>
                    <Text style={styles.subtitle_top}>
                        <Text
                            style={{
                                fontFamily: FONTS.SemiBold,
                                color: COLORS.black,
                            }}
                        >
                            {item.bold}
                        </Text>{' '}
                        {item.subtitle}
                    </Text>
                    <FrameThreeSVG />
                    <Text style={styles.title_head_top}>{item.titleHead}</Text>
                    <Text style={styles.title_top}>{item.title}</Text>
                </>
            ) : null}
        </SafeAreaView>
    );
};

const OnBoardingScreen = ({ navigation }: Props) => {
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
    const dispatch = useDispatch();
    const ref = React.useRef();

    const updateCurrentSlideIndex = (e) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    const goToNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current.scrollToOffset({ offset });
            setCurrentSlideIndex(currentSlideIndex + 1);
        }
    };

    const skip = () => {
        const lastSlideIndex = slides.length - 1;
        const offset = lastSlideIndex * width;
        ref?.current.scrollToOffset({ offset });
        setCurrentSlideIndex(lastSlideIndex);
    };

    const Footer = () => {
        return (
            <View
                style={{
                    height: height * 0.18,
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                }}
            >
                {/* Indicator container */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: 20,
                    }}
                >
                    {/* Render indicator */}
                    {slides.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.indicator,
                                currentSlideIndex == index && {
                                    backgroundColor: COLORS.black,
                                    width: 25,
                                },
                            ]}
                        />
                    ))}
                </View>

                {/* Render buttons */}
                <View style={{ marginBottom: 20 }}>
                    {currentSlideIndex == slides.length - 1 ? (
                        <View style={{ height: 50 }}>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                style={styles.btn_start}
                                onPress={() => {
                                    dispatch(changeIsSkipping());
                                    navigation.replace(ScreenNames.Login);
                                }}
                            >
                                <Text style={styles.startNowBtn}>start now</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={[
                                    styles.btn,
                                    {
                                        borderColor: 'none',
                                        borderWidth: 0,
                                        backgroundColor: 'transparent',
                                    },
                                ]}
                                onPress={skip}
                            >
                                <Text style={styles.skip_btn}>skip</Text>
                            </TouchableOpacity>
                            <View style={{ width: 15 }} />
                            <TouchableOpacity onPress={goToNextSlide}>
                                <ArrowRightSVG />
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar backgroundColor={COLORS.black} barStyle="default" />
            <FlatList
                ref={ref}
                onMomentumScrollEnd={updateCurrentSlideIndex}
                contentContainerStyle={{ height: height * 0.9 }}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={slides}
                pagingEnabled
                renderItem={({ item }) => <Slide item={item} />}
            />
            <Footer />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    subtitle: {
        color: COLORS.grayLight,
        fontSize: 18,
        maxWidth: '80%',
        textAlign: 'center',
        lineHeight: 33,
        fontFamily: FONTS.Medium,
    },
    subtitle_top: {
        color: COLORS.grayLight,
        fontSize: 18,
        maxWidth: '80%',
        textAlign: 'center',
        lineHeight: 33,
        fontFamily: FONTS.Medium,
        marginBottom: 30,
    },
    title_head_top: {
        color: COLORS.primary,
        fontSize: 20,
        marginTop: 40,
        fontFamily: FONTS.SemiBold,
        textAlign: 'center',
    },
    title_top: {
        color: COLORS.black,
        fontSize: 18,
        marginTop: 40,
        fontFamily: FONTS.Regular,
        textAlign: 'center',
    },
    title: {
        color: COLORS.black,
        fontSize: 20,
        marginTop: 40,
        fontFamily: FONTS.Regular,
        textAlign: 'center',
    },
    indicator: {
        height: 2.5,
        width: 10,
        backgroundColor: COLORS.primaryLight,
        marginHorizontal: 3,
        borderRadius: 2,
    },
    btn: {
        flex: 1,
        height: 50,
        backgroundColor: '#fff',
        marginLeft: 12,
        marginTop: 18,
        fontFamily: FONTS.Medium,
    },
    btn_start: {
        flex: 1,
        height: 50,
        backgroundColor: COLORS.primary,
        borderRadius: 4,
        color: COLORS.white,
        fontFamily: FONTS.Medium,
    },
    startNowBtn: {
        color: COLORS.white,
        textAlign: 'center',
        lineHeight: 52,
        fontSize: wp(4),
        fontFamily: FONTS.Medium,
        textTransform: 'capitalize',
    },
    skip_btn: {
        fontFamily: FONTS.Medium,
        fontSize: wp(4),
        color: COLORS.black,
        textAlign: 'left',
    },
    bottomSheetBlock: {
        textAlign: 'right',
        padding: 12,
    },
    actionItemBlock: {
        padding: 0,
        margin: 0,
    },
    actionItem: {
        width: '100%',
    },
    actionBlock: {
        width: '100%',
        padding: 16,
    },
    actionBtns: {
        width: '100%',
        marginVertical: 16,
    },
    textTitle: {
        fontFamily: FONTS.Medium,
        marginBottom: 16,
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.black,
    },
    frameRadius: {
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        padding: 16,
    },
});
export default OnBoardingScreen;
