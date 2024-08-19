import { StyleProp, Text, TextStyle } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { COLORS } from '../../constants';

type Props = {
  text?: string;
  text2?: string;
  textStyle?: StyleProp<TextStyle>;
  textStyle2?: StyleProp<TextStyle>;
  numberOfLines?: number;
  readMore?: boolean;
  onReadMore?: () => void;
};

const CustomText = ({
  textStyle,
  textStyle2,
  text,
  text2,
  numberOfLines,
  readMore,
  onReadMore,
}: Props) => {
  return (
    <Text style={[styles.textStyle, textStyle]} numberOfLines={numberOfLines}>
      {text}
      <Text style={textStyle2}>{text2}</Text>
      {readMore && (
        <Text style={{ color: COLORS.black }} onPress={() => onReadMore}>
          Read more...
        </Text>
      )}

    </Text>
  );
};

export default CustomText;
