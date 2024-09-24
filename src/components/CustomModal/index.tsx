import React, {useState} from 'react';
import {Modal, View, TouchableOpacity} from 'react-native';
import {Cancel, Help, UploadDoc} from '../../assets';
import {styles} from './styles';
import {generalStyles, hp, wp} from '../../constants';
import CustomText from '../CustomText';
import Button from '../Button';

const CustomModal = () => {
  const [modalVisible, setModalVisible] = useState(true);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      {/* Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={toggleModal}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Close Icon */}
            <TouchableOpacity onPress={toggleModal} style={styles.closeIcon}>
              <Cancel width={wp(5)} height={hp(3)} />
            </TouchableOpacity>

            {/* Title */}
            <CustomText text="You are almost done!" textStyle={styles.title} />
            <CustomText
              text="Complete these two simple steps to publish your first job post."
              textStyle={styles.subtitle}
            />

            {/* Step 1 */}
            <View style={styles.stepContainer}>
              <View style={styles.stepNumber}>
                <CustomText text="1" textStyle={styles.stepText} />
              </View>
              <View style={styles.stepInfo}>
                <CustomText
                  text="Confirm your email address"
                  textStyle={styles.stepTitle}
                />
                <CustomText
                  text="An email confirmation has been sent to"
                  textStyle={styles.stepSubtitle}
                />
                <CustomText
                  textStyle={styles.email}
                  text="infinitySolution1@gmail.com"
                />

                <TouchableOpacity>
                  <CustomText
                    textStyle={styles.resend}
                    text="Resend Confirmation email"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Step 2 */}
            <View style={styles.stepContainer}>
              <View style={styles.stepNumber}>
                <CustomText textStyle={styles.stepText} text="2" />
              </View>
              <View style={styles.stepInfo}>
                <CustomText
                  textStyle={styles.stepTitle}
                  text="Add your Company Tax Card or Commercial Register."
                />
                <CustomText
                  textStyle={styles.stepSubtitle}
                  text="In order to approve your company account, we need your Tax Card or your Commercial Registration Document."
                />
                <TouchableOpacity>
                  <CustomText
                    text="Why do we need these documents?"
                    textStyle={styles.whyText}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.uploadButton}>
                  <UploadDoc width={wp(5)} height={hp(3)} />
                  <CustomText
                    text="Upload Documents"
                    textStyle={styles.uploadText}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* Skip For Now */}
            <View style={generalStyles.rowBetween}>
              <TouchableOpacity style={styles.helpCenter}>
                <Help width={wp(5)} height={hp(3)} />
                <CustomText
                  text="Help Center"
                  textStyle={styles.helpCenterText}
                />
              </TouchableOpacity>
              <Button
                text="Skip For Now"
                style={styles.skipButton}
                onPress={toggleModal}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomModal;
