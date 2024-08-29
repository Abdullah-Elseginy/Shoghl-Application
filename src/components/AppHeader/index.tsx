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
import {ArrowLeftSVG} from '../../assets';
import CustomText from '../CustomText';
import {generalStyles} from '../../constants';

type Props = {
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  arrowBack?: boolean;
  styleHeader?: StyleProp<ViewStyle>;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
  onLeftIconPress?: () => void;
  leftIcon?: React.ReactNode;
  stylebtnRight?: StyleProp<ViewStyle>;
  arrowBackColor?: string;
};

const AppHeader = ({
  title,
  titleStyle,
  arrowBack,
  styleHeader,
  rightIcon,
  onRightIconPress,
  onLeftIconPress,
  leftIcon,
  stylebtnRight,
  arrowBackColor,
}: Props) => {
  const navigation = useNavigation();

  return (
    <View
      style={[styles.headerContainer, generalStyles.rowCenter, styleHeader]}>
      {arrowBack && (
        <TouchableOpacity
          style={[styles.arrowBack, {backgroundColor: arrowBackColor}]}
          onPress={() => navigation.goBack()}>
          <ArrowLeftSVG />
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
      {rightIcon && (
        <TouchableOpacity style={stylebtnRight} onPress={onRightIconPress}>
          {rightIcon}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AppHeader;
