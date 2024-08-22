import * as React from 'react';
import { AppScreenContainer, CustomText } from '../../components';
import { styles } from './styles';

const ProfileScreen = () => {

    return (
        <AppScreenContainer style={styles.container}>
            <CustomText text='ProfileScreen' />
        </AppScreenContainer>
    );
};

export default ProfileScreen;
