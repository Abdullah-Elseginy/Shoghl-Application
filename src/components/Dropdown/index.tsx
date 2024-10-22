import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {styles} from './styles';
import CustomText from '../CustomText';

type Props = {
  placeholder?: string;
  label?: string;
  value?: any;
  setValue?: any;
  onChangeValue?: any;
  list?: any;
  dropDownStyle?: StyleProp<ViewStyle>;
  placeholderStyle?: StyleProp<TextStyle>;
  ModalContainerStyle?: StyleProp<ViewStyle>;
  ItemsBOX?: StyleProp<ViewStyle>;
  selectedItemContainerStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  isOpen?: boolean; // New prop to indicate if this dropdown is open
  onDropdownOpen?: (isOpen: boolean) => void; // Updated type for the function
  labelStyle?: StyleProp<ViewStyle>;
  schema?: any;
  multiBle?: boolean;
  min?: number;
  max?: number;
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
  ModalContainerStyle,
  ItemsBOX,
  selectedItemContainerStyle,
  containerStyle,
  isOpen,
  onDropdownOpen,
  labelStyle,
  schema,
  multiBle = false,
  min,
  max,
}: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    const newState = !isDropdownOpen;
    setIsDropdownOpen(newState); // Toggle local dropdown state
    if (onDropdownOpen) {
      onDropdownOpen(newState); // Pass the new state to the parent
    }
  };

  return (
    <>
      {label && (
        <CustomText text={label} textStyle={[styles.labelStyle, labelStyle]} />
      )}
      <DropDownPicker
        maxHeight={200}
        listMode="SCROLLVIEW"
        placeholder={placeholder}
        placeholderStyle={[styles.placeholderStyle, placeholderStyle]}
        items={list}
        open={isDropdownOpen}
        setOpen={handleDropdownToggle} // Use the toggle function
        value={value}
        setValue={setValue}
        onChangeValue={onChangeValue}
        style={[styles.dropDownStyle, dropDownStyle]}
        modalContentContainerStyle={[
          styles.dropDownContainerStyle,
          ModalContainerStyle,
        ]}
        multiple={multiBle}
        mode={'BADGE'}
        // badgeColors={COLORS.primaryLight}
        badgeTextStyle={styles.bagetextStyle}
        min={min}
        max={max}
        containerStyle={[
          styles.dropDownContainerStyle,
          containerStyle,
          {zIndex: isOpen ? 10000 : 1}, // Set a high zIndex when open
        ]}
        listItemLabelStyle={styles.listItemLabelStyle}
        selectedItemContainerStyle={[
          styles.selectedItemContainerStyle,
          selectedItemContainerStyle,
        ]}
        selectedItemLabelStyle={styles.selectedItemLabelStyle}
        dropDownContainerStyle={[ItemsBOX, styles.itemsContaienrStyle]}
        schema={
          schema
            ? schema
            : {
                label: 'label',
                value: 'id',
              }
        }
      />
    </>
  );
};

export default Dropdown;
