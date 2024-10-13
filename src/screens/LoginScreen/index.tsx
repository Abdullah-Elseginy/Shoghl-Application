import React, {useState} from 'react';
import {
  AppInput,
  AppScreenContainer,
  Button,
  Checkbox,
  CustomText,
} from '../../components';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {COLORS, generalStyles} from '../../constants';
import {EyeOffSVG, EyeSVG, PackSVG} from '../../assets';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import ScreenNames from '../../navigations/ScreenNames';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeRegisterationType,
  loginOne,
} from '../../redux/slices/authSlice';
import Toast from 'react-native-toast-message';
import {AppDispatch} from '../../redux/store';

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>;
};

const LoginScreen = ({navigation}: Props) => {
  const [isSecure, setIsSecure] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [LoginType, SetLoginType] = React.useState('candidate');
  const [showpass, setshowpass] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const {loading} = useSelector((state: any) => state.auth);
  const [InputVal, SetInputVal] = useState({
    email: '',
    password: '',
    borderno: '',
    otp: '',
  });

  const [errors, setError] = useState<any>({
    email: '',
    password: '',
    borderno: '',
    Otp: '',
  });
  const clearFields = () => {
    SetInputVal({
      email: '',
      password: '',
      borderno: '',
      otp: '',
    });
  };
  const handleLoginCorporateInputs = () => {
    let valid = true;
    setError({...errors, email: '', password: ''});
    if (!InputVal.email) {
      setError((prev: any) => ({...prev, email: 'Email is required'}));
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(InputVal.email)) {
      setError((prev: any) => ({...prev, email: 'Email is invalid'}));
      valid = false;
    }
    if (!InputVal.password) {
      setError((prev: any) => ({...prev, password: 'Password is required'}));
      valid = false;
    } else if (
      !/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(InputVal.password)
    ) {
      setError((prev: any) => ({
        ...prev,
        password:
          'Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter, one number, and one special character',
      }));
      valid = false;
    }
    if (valid) {
      clearFields();
      dispatch(changeRegisterationType('corporate'));
      navigation.replace(ScreenNames.BottomTabs);
    }
  };
  const handleCandiditeInputsStep1 = () => {
    if (!InputVal.borderno) {
      setError((prev: any) => ({
        ...prev,
        borderno: 'Border number is required',
      }));
    } else if (!/^\d{10}$/.test(InputVal.borderno)) {
      setError((prev: any) => ({
        ...prev,
        borderno: 'Border number must be 10 digits',
      }));
    } else {
      setError({
        otp: '',
        borderno: '',
      });
      return true;
    }
  };

  // const HandleLogins = () => {};
  const handleSubmit = () => {
    const isValid = handleCandiditeInputsStep1();
    console.log('isvalid===' + isValid);
    if (isValid) {
      let candidateData = {
        border_number: InputVal.borderno,
      };
      dispatch(loginOne(candidateData))
        .unwrap()
        .then((res: any) => {
          // SetShowOtp(true); // Show OTP input
          Toast.show({
            type: 'success',
            text1: 'Success enter OTP',
            position: 'top',
            visibilityTime: 1500,
          });
          setTimeout(() => {
            navigation.navigate(ScreenNames.OTPScreen, {
              borderNo: InputVal.borderno,
            });
          }, 1200);
          console.log('resoooo', res);
        })
        .catch((err: any) => {
          Toast.show({
            type: 'error',
            text1: err,
            position: 'top',
            visibilityTime: 2000,
          });
          console.log('LoginOne error ', err);
        });
    }
  };
  return (
    <AppScreenContainer style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.center}>
          <PackSVG />
          <CustomText text="Log In" textStyle={styles.signup} />
        </View>
        <View style={generalStyles.rowBetween}>
          <Button
            text="candidate"
            style={styles.btn}
            secondry={LoginType !== 'candidate'}
            onPress={() => SetLoginType('candidate')}
          />
          <Button
            text="corporate"
            style={styles.btn}
            secondry={LoginType !== 'corporate'}
            onPress={() => SetLoginType('corporate')}
          />
        </View>
        {/* candidate section */}
        {LoginType === 'candidate' ? (
          <View>
            <AppInput
              placeholder="Enter Your Border Number"
              label="Border Number"
              labelStyle={styles.inputLabel}
              containerStyle={styles.inputContainerStyle}
              value={InputVal.borderno}
              isNumericKeyboard
              maxLength={10}
              onChangeText={val => SetInputVal({...InputVal, borderno: val})}
            />
            {errors.borderno && (
              <CustomText text={errors.borderno} textStyle={styles.error} />
            )}
            <View style={[generalStyles.rowBetween, styles.remeBox]}>
              <View style={[generalStyles.row]}>
                <Checkbox
                  isChecked={isChecked}
                  setIsChecked={() => setIsChecked(prev => !prev)}
                />
                <CustomText
                  text="Remember me"
                  textStyle={[generalStyles.marginLeft, styles.remember]}
                />
              </View>
              <TouchableOpacity>
                <CustomText text="Forget Password?" />
              </TouchableOpacity>
            </View>

            <Button
              text="Get OTP"
              loading={loading}
              style={styles.Bottom}
              onPress={handleSubmit}
            />
          </View>
        ) : (
          <View>
            <AppInput
              placeholder="Enter Email"
              label="Email"
              labelStyle={styles.inputLabel}
              containerStyle={styles.inputContainerStyle}
              value={InputVal.email}
              onChangeText={val => SetInputVal({...InputVal, email: val})}
            />
            <CustomText text={errors.email} textStyle={styles.error} />
            <AppInput
              placeholder="Enter Your Password"
              label="Password"
              secureTextEntry={showpass}
              onRightIconPress={() => setshowpass((prev: any) => !prev)}
              rightIcon={showpass ? <EyeSVG /> : <EyeOffSVG />}
              labelStyle={styles.inputLabel}
              containerStyle={styles.inputContainerStyle}
              value={InputVal.password}
              onChangeText={val => SetInputVal({...InputVal, password: val})}
            />
            <CustomText text={errors.password} textStyle={styles.error} />
            <View style={[generalStyles.rowBetween, styles.remeBox]}>
              <View style={[generalStyles.row]}>
                <Checkbox
                  isChecked={isChecked}
                  setIsChecked={() => setIsChecked(prev => !prev)}
                />
                <CustomText
                  text="Remember me"
                  textStyle={[generalStyles.marginLeft, styles.remember]}
                />
              </View>
              <TouchableOpacity>
                <CustomText text="Forget Password?" />
              </TouchableOpacity>
            </View>
            <Button
              text="Login"
              style={styles.Bottom}
              onPress={handleLoginCorporateInputs}
            />
          </View>
        )}
        <View style={[generalStyles.row, styles.DontBox]}>
          <CustomText text="Don't have account? " textStyle={styles.donthave} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(ScreenNames.Signup);
            }}>
            <CustomText text="Sign Up" textStyle={styles.singUpp} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </AppScreenContainer>
  );
};

export default LoginScreen;
