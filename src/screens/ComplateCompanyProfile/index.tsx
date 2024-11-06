import React, {useCallback, useState} from 'react';
import {
  AppInput,
  AppScreenContainer,
  Button,
  CustomModal,
  CustomText,
} from '../../components';
import {styles} from './styles';
import {Image, View} from 'react-native';
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
import {
  CommonActions,
  ParamListBase,
  useFocusEffect,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {JOBS} from '../../utils/Data';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {logoutCompany} from '../../redux/slices/authSlice';
import Toast from 'react-native-toast-message';
import ScreenNames from '../../navigations/ScreenNames';
import WebView from 'react-native-webview';
import {getCompanyPostedJobs} from '../../redux/slices/JobsSlice';
type Props = {
  navigation: NativeStackNavigationProp<ParamListBase, string>;
};

const Job = ({item, navigation, companyName}: any) => {
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(ScreenNames.JobDetails, {
          jobCode: item?.code,
        })
      }
      style={[styles.jobBox, {backgroundColor: item.color}]}>
      <View style={styles.jobTopBox}>
        <View style={generalStyles.row}>
          <View>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              }}
              style={styles.im}
              resizeMode="cover"
            />
          </View>
          <View style={styles.jobTopContent}>
            <View style={generalStyles.rowBetween}>
              <CustomText text={item.title} textStyle={styles.job} />
              <CustomText text={item.since} textStyle={styles.status} />
            </View>
            <View style={[generalStyles.rowBetween]}>
              <FlatList
                data={item?.job_types?.en}
                horizontal
                contentContainerStyle={styles.Conten}
                renderItem={({item}: any) =>
                  item == 'Full Time' ? (
                    <CustomText
                      text={item.slice(0, 9)}
                      textStyle={[styles.period2]}
                    />
                  ) : item == 'Shift based' ? (
                    <CustomText
                      text={item.slice(0, 9)}
                      textStyle={[styles.period]}
                    />
                  ) : item == 'Part Time' ? (
                    <CustomText
                      text={item.slice(0, 12)}
                      textStyle={[styles.period, styles.period4]}
                    />
                  ) : (
                    <CustomText
                      text={item.slice(0, 12) + '..'}
                      textStyle={[styles.period, styles.period3]}
                    />
                  )
                }
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.jobBottomBox}>
        <View style={[generalStyles.rowBetween, styles.JocBttomBox]}>
          <View style={generalStyles.row}>
            <Crown width={hp(2)} height={hp(2)} style={styles.btnIcon} />
            <CustomText text={companyName} textStyle={styles.jobBottomTxt} />
          </View>
          <View style={[generalStyles.row, styles.marginT]}>
            <Location width={hp(2)} height={hp(2)} style={[styles.btnIcon]} />
            <CustomText
              text={item?.country?.name_en + ' | ' + item?.city?.name_en}
              textStyle={styles.jobBottomTxt}
            />
          </View>
        </View>
        <View style={generalStyles.row}>
          <Cash width={hp(2)} height={hp(2)} style={styles.btnIcon} />
          <CustomText
            text={item?.contract_type?.en + ' | ' + item?.career_level?.en}
            textStyle={styles.jobBottomTxt}
          />
        </View>
        <View style={[generalStyles.rowBetween, styles.marginT]}>
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
  const {companyPostedJobs} = useSelector((state: any) => state.jobs);
  const companyDataProfile = user;
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
  useFocusEffect(
    useCallback(() => {
      dispatch(getCompanyPostedJobs());
    }, []),
  );
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
              text={'Recent Jobs At  ' + companyDataProfile?.company_name}
              textStyle={styles.SectionTXT}
            />
          </View>
          {/* Jobs*/}
          <View style={styles.FlatBox}>
            <FlatList
              data={companyPostedJobs}
              keyExtractor={item => item.code.toString()}
              renderItem={({item}) => (
                <Job
                  navigation={navigation}
                  item={item}
                  companyName={companyDataProfile?.company_name}
                />
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
