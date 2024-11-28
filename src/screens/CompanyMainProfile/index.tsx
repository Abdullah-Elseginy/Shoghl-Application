/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  AppInput,
  Apploader,
  AppScreenContainer,
  Button,
  CustomModal,
  CustomText,
  Dropdown,
} from '../../components';
import {styles} from './styles';
import {Image, Pressable, TouchableOpacity, View} from 'react-native';
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

import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {generalStyles, hp} from '../../constants';
import {
  CommonActions,
  ParamListBase,
  useFocusEffect,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {logoutCompany} from '../../redux/slices/authSlice';
import Toast from 'react-native-toast-message';
import ScreenNames from '../../navigations/ScreenNames';
import WebView from 'react-native-webview';
import {deleteJob, getCompanyPostedJobs} from '../../redux/slices/JobsSlice';
import {
  editCompanyProfile,
  getCompanyProfile,
} from '../../redux/slices/appdataSlice';
import {
  getAllCountries,
  getCompanyRange,
  getIndustrys,
  getSpecialties,
} from '../../redux/slices/helpersSlice';

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase, string>;
};

const Job = ({item, navigation, companyName, deletejob}: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
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
                data={item?.job_types}
                horizontal
                contentContainerStyle={styles.Conten}
                renderItem={({item}: any) =>
                  item === 'Full Time' ? (
                    <CustomText
                      text={item.default_name.slice(0, 9)}
                      textStyle={[styles.period2]}
                    />
                  ) : item == 'Shift based' ? (
                    <CustomText
                      text={item.default_name?.slice(0, 9)}
                      textStyle={[styles.period]}
                    />
                  ) : item == 'Part Time' ? (
                    <CustomText
                      text={item.default_name?.slice(0, 12)}
                      textStyle={[styles.period, styles.period4]}
                    />
                  ) : (
                    <CustomText
                      text={item.default_name?.slice(0, 12) + '..'}
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
              text={
                item?.country?.default_name + ' | ' + item?.city?.default_name
              }
              textStyle={styles.jobBottomTxt}
            />
          </View>
        </View>
        <View style={generalStyles.row}>
          <Cash width={hp(2)} height={hp(2)} style={styles.btnIcon} />
          <CustomText
            text={
              item?.contract_type?.default_name +
              ' | ' +
              item?.career_level?.default_name
            }
            textStyle={styles.jobBottomTxt}
          />
        </View>
        <View style={[generalStyles.rowBetween, styles.marginT]}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={[generalStyles.row, styles.editDelateBox]}
            onPress={() => {
              deletejob(item.code);
            }}>
            <ExitXicon />
            <CustomText text="Delete" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[generalStyles.row, styles.editDelateBox, styles.Color]}
            activeOpacity={0.5}
            onPress={() => {
              navigation.navigate(ScreenNames.JobPost, {jobData: item});
            }}>
            <Edit />
            <CustomText text="Edit" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const ComplateCompanyProfile = ({navigation}: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const {loading} = useSelector((state: any) => state.auth);
  const {loadingappdata, CompanyDataProfile, loadingSaveEdit} = useSelector(
    (state: any) => state.appdata,
  );
  const {allCountries2, industrys, specialties, CompanyRangedata} = useSelector(
    (state: any) => state.helpers,
  );
  const {companyPostedJobs, lodingApply} = useSelector(
    (state: any) => state.jobs,
  );
  const companyDataProfile = CompanyDataProfile;
  const [Disapled, SetDisapled] = useState(false);
  const [modalVisible, setmodalVisible] = useState(false);
  const [editDoc, setesitDoc] = useState(false);

  const [companyLocation, setLocation] = useState(
    companyDataProfile?.country?.code || '',
  );
  const [companyRange, setCompanyRange] = useState(
    companyDataProfile?.size?.code || '',
  );

  const [InpusValues, SetInpusValues] = useState<any>({
    Founded: companyDataProfile?.company_year_founded + '',
    'Company Size': '',
    Specialties: companyDataProfile?.company_specialties?.specialties,
    Industry: companyDataProfile?.company_industry_data?.code,
  });
  console.log('speee' + companyDataProfile?.company_specialties?.specialties);

  // const [IndusteryCode, SetIndusteryCode] = useState('');
  // const [SpecialisesCode, setSpecialisesCode] = useState('');

  const OchangeInpus = (val: string, FieldName: string) => {
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

  // ----------------------------------show PDF-------------------------------------------------------
  const [doenloadPDF, setdoenloadPDF] = useState(false);
  const [DocumentURL, setDocumentURL] = useState(companyDataProfile?.cv);
  if (doenloadPDF) {
    setTimeout(() => {
      setdoenloadPDF(false);
    }, 1000);
  }

  //----------------------validate form--------------------------------
  const [formErrors, setFormErrors] = React.useState({
    country: '',
    company_year_founded: '',
    company_employees_range: '',
    company_industry: '',
    company_specialties: '',
    company_about: 'test about',
    size: 5,
  });

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    if (!companyLocation) {
      errors.country = 'Required';
    }
    if (!InpusValues.Founded) {
      errors.company_year_founded = 'Required,must between 1950-2026';
    }

    if (!companyRange) {
      errors.company_employees_range = 'Required';
    }
    if (!InpusValues.Industry) {
      errors.company_industry = 'Required';
    }
    if (!InpusValues.Specialties) {
      errors.company_specialties = 'Required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

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

  // ----------------APIs----------------------------------

  const DELETEJOB = (jobCode: any) => {
    const codeToSent = {
      job_code: jobCode,
    };
    console.log('code to send----' + JSON.stringify(codeToSent));
    dispatch(deleteJob(codeToSent))
      .unwrap()
      .then(res => {
        Toast.show({
          text1: 'Success',
          text2: res,
          type: 'success',
        });
        dispatch(getCompanyPostedJobs());
      })
      .catch(err => {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: err,
        });
      });
  };

  const EditCompany = () => {
    const datatosend = {
      country: companyLocation,
      company_year_founded: InpusValues.Founded,
      company_employees_range: companyRange,
      company_industry: InpusValues.Industry,
      company_specialties: [InpusValues.Specialties],
      company_about: 'test about',
      size: 5,
    };
    console.log('ssss=' + JSON.stringify(datatosend));
    if (validateForm()) {
      dispatch(editCompanyProfile(datatosend))
        .unwrap()
        .then(() => {
          Toast.show({
            text1: 'Success',
            text2: 'Company Profile Edited Successfully',
            type: 'success',
          });
          SetDisapled(false);
          dispatch(getCompanyProfile());
        })
        .catch(err => {
          Toast.show({
            type: 'error',
            text1: 'Error',
            text2: err,
          });
        });
    }
  };

  useFocusEffect(
    useCallback(() => {
      dispatch(getCompanyPostedJobs());
      dispatch(getCompanyProfile());
    }, []),
  );

  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getCompanyRange());
    dispatch(getSpecialties());
    dispatch(getIndustrys());
  }, []);

  const memoLocation = useMemo(() => allCountries2 || [], [allCountries2]);

  const memoCompanyRange = useMemo(
    () => CompanyRangedata || [],
    [CompanyRangedata],
  );

  return (
    <AppScreenContainer>
      <ScrollView>
        {/* Profile Cover and photo */}
        {/* AppLoader------ */}
        <Apploader visible={lodingApply || loadingappdata} />
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
                    companyDataProfile?.city?.default_name +
                    ' , ' +
                    companyDataProfile?.country?.default_name
                  }
                  textStyle={styles.subText2}
                />
              </View>
              <View style={[generalStyles.row]}>
                <Globaly />
                <CustomText
                  text={' ' + companyDataProfile?.business_email}
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
                    EditCompany();
                  }}
                  style={styles.EditBtn}
                  text={'Save'}
                  loading={loadingSaveEdit}
                />
              ) : (
                <Button
                  onPress={() => {
                    SetDisapled(true);
                    // OchangeInpus(5, 'Founded');
                  }}
                  style={styles.EditBtn}
                  text={'+ Edit'}
                />
              )}
            </View>

            <View style={styles.FlatBox2}>
              {!Disapled ? (
                <View>
                  <CustomText text="Location" textStyle={styles.labelinput} />
                  <View style={[styles.InputContainerStyle2, styles.box]}>
                    <CustomText
                      text={
                        companyDataProfile?.country?.default_name ||
                        'edit to add location'
                      }
                    />
                  </View>
                </View>
              ) : (
                <View>
                  <Dropdown
                    label="Location"
                    placeholder="Location"
                    value={companyLocation}
                    onChangeValue={(value: any) => setLocation(value.code)}
                    dropDownStyle={styles.DropBorder2}
                    list={memoLocation}
                  />
                  {formErrors.country && (
                    <CustomText
                      text={formErrors.country}
                      textStyle={styles.errorText}
                    />
                  )}
                </View>
              )}
              {!Disapled ? (
                <View>
                  <CustomText
                    text="Company Size"
                    textStyle={styles.labelinput}
                  />
                  <View style={[styles.InputContainerStyle2, styles.box]}>
                    <CustomText
                      text={
                        companyDataProfile?.size?.default_name  ||
                        'edit to add size'
                      }
                    />
                  </View>
                </View>
              ) : (
                <View>
                  <Dropdown
                    label="Company Size"
                    placeholder="Company Size"
                    value={companyRange}
                    onChangeValue={(value: any) => setCompanyRange(value.code)}
                    dropDownStyle={styles.DropBorder2}
                    list={memoCompanyRange}
                  />
                  {formErrors.company_employees_range && (
                    <CustomText
                      text={formErrors.company_employees_range}
                      textStyle={styles.errorText}
                    />
                  )}
                </View>
              )}
            </View>
            {Disapled ? (
              <View style={styles.mb}>
                <Dropdown
                  label="Specialties"
                  placeholder="Select Specialties"
                  value={InpusValues.Specialties}
                  onChangeValue={(value: any) =>
                    OchangeInpus(value.code, 'Specialties')
                  }
                  list={specialties}
                  search
                />
                {formErrors.company_specialties && (
                  <CustomText
                    text={formErrors.company_specialties}
                    textStyle={styles.errorText}
                  />
                )}
              </View>
            ) : (
              <View>
                <CustomText text="specialtiess" textStyle={styles.labelinput} />
                <View style={[styles.mb, styles.cont]}>
                  <CustomText
                    text={
                      companyDataProfile?.company_specialties?.value
                        ?.default_name || 'edit to add speciaties '
                    }
                  />
                </View>
              </View>
            )}
            {Disapled ? (
              <View style={styles.mb}>
                <Dropdown
                  label="Industry"
                  placeholder="Select Industry"
                  value={InpusValues.Industry}
                  onChangeValue={(value: any) =>
                    OchangeInpus(value.code, 'Industry')
                  }
                  list={industrys}
                  search
                />
                {formErrors.company_industry && (
                  <CustomText
                    text={formErrors.company_industry}
                    textStyle={styles.errorText}
                  />
                )}
              </View>
            ) : (
              <View>
                <CustomText text="industyrs" textStyle={styles.labelinput} />
                <View style={[styles.mb, styles.cont]}>
                  <CustomText
                    text={
                      companyDataProfile?.company_industry_data?.default_name ||
                      'edit to add industyrs '
                    }
                  />
                </View>
              </View>
            )}
            {Disapled ? (
              <View>
                <CustomText text="Founded" textStyle={styles.labelinput} />
                <AppInput
                  value={InpusValues.Founded}
                  onChangeText={val => OchangeInpus(val, 'Founded')}
                  containerStyle={[styles.InputContainerStyle]}
                  placeholder={'Founded'}
                />
                {formErrors.company_year_founded && (
                  <CustomText
                    text={formErrors.company_year_founded}
                    textStyle={styles.errorText}
                  />
                )}
              </View>
            ) : (
              <View>
                <CustomText text="Founded" textStyle={styles.labelinput} />
                <View style={styles.InputContainerStyle2}>
                  <CustomText
                    text={
                      companyDataProfile?.company_year_founded ||
                      'edit to add founded year'
                    }
                  />
                </View>
              </View>
            )}
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
                  setdoenloadPDF(true);
                  console.log('dowenloads--' + DocumentURL);
                }}
                text="Doenload PDF"
                style={styles.bottomStyle}
              />
            )}
            {doenloadPDF && (
              <WebView
                source={{uri: DocumentURL || ''}}
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
              onPress={() => {
                navigation.navigate(ScreenNames.SearchCV);
              }}
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
                  deletejob={DELETEJOB}
                  lodingApply={lodingApply}
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
