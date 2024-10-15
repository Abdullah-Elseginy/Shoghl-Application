import React, {useState} from 'react';
import {
  AppInput,
  AppScreenContainer,
  Button,
  CustomText,
} from '../../components';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import ScreenNames from '../../navigations/ScreenNames';
import {PackSVG} from '../../assets';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {signUpTwoSendOTP} from '../../redux/slices/authSlice';
import Toast from 'react-native-toast-message';

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>;
  route: any;
};

const SignUpStepTwoCandidate = ({route, navigation}: Props) => {
  const {phone, name, borderno} = route.params;
  const dispatch = useDispatch<AppDispatch>();
  const {loading} = useSelector((state: any) => state.auth);
  console.log('signup Two====', phone);
  const [InputVal, SetInputVal] = useState({phone: phone});
  const [phoneError, setErrorPhone] = useState('');
  const [editable, Seteditable] = useState(false);
  const handlePhone = () => {
    if (!InputVal.phone) {
      setErrorPhone('Phone number Required');
    } else if (!/^\d{11}$/.test(InputVal.phone)) {
      setErrorPhone('Phone number must be 11 digits');
    } else {
      setErrorPhone('');
      return true;
    }
    return false;
  };

  const handleSubmit = () => {
    const isValid = handlePhone();
    if (isValid) {
      const datatosend = {
        border_number: borderno,
        phone: InputVal.phone,
      };
      dispatch(signUpTwoSendOTP(datatosend))
        .unwrap()
        .then(() => {
          Toast.show({
            text1: 'Success',
            text2: 'Verification code sent to your mobile',
            type: 'success',
            position: 'top',
            visibilityTime: 1500,
            autoHide: true,
          });
          setTimeout(() => {
            navigation.navigate(ScreenNames.OTPScreen, {
              phoneNumber: InputVal.phone,
              borderNoCandidateSignUp: borderno,
              type: 'signup',
            });
          }, 1000);
        })
        .catch(err => {
          Toast.show({
            text1: 'Error',
            text2: err,
            type: 'error',
          });
        });
    }
  };

  return (
    <AppScreenContainer style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.center}>
          <PackSVG />
          <CustomText text={`Mobile OTP`} textStyle={styles.signup} />
          <CustomText text={`Welcome ${name}`} textStyle={styles.signupname} />
        </View>
        <View>
          <View>
            <AppInput
              placeholder="Enter Mobile number"
              label="Mobile Number"
              labelStyle={[styles.inputLabel]}
              value={InputVal.phone}
              editable={editable}
              containerStyle={[editable ? '' : styles.editwable]}
              onChangeText={val => SetInputVal({...InputVal, phone: val})}
            />
            {phoneError && (
              <CustomText text={phoneError} textStyle={styles.errorText} />
            )}

            <TouchableOpacity
              onPress={() => {
                Seteditable(!editable);
              }}>
              <CustomText
                text={!editable ? 'Edit phone number?' : 'save this nomber?'}
                textStyle={styles.edtittxt}
              />
            </TouchableOpacity>
            <Button
              text="Get OTP In This Number"
              loading={loading}
              onPress={handleSubmit}
              style={styles.btn}
            />
          </View>
        </View>
      </ScrollView>
    </AppScreenContainer>
  );
};

export default SignUpStepTwoCandidate;
