import {
  ColorValue,
  FlatList,
  StyleProp,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {COLORS} from '../../constants';
import CustomText from '../CustomText';

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
  appInputStyle?: StyleProp<ViewStyle>;
  isNumericKeyboard?: boolean;
  Flatdata?: any;
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
  placeholderTextColor,
  secureTextEntry,
  appInputStyle,
  isNumericKeyboard,
  Flatdata, //! FaltList
}: Props) => {
  return (
    <View style={[styles.container, appInputStyle]}>
      {label && (
        <CustomText text={label} textStyle={[styles.label, labelStyle]} />
      )}
      <View style={[styles.inputContainer, containerStyle]}>
        {leftIcon && (
          <TouchableOpacity onPress={onLeftIconPress}>
            {leftIcon}
          </TouchableOpacity>
        )}
        {Flatdata?.length ? (
          <View style={styles.ChildernView2}>
            <FlatList
              horizontal
              data={Flatdata}
              renderItem={({item}) => (
                <CustomText textStyle={styles.FlatListText} text={item} />
              )}
            />
          </View>
        ) : (
          ''
        )}

        <TextInput
          placeholderTextColor={
            placeholderTextColor ? placeholderTextColor : COLORS.grayLight
          }
          style={[styles.input, inputstyle]}
          placeholder={placeholder}
          value={value}
          multiline={multiline}
          onChangeText={onChangeText}
          editable={editable}
          secureTextEntry={secureTextEntry}
          keyboardType={isNumericKeyboard ? 'numeric' : 'default'}
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
