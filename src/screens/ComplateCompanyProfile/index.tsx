import React from 'react';
import {AppScreenContainer, CustomText} from '../../components';
import {styles} from './styles';
import {View} from 'react-native';
import {Raya, Upload} from '../../assets';

const ComplateCompanyProfile = () => {
  return (
    <AppScreenContainer>
      {/* Profile Cover and photo */}
      <View>
        <View style={styles.CoverBackgroud}>
          <CustomText
            text="Upload Your Company Cover Photo"
            textStyle={styles.coverText}
          />
          <Upload />
        </View>
        <View
          style={styles.ProfilePhotoBox}>
          <Raya />
        </View>
      </View>
    </AppScreenContainer>
  );
};

export default ComplateCompanyProfile;
