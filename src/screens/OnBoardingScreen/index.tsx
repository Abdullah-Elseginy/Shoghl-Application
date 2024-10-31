/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {COLORS, hp, wp} from '../../constants';
import {
  changeIsSkipping,
  SetShowOnBoarding,
} from '../../redux/slices/authSlice';
import ScreenNames from '../../navigations/ScreenNames';
import {Button, CustomText} from '../../components';
import styles from './styles';
import {slides} from '../../utils/Data';
const {width, height} = Dimensions.get('window');

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>;
};

const Slide = ({item}: any) => {
  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
        padding: 0,
        justifyContent: 'center',
        width: width,
        maxHeight: '85%',
      }}>
      <Image
        source={item.url}
        style={{width: wp(85), height: hp(45)}}
        resizeMode="contain"
      />
      <CustomText text={item.titleHead} textStyle={styles.title_head_top} />
      <CustomText text={item.titled} textStyle={styles.title_top} />
    </SafeAreaView>
  );
};

const OnBoardingScreen = ({navigation}: Props) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const dispatch = useDispatch();
  const ref = React.useRef();

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
    dispatch(SetShowOnBoarding(false));
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.18,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.primary,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{marginBottom: 20}}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{height: 50}}>
              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.btn_start}
                onPress={() => {
                  dispatch(changeIsSkipping());
                  dispatch(SetShowOnBoarding(false));
                  navigation.replace(ScreenNames.Login);
                }}>
                <CustomText text="start" textStyle={styles.startNowBtn} />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
                onPress={skip}>
                <CustomText text="skip" textStyle={styles.skip_btn} />
              </TouchableOpacity>
              <View style={{width: wp(30)}}>
                <Button
                  text="next"
                  onPress={goToNextSlide}
                  buttonTextStyle={{textTransform: 'uppercase'}}
                />
              </View>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar backgroundColor={COLORS.black} barStyle="default" />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: height * 0.9}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

export default OnBoardingScreen;
