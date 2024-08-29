import {Pressable} from 'react-native';
import React from 'react';
import {CheckboxSVG, CheckedboxSVG} from '../../assets';
import {hp} from '../../constants';

type Props = {
  isChecked?: boolean;
  setIsChecked?: any;
};

const Checkbox = ({isChecked, setIsChecked}: Props) => {
  return (
    <Pressable onPressIn={() => setIsChecked(!isChecked)}>
      {isChecked ? <CheckedboxSVG /> : <CheckboxSVG />}
    </Pressable>
  );
};

export default Checkbox;
