import {ViewStyle, StyleProp, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from './styles';

type Props = {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};

const AppScreenContainer = ({children, style}: Props) => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

export default AppScreenContainer;
