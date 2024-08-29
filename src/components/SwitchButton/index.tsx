import React from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import {COLORS} from '../../constants';

type Props = {
  isChecked?: boolean;
  setIsChecked?: any;
  size?: string;
};

const SwitchButton = ({isChecked, setIsChecked, size}: Props) => {
  return (
    <ToggleSwitch
      isOn={isChecked}
      onToggle={() => setIsChecked(!isChecked)}
      onColor={COLORS.primary}
      offColor={COLORS.grayMoreLight}
      size={size}
    />
  );
};

export default SwitchButton;
