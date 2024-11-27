import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {
  Dropdown as DropDwenPicker,
  MultiSelect,
} from 'react-native-element-dropdown';
import {styles} from './styles';
import CustomText from '../CustomText';
import {COLORS, wp} from '../../constants';
import {Delate, Search} from '../../assets';

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
  multible?: boolean;
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
  multible = false,
  maxSelect,
}: Props) => {
  const itemHeight = 40; // Height of each item
  const dropdownHeight = list.length * itemHeight; // Total height of dropdown

  return (
    <View>
      {label && (
        <CustomText text={label} textStyle={[styles.labelStyle, labelStyle]} />
      )}
      {!multible ? (
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
            {height: search ? dropdownHeight + 70 : dropdownHeight},
          ]}
          selectedTextStyle={[styles.selectedTextStyle, selectedTextStyle]}
          itemContainerStyle={styles.itemContainerStyle}
          searchPlaceholder="Search.."
          searchPlaceholderTextColor={COLORS.black}
          inputSearchStyle={styles.inputSearchStyle}
          dropdownPosition="bottom"
          activeColor={COLORS.primaryMoreLight}
          search={search}
          value={value}
          onChange={onChangeValue}
          renderItem={item => (
            <View style={[styles.itemsContaienrStyle, ItemsBOX]}>
              <CustomText text={item.default_name || item[schema?.label]} />
            </View>
          )}
          maxHeight={search ? 500 : 200}
          // minHeight={50}
        />
      ) : (
        <MultiSelect
          data={list}
          labelField={'default_name'}
          valueField={'code'}
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
          searchPlaceholder="Search.."
          searchPlaceholderTextColor={COLORS.black}
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
          // renderLeftIcon={() => <Save width={wp(6)} height={wp(5)} />}
          renderSelectedItem={(item, unSelect) => (
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.selectedStyle}
              onPress={() => {
                unSelect && unSelect(item);
              }}>
              <CustomText text={item.default_name} />
              <Delate width={wp(6)} height={wp(5)} />
            </TouchableOpacity>
          )}
          maxHeight={200}
          minHeight={50}
          maxSelect={maxSelect}
        />
      )}
    </View>
  );
};

export default Dropdown;
