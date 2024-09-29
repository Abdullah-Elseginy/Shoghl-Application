import {
  ColorValue,
  FlatList,
  Pressable,
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
import {Menu} from 'react-native-paper';

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
  setFlatData?: any;
  setDelatedToJobTypesAgain?: any;
  maxLength?: number;
  showMenue?: boolean;
  menueOption?: any;
  setShowMenue?: () => void;
  isdisabled?: boolean;
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
  setFlatData,
  setDelatedToJobTypesAgain,
  maxLength,
  showMenue = false,
  menueOption,
  isdisabled = true,
  setShowMenue,
}: Props) => {
  const DelateItem = (index: number) => {
    const newData = [...Flatdata];
    const [deletedItem] = newData.splice(index, 1);
    const delatedItem = {
      id: index + '',
      title: deletedItem,
    };
    console.log(deletedItem);
    setFlatData(newData);
    if (deletedItem) {
      setDelatedToJobTypesAgain((prev: any) => [...prev, delatedItem]);
    }
  };
  return (
    <View style={[styles.container, appInputStyle]}>
      {label && (
        <CustomText text={label} textStyle={[styles.label, labelStyle]} />
      )}
      <Pressable
        disabled={isdisabled}
        onPress={() => {
          setShowMenue(!showMenue);
        }}
        style={[styles.inputContainer, containerStyle]}>
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
              renderItem={({item, index}) => (
                <Pressable
                  onPress={() => {
                    DelateItem(index);
                  }}>
                  <CustomText textStyle={styles.FlatListText} text={item} />
                </Pressable>
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
          maxLength={maxLength}
        />
        {rightIcon && (
          <TouchableOpacity onPress={onRightIconPress}>
            {rightIcon}
          </TouchableOpacity>
        )}
      </Pressable>
      {showMenue && (
        <View style={styles.menueOptions}>
          <FlatList
            data={menueOption}
            renderItem={({item, index}) => (
              <View>
                <Menu.Item
                  title={item}
                  titleStyle={styles.txt}
                  style={styles.rowOptions}
                  onPress={() => {
                    onChangeText(item);
                    setShowMenue(!showMenue);
                  }}
                />
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default AppInput;
