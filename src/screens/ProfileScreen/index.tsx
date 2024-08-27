/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { AppInput, AppScreenContainer, Button, Checkbox, CustomText, SwitchButton } from '../../components';
import { styles } from './styles';
import { FlatList, ImageBackground, Pressable, ScrollView, View } from 'react-native';
import { Add, Calender, Calender2, Copy, Edit, Education, Experience, Facebook, Germany, Home, Location, Message, Mobile, Phone, Possibility, ProfilePic, Salary, Share, UpperArrow } from '../../assets';
import { COLORS, generalStyles, hp, IMAGES, wp } from '../../constants';

const PROGRESSES = [
    { id: 1, subject: 'english', rate: '60%' },
    { id: 2, subject: 'arabic', rate: '90%' },
    { id: 3, subject: 'computer', rate: '25%' },
    { id: 4, subject: 'MS office', rate: '40%' },
];

const Progrss = ({ item }) => {
    return (
        <View style={styles.progresscontainer}>
            <CustomText text={item.rate} />
            <View style={styles.progressBox}>
                <View style={[styles.bar, { width: item.rate }]} />
            </View>
            <CustomText text={item.subject} textStyle={styles.subject} />
        </View>
    );
};

const ProfileScreen = () => {
    const [isLicence, setIsLicence] = React.useState(false);
    const [isMotorCycle, setIsMotorCycle] = React.useState(false);
    const [txtToCopy, setTxtToCopy] = React.useState('');
    const [isPublic, setIsPublic] = React.useState(false);
    const [isFindEasily, setIsFindEasily] = React.useState(false);

    return (
        <AppScreenContainer style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container}>
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
                <View style={[generalStyles.rowBetween, styles.titleBox]}>
                    <CustomText text="profile overview" textStyle={styles.sectionTitle} />
                    <Pressable onPress={() => null}>
                        <Edit width={hp(2.2)} height={hp(2.2)} style={styles.btnIcon} />
                    </Pressable>
                </View>
                <View style={generalStyles.rowBetween}>
                    <View style={styles.overviewBox}>
                        <CustomText text="$45" textStyle={styles.overviewData} />
                        <CustomText text="hourly rate" textStyle={styles.overviewDataTitle} />
                    </View>
                    <View style={styles.overviewBox}>
                        <CustomText text="0" textStyle={styles.overviewData} />
                        <CustomText text="jobs done" textStyle={styles.overviewDataTitle} />
                    </View>
                </View>
                <View style={[generalStyles.rowBetween, styles.titleBox]}>
                    <CustomText text="contact details" textStyle={styles.sectionTitle} />
                    <Pressable onPress={() => null}>
                        <Edit width={hp(2.2)} height={hp(2.2)} style={styles.btnIcon} />
                    </Pressable>
                </View>
                <View style={[generalStyles.row, { marginBottom: hp(1) }]}>
                    <Mobile width={hp(2.2)} height={hp(2.2)} style={styles.btnIcon} />
                    <CustomText text="0123456789" textStyle={styles.contactData} />
                </View>
                <View style={[generalStyles.row, { marginBottom: hp(1) }]}>
                    <Phone width={hp(2.2)} height={hp(2.2)} style={styles.btnIcon} />
                    <CustomText text="26231955" textStyle={styles.contactData} />
                </View>
                <View style={[generalStyles.row, { marginBottom: hp(1) }]}>
                    <Home width={hp(2.2)} height={hp(2.2)} style={styles.btnIcon} />
                    <CustomText text="10 Ahmed’s st, Riyad" textStyle={styles.contactData} />
                </View>
                <View style={[generalStyles.rowBetween, styles.titleBox]}>
                    <CustomText text="social profiles" textStyle={styles.sectionTitle} />
                    <Pressable onPress={() => null}>
                        <Edit width={hp(2.2)} height={hp(2.2)} style={styles.btnIcon} />
                    </Pressable>
                </View>
                <Facebook width={hp(4)} height={hp(4)} style={styles.btnIcon} />
                <View style={[generalStyles.rowBetween, styles.titleBox]}>
                    <CustomText text="skills" textStyle={styles.sectionTitle} />
                </View>
                <View style={[generalStyles.rowBetween, styles.skillsBox]}>
                    <FlatList
                        data={PROGRESSES}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <Progrss item={item} />}
                    />
                </View>
                <View style={[generalStyles.rowStart, { marginBottom: hp(1) }]}>
                    <Checkbox isChecked={isLicence} setIsChecked={setIsLicence} />
                    <CustomText text="driving license" textStyle={styles.checkTxt} />
                </View>
                <View style={[generalStyles.rowStart, { marginBottom: hp(1) }]}>
                    <Checkbox isChecked={isMotorCycle} setIsChecked={setIsMotorCycle} />
                    <CustomText text="having motorcycle" textStyle={styles.checkTxt} />
                </View>
                <View style={styles.titleBox}>
                    <CustomText text="bookmarks & share" textStyle={styles.sectionTitle} />
                </View>
                <View style={generalStyles.rowStart}>
                    <CustomText text="Login to bookmark" textStyle={styles.starting} />
                </View>
                <AppInput
                    placeholder="https://shoghl.com/resume/peterwaldo"
                    value={txtToCopy}
                    onChangeText={val => setTxtToCopy(val)}
                    appInputStyle={[generalStyles.rowBetween, styles.copyBox]}
                    containerStyle={styles.copyInputContainer}
                    rightIcon={
                        <View style={styles.copyIconBox}>
                            <Copy width={hp(2)} height={hp(2)} style={styles.btnIcon} />
                        </View>
                    }
                    onRightIconPress={() => null}
                />
                <View style={generalStyles.row}>
                    <Pressable style={styles.shareBox}>
                        <Share width={hp(2)} height={hp(2)} style={styles.btnIcon} />
                    </Pressable>
                    <CustomText text="Interesting?" textStyle={styles.shareTxt} />
                    <CustomText text="Share It!" textStyle={styles.shareIt} />
                </View>
                <View style={[generalStyles.rowStart, { marginTop: hp(3) }]}>
                    <SwitchButton isChecked={isPublic} setIsChecked={setIsPublic} size="medium" />
                    <CustomText text="Public Profile" textStyle={styles.switchTxt} />
                </View>
                <View style={[generalStyles.rowStart, { marginTop: hp(2) }]}>
                    <SwitchButton isChecked={isFindEasily} setIsChecked={setIsFindEasily} size="medium" />
                    <CustomText text="Let people find me easily" textStyle={styles.switchTxt} />
                </View>
                <View style={[generalStyles.rowBetween, styles.titleBox]}>
                    <CustomText text="about me" textStyle={styles.about} />
                    <Pressable onPress={() => null}>
                        <Edit width={hp(2.2)} height={hp(2.2)} style={styles.btnIcon} />
                    </Pressable>
                </View>
                <CustomText
                    text="Ut sodales arcu sagittis metus molestie molestie. Nulla maximus volutpat dui. Etiam luctus lobortis massa in pulvinar. Maecenas nunc odio, faucibus in malesuada a, dignissim at odio. Aenean eleifend urna.
Duis ac augue sit amet ex blandit facilisis sit amet ut dui. Nulla pharetra fermentum mollis. Duis in tempor tortor. Suspendisse vitae nisl diam. Proin eu erat vestibulum, suscipit quam et, cursus ante."
                    textStyle={{ color: COLORS.grayLight }}
                />
                <View style={styles.titleBox}>
                    <CustomText text="Personal Characteristics:" textStyle={styles.characteristics} />
                </View>
                <CustomText
                    text="Excellent customer service skills, communication skills, and a happy, smiling attitude are essential. Available to work required shifts including weekends, evenings and holidays. I have great time management skills. I take constructive criticism well and I am comfortable voicing opinions."
                    textStyle={{ color: COLORS.grayLight }}
                />
                <View style={[generalStyles.rowBetween, styles.titleBox]}>
                    <CustomText text="portfolio" textStyle={styles.sectionTitle} />
                    <Pressable>
                        <Edit width={hp(2.2)} height={hp(2.2)} style={styles.btnIcon} />
                    </Pressable>
                </View>
                <View style={{ marginHorizontal: wp(-5) }}>
                    <ImageBackground source={IMAGES.portPic} style={{ width: '100%', height: hp(30) }} resizeMode="stretch" >
                        <CustomText text="Show All Photos (6)" textStyle={styles.imagesTxt} />
                    </ImageBackground>
                </View>
                <View style={[generalStyles.rowBetween, styles.protfolioBox]}>
                    <View style={generalStyles.row}>
                        <Education width={hp(3.5)} height={hp(3.5)} style={styles.btnIcon} />
                        <CustomText text="education" textStyle={styles.portfolioData} />
                    </View>
                    <View style={generalStyles.row}>
                        <Pressable style={styles.prtfolioIcon}>
                            <UpperArrow width={hp(2.2)} height={hp(2.2)} />
                        </Pressable>
                        <Pressable style={styles.prtfolioIcon}>
                            <Add width={hp(2.2)} height={hp(2.2)} />
                        </Pressable>
                        <Pressable style={styles.prtfolioIcon}>
                            <Edit width={hp(2.2)} height={hp(2.2)} />
                        </Pressable>
                    </View>
                </View>
                <CustomText text="Can’t Write and Read" textStyle={styles.portfolioSubTxt} />
                <View style={[generalStyles.rowBetween, styles.protfolioBox]}>
                    <View style={generalStyles.row}>
                        <Experience width={hp(3.5)} height={hp(3.5)} style={styles.btnIcon} />
                        <CustomText text="experience" textStyle={styles.portfolioData} />
                    </View>
                    <View style={generalStyles.row}>
                        <Pressable style={styles.prtfolioIcon}>
                            <UpperArrow width={hp(2.2)} height={hp(2.2)} />
                        </Pressable>
                        <Pressable style={styles.prtfolioIcon}>
                            <Add width={hp(2.2)} height={hp(2.2)} />
                        </Pressable>
                        <Pressable style={styles.prtfolioIcon}>
                            <Edit width={hp(2.2)} height={hp(2.2)} />
                        </Pressable>
                    </View>
                </View>
                <View style={[generalStyles.row, { marginStart: wp(5) }]}>
                    <Calender2 width={hp(3)} height={hp(3)} style={styles.btnIcon} />
                    <CustomText text="6 years" textStyle={[styles.portfolioSubTxt, { marginStart: 0 }]} />
                </View>
                <View style={[generalStyles.rowBetween, styles.protfolioBox]}>
                    <View style={generalStyles.row}>
                        <Possibility width={hp(3.5)} height={hp(3.5)} style={styles.btnIcon} />
                        <CustomText text="Possibility " text2="of moving" textStyle={styles.portfolioData} textStyle2={{ textTransform: 'none' }} />
                    </View>
                    <View style={generalStyles.row}>
                        <Pressable style={styles.prtfolioIcon}>
                            <UpperArrow width={hp(2.2)} height={hp(2.2)} />
                        </Pressable>
                        <Pressable style={styles.prtfolioIcon}>
                            <Edit width={hp(2.2)} height={hp(2.2)} />
                        </Pressable>
                    </View>
                </View>
                <CustomText text="Not willing to leave outside the country" textStyle={styles.portfolioSubTxt} />
                <CustomText text="Willing to leave outside the city" textStyle={styles.portfolioSubTxt} />
                <View style={[generalStyles.rowBetween, styles.protfolioBox]}>
                    <View style={generalStyles.row}>
                        <Salary width={hp(3)} height={hp(3)} style={styles.btnIcon} />
                        <CustomText text="salary" textStyle={styles.portfolioData} />
                    </View>
                    <View style={generalStyles.row}>
                        <Pressable style={styles.prtfolioIcon}>
                            <UpperArrow width={hp(2.2)} height={hp(2.2)} />
                        </Pressable>
                        <Pressable style={styles.prtfolioIcon}>
                            <Edit width={hp(2.2)} height={hp(2.2)} />
                        </Pressable>
                    </View>
                </View>
                <CustomText text="Due to the task" textStyle={styles.portfolioSubTxt} />
            </ScrollView>
        </AppScreenContainer>
    );
};

export default ProfileScreen;
