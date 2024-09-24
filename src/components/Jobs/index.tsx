/* eslint-disable react/react-in-jsx-scope */
import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Pressable, View} from 'react-native';
import CustomText from '../CustomText';
import {generalStyles, hp} from '../../constants';
import {Cash, Crown, Location} from '../../assets';
import {styles} from './styles';
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

export default Job;
