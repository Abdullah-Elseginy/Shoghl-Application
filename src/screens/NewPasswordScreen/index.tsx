import React, {useState} from 'react';
import {
  AppInput,
  AppScreenContainer,
  Button,
  CustomText,
} from '../../components';
import {ScrollView, View} from 'react-native';
import {styles} from './styles';
import {Eye, EyeOffSVG, EyeSVG, PackSVG} from '../../assets';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CommonActions, ParamListBase} from '@react-navigation/native';
import ScreenNames from '../../navigations/ScreenNames';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {
  companyForgetPasswordStepTwoOTP,
  companyForgetPasswordThreeNewPassword,
} from '../../redux/slices/authSlice';
import Toast from 'react-native-toast-message';

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>;
  route: any;
};

const NewPassword = ({route, navigation}: Props) => {
  const {phoneNumber} = route.params || '';
  const dispatch = useDispatch<AppDispatch>();
  const {loading} = useSelector((state: any) => state.auth);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureInputpass, setsecureInputpass] = useState(true);
  const [secureInputConpass, setsecureInputConpass] = useState(true);
  const [errors, setErrors] = useState({password: '', confirmPassword: ''});

  const validate = () => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const errors: {[key: string]: string} = {};

    // Password Validation
    if (!password) {
      errors.password = 'Password is required.';
    } else if (!passwordRegex.test(password)) {
      errors.password =
        'Password must be at least 8 characters long and include one letter and one number.';
    }

    // Confirm Password Validation
    if (!confirmPassword) {
      errors.confirmPassword = 'Please confirm your password.';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    const data = {
      mobile_number: phoneNumber,
      password: password,
      password_confirmation: confirmPassword,
    };
    if (validate()) {
      dispatch(companyForgetPasswordThreeNewPassword(data))
        .unwrap()
        .then(() => {
          Toast.show({
            text1: 'success',
            text2: 'Login Now',
            type: 'success',
            position: 'top',
            visibilityTime: 2000,
            autoHide: true,
          });
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: ScreenNames.AuthStack}],
            }),
          );
        })
        .catch((err: any) => {
          Toast.show({
            text1: 'Error',
            text2: err,
            type: 'error',
            position: 'top',
            visibilityTime: 3000,
            autoHide: true,
          });
        });
    }
  };

  return (
    <AppScreenContainer style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.center}>
          <PackSVG />
          <CustomText text="New Password" textStyle={styles.signup} />
        </View>
        <View>
          <AppInput
            placeholder="Enter New Password"
            label="Enter New Password"
            labelStyle={styles.inputLabel}
            containerStyle={styles.inputContainerStyle}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={secureInputpass}
            rightIcon={secureInputpass ? <EyeSVG /> : <EyeOffSVG />}
            onRightIconPress={() => setsecureInputpass(prev => !prev)}
          />
          {errors.password ? (
            <CustomText text={errors.password} textStyle={styles.error} />
          ) : null}

          <AppInput
            placeholder="Confirm Password"
            label="Confirm Password"
            labelStyle={styles.inputLabel}
            containerStyle={styles.inputContainerStyle}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={secureInputConpass}
            rightIcon={secureInputConpass ? <EyeSVG /> : <EyeOffSVG />}
            onRightIconPress={() => setsecureInputConpass(prev => !prev)}
          />
          {errors.confirmPassword ? (
            <CustomText
              text={errors.confirmPassword}
              textStyle={styles.error}
            />
          ) : null}

          <Button
            text="Change Password"
            style={styles.Bottom}
            loading={loading}
            onPress={handleSubmit}
          />
        </View>
      </ScrollView>
    </AppScreenContainer>
  );
};

export default NewPassword;
