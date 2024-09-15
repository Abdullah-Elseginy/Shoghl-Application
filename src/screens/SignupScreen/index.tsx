import * as React from 'react';
import {
  AppInput,
  AppScreenContainer,
  Button,
  CustomText,
} from '../../components';
import {styles} from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {generalStyles, hp} from '../../constants';
import {PackSVG} from '../../assets';
import {Pressable, View} from 'react-native';
import ScreenNames from '../../navigations/ScreenNames';
import {ScrollView} from 'react-native-gesture-handler';

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>;
};

const SignupScreen = ({navigation}: Props) => {
  // const [isYes, setIsYes] = React.useState(false);
  // const [isNo, setIsNo] = React.useState(false);

  // React.useEffect(() => {
  //   if (isYes) {
  //     setIsNo(false);
  //   }
  // }, [isYes]);

  // React.useEffect(() => {
  //   if (isNo) {
  //     setIsYes(false);
  //   }
  // }, [isNo]);
  const [LoginType, SetLoginType] = React.useState('candidate');

  return (
    <AppScreenContainer style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[generalStyles.center, {paddingVertical: hp(3)}]}>
          <PackSVG />
          <CustomText text="Sign up" textStyle={styles.signup} />
        </View>
        <View>
          <View style={generalStyles.rowBetween}>
            <Button
              text="candidate"
              style={styles.btn}
              secondry={LoginType !== 'candidate' ? true : false}
              onPress={() => SetLoginType('candidate')}
            />
            <Button
              text="corporate"
              style={styles.btn}
              secondry={LoginType !== 'corporate' ? true : false}
              onPress={() => SetLoginType('corporate')}
            />
          </View>
          {/* <CustomText text="Do you residence?" textStyle={styles.residence} />
        <View style={[generalStyles.rowStart, { marginBottom: hp(1) }]}>
          <Checkbox isChecked={isYes} setIsChecked={setIsYes} />
          <CustomText text="yes" textStyle={styles.checkTxt} />
        </View>
        <View style={[generalStyles.rowStart, { marginBottom: hp(4) }]}>
          <Checkbox isChecked={isNo} setIsChecked={setIsNo} />
          <CustomText text="No" textStyle={styles.checkTxt} />
        </View> */}

          {/* Candidate */}
          {LoginType !== 'corporate' ? (
            <>
              <AppInput
                placeholder="Enter Your Border Number"
                label="Border Number"
                labelStyle={styles.inputLabel}
                containerStyle={styles.inputContainerStyle}
              />
              <Button
                text="next"
                onPress={() => navigation.replace(ScreenNames.CompleteProfile)}
              />
              <View style={[generalStyles.rowCenter, {marginTop: hp(1.3)}]}>
                <CustomText
                  text="Have an account?"
                  textStyle={styles.haveAcc}
                />
                <Pressable
                  onPressIn={() => navigation.navigate(ScreenNames.Login)}>
                  <CustomText text="Log In" textStyle={styles.login} />
                </Pressable>
              </View>
              <View style={[generalStyles.rowCenter, {marginTop: hp(1.5)}]}>
                <CustomText
                  text="Looking to post jobs?"
                  textStyle={styles.haveAcc}
                />
                <Pressable
                  onPressIn={() => navigation.navigate(ScreenNames.Login)}>
                  <CustomText
                    text="Create an Employer Account"
                    textStyle={styles.empAcc}
                  />
                </Pressable>
              </View>
            </>
          ) : (
            <>
              <AppInput
                placeholder="Enter Your Company name"
                label="Company Name"
                labelStyle={[styles.inputLabel, styles.CoporateInput]}
                containerStyle={styles.inputContainerStyle}
              />
              <View style={generalStyles.rowBetween}>
                <View>
                  <AppInput
                    placeholder=" First Name"
                    label="First Name"
                    labelStyle={[styles.inputLabel, styles.CoporateInput]}
                    containerStyle={[
                      styles.inputContainerStyle,
                      styles.Firstname,
                    ]}
                  />
                </View>
                <View>
                  <AppInput
                    placeholder="Last Name"
                    label="First Name"
                    labelStyle={[styles.inputLabel, styles.CoporateInput]}
                    containerStyle={[
                      styles.inputContainerStyle,
                      styles.Firstname,
                    ]}
                  />
                </View>
              </View>
              <AppInput
                placeholder="Enter Your Mobile Number"
                label="Mobile Number"
                labelStyle={[styles.inputLabel, styles.CoporateInput]}
                containerStyle={styles.inputContainerStyle}
              />
              <AppInput
                placeholder="Enter Your Business Mail"
                label="Business Mail"
                labelStyle={[styles.inputLabel, styles.CoporateInput]}
                containerStyle={styles.inputContainerStyle}
              />
              <AppInput
                placeholder="Enter Your Password"
                label="Create Password"
                labelStyle={[styles.inputLabel, styles.CoporateInput]}
                containerStyle={styles.inputContainerStyle}
              />
              <AppInput
                placeholder="Enter Your role are you for?"
                label="Which role are you for?"
                labelStyle={[styles.inputLabel, styles.CoporateInput]}
                containerStyle={styles.inputContainerStyle}
              />
              <Button
                style={styles.bottmStyle}
                text="Create account"
                onPress={() => {
                  navigation.navigate(ScreenNames.RegisterationSteps);
                }}
              />
            </>
          )}
        </View>
      </ScrollView>
    </AppScreenContainer>
  );
};

export default SignupScreen;
