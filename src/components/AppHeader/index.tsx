import {
  View,
  StyleProp,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

import {COLORS} from '../../constants/COLORS';
import { HomeSVG } from '../../assets';
import CustomText from '../CustomText';

type Props = {
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  arrowBack?: boolean;
  styleHeader?: StyleProp<ViewStyle>;
  rightXP?: string;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
  onLeftIconPress?: () => void;
  leftIcon?: React.ReactNode;
  stylebtnRight?: StyleProp<ViewStyle>;
  xpColor?: string;
  xpBackgroundColor?: string;
  arrowBackColor?: string;
};

const AppHeader = ({
  title,
  titleStyle,
  arrowBack,
  styleHeader,
  rightXP,
  rightIcon,
  onRightIconPress,
  onLeftIconPress,
  leftIcon,
  stylebtnRight,
  xpBackgroundColor,
  xpColor,
  arrowBackColor,
}: Props) => {
  const navigation = useNavigation();

  return (
    <View
      style={[styles.headerContainer, styles.center, styles.row, styleHeader]}>
      {arrowBack && (
        <TouchableOpacity
          style={[styles.arrowBack, {backgroundColor: arrowBackColor}]}
          onPress={() => navigation.goBack()}>
          <HomeSVG />
        </TouchableOpacity>
      )}
      {leftIcon && (
        <TouchableOpacity onPress={onLeftIconPress}>
          {leftIcon}
        </TouchableOpacity>
      )}
      <View style={styles.titleBox}>
        <CustomText text={title} textStyle={[styles.title, titleStyle]} />
      </View>
      <View style={styles.row}>
        {rightXP && (
          <CustomText
            text={rightXP}
            textStyle={[
              styles.xp,
              {
                color: xpColor ? xpColor : COLORS.black,
                backgroundColor: xpBackgroundColor
                  ? xpBackgroundColor
                  : COLORS.black,
              },
            ]}
          />
        )}
        {rightIcon && (
          <TouchableOpacity style={stylebtnRight} onPress={onRightIconPress}>
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default AppHeader;
