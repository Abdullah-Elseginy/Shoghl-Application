import React, {useState} from 'react';
import {
  AppHeader,
  AppInput,
  AppScreenContainer,
  Button,
  CustomText,
} from '../../components';
import {styles} from './styles';
import {View} from 'react-native';
import {
  Cash,
  Crown,
  Edit,
  ExitXicon,
  Globaly,
  Location,
  Raya,
} from '../../assets';

import {FlatList, Pressable, ScrollView} from 'react-native-gesture-handler';
import {generalStyles, hp} from '../../constants';
import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {JOBS} from '../../utils/Data';
type Props = {
  navigation: NativeStackNavigationProp<ParamListBase, string>;
};

const Job = ({item}: any) => {
  return (
    <Pressable onPress={() => {}} style={[styles.jobBox]}>
      <View style={styles.jobTopBox}>
        <View style={generalStyles.row}>
          {item.img}
          <View style={styles.jobTopContent}>
            <CustomText text={item.status} textStyle={styles.status} />
            <CustomText text={item.job} textStyle={styles.job} />
            <View style={[generalStyles.rowBetween, styles.PeriodBox]}>
              {item.period ? (
                <CustomText text={item.period} textStyle={styles.period} />
              ) : (
                ''
              )}
              {item.intern ? (
                <CustomText text={item.intern} textStyle={[styles.period2]} />
              ) : (
                ''
              )}
              {item.freelance ? (
                <CustomText
                  text={item.freelance}
                  textStyle={[styles.period3]}
                />
              ) : (
                ''
              )}
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

        {/* Edit DEllate */}
        <View style={generalStyles.rowBetween}>
          <Pressable style={[generalStyles.row, styles.editDelateBox]}>
            <ExitXicon />
            <CustomText text="Delete" />
          </Pressable>
          <Pressable
            style={[generalStyles.row, styles.editDelateBox, styles.Color]}>
            <Edit />
            <CustomText text="Edit" />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};
const ComplateCompanyProfile = ({navigation}: Props) => {
  // Select Images
  // const [imageUri, setImageUri] = useState<string | null>(null);
  // const selectImage = () => {
  //   const options: ImageLibraryOptions = {
  //     mediaType: 'photo',
  //     quality: 1,
  //   };

  //   launchImageLibrary(options, response => {
  //     if (response.didCancel) {
  //     } else if (response.errorCode) {
  //       Alert.alert(
  //         'Error:',
  //         response.errorMessage || 'Unknown error occurred',
  //       );
  //     } else if (response.assets && response.assets.length > 0) {
  //       const selectedImage: Asset = response.assets[0];
  //       setImageUri(selectedImage.uri || null);
  //     }
  //   });
  // };
  const [Disapled, SetDisapled] = useState(false);
  const [InputsData] = useState([
    {title: 'Location', type: 'text', value: '', error: '', hasError: false},
    {title: 'Founded', type: 'text', value: '', error: '', hasError: false},
    {
      title: 'Company Size',
      type: 'text',
      value: '',
      error: '',
      hasError: false,
    },
    {title: 'Specialties', type: 'text', value: '', error: '', hasError: false},
    {title: 'Industry', type: 'text', value: '', error: '', hasError: false},
  ]);

  const [InpusValues, SetInpusValues] = useState<any>({
    Location: 'Egypt',
    Founded: '2020',
    'Company Size': '50-100 employeee',
    Specialties: 'Technology, Innovation',
    Industry: 'Software Development',
  });

  const OchangeInpus = (val: string, FieldName: string) => {
    // Dynamically update the state for the corresponding field
    SetInpusValues((prevState: any) => ({
      ...prevState,
      [FieldName]: val,
    }));
  };
  return (
    <AppScreenContainer>
      <AppHeader arrowBack={true} title="Company Profile" />

      <ScrollView>
        {/* Profile Cover and photo */}
        <View>
          <View style={styles.CoverBackgroud}>
            <View style={styles.ProfilePhotoBox}>
              <Raya />
            </View>
            <View style={styles.TextsBox}>
              <CustomText
                text="Raya Contact Center"
                textStyle={styles.coverText}
              />
              <View style={[generalStyles.row]}>
                <Location />
                <CustomText
                  text="Consumer Electronics . Retail . Cairo, Egypt . 501-1000 employees"
                  textStyle={styles.subText2}
                />
              </View>
              <View style={[generalStyles.row]}>
                <Globaly />
                <CustomText
                  text="www.Rayacorp.com"
                  textStyle={styles.subText2}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.Container}>
          {/* Edit Company Profile */}
          <View style={styles.HringBox}>
            <View style={generalStyles.rowBetween}>
              <CustomText
                text="Company Profile?"
                textStyle={styles.TextTitle}
              />
              {Disapled ? (
                <Button
                  onPress={() => {
                    SetDisapled(false);
                  }}
                  style={styles.EditBtn}
                  text={'Save'}
                />
              ) : (
                <Button
                  onPress={() => {
                    SetDisapled(true);
                  }}
                  style={styles.EditBtn}
                  text={'+ Edit'}
                />
              )}
            </View>
            <FlatList
              data={InputsData}
              numColumns={2}
              keyExtractor={item => item.title}
              renderItem={({item}) => (
                <View style={styles.FlatBox2}>
                  <CustomText text={item.title} />
                  <AppInput
                    value={InpusValues[item.title]}
                    onChangeText={val => OchangeInpus(val, item.title)}
                    containerStyle={[
                      Disapled
                        ? styles.InputContainerStyle
                        : styles.InputContainerStyle2,
                    ]}
                    placeholder={item.title}
                    editable={Disapled}
                  />
                </View>
              )}
            />
          </View>
          {/* hiring */}
          <View style={styles.HringBox}>
            <CustomText text="Hiring?" textStyle={styles.TextTitle} />
            <CustomText
              text="If you looking for hire right candidate start hire now.?"
              textStyle={styles.subText}
            />
            <Button
              onPress={() => {}}
              text="Start Hiring"
              style={styles.bottomStyle}
            />
          </View>

          {/* CVs */}
          <View style={styles.HringBox}>
            <CustomText text="CVs" textStyle={styles.TextTitle} />
            <CustomText
              text="If you looking for hire right candidate start hire now.?"
              textStyle={styles.subText}
            />
            <Button
              onPress={() => {}}
              text="Brows CVs"
              style={styles.bottomStyle}
            />
          </View>
          {/* Recent Jobs At Raya */}
          <View style={styles.Section}>
            <CustomText
              text="Recent Jobs At Raya "
              textStyle={styles.SectionTXT}
            />
          </View>
          {/* Jobs*/}
          <View style={styles.FlatBox}>
            <FlatList
              data={JOBS}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <Job navigation={navigation} item={item} />
              )}
            />
          </View>
        </View>
      </ScrollView>
    </AppScreenContainer>
  );
};

export default ComplateCompanyProfile;
