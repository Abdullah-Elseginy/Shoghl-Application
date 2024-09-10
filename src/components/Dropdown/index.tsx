import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {styles} from './styles';
import CustomText from '../CustomText';

type Props = {
  placeholder?: string;
  label?: string;
  value?: any;
  setValue: any;
  onChangeValue?: any;
  list?: any;
  dropDownStyle?: StyleProp<ViewStyle>;
  placeholderStyle?: StyleProp<TextStyle>;
};

const Dropdown = ({
  placeholder,
  label,
  value,
  setValue,
  onChangeValue,
  list,
  dropDownStyle,
  placeholderStyle,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {label && <CustomText text={label} textStyle={styles.labelStyle} />}
      <DropDownPicker
        maxHeight={200}
        listMode="SCROLLVIEW"
        placeholder={placeholder}
        placeholderStyle={[styles.placeholderStyle, placeholderStyle]}
        items={list}
        open={isOpen}
        setOpen={() => setIsOpen(!isOpen)}
        value={value}
        setValue={setValue}
        onChangeValue={onChangeValue}
        style={[styles.dropDownStyle, dropDownStyle]}
        modalContentContainerStyle={styles.dropDownContainerStyle}
        containerStyle={styles.dropDownContainerStyle}
        listItemLabelStyle={styles.listItemLabelStyle}
        selectedItemContainerStyle={styles.selectedItemContainerStyle}
        selectedItemLabelStyle={styles.selectedItemLabelStyle}
        dropDownContainerStyle={styles.itemsContaienrStyle}
        schema={{
          label: 'label',
          value: 'id',
        }}
      />
    </>
  );
};

export default Dropdown;
