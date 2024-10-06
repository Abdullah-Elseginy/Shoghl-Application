import {FlatList, Pressable, ScrollView, View} from 'react-native';
import React from 'react';
import {AppScreenContainer, CustomText} from '../../components';
import styles from './styles';
import {generalStyles, hp} from '../../constants';
import {Add, Cash, Crown, Location} from '../../assets';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {JOBS3, QUETIONS} from '../../utils/Data';
type Props = {
  navigation: NativeStackNavigationProp<ParamListBase, string>;
  item: any;
};

const Job = ({item, navigation}: Props) => {
  return (
    <Pressable
      onPress={() => navigation.navigate('JobDetails')}
      style={[styles.jobBox, {backgroundColor: item.color}]}>
      <View style={styles.jobTopBox}>
        <View style={generalStyles.row}>
          {item.img}
          <View style={styles.jobTopContent}>
            <CustomText text={item.status} textStyle={styles.status} />
            <CustomText text={item.job} textStyle={styles.job} />
            <View style={[generalStyles.rowBetween, styles.PeriodBox]}>
              <CustomText text={item.period} textStyle={styles.period} />
              <CustomText text={item.intern} textStyle={[styles.period2]} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.jobBottomBox}>
        <View style={[generalStyles.row, styles.JocBttomBox]}>
          <Crown width={hp(2)} height={hp(2)} style={styles.btnIcon} />
          <CustomText text={item.status} textStyle={styles.jobBottomTxt} />
          <Location
            width={hp(2)}
            height={hp(2)}
            style={[styles.btnIcon, styles.LocationIcon]}
          />
          <CustomText text={item.location} textStyle={styles.jobBottomTxt} />
        </View>
        <View style={generalStyles.row}>
          <Cash width={hp(2)} height={hp(2)} style={styles.btnIcon} />
          <CustomText text={item.price} textStyle={styles.jobBottomTxt} />
        </View>
      </View>
    </Pressable>
  );
};
const Quetions = ({item}: any) => {
  return (
    <View style={styles.quetionBox}>
      <CustomText text={item.text} textStyle={styles.filtersText} />
      <Add />
    </View>
  );
};
const SaveScreen = ({navigation}: any) => {
  return (
    <AppScreenContainer>
      {/* <AppHeader arrowBack={true} title="Saved" /> */}
      <ScrollView contentContainerStyle={styles.container}>
        {/* Section1 Search Title */}
        <View style={styles.Secion1Box}>
          <CustomText
            text="Senior Management Jobs in Saudi Arabia"
            textStyle={styles.sectionTitle}
          />
          <CustomText text="123 jobs found" textStyle={styles.jobsNumber} />
        </View>
        {/* Jobs*/}
        <View>
          <FlatList
            data={JOBS3}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <Job navigation={navigation} item={item} />}
          />
        </View>
        {/* َQuetions */}
        <View>
          <FlatList
            data={QUETIONS}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <Quetions item={item} />}
          />
        </View>
      </ScrollView>
    </AppScreenContainer>
  );
};

export default SaveScreen;
