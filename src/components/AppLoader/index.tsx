import {ActivityIndicator, Modal, View} from 'react-native';
import React from 'react';

import CustomText from '../CustomText';
import styles from './styles';
import {COLORS} from '../../constants';

type Props = {
  message: string;
  visible: boolean;
};

const Apploader = ({message = 'loading...', visible}: Props) => {
  return (
    <View>
      <Modal
        transparent
        animationType="fade"
        visible={visible}
        onRequestClose={() => {}}>
        <View style={styles.overlay}>
          <View style={styles.modalContent}>
            <ActivityIndicator size="large" color={COLORS.primary} />
            <CustomText textStyle={styles.message} text={message} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Apploader;
