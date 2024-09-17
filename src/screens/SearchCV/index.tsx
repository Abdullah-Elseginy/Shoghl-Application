import {ScrollView, View} from 'react-native';
import React from 'react';
import {
  AppHeader,
  AppInput,
  AppScreenContainer,
  Button,
  CustomText,
} from '../../components';
import {styles} from './styles';
import {generalStyles, hp, wp} from '../../constants';
import {Search, Tips} from '../../assets';
import ScreenNames from '../../navigations/ScreenNames';

const SearchCV = ({navigation}) => {
  return (
    <AppScreenContainer style={styles.container}>
      <AppHeader arrowBack={true} title="Search CV" />
      <ScrollView>
        <View style={styles.MainHeader}>
          <CustomText
            text="Search Candidates CVs"
            textStyle={styles.headerTExt}
          />
          <View style={generalStyles.rowCenter}>
            <Tips width={wp(5)} height={hp(2.5)} />
            <CustomText
              text="Tips for better search"
              textStyle={styles.SupTExt}
            />
          </View>
        </View>
        {/* padding View */}
        <View style={styles.SeconBox}>
          <AppInput
            containerStyle={styles.InputSearch}
            leftIcon={<Search width={wp(5)} height={hp(3)} />}
            placeholder="Search by job title"
            rightIcon={
              <Button
                text="Search"
                style={styles.Serxhbtn}
                onPress={() => {
                  navigation.navigate(ScreenNames.ComplateSearchedCv);
                }}
              />
            }
          />
        </View>
      </ScrollView>
    </AppScreenContainer>
  );
};

export default SearchCV;
