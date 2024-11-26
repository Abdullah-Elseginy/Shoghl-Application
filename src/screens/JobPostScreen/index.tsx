/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Pressable, ScrollView, TouchableOpacity, View} from 'react-native';
import {
  AppHeader,
  AppInput,
  AppScreenContainer,
  Button,
  Checkbox,
  CustomText,
  Dropdown,
} from '../../components';
import {styles} from './styles';
import {FlatList} from 'react-native-gesture-handler';
import {COLORS, generalStyles, wp} from '../../constants';

import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {
  getAllCities,
  getAllCountries,
  getContractTypes,
  getJobCategories,
  getJobsCareerLevels,
  getJobsSalaryPer,
  getPostJobTypes,
  getPostType,
  GetSalaryCurrency,
  sendEmailNotifyPer,
} from '../../redux/slices/helpersSlice';

import Toast from 'react-native-toast-message';
import {
  editBob,
  PostJobCategories,
  PostJobHelpers,
  PostNewJob,
} from '../../redux/slices/JobsSlice';
import ScreenNames from '../../navigations/ScreenNames';

const JobPost = ({navigation, route}: any) => {
  const {jobData} = route.params || {};
  const dispatch = useDispatch<AppDispatch>();
  const {user} = useSelector((state: any) => state.auth);

  const {
    allCountries,
    allCities,
    Currency,
    postType,
    jobPostTypes,
    contractTypes,
    postJobCareerLevel,
    jobsSalaryPer,
    notifyPer,
    jobCategories,
  } = useSelector((state: any) => state.helpers);
  const {loadinJobs, lodingApply} = useSelector((state: any) => state.jobs);
  const JobOPtionData = [
    {
      code: '1',
      title: 'Keep Company Confidintial',
      subTitle: 'Hide Company name , logo and profile',
    },
    {
      code: '2',
      title: 'Send me emails notifications when there are good candidates',
      subTitle: '',
    },
  ];

  const getCodes = (datatogetItsCode: any) => {
    return datatogetItsCode?.map((job: any) => job.code);
  };

  const [selectedId, setSelectedId] = useState<string | null>(
    jobData?.post_type?.code || '1',
  );
  const [Title, setTitle] = useState<string>(jobData?.title || '');
  const [Category, setCategory] = useState(jobData?.category?.code || '');
  console.log('caterrr', Category);
  const [selectedType, setSelectedType] = useState<string>('Job');
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>(
    getCodes(jobData?.job_types) || [],
  );

  const [selectedId4, setSelectedId4] = useState<string | null>(
    jobData?.career_level?.code || null,
  );

  const [selectedIds, setSelectedIds] = useState<string | null>(
    [jobData?.contract_type?.code] || '',
  );

  console.log('ffoooo' + selectedIds);

  const [Checked, setChecked] = useState<boolean>(
    jobData?.salary_hide || false,
  );

  const [exp_From, setExpFrom] = useState(
    jobData?.experience_from.toString() || '',
  );

  const [exp_To, setExpTo] = useState(jobData?.experience_to.toString() || '');
  const [salary_From, setSalaryFrom] = useState(
    jobData?.salary_from.toString() || '',
  );

  const [salary_To, setSalaryTo] = useState(
    jobData?.salary_to.toString() || '',
  );

  const [numberOFVacancies, setnumberOFVacancies] = useState(
    jobData?.number_of_vacancies?.toString() || '',
  );

  const [Description, setDescription] = useState(
    jobData?.job_description || '',
  );

  const [Requirment, setRequirment] = useState(jobData?.job_requirements || '');
  const [keyWords, setKeyWords] = useState('');
  const [Email, setEmail] = useState(
    jobData?.send_emails_notification_to || user?.business_email,
  );
  // dropdwens
  const [selectedCity, setSelectedCity] = useState(jobData?.city?.code || '');
  const [selectedCountry, setSelectedCountry] = useState(
    jobData?.country?.code || '',
  );

  const [selectedSalaryPer, SetSelectedSalaryPer] = useState(
    jobData?.salary_per?.code || '',
  );

  const [selectedSalaryCurrency, SetSelectedSalaryCurrency] = useState(
    jobData?.salary_currency?.code || '',
  );

  const [openDropdown, setOpenDropdown] = useState(null);
  const [KeyWpordsArray, setKeyWpordsArray] = useState(jobData?.keywords || []);

  const deleteItemByIndex = (indexToDelete: number) => {
    setKeyWpordsArray((prevLanguages: any) =>
      prevLanguages?.filter((_, index) => index !== indexToDelete),
    );
  };

  const addedLanguge = () => {
    for (let i = 0; i < KeyWpordsArray.length; i++) {
      if (KeyWpordsArray[i] === keyWords) {
        Toast.show({
          text1: 'Error',
          text2: 'You have already added this keyword',
          type: 'error',
        });
        return;
      }
    }
    setKeyWpordsArray([...KeyWpordsArray, keyWords]);
    setKeyWords('');
  };

  const handleDropdownOpen = (dropdownId: any) => {
    if (openDropdown === dropdownId) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdownId);
    }
  };

  const renderItem = ({item}: {item: {code: string; default_name: string}}) => (
    <Pressable
      style={[
        styles.choise,
        selectedId === item.code ? styles.selected : styles.unselected,
      ]}
      onPress={() => {
        setSelectedId(item.code);
        setSelectedType(item.default_name);
      }}>
      <CustomText
        text={item.default_name}
        textStyle={
          selectedId === item.code ? styles.textSlected : styles.textunselected
        }
      />
    </Pressable>
  );

  const renderItem2 = ({
    item,
  }: {
    item: {code: string; default_name: string};
  }) => (
    <Pressable
      style={[
        styles.choise1,
        selectedJobTypes.includes(item.code)
          ? styles.selected
          : styles.unselected,
      ]}
      onPress={() => handleSelectedJobsType(item.code)}>
      <CustomText
        text={item.default_name}
        textStyle={
          selectedJobTypes.includes(item.code)
            ? styles.textSlected
            : styles.textunselected
        }
      />
    </Pressable>
  );

  const renderItem3 = ({item}: {item: {code: any; default_name: string}}) => {
    const isSelected = selectedIds?.includes(item.code);

    const handlePress = () => {
      setSelectedIds(prevSelectedIds =>
        isSelected
          ? prevSelectedIds.filter(id => id !== item.code)
          : [item.code],
      );
    };

    return (
      <Pressable
        style={[
          styles.choise,
          isSelected ? styles.selected : styles.unselected,
        ]}
        onPress={handlePress}>
        <CustomText
          text={item.default_name}
          textStyle={isSelected ? styles.textSlected : styles.textunselected}
        />
      </Pressable>
    );
  };

  const renderItem4 = ({
    item,
  }: {
    item: {code: string; default_name: string};
  }) => (
    <Pressable
      style={[
        styles.Careerchoise,
        selectedId4 === item.code ? styles.selected : styles.unselected,
      ]}
      onPress={() => setSelectedId4(item.code)}>
      <CustomText
        text={item.default_name}
        textStyle={
          selectedId4 === item.code ? styles.textSlected : styles.textunselected
        }
      />
    </Pressable>
  );
  const keyWordsrenderItem = ({item, index}: any) => (
    <View style={[generalStyles.row, styles.conlang]}>
      <CustomText text={item} textStyle={styles.Langtxt} />
      <TouchableOpacity
        onPress={() => deleteItemByIndex(index)}
        style={[styles.delate]}>
        <CustomText text="x" textStyle={styles.texdel} />
      </TouchableOpacity>
    </View>
  );

  const handleSelectedJobsType = (code: string) => {
    setSelectedJobTypes(prevSelectedCodes => {
      if (prevSelectedCodes.includes(code)) {
        return prevSelectedCodes.filter(selectedCode => selectedCode !== code);
      } else {
        return [...prevSelectedCodes, code];
      }
    });
  };
  // -------------------------options------------------------
  const [selectedJobOption, setSelectedJobOption] = useState(
    jobData?.keep_company_confidential || null,
  );
  const [selectedSubOption, setSelectedSubOption] = useState(
    jobData?.send_emails_notification || null,
  );

  // Function to handle selection in the first FlatList
  const toggleSelection = (code: any) => {
    setSelectedJobOption((prevCode: any) => (prevCode === code ? null : code));
    setSelectedSubOption(null); // Reset sub-selection when main selection changes
  };

  // Function to handle selection in the second FlatList
  const toggleSubSelection = (code: any) => {
    setSelectedSubOption((prevCode: any) => (prevCode === code ? null : code));
  };
  //--------------------------------Validation----------------
  const formData = {
    is_high_job: 'no',
    post_type: selectedId,
    title: Title,
    category: 1,
    job_types: selectedJobTypes,
    contract_type: Number(selectedIds?.toString()),
    country: selectedCountry,
    salary_currency: selectedSalaryCurrency,
    salary_per: selectedSalaryPer,
    city: selectedCity,
    career_level: Number(selectedId4),
    experience_from: Number(exp_From),
    experience_to: Number(exp_To),
    salary_from: Number(salary_From),
    salary_to: Number(salary_To),
    salary_hide: Checked ? 'yes' : 'no',
    number_of_vacancies: Number(numberOFVacancies),
    job_description: Description,
    job_requirements: Requirment,
    keywords: KeyWpordsArray,
    // option: selectedJobOption,
    send_emails_notification_per: selectedSubOption,
    send_emails_notification_to: Email,
  };

  const [formErrors, setFormErrors] = React.useState({
    is_high_job: 'no',
    post_type: '',
    title: '',
    job_types: '',
    contract_type: '',
    country: '',
    salary_currency: '',
    city: '',
    career_level: '',
    experience_from: '',
    experience_to: '',
    salary_from: '',
    salary_to: '',
    salary_hide: '',
    salary_per: '',
    number_of_vacancies: '',
    job_description: '',
    job_requirements: '',
    keywords: '',
    keep_company_confidintial: '',
    send_emails_notification: '',
    email: '',
    category: '',
  });

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    if (!formData.post_type) {
      errors.post_type = 'Post Type Required';
    }
    if (!formData.title) errors.title = 'Title Required';
    if (!formData.job_types) errors.job_types = 'Job Types Required';
    if (!formData.contract_type) {
      errors.contract_type = 'Contract Type Required';
    }
    if (!formData.country) {
      errors.country = 'Country Required';
    }
    if (!formData.salary_currency) {
      errors.salary_currency = 'Salary Currency Required';
    }
    if (!formData.city) {
      errors.city = 'City Required';
    }
    if (!formData.career_level) {
      errors.career_level = 'Career Level Required';
    }
    if (!formData.experience_from) {
      errors.experience_from = 'Required';
    }
    if (!formData.experience_to) {
      errors.experience_to = 'Required';
    }
    if (!formData.salary_from) {
      errors.salary_from = 'Required';
    }
    if (!formData.salary_to) {
      errors.salary_to = 'Required';
    }
    if (!formData.number_of_vacancies) {
      errors.number_of_vacancies = 'Number Of Vacancies Required';
    }
    if (!formData.job_description) {
      errors.job_description = 'Required';
    } else if (formData.job_description?.length < 100) {
      errors.job_description =
        'job description must be between 100:1024 characters';
    }
    if (!formData.job_requirements) {
      errors.job_requirements = 'Required';
    } else if (formData.job_requirements?.length < 100) {
      errors.job_requirements =
        'job requirements must be between 100:1024 characters';
    }
    if (!formData.keywords) {
      errors.number_of_vacancies = 'Required';
    }
    if (!formData.send_emails_notification_to) {
      errors.email = 'Email Required';
    } else if (
      !/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(
        formData.send_emails_notification_to,
      )
    ) {
      errors.email = 'Invalid email';
    }
    if (!formData.category) {
      errors.category = 'Category Required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  // -------------------------------APIs--------------------------
  const PostJobhelpers = () => {
    dispatch(PostJobHelpers());
  };

  useEffect(() => {
    PostJobhelpers();
    dispatch(getAllCities(1));
    dispatch(getAllCountries());
    dispatch(getPostJobTypes());
    dispatch(getContractTypes());
    dispatch(getJobsCareerLevels());
    dispatch(GetSalaryCurrency());
    dispatch(getPostType());
    dispatch(getJobsSalaryPer());
    dispatch(sendEmailNotifyPer());
    dispatch(getJobCategories());
  }, []);

  const PostJob = () => {
    console.log('dattt to send', formData);
    // const testSend = {
    //   is_high_job: 'no',
    //   post_type: 1,
    //   title: 'Carpenter',
    //   job_types: ['1', '3'],
    //   contract_type: 1,
    //   country: 187,
    //   salary_currency: 5,
    //   city: 403,
    //   career_level: 3,
    //   experience_from: 1,
    //   experience_to: 5,
    //   salary_from: 100,
    //   salary_to: 500,
    //   salary_per: 1,
    //   salary_hide: 'no',
    //   number_of_vacancies: 1,
    //   job_description: 'cscscs sacsva avdav davasd svcasvads asvdasvdvd dsvds dsvds dsvad vdavaedavasvs avvsadsvdavdav aadsvdavadvdav vacvadv  dsvds dsvds dsvad vdavaedavasvs avvsadsvdavdav aadsvdavadvdav vacvadv',
    //   job_requirements: 'cscscs sacsva avdav davasd svcasvads asvdasvdvd dsvds dsvds dsvad vdavaedavasvs avvsadsvdavdav aadsvdavadvdav vacvadv  dsvds dsvds dsvad vdavaedavasvs avvsadsvdavdav aadsvdavadvdav vacvadv',
    //   keywords: ['01', 'key 02'],
    //   category: 5,
    //   option: 1,
    //   send_emails_notification_per: '',
    //   send_emails_notification_to: 'sss@gmail.com',
    // };

    if (validateForm()) {
      dispatch(PostNewJob(formData))
        .unwrap()
        .then(() => {
          Toast.show({
            text1: 'Success',
            text2: 'Job Posted Successfully',
            type: 'success',
          });
          navigation.navigate(ScreenNames.BottomTabs);
        })
        .catch(err => {
          Toast.show({
            text1: 'Error',
            text2: err,
            type: 'error',
          });
        });
    }
  };

  const EDITJOB = () => {
    const EditedDataToSend = {
      ...formData,
      code: jobData?.code,
    };
    console.log('Folrm Edit Job--------' + JSON.stringify(EditedDataToSend));
    if (validateForm()) {
      dispatch(editBob(EditedDataToSend))
        .unwrap()
        .then(() => {
          Toast.show({
            text1: 'Success',
            text2: 'Job Edited Successfully',
            type: 'success',
          });
          navigation.navigate(ScreenNames.BottomTabs);
        })
        .catch(err => {
          Toast.show({
            text1: 'Error',
            text2: err,
            type: 'error',
          });
        });
    }
  };

  // ----memos
  // const CurrencyMemo = React.useMemo(() => Currency || [], [Currency]);
  // const allCitiesMemo = React.useMemo(() => allCities || [], [allCities]);
  // const salaryPerMemeo = React.useMemo(
  //   () => PostjobHelpers?.salary_per || [],
  //   [PostjobHelpers?.salary_per],
  // );
  // const allCountriesMemo = React.useMemo(
  //   () => allCountries || [],
  //   [allCountries],
  // );
  const CategoryMemo = React.useMemo(
    () => jobCategories || [],
    [jobCategories],
  );

  return (
    <AppScreenContainer>
      <AppHeader arrowBack title="Jop Post" />
      <View style={styles.Container}>
        <ScrollView
          contentContainerStyle={styles.Scrollstyle}
          nestedScrollEnabled={true}>
          <View style={styles.MainStep}>
            <CustomText text="Post New Job" textStyle={styles.MainStepText} />
            <CustomText text="Create a job post" />
          </View>
          {/* post type */}
          <View>
            <CustomText text="Post Type" textStyle={styles.StepTitle} />
            <FlatList
              data={postType}
              keyExtractor={item => item.code}
              renderItem={renderItem}
              horizontal={true}
            />
          </View>
          {formErrors.post_type && (
            <CustomText
              text={formErrors.post_type}
              textStyle={styles.ErrorMSG}
            />
          )}
          {/* job title */}
          <View style={styles.SectionBox}>
            <CustomText
              text={selectedType + ' title'}
              textStyle={styles.StepTitle}
            />
            <AppInput
              containerStyle={styles.ContanerInput}
              placeholder={selectedType + ' title'}
              value={Title}
              onChangeText={val => setTitle(val)}
            />
          </View>
          {formErrors.title && (
            <CustomText text={formErrors.title} textStyle={styles.ErrorMSG} />
          )}
          {/* job Caregory */}
          <View style={styles.SectionBox}>
            <CustomText
              text={selectedType + ' Caregory'}
              textStyle={[styles.StepTitle, styles.MB]}
            />
            <View>
              <Dropdown
                placeholder="Select Category"
                value={Category}
                onChangeValue={(value: any) => setCategory(value.code)}
                list={CategoryMemo}
              />
            </View>
          </View>
          {formErrors.category && (
            <CustomText
              text={formErrors.category}
              textStyle={styles.ErrorMSG}
            />
          )}
          {/* Job type */}
          <View style={styles.SectionBox}>
            <CustomText
              text={selectedType + ' Types'}
              textStyle={styles.StepTitle}
            />
            <FlatList
              data={jobPostTypes}
              keyExtractor={item => item.code}
              renderItem={renderItem2}
              numColumns={2}
            />
          </View>
          {formErrors.job_types && (
            <CustomText
              text={formErrors.job_types}
              textStyle={styles.ErrorMSG}
            />
          )}
          {/* Job type remotly */}
          <View style={styles.SectionBox}>
            <CustomText
              text={`what Type(s) of ${selectedType} are you open to `}
              textStyle={styles.StepTitle}
            />
            <FlatList
              data={contractTypes}
              keyExtractor={item => item.code}
              renderItem={renderItem3}
              horizontal={true}
            />
          </View>
          {formErrors.job_types && (
            <CustomText
              text={formErrors.job_types}
              textStyle={styles.ErrorMSG}
            />
          )}
          {/* Location */}
          <View style={styles.SectionBox}>
            <CustomText text="Your Location" textStyle={styles.StepTitle} />
            <CustomText text="Country" textStyle={styles.OptopnTExt} />
            <Dropdown
              placeholder="Country"
              value={selectedCountry}
              list={allCountries}
              setValue={setSelectedCountry}
              onChangeValue={(value: any) => setSelectedCountry(value.code)}
            />
            {formErrors.country && (
              <CustomText
                text={formErrors.country}
                textStyle={styles.ErrorMSG}
              />
            )}
            <CustomText text="City" textStyle={styles.OptopnTExt} />
            <Dropdown
              placeholder="City"
              value={selectedCity}
              list={allCities}
              onChangeValue={(value: any) => setSelectedCity(value.code)}
            />
            {formErrors.city && (
              <CustomText text={formErrors.city} textStyle={styles.ErrorMSG} />
            )}
          </View>
          {/* Career Level */}
          <View style={[styles.SectionBox]}>
            <CustomText text="Career Level" textStyle={styles.StepTitle} />
            <View style={styles.CareerLevel}>
              <FlatList
                data={postJobCareerLevel}
                keyExtractor={item => item.code}
                renderItem={renderItem4}
                numColumns={2}
              />
            </View>
            {formErrors.career_level && (
              <CustomText
                text={formErrors.career_level}
                textStyle={styles.ErrorMSG}
              />
            )}
          </View>
          {/* Year Of Experience */}
          <View style={[styles.SectionBox]}>
            <CustomText
              text="Years of Experience"
              textStyle={styles.StepTitle}
            />
            <View style={generalStyles.rowBetween}>
              <View>
                <AppInput
                  containerStyle={styles.InputBox}
                  placeholder="MIN"
                  value={exp_From}
                  onChangeText={(val: any) => setExpFrom(val)}
                  isNumericKeyboard
                />
              </View>

              <View>
                <AppInput
                  containerStyle={styles.InputBox}
                  placeholder="MAx"
                  value={exp_To}
                  onChangeText={(val: any) => setExpTo(val)}
                  isNumericKeyboard
                />
              </View>
            </View>
            <View style={generalStyles.row}>
              <View style={styles.errorView}>
                {formErrors.experience_from && (
                  <CustomText
                    text={formErrors.experience_from}
                    textStyle={styles.ErrorMSG}
                  />
                )}
              </View>
              <View style={styles.errorView}>
                {formErrors.experience_to && (
                  <CustomText
                    text={formErrors.experience_to}
                    textStyle={styles.ErrorMSG}
                  />
                )}
              </View>
            </View>
          </View>
          {/* Salary Range */}
          <View style={[styles.SectionBox]}>
            <CustomText text="Salary Range" textStyle={styles.StepTitle} />
            <View style={generalStyles.rowBetween}>
              <View>
                <AppInput
                  containerStyle={styles.InputBox}
                  placeholder="MIN"
                  value={salary_From}
                  onChangeText={val => setSalaryFrom(val)}
                  isNumericKeyboard
                />
              </View>
              <View>
                <AppInput
                  containerStyle={styles.InputBox}
                  placeholder="MAx"
                  value={salary_To}
                  onChangeText={val => setSalaryTo(val)}
                  isNumericKeyboard
                />
              </View>
            </View>
            <View style={[generalStyles.rowBetween, styles.DrobOx]}>
              <View>
                <Dropdown
                  placeholder="Currency"
                  value={selectedSalaryCurrency}
                  dropDownStyle={styles.drop}
                  list={Currency}
                  onChangeValue={(value: any) =>
                    SetSelectedSalaryCurrency(value.code)
                  }
                />
              </View>
              <View>
                <Dropdown
                  placeholder="Salary Per"
                  value={selectedSalaryPer}
                  onChangeValue={(value: any) =>
                    SetSelectedSalaryPer(value.code)
                  }
                  dropDownStyle={styles.drop}
                  list={jobsSalaryPer}
                />
              </View>
            </View>
            <View style={generalStyles.row}>
              <View style={styles.errorView}>
                {formErrors.salary_from && (
                  <CustomText
                    text={formErrors.salary_from}
                    textStyle={styles.ErrorMSG}
                  />
                )}
              </View>
              <View style={styles.errorView}>
                {formErrors.salary_to && (
                  <CustomText
                    text={formErrors.salary_to}
                    textStyle={styles.ErrorMSG}
                  />
                )}
              </View>
            </View>
          </View>
          {/* Hide Salary */}
          <View style={[styles.SectionBox]}>
            <View style={styles.ChecedContainer}>
              <Checkbox
                isChecked={Checked}
                setIsChecked={() => {
                  setChecked(prev => !prev);
                }}
              />
              <CustomText text="Hide Salary" textStyle={styles.textHide} />
            </View>
          </View>
          {/* Number of Vacancies */}
          <View style={[styles.SectionBox]}>
            <CustomText
              text="Number of Vacancies"
              textStyle={[styles.StepTitle, styles.StepText]}
            />
            <AppInput
              placeholder="Enter Number"
              isNumericKeyboard
              value={numberOFVacancies + ''}
              onChangeText={(value: any) => setnumberOFVacancies(value)}
            />
            {formErrors.number_of_vacancies && (
              <CustomText
                text={formErrors.number_of_vacancies}
                textStyle={styles.ErrorMSG}
              />
            )}
          </View>
          {/*About Job */}
          <View style={[styles.SectionBox]}>
            <CustomText
              text={'About ' + selectedType}
              textStyle={[styles.StepTitle, styles.StepText]}
            />
            <View>
              <AppInput
                placeholder="Type description"
                containerStyle={styles.JobDEs}
                multiline={true}
                inputstyle={generalStyles.textArea}
                label={selectedType + ' description'}
                value={Description}
                onChangeText={(val: any) => setDescription(val)}
                inputLength
                minLength={1024}
              />

              {formErrors.job_description && (
                <CustomText
                  text={formErrors.job_description}
                  textStyle={styles.ErrorMSG}
                />
              )}
            </View>
            <View style={styles.mt}>
              <AppInput
                placeholder="Type requirement"
                containerStyle={styles.JobDEs}
                inputstyle={generalStyles.textArea}
                multiline={true}
                label={selectedType + ' requirement'}
                value={Requirment}
                onChangeText={(val: any) => setRequirment(val)}
                inputLength
                minLength={1024}
              />
              {formErrors.job_requirements && (
                <CustomText
                  text={formErrors.job_requirements}
                  textStyle={styles.ErrorMSG}
                />
              )}
            </View>
          </View>
          {/* Keywords */}
          <View style={[styles.SectionBox]}>
            <CustomText
              text=" Keywords"
              textStyle={[styles.StepTitle, styles.StepText]}
            />
            <View>
              <CustomText
                textStyle={styles.TextKeywords}
                text="Enter keywords including any related job titles, technologies, or keywords the candidate should have in his CV."
              />
              <AppInput
                placeholder="Type here"
                containerStyle={styles.KetWords}
                value={keyWords}
                onChangeText={val => setKeyWords(val)}
              />
              {formErrors.keywords && (
                <CustomText
                  text={formErrors.keywords}
                  textStyle={styles.ErrorMSG}
                />
              )}
              <Button
                text="Add"
                isDisapled={KeyWpordsArray && KeyWpordsArray ? false : true}
                disabledBGColor={COLORS.grayLight}
                style={styles.Add}
                onPress={() => {
                  addedLanguge();
                }}
              />
              <FlatList
                data={KeyWpordsArray}
                horizontal
                renderItem={keyWordsrenderItem}
              />
            </View>
          </View>
          {/* Job Option */}
          <View style={[styles.SectionBox]}>
            <CustomText
              text={`${selectedType} Option`}
              textStyle={[styles.StepTitle, styles.StepText]}
            />
            <View>
              {/* First FlatList */}
              <FlatList
                data={JobOPtionData}
                keyExtractor={item => item.code}
                renderItem={({item}) => (
                  <View style={[generalStyles.row, styles.JopOptionsupbox]}>
                    <View>
                      <Checkbox
                        isChecked={selectedJobOption === item.code}
                        setIsChecked={() => toggleSelection(item.code)}
                      />
                    </View>
                    <View style={styles.TexyBox}>
                      <CustomText text={item.title} />
                      {item.subTitle.length > 0 && (
                        <CustomText
                          text={item.subTitle}
                          textStyle={styles.TextKeywords}
                        />
                      )}
                    </View>
                  </View>
                )}
              />

              {/* Second FlatList (shown only if code '2' is selected in the first list) */}
              {selectedJobOption === '2' && (
                <FlatList
                  data={notifyPer}
                  keyExtractor={item => item.code}
                  renderItem={({item}) => (
                    <View style={[generalStyles.row, styles.SubCheckBox]}>
                      <Checkbox
                        isChecked={selectedSubOption === item.code}
                        setIsChecked={() => toggleSubSelection(item.code)}
                      />
                      <Pressable onPress={() => toggleSubSelection(item.code)}>
                        <CustomText
                          text={item.default_name}
                          textStyle={styles.subcheckText}
                        />
                      </Pressable>
                    </View>
                  )}
                />
              )}
            </View>
          </View>
          <View>
            <CustomText
              text={`Email address`}
              textStyle={[styles.StepTitle, styles.StepText]}
            />
            <AppInput
              placeholder="enter email to send notification"
              keyboardType="email-address"
              value={Email}
              onChangeText={(val: any) => setEmail(val)}
            />
            {formErrors.email && (
              <CustomText text={formErrors.email} textStyle={styles.ErrorMSG} />
            )}
          </View>

          {/* SAve */}
          {jobData ? (
            <Button text="Edit Job" style={styles.Buttom} onPress={EDITJOB} />
          ) : (
            <Button text="Post Now" style={styles.Buttom} onPress={PostJob} />
          )}
        </ScrollView>
      </View>
    </AppScreenContainer>
  );
};

export default JobPost;
