import React, {FC} from 'react';
import {
  View,
  Modal,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import {COLORS} from '../../constants/COLORS';
import {styles} from './style';
import {HomeSVG} from '../../assets';
import {hp} from '../../constants';
import CustomText from '../CustomText';

interface GeneralModalProps {
  setModalVisible: (visible: boolean) => void;
  modalVisible: boolean;
  modalTitle?: string;
  modalSubTitle?: string;
  primaryBtnTxt?: string;
  cnancle?: boolean;
  onPrimaryBtn?: () => void;
  onCancleBtn?: () => void;
  textCnancle?: string;
  isTextClickable?: boolean;
  onTextPress?: () => void;
  SvgIcon?: any;
  loading?: boolean;
  closeModalImmediatelyWhenPressPrimaryBtn?: boolean;
  allowOnRequestClose?: boolean;
  report?: boolean;
  cancleStyle?: any;
  primaryStyle?: any;
  modalTitleStyle?: any;
  modalSubtitleStyle?: any;
  cancleBtnTxtStyle?: any;
  primaryBtnTxtStyle?: any;
}

const GeneralModal: FC<GeneralModalProps> = ({
  setModalVisible,
  modalVisible,
  modalTitle = '',
  modalSubTitle = '',
  primaryBtnTxt = '',
  cnancle,
  onPrimaryBtn = () => {},
  onCancleBtn = () => {},
  textCnancle = '',
  isTextClickable = false,
  onTextPress = () => {},
  SvgIcon,
  loading = false,
  closeModalImmediatelyWhenPressPrimaryBtn = true,
  allowOnRequestClose = true,
  report,
  cancleStyle,
  primaryStyle,
  modalTitleStyle,
  modalSubtitleStyle,
  cancleBtnTxtStyle,
  primaryBtnTxtStyle,
}) => {
  const onPressSubTitle = () => {
    onTextPress();
    setModalVisible(false);
  };

  const CancelButtonPress = () => {
    onCancleBtn();
    setModalVisible(false);
  };

  return (
    <>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        style={{
          height: hp(20),
          backgroundColor: '#00d',
        }}
        onRequestClose={() => {
          if (allowOnRequestClose) {
            setModalVisible(!modalVisible);
          }
        }}>
        <TouchableWithoutFeedback
          onPress={() => setModalVisible(!modalVisible)}>
          <View style={styles.centeredView} />
        </TouchableWithoutFeedback>
        <View style={styles.modalView}>
          {SvgIcon ? <HomeSVG /> : null}
          <CustomText
            text={modalTitle}
            textStyle={[styles.modalTitleStyle, modalTitleStyle]}
          />

          {modalSubTitle?.length > 0 && (
            <>
              {isTextClickable ? (
                <TouchableOpacity activeOpacity={0.5} onPress={onPressSubTitle}>
                  <CustomText
                    text={modalSubTitle}
                    textStyle={[styles.modalSubTitleStyle, modalSubtitleStyle]}
                  />
                </TouchableOpacity>
              ) : (
                <CustomText
                  text={modalSubTitle}
                  textStyle={[styles.modalSubTitleStyle, modalSubtitleStyle]}
                />
              )}
            </>
          )}
          {primaryBtnTxt.length > 0 && (
            <TouchableOpacity
              disabled={loading}
              onPress={() => {
                onPrimaryBtn();
                if (closeModalImmediatelyWhenPressPrimaryBtn) {
                  setModalVisible(false);
                }
              }}
              style={[
                styles.primaryBtnStyle,
                {backgroundColor: report ? 'red' : COLORS.black},
                primaryStyle,
              ]}
              activeOpacity={0.4}>
              {loading ? (
                <ActivityIndicator color={COLORS.white} size={'small'} />
              ) : (
                <CustomText
                  text={primaryBtnTxt}
                  textStyle={[styles.primaryBtnTxt, primaryBtnTxtStyle]}
                />
              )}
            </TouchableOpacity>
          )}
          {cnancle && (
            <TouchableOpacity
              onPress={() => CancelButtonPress()}
              style={[styles.cancleBtnStyle, cancleStyle]}>
              <CustomText
                text={textCnancle}
                textStyle={[styles.cancle, cancleBtnTxtStyle]}
              />
            </TouchableOpacity>
          )}
        </View>
      </Modal>
    </>
  );
};

export default GeneralModal;
