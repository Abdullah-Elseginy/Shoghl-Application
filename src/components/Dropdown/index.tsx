import {StyleProp, TextStyle, View, ViewStyle} from 'react-native';
import React from 'react';
import {Dropdown as DropDwenPicker} from 'react-native-element-dropdown';
import {styles} from './styles';
import CustomText from '../CustomText';
import {COLORS} from '../../constants';

type Props = {
  placeholder?: string;
  label?: string;
  value?: any;
  onChangeValue?: any;
  list?: any;
  dropDownStyle?: StyleProp<ViewStyle>;
  placeholderStyle?: StyleProp<TextStyle>;
  ItemsBOX?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<ViewStyle>;
  selectedTextStyle?: StyleProp<TextStyle>;
  schema?: any;
  search?: boolean;
  min?: number;
  maxSelect?: number;
};

const Dropdown = ({
  placeholder,
  label,
  value,
  onChangeValue,
  list,
  dropDownStyle,
  placeholderStyle,
  ItemsBOX,
  containerStyle,
  labelStyle,
  selectedTextStyle,
  schema,
  search = false,
}: Props) => {
  const itemHeight = 50; // Height of each item
  const dropdownHeight = list.length * itemHeight; // Total height of dropdown
  return (
    <View>
      {label && (
        <CustomText text={label} textStyle={[styles.labelStyle, labelStyle]} />
      )}
      <DropDwenPicker
        data={list}
        labelField={schema?.label || 'default_name'}
        valueField={schema?.value || 'code'}
        mode="default"
        placeholder={placeholder}
        placeholderStyle={[styles.placeholderStyle, placeholderStyle]}
        style={[styles.dropDownStyle, dropDownStyle]}
        containerStyle={[
          styles.dropDownContainerStyle,
          containerStyle,
          {height: dropdownHeight},
        ]}
        selectedTextStyle={[styles.selectedTextStyle, selectedTextStyle]}
        itemContainerStyle={styles.itemContainerStyle}
        dropdownPosition="bottom"
        activeColor={COLORS.primaryMoreLight}
        search={search}
        value={value}
        onChange={onChangeValue}
        renderItem={item => (
          <View style={[styles.itemsContaienrStyle, ItemsBOX]}>
            <CustomText text={item.default_name} />
          </View>
        )}
        maxHeight={200}
        minHeight={50}
      />
    </View>
  );
};

export default Dropdown;
