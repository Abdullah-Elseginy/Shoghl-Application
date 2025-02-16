import {
  ColorValue,
  StyleProp,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import { COLORS } from '../../constants';

type Props = {
  placeholder?: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
  value?: string;
  multiline?: boolean;
  editable?: boolean;
  inputstyle?: StyleProp<ViewStyle>;
  onChangeText?: (text: string) => void;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
  placeholderTextColor?: ColorValue;
  secureTextEntry?: boolean;
};

const AppInput = ({
  placeholder,
  rightIcon,
  leftIcon,
  label,
  containerStyle,
  labelStyle,
  value,
  multiline,
  inputstyle,
  onChangeText,
  onLeftIconPress,
  onRightIconPress,
  editable = true,
  inputStyle,
  placeholderTextColor = COLORS.black,
  secureTextEntry,
}: Props) => {
  return (
    <View style={[styles.container]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <View style={[styles.inputContainer, containerStyle]}>
        {leftIcon && (
          <TouchableOpacity onPress={onLeftIconPress}>
            {leftIcon}
          </TouchableOpacity>
        )}

        <TextInput
          placeholderTextColor={
            placeholderTextColor ? placeholderTextColor : COLORS.black
          }
          style={[styles.input, inputstyle, inputStyle]}
          placeholder={placeholder}
          value={value}
          multiline={multiline}
          onChangeText={onChangeText}
          editable={editable}
          secureTextEntry={secureTextEntry}
        />
        {rightIcon && (
          <TouchableOpacity onPress={onRightIconPress}>
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default AppInput;
