import {StyleProp, Text, TextStyle} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {COLORS} from '../../constants';

type Props = {
  text?: string;
  text2?: string;
  redmoreText?: string;
  textStyle?: StyleProp<TextStyle>;
  textStyle2?: StyleProp<TextStyle>;
  numberOfLines?: number;
  maxLength?: number;
  readMore?: boolean;
  onReadMore?: () => void;
};

const CustomText = ({
  textStyle,
  textStyle2,
  text,
  text2,
  redmoreText,
  numberOfLines,
  readMore,
  maxLength,
}: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <Text style={[styles.textStyle, textStyle]} numberOfLines={numberOfLines}>
      {text}
      <Text style={textStyle2}>{text2}</Text>
      {readMore && (
        <Text style={[styles.textStyle, textStyle]}>
          <Text style={[styles.textStyle, textStyle]}>
            {isExpanded
              ? redmoreText
              : `${redmoreText?.slice(0, maxLength)} ...`}
          </Text>
          <Text onPress={toggleText}>
            <Text style={{color: COLORS.primary}}>
              {isExpanded ? ' Read Less' : ' Read More'}
            </Text>
          </Text>
        </Text>
      )}
    </Text>
  );
};

export default CustomText;
