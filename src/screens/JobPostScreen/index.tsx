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

const JobPost = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {allCountries, allCities} = useSelector((state: any) => state.appdata);
  const {PostjobHelpers} = useSelector((state: any) => state.jobs);
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
  const [selectedType, setSelectedType] = useState<string>('Job');
  const [selectedId2, setSelectedId2] = useState<string | null>(null);
  const [selectedId4, setSelectedId4] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [Checked, setChecked] = useState<boolean>(false);
  // dropdwens
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedYearEX, setSelectedselectedYearEX] = useState('');
  const [selectedYearEX2, setSelectedselectedYearEX2] = useState('');
  const [selectedVacancies, setSelectedselectedVacancies] = useState('');
  const [openDropdown, setOpenDropdown] = useState(null);

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
    number_of_vacancies: '',
    job_description: '',
    job_requirements: '',
    keywords: '',
    keep_company_confidintial: '',
    send_emails_notification: '',
  };

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
    number_of_vacancies: '',
    job_description: '',
    job_requirements: '',
    keywords: '',
    keep_company_confidintial: '',
    send_emails_notification: '',
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
      errors.number_of_vacancies = 'Required';
    }
    if (!formData.job_description) {
      errors.job_description = 'Required';
    }
    if (!formData.job_requirements) {
      errors.job_requirements = 'Required';
    }
    if (!formData.keywords) {
      errors.number_of_vacancies = 'Required';
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
    dispatch(PostNewJob())
      .unwrap()
      .then(() => {
        Toast.show({
          text1: 'Success',
          text2: 'Job Posted Successfully',
          type: 'success',
        });
      })
      .catch(err => {
        Toast.show({
          text1: 'Error',
          text2: err,
          type: 'error',
        });
      });
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
            />
          </View>
          {/* {formErrors.title && (
            <CustomText text={formErrors.title} textStyle={styles.ErrorMSG} />
          )} */}
          {/* Job type */}
          <View style={styles.SectionBox}>
            <CustomText
              text={selectedType + ' Type'}
              textStyle={styles.StepTitle}
            />
            <FlatList
              data={PostjobHelpers?.job_types}
              keyExtractor={item => item.code}
              renderItem={renderItem2}
              extraData={selectedId2}
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
              extraData={selectedId2}
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
                value: 'code',
              }}
            />
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
                value: 'code',
              }}
            />
          </View>
          {/* Career Level */}
          <View style={[styles.SectionBox]}>
            <CustomText text="Career Level" textStyle={styles.StepTitle} />
            <View style={styles.CareerLevel}>
              <FlatList
                data={PostjobHelpers?.career_level}
                keyExtractor={item => item.code}
                renderItem={renderItem4}
                //   horizontal={true}
                extraData={selectedId4}
                numColumns={2}
              />
            </View>
          </View>
          {/* Year Of Experience */}
          <View style={[styles.SectionBox]}>
            <CustomText
              text="Years of Experience"
              textStyle={styles.StepTitle}
            />
            <View style={generalStyles.row}>
              <View>
                <AppInput containerStyle={styles.InputBox} placeholder="MIN" />
              </View>
              <View>
                <AppInput containerStyle={styles.InputBox} placeholder="MAx" />
              </View>
            </View>
          </View>
          {/* Salary Range */}
          <View style={[styles.SectionBox]}>
            <CustomText text="Salary Range" textStyle={styles.StepTitle} />
            <View style={generalStyles.row}>
              <View>
                <AppInput containerStyle={styles.InputBox} placeholder="MIN" />
              </View>
              <View>
                <AppInput containerStyle={styles.InputBox} placeholder="MAx" />
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
            <AppInput placeholder="Enter Number" isNumericKeyboard />
          </View>
          {/*About Job */}
          <View style={[styles.SectionBox]}>
            <CustomText
              text={'About ' + selectedType}
              textStyle={[styles.StepTitle, styles.StepText]}
            />
            <View>
              <AppInput
                placeholder="Type here"
                containerStyle={styles.JobDEs}
                multiline={true}
                inputStyle={styles.inputstyle}
                label={selectedType + ' description'}
              />
            </View>
            <View>
              <AppInput
                placeholder="Type here"
                containerStyle={styles.JobDEs}
                multiline={true}
                inputStyle={styles.inputstyle}
                label={selectedType + ' requirement'}
              />
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
                multiline={true}
              />
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

          {/* SAve */}
          <Button
            text="Post Now"
            style={styles.Buttom}
            onPress={validateForm}
          />
        </ScrollView>
      </View>
    </AppScreenContainer>
  );
};

export default JobPost;
