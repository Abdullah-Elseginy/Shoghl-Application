import {
  ActivityIndicator,
  ColorValue,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';

import CustomText from '../CustomText';
import { COLORS, generalStyles } from '../../constants';

type Props = {
  text: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  buttonTextStyle?: StyleProp<TextStyle>;
  isDisapled?: boolean;
  disabledBGColor?: ColorValue;
  disabledColor?: ColorValue;
  loading?: boolean;
  loadingColor?: ColorValue;
};

const Button = ({
  text = '',
  onPress,
  style,
  buttonTextStyle,
  isDisapled,
  disabledBGColor,
  disabledColor,
  loading,
  loadingColor,
}: Props) => {
  const [preventPress, setPreventPress] = useState<boolean>(false);
  const disabledPress: boolean = isDisapled || loading || preventPress;

  return (
    <TouchableOpacity
      disabled={disabledPress}
      onPress={() => {
        setPreventPress(true);
        onPress();
        setTimeout(() => {
          setPreventPress(false);
        }, 2000);
      }}
      style={[
        generalStyles.btn,
        styles.button,
        {
          backgroundColor:
            disabledBGColor && isDisapled
              ? disabledBGColor
              : COLORS.black,
        },
        style,
      ]}>
      {loading ? (
        <ActivityIndicator
          color={loadingColor ?? COLORS.white}
          size={'small'}
        />
      ) : (
        <CustomText
          text={text}
          textStyle={[
            generalStyles.btnTxt,
            {
              color: disabledColor && isDisapled ? disabledColor : COLORS.white,
            },
            buttonTextStyle,
          ]}
        />
      )}
    </TouchableOpacity>
  );
};

export default Button;
