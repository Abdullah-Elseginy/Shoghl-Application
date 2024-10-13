import React, {ReactNode} from 'react';
import {
  Modal,
  View,
  ViewStyle,
  StyleProp,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';
import {Cancel} from '../../assets';
import {hp, wp} from '../../constants';
import CustomText from '../CustomText';

interface CustomModalProps {
  setModalVisible?: (visible: boolean) => void;
  modalVisible?: boolean;
  children?: ReactNode;
  ModalContainerStyle?: StyleProp<ViewStyle>;
  modalmodalOverlayStyle?: StyleProp<ViewStyle>;
  modalContentStyle?: StyleProp<ViewStyle>;
  title?: string;
  subtitle?: string;
  closeIcon?: boolean;
  titleStyle?: StyleProp<ViewStyle>;
  subtitleStyle?: StyleProp<ViewStyle>;
}

const CustomModal: React.FC<CustomModalProps> = ({
  setModalVisible,
  modalVisible,
  children,
  ModalContainerStyle,
  modalmodalOverlayStyle,
  modalContentStyle,
  title,
  subtitle,
  closeIcon,
  titleStyle,
  subtitleStyle,
}) => {
  return (
    <View style={[styles.container, ModalContainerStyle]}>
      {/* Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() =>
          setModalVisible && setModalVisible(!modalVisible)
        }>
        <View style={[styles.modalOverlay, modalmodalOverlayStyle]}>
          <View style={[styles.modalContent, modalContentStyle]}>
            {/* Close Icon */}
            {closeIcon && (
              <TouchableOpacity
                onPress={() =>
                  setModalVisible && setModalVisible(!modalVisible)
                }
                style={styles.closeIcon}>
                <Cancel width={wp(5)} height={hp(3)} />
              </TouchableOpacity>
            )}
            {/* Title */}
            {title?.length && (
              <CustomText text={title} textStyle={[styles.title, titleStyle]} />
            )}
            {subtitle?.length && (
              <CustomText
                text={subtitle}
                textStyle={[styles.subtitle, subtitleStyle]}
              />
            )}
            {children}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomModal;
