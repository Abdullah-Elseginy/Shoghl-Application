import {
  ActivityIndicator,
  ColorValue,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';

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
  secondry?: boolean;
  leftIcon?: React.ReactNode;
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
  secondry,
  leftIcon
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
              : secondry
                ? COLORS.white
                : COLORS.primary,
        },
        style,
      ]}>
      {loading ? (
        <ActivityIndicator
          color={loadingColor ?? COLORS.white}
          size={'small'}
        />
      ) : (
        <>
          {leftIcon && leftIcon}
          <CustomText
            text={text}
            textStyle={[
              generalStyles.btnTxt,
              { color: disabledColor && isDisapled ? disabledColor : secondry ? COLORS.primary : COLORS.white },
              buttonTextStyle,
            ]}
          />
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;
