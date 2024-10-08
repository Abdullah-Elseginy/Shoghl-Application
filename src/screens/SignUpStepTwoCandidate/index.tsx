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

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>;
  route: any;
};

const SignUpStepTwoCandidate = ({route, navigation}: Props) => {
  const {phone} = route.params;
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
      navigation.navigate(ScreenNames.OTPScreen, {
        borderNo: InputVal.phone,
        type: 'signup',
      });
    }
  };

  return (
    <AppScreenContainer style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.center}>
          <PackSVG />
          <CustomText text={`Mobile OTP`} textStyle={styles.signup} />
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
            <CustomText text={phoneError} textStyle={styles.errorText} />
            <TouchableOpacity
              onPress={() => {
                Seteditable(!editable);
              }}>
              <CustomText
                text="Edit phone number?"
                textStyle={styles.edtittxt}
              />
            </TouchableOpacity>
            <Button text="Get OTP In This Number" onPress={handleSubmit} style={styles.btn} />
          </View>
        </View>
      </ScrollView>
    </AppScreenContainer>
  );
};

export default SignUpStepTwoCandidate;
