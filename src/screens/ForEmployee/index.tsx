import React from 'react';
import {View, FlatList, ScrollView} from 'react-native';
import {
  AppScreenContainer,
  Button,
  CaroselComponent,
  CustomText,
} from '../../components';
import {styles} from './style';
import {CompanyLAnding, SavaTime} from '../../assets';
import {hp, wp} from '../../constants';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {CAROUSELDATA, PARTENERS} from '../../utils/Data';
import ScreenNames from '../../navigations/ScreenNames';
type Props = {
  navigation: NativeStackNavigationProp<ParamListBase, string>;
};
const Parteners = ({item}: any) => {
  return <View>{item.imag}</View>;
};

const ForEmployee = ({navigation}: Props) => {
  return (
    <AppScreenContainer style={styles.ScreenContainer}>
      {/* Header */}
      <ScrollView>
        <View style={styles.Header}>
          <CompanyLAnding width={wp(70)} height={hp(30)} />
          <CustomText
            text="Hire Smarter. Grow Faster"
            textStyle={styles.HeaderMainText}
          />
          <CustomText
            text="Hire Smarter. Grow Faster"
            textStyle={styles.HeaderSubText}
          />
          <Button
            text="Hire Now"
            onPress={() => navigation.navigate(ScreenNames.WelcomeEmployee)}
          />
        </View>
        {/* Join Saudi Top Companies */}
        <View style={styles.PAddingContainer}>
          <View>
            <View style={styles.HowItWorkSection}>
              <CustomText
                text="Join Saudi Top Companies"
                textStyle={styles.sectionTitle}
              />
            </View>
            <FlatList
              horizontal={true}
              data={PARTENERS}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => <Parteners item={item} />}
            />
          </View>
          {/* Carousal */}
          <View style={styles.CarousalStyle}>
            <CaroselComponent
              data={CAROUSELDATA}
              height={hp(33)}
              autoplay={true}
              animationduration={3000}
              renderItems={({item}: any) => (
                <View style={styles.carosalContentContainer}>
                  {item.imag}
                  <CustomText text2={item.title} textStyle2={styles.Text2} />
                  <CustomText
                    text={item.description}
                    textStyle={styles.desctext}
                  />
                </View>
              )}
            />
          </View>

          {/* Save time contacting */}
          <View style={styles.SavongTimeSection}>
            <SavaTime width={wp(80)} height={hp(20)} />
            <CustomText
              text2="Save time contacting the right candidates"
              textStyle={styles.savingTimeMainText}
            />
            <CustomText
              readMore
              maxLength={70}
              textStyle={styles.desctext}
              redmoreText="Instead of wasting time reaching out to passive candidates to check their interest in your jobs, you can invite them to apply with one simple click. Better utilize your time and effort with candidates who are passionate about your company and accept your invitation"
            />
          </View>
        </View>
      </ScrollView>
    </AppScreenContainer>
  );
};

export default ForEmployee;
