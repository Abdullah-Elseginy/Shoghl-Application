import {ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import {
  AppHeader,
  AppScreenContainer,
  Button,
  CustomText,
} from '../../components';
import {
  Calender,
  Home,
  Location,
  Message,
  Mobile,
  Phone,
  Saudi,
} from '../../assets';
import {COLORS, generalStyles, hp} from '../../constants';
import {styles} from './styles';
import {useSelector} from 'react-redux';

const CVProfile = () => {
  const {userDetailsData} = useSelector((state: any) => state.jobs);
  const currentYear = new Date().getFullYear();
  return (
    <AppScreenContainer>
      <AppHeader title="Profile " arrowBack />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.userInfoBox}>
          {/* <ProfilePic width={100} height={100} /> */}
          <CustomText
            text={userDetailsData?.name}
            textStyle={styles.username}
          />
          <CustomText
            text={userDetailsData?.job_titles?.map((item2: any) => (
              <CustomText text={item2?.default_name + ' | '} />
            ))}
            textStyle={styles.nickname}
          />
          <View style={[generalStyles.rowBetween, styles.infoBox]}>
            <CustomText text="Immediate start" textStyle={styles.starting} />
            <View style={generalStyles.rowBetween}>
              <Saudi width={hp(2.5)} height={hp(2.5)} style={styles.btnIcon} />
              <CustomText
                text={
                  userDetailsData?.country_name?.default_name || 'Saudi Arabia'
                }
                textStyle={styles.country}
              />
            </View>
            <View style={generalStyles.rowBetween}>
              <Location width={hp(2)} height={hp(2)} style={styles.btnIcon} />
              <CustomText
                text={userDetailsData?.city_name?.default_name || 'Riydh'}
                textStyle={styles.location}
              />
            </View>
          </View>
          <View style={generalStyles.rowBetween}>
            <Calender width={hp(2.2)} height={hp(2.2)} style={styles.btnIcon} />
            <CustomText
              text={`${currentYear - userDetailsData?.birth_year} years ago`}
              textStyle={styles.age}
            />
          </View>
          <Button
            text="send message"
            buttonTextStyle={styles.btnTxt}
            onPress={() => null}
            leftIcon={
              <Message width={hp(2)} height={hp(2)} style={styles.btnIcon} />
            }
            style={styles.messageBtn}
          />
        </View>
        <View style={[generalStyles.rowBetween, styles.titleBox]}>
          <CustomText text="profile overview" textStyle={styles.sectionTitle} />
        </View>

        <View style={generalStyles.rowBetween}>
          <View style={styles.overviewBox}>
            <CustomText
              text={
                userDetailsData?.hide_salary
                  ? 'Hidden'
                  : `${userDetailsData?.expected_salary} `
              }
              textStyle={[
                styles.overviewData,
                !userDetailsData?.hide_salar ? styles.linethrew : '',
              ]}
            />
            <CustomText
              text="hourly rate"
              textStyle={styles.overviewDataTitle}
            />
          </View>

          {/* <View style={styles.overviewBox}>
            <CustomText
              text={userDetailsData?.jobs || '0'}
              textStyle={styles.overviewData}
            />
            <CustomText text="jobs done" textStyle={styles.overviewDataTitle} />
          </View> */}
        </View>

        <View style={[generalStyles.rowBetween, styles.titleBox]}>
          <CustomText text="contact details" textStyle={styles.sectionTitle} />
        </View>

        <View style={[generalStyles.row]}>
          <Mobile width={hp(2.2)} height={hp(2.2)} style={styles.btnIcon} />

          <CustomText
            text={userDetailsData?.mobile_phone || 'no mobile number'}
            textStyle={styles.contactData}
          />
        </View>

        <View style={[generalStyles.row, {marginTop: hp(1)}]}>
          <Phone width={hp(2.2)} height={hp(2.2)} style={styles.btnIcon} />

          <CustomText
            text={userDetailsData?.home_phone || 'no home number'}
            textStyle={styles.contactData}
          />
        </View>
        <View style={[generalStyles.row, {marginTop: hp(1)}]}>
          <Home width={hp(2.2)} height={hp(2.2)} style={styles.btnIcon} />

          <CustomText
            text={userDetailsData?.address || 'no address'}
            textStyle={styles.contactData}
          />
        </View>

        <View style={[generalStyles.rowBetween, styles.titleBox]}>
          <CustomText text="about" textStyle={styles.about} />
        </View>

        <CustomText
          text={userDetailsData?.about_me || 'have no about'}
          textStyle={{color: COLORS.grayLight}}
        />

        <View style={styles.titleBox}>
          <CustomText text="Charactaristic" textStyle={styles.about} />
        </View>

        <CustomText
          text={
            userDetailsData?.personal_characteristics ||
            'no personal characteristics'
          }
          textStyle={{color: COLORS.grayLight}}
        />
      </ScrollView>
    </AppScreenContainer>
  );
};

export default CVProfile;
