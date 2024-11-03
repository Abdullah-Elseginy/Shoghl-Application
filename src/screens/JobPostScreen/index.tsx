/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Pressable, ScrollView, View} from 'react-native';
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
import {generalStyles} from '../../constants';

import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {getAllCities, getAllCountries} from '../../redux/slices/appdataSlice';

import Toast from 'react-native-toast-message';
import {PostJobHelpers, PostNewJob} from '../../redux/slices/JobsSlice';
import ScreenNames from '../../navigations/ScreenNames';

const JobPost = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const {allCountries, allCities} = useSelector((state: any) => state.appdata);
  const {PostjobHelpers, loadinJobs} = useSelector((state: any) => state.jobs);
  const [JobOPtionData, setJobOPtionData] = useState([
    {
      id: '1',
      title: 'Keep Company Confidintial',
      subTitle: 'Hide Company name , logo and profile',
      selected: false,
    },
    {
      id: '2',
      title: 'Send me emails notifications when there are good candidates',
      subTitle: '',
      selected: false,
    },
  ]);
  const [SubSlectionData, setJobOSupPtionData] = useState([
    {
      id: '1',
      title: 'Daily',
      selected: false,
    },
    {
      id: '2',
      title: 'Weekly',
      selected: false,
    },
  ]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [Title, setTitle] = useState<string>('');
  const [Category, setCategory] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('Job');
  const [selectedId2, setSelectedId2] = useState<string | null>(null);
  const [selectedId4, setSelectedId4] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [Checked, setChecked] = useState<boolean>(false);
  const [exp_From, setExpFrom] = useState('');
  const [exp_To, setExpTo] = useState('');
  const [salary_From, setSalaryFrom] = useState('');
  const [salary_To, setSalaryTo] = useState('');
  const [numberOFVacancies, setnumberOFVacancies] = useState('');
  const [Description, setDescription] = useState('');
  const [Requirment, setRequirment] = useState('');
  const [keyWords, setKeyWords] = useState('');
  const [Email, setEmail] = useState('');
  // dropdwens
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [openDropdown, setOpenDropdown] = useState(null);
  console.log('Job Type---: ' + selectedId);
  console.log('Job Typessss---: ' + selectedId2);
  console.log('Contract types---: ' + JSON.stringify(selectedIds));
  console.log('Country Code---: ' + selectedCountry);
  console.log('City Code---: ' + selectedCity);
  console.log('career Level---: ' + selectedId4);
  const handleDropdownOpen = (dropdownId: any) => {
    if (openDropdown === dropdownId) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdownId);
    }
  };

  const toggleSelection = (id: any, type: any) => {
    if (type === 'subjob') {
      setJobOSupPtionData(prevData =>
        prevData.map(option =>
          option.id === id
            ? {...option, selected: !option.selected}
            : {...option, selected: false},
        ),
      );
    } else {
      setJobOPtionData(prevData =>
        prevData.map(option =>
          option.id === id
            ? {...option, selected: !option.selected}
            : {...option, selected: false},
        ),
      );
    }
  };

  const clearSubSelction = (index: number) => {
    if (index === 0) {
      for (let i = 0; i < SubSlectionData.length; i++) {
        SubSlectionData[i].selected = false;
      }
    }
  };

  const handlePress = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(prevSelected => prevSelected.filter(item => item !== id));
    } else {
      setSelectedIds(prevSelected => [...prevSelected, id]);
    }
  };

  const renderItem = ({item}: {item: {code: string; name_en: string}}) => (
    <Pressable
      style={[
        styles.choise,
        selectedId === item.code ? styles.selected : styles.unselected,
      ]}
      onPress={() => {
        setSelectedId(item.code);
        setSelectedType(item.name_en);
      }}>
      <CustomText
        text={item.name_en}
        textStyle={
          selectedId === item.code ? styles.textSlected : styles.textunselected
        }
      />
    </Pressable>
  );

  const renderItem2 = ({item}: {item: {code: string; name_en: string}}) => (
    <Pressable
      style={[
        styles.choise1,
        selectedId2 === item.code ? styles.selected : styles.unselected,
      ]}
      onPress={() => setSelectedId2(item.code)}>
      <CustomText
        text={item.name_en}
        textStyle={
          selectedId2 === item.code ? styles.textSlected : styles.textunselected
        }
      />
    </Pressable>
  );

  const renderItem3 = ({item}: {item: {code: string; name_en: string}}) => {
    const isSelected = selectedIds.includes(item.code);
    return (
      <Pressable
        style={[
          styles.choise,
          isSelected ? styles.selected : styles.unselected,
        ]}
        onPress={() => handlePress(item.code)}>
        <CustomText
          text={item.name_en}
          textStyle={isSelected ? styles.textSlected : styles.textunselected}
        />
      </Pressable>
    );
  };

  const renderItem4 = ({item}: {item: {code: string; name_en: string}}) => (
    <Pressable
      style={[
        styles.Careerchoise,
        selectedId4 === item.code ? styles.selected : styles.unselected,
      ]}
      onPress={() => setSelectedId4(item.code)}>
      <CustomText
        text={item.name_en}
        textStyle={
          selectedId4 === item.code ? styles.textSlected : styles.textunselected
        }
      />
    </Pressable>
  );
  //--------------------------------Validation----------------
  const formData = {
    is_high_job: 'no',
    post_type: selectedId,
    title: Title,
    category: Number(Category),
    job_types: [selectedId2],
    contract_type: 1,
    country: selectedCountry,
    salary_currency: 5,
    salary_per: 1,
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
    keywords: [keyWords, 'key 02'],
    option: 1,
    send_emails_notification_per: '',
    send_emails_notification_to: Email,
  };
  const ClearFields=()=>{
    
  }

  const [formErrors, setFormErrors] = React.useState({
    is_high_job: 'no',
    post_type: selectedId,
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
    dispatch(getAllCities);
    dispatch(getAllCountries);
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
  return (
    <AppScreenContainer>
      <AppHeader arrowBack title="Jop Post" />
      <View style={styles.Container}>
        <ScrollView contentContainerStyle={styles.Scrollstyle}>
          <View style={styles.MainStep}>
            <CustomText text="Post New Job" textStyle={styles.MainStepText} />
            <CustomText text="Create a job post" />
          </View>
          {/* post type */}
          <View>
            <CustomText text="Post Type" textStyle={styles.StepTitle} />
            <FlatList
              data={PostjobHelpers?.post_type}
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
              textStyle={styles.StepTitle}
            />
            <AppInput
              containerStyle={styles.ContanerInput}
              placeholder={selectedType + ' Caregory'}
              value={Category}
              onChangeText={val => setCategory(val)}
            />
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
              data={PostjobHelpers?.job_types}
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
              data={PostjobHelpers?.contract_type}
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
              setValue={setSelectedCountry}
              dropDownStyle={generalStyles.DropBorder}
              list={allCountries}
              containerStyle={{
                zIndex: openDropdown === 'dropdown1' ? 10000 : 1,
              }}
              isOpen={openDropdown === 'dropdown1'}
              onDropdownOpen={isOpen =>
                handleDropdownOpen(isOpen ? 'dropdown1' : null)
              }
              schema={{
                label: 'name_en',
                value: 'id',
              }}
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
              setValue={setSelectedCity}
              dropDownStyle={generalStyles.DropBorder}
              list={allCities}
              containerStyle={{
                zIndex: openDropdown === 'dropdown2' ? 10000 : 1,
              }}
              isOpen={openDropdown === 'dropdown2'}
              onDropdownOpen={isOpen =>
                handleDropdownOpen(isOpen ? 'dropdown2' : null)
              }
              schema={{
                label: 'name_en',
                value: 'id',
              }}
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
                data={PostjobHelpers?.career_level}
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
            <View style={generalStyles.row}>
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
            <View style={generalStyles.row}>
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
              value={numberOFVacancies}
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
            </View>
          </View>
          {/* Job Option */}
          <View style={[styles.SectionBox]}>
            <CustomText
              text={`${selectedType} Option`}
              textStyle={[styles.StepTitle, styles.StepText]}
            />
            <FlatList
              data={JobOPtionData}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => (
                <>
                  <View style={[generalStyles.row, styles.JopOptionsupbox]}>
                    <View>
                      <Checkbox
                        isChecked={item.selected}
                        setIsChecked={() => {
                          toggleSelection(item.id, '');
                          clearSubSelction(index);
                        }}
                      />
                    </View>
                    <View style={styles.TexyBox}>
                      <CustomText text={item.title} />
                      {item.subTitle.length ? (
                        <CustomText
                          text={item.subTitle}
                          textStyle={styles.TextKeywords}
                        />
                      ) : (
                        ''
                      )}
                    </View>
                  </View>
                </>
              )}
            />
            {JobOPtionData[1].selected === true ? (
              <FlatList
                data={SubSlectionData}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <View style={[generalStyles.row, styles.SubCheckBox]}>
                    <Checkbox
                      isChecked={item.selected}
                      setIsChecked={() => {
                        toggleSelection(item.id, 'subjob');
                      }}
                    />
                    <CustomText
                      text={item.title}
                      textStyle={styles.subcheckText}
                    />
                  </View>
                )}
              />
            ) : (
              ''
            )}
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
          <Button
            text="Post Now"
            style={styles.Buttom}
            onPress={PostJob}
            loading={loadinJobs}
          />
        </ScrollView>
      </View>
    </AppScreenContainer>
  );
};

export default JobPost;
