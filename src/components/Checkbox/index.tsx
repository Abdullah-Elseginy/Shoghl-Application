import {Pressable} from 'react-native';
import React from 'react';
import {CheckboxSVG, CheckedboxSVG} from '../../assets';

type Props = {
  isChecked?: boolean;
  setIsChecked?: any;
};

const Checkbox = ({isChecked, setIsChecked}: Props) => {
  return (
    <Pressable onPressIn={() => setIsChecked((prev: boolean) => !prev)}>
      {isChecked ? <CheckedboxSVG /> : <CheckboxSVG />}
    </Pressable>
  );
};

export default Checkbox;
