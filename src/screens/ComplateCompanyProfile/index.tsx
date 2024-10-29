import React, {useState} from 'react';
import {
  AppInput,
  AppScreenContainer,
  Button,
  CustomModal,
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
  PDF,
  Raya,
} from '../../assets';
import DocumentPicker from 'react-native-document-picker';

import {FlatList, Pressable, ScrollView} from 'react-native-gesture-handler';
import {generalStyles, hp} from '../../constants';
import {CommonActions, ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {JOBS} from '../../utils/Data';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {logoutCompany} from '../../redux/slices/authSlice';
import Toast from 'react-native-toast-message';
import ScreenNames from '../../navigations/ScreenNames';
import WebView from 'react-native-webview';
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
  const dispatch = useDispatch<AppDispatch>();
  const {loading, user} = useSelector((state: any) => state.auth);
  const companyDataProfile = user?.data;
  const [Disapled, SetDisapled] = useState(false);
  const [modalVisible, setmodalVisible] = useState(false);
  const [editDoc, setesitDoc] = useState(false);

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
    Location: companyDataProfile?.country?.name_en,
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

  const LogOut = () => {
    dispatch(logoutCompany())
      .unwrap()
      .then(() => {
        Toast.show({
          text1: 'Success',
          text2: 'Loed out Success',
          type: 'success',
          visibilityTime: 1500,
        });
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: ScreenNames.AuthStack}],
          }),
        );
      })
      .catch(err => {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: err,
          position: 'top',
          visibilityTime: 1500,
        });
      });
  };

  console.log('USER---------' + JSON.stringify(user));
  // ----------------------------------show PDF-------------------------------------------------------
  const [doenloadPDF, setdoenloadPDF] = useState(false);
  const [DocumentURL, setDocumentURL] = useState(companyDataProfile?.cv);
  if (doenloadPDF) {
    setTimeout(() => {
      setdoenloadPDF(false);
    }, 1000);
  }

  //--------------------------------Upload File--------------------------
  const [file, setFile] = useState({name: '', type: '', uri: ''});
  const selectDocument = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.plainText],
      });
      setFile(res[0]);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Document selection was canceled',
        });
      } else {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Unknown Error: ' + JSON.stringify(err),
        });
        // Alert.alert('Unknown Error: ' + JSON.stringify(err));
      }
    }
  };

  return (
    <AppScreenContainer>
      <ScrollView>
        {/* Profile Cover and photo */}
        <View>
          <View style={styles.CoverBackgroud}>
            <View style={styles.ProfilePhotoBox}>
              <Raya />
            </View>
            <View style={styles.TextsBox}>
              <CustomText
                text={companyDataProfile?.company_name}
                textStyle={styles.coverText}
              />
              <View style={[generalStyles.row]}>
                <Location />
                <CustomText
                  text={
                    companyDataProfile?.city?.name_en +
                    ' , ' +
                    companyDataProfile?.country?.name_en
                  }
                  textStyle={styles.subText2}
                />
              </View>
              <View style={[generalStyles.row]}>
                <Globaly />
                <CustomText
                  text={companyDataProfile?.business_email}
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

          {/* </View> */}
          <View style={styles.HringBox}>
            <View style={generalStyles.rowBetween}>
              <CustomText text="Your Document" textStyle={styles.TextTitle} />
              {editDoc ? (
                <Button
                  text="save"
                  style={styles.EditBtn}
                  onPress={() => {
                    setesitDoc(false);
                    setDocumentURL(file.uri);
                  }}
                />
              ) : (
                <Button
                  text="+ Edit"
                  style={styles.EditBtn}
                  onPress={() => setesitDoc(true)}
                />
              )}
            </View>
            <View style={styles.PDFVEw}>
              <PDF />
            </View>
            {editDoc ? (
              <Button
                onPress={() => {
                  selectDocument();
                }}
                text="Upload New Document"
                style={styles.bottomStyle}
              />
            ) : (
              <Button
                onPress={() => {
                  setdoenloadPDF(prev => !prev);
                }}
                text="Doenload PDF"
                style={styles.bottomStyle}
              />
            )}
            {doenloadPDF && (
              <WebView
                source={{uri: DocumentURL}}
                downloadingMessage="Dowenloaded successfully"
              />
            )}
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
        <View style={styles.Logout2}>
          <Button
            text="Log Out"
            style={styles.Logout}
            onPress={() => setmodalVisible(true)}
          />
        </View>
      </ScrollView>
      {/*logout modal*/}
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setmodalVisible}
        title="Are you sure you want to log out?"
        children={
          <>
            <View>
              <Button
                style={styles.Logout}
                text="Log Out"
                loading={loading}
                onPress={() => LogOut()}
              />
              <Button text="Cancel" onPress={() => setmodalVisible(false)} />
            </View>
          </>
        }
      />
    </AppScreenContainer>
  );
};

export default ComplateCompanyProfile;
