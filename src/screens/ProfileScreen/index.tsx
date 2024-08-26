/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { AppScreenContainer, Button, CustomText } from '../../components';
import { styles } from './styles';
import { View } from 'react-native';
import { Calender, Germany, Location, Message, ProfilePic } from '../../assets';
import { generalStyles, hp } from '../../constants';

const ProfileScreen = () => {

    return (
        <AppScreenContainer style={styles.container}>
            <View style={styles.userInfoBox}>
                <ProfilePic width={100} height={100} />
                <CustomText text="peter waldow" textStyle={styles.username} />
                <CustomText text="Blacksmith" textStyle={styles.nickname} />
                <View style={[generalStyles.rowBetween, styles.infoBox]}>
                    <CustomText text="Immediate start" textStyle={styles.starting} />
                    <View style={generalStyles.rowBetween}>
                        <Germany width={hp(2.5)} height={hp(2.5)} style={styles.btnIcon} />
                        <CustomText text="bangladesh" textStyle={styles.country} />
                    </View>
                    <View style={generalStyles.rowBetween}>
                        <Location width={hp(2)} height={hp(2)} style={styles.btnIcon} />
                        <CustomText text="riyad" textStyle={styles.location} />
                    </View>
                </View>
                <View style={generalStyles.rowBetween}>
                    <Calender width={hp(2.2)} height={hp(2.2)} style={styles.btnIcon} />
                    <CustomText text="36 years ago" textStyle={styles.age} />
                </View>
                <Button text="send message" buttonTextStyle={styles.btnTxt} onPress={() => null} leftIcon={<Message width={hp(2.5)} height={hp(2.5)} style={styles.btnIcon} />} style={styles.messageBtn} />
            </View>
        </AppScreenContainer>
    );
};

export default ProfileScreen;
