import {ActivityIndicator, Modal, View} from 'react-native';
import React from 'react';

import CustomText from '../CustomText';
import styles from './styles';

type Props = {
  message: string;
  visible: boolean;
};

const Apploader = ({message = 'loading...', visible}: Props) => {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={() => {}}>
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <ActivityIndicator size="large" color="#4C1B1B" />
          <CustomText textStyle={styles.message} text={message} />
        </View>
      </View>
    </Modal>
  );
};

export default Apploader;
