/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
import React, {useMemo, useState} from 'react';
import {Button, CustomText, Dropdown} from '../../../components';
import {styles} from './styles';
import {COLORS, generalStyles} from '../../../constants';
import {FlatList, Pressable, TouchableOpacity, View} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {yearOptions} from '../../../utils/Data';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../../redux/store';
import {signUpFourCorporate} from '../../../redux/slices/authSlice';
import Toast from 'react-native-toast-message';
import ScreenNames from '../../../navigations/ScreenNames';
import {useNavigation} from '@react-navigation/native';

const Step3 = ({currentPosition, setCurrentPosition}: any) => {
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const {loading} = useSelector((state: any) => state.auth);
  const [SelectedProficiency, setselectedProficiency] = useState('');
  const [SelectedLanguage, setselectedLanguage] = useState('');
  console.log('selected language: ' + SelectedLanguage);
  const [selectedId4, setSelectedId4] = useState<string | null>(null);
  const {
    yearsExperience,
    EducationalLevel,
    feildStudy,
    universities,
    Grades,
    languages,
    languagesLevel,
    skills,
  } = useSelector((state: any) => state.helpers);
  // dropDwens
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedYearEx, setSelectedYearEx] = useState('');
  const [selectedFeild, setSelectedFeild] = useState([]);
  const [selectedUniversty, setSelectedUniversty] = useState('');
  const [selectedDegree, setSelectedDegree] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleDropdownOpen = (dropdownId: any) => {
    if (openDropdown === dropdownId) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdownId);
    }
  };
  // Year Options
  // const yearsArray = choicesStep3?.degree;

  // const yearOptions = yearsArray?.map((year: any) => ({
  //   label: year?.toString(),
  //   value: year,
  // }));

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

  const [slectedLang, setSelectedLang] = useState([]);
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

  const addedLanguge = () => {
    for (let i = 0; i < slectedLang.length; i++) {
      if (slectedLang[i]?.lang === SelectedLanguage) {
        Toast.show({
          text1: 'Error',
          text2: 'You have already selected this language',
          type: 'error',
        });
        return;
      }
    }
    setSelectedLang([
      ...slectedLang,
      {lang: SelectedLanguage, level: SelectedProficiency},
    ]);
    setselectedLanguage('');
    setselectedProficiency('');
  };

  const deleteItemByIndex = (indexToDelete: number) => {
    setSelectedLang(prevLanguages =>
      prevLanguages.filter((_, index) => index !== indexToDelete),
    );
  };

  const formData = {
    experience_years: selectedYearEx,
    educational_level: selectedId4,
    fields_of_study: selectedFeild,
    university: selectedUniversty,
    degree: selectedDegree,
    grade: selectedGrade,
    user_languages: [SelectedLanguage],
    // profisincy: SelectedProficiency,
    // cv: file,
    skills: selectedGrade,
  };

  const [formErrors, setFormErrors] = React.useState({
    year_ex: '',
    educational_Level: '',
    feiled_study: '',
    Universty: '',
    degree_date: '',
    grade: '',
    language: '',
    profisincy: '',
    // Cv_file: '',
    skills: '',
  });

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    if (!formData.experience_years) {
      errors.year_ex = 'Year Experience Required';
    }
    if (!formData.educational_level)
      errors.educational_Level = 'Educational Level Required';
    if (formData.fields_of_study.length === 0)
      errors.feiled_study = 'Feiled Study Required';
    if (formData.university.length === 4) {
      errors.Universty = 'Universty Required';
    }
    if (!formData.degree) {
      errors.degree_date = 'Degree Date Required';
    }
    if (!formData.grade) {
      errors.grade = 'Grade Required';
    }
    if (formData.user_languages.length === 0) {
      errors.language = 'Language Required';
    }
    // if (!formData.profisincy) {
    //   errors.profisincy = 'Profetiency Required';
    // }
    // if (!file.name?.length) {
    //   errors.Cv_file = 'CV Required';
    // }
    if (formData.skills.length === 0) {
      errors.skills = 'Skills Required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // const GetChoices = () => {
  //   dispatch(GetChoicesStep3());
  // };

  // useEffect(() => {
  //   GetChoices();
  // }, []);

  const handlesubmit = () => {
    if (validateForm()) {
      const formToSend = new FormData();
      // formToSend.append('cv', {
      //   uri: file.uri,
      //   type: file.type,
      //   name: file.name,
      // });
      // const formToSend = {
      //   experience_years: selectedYearEx,
      //   educational_level: selectedId4,
      //   fields_of_study: selectedFeild,
      //   university: selectedUniversty,
      //   degree: selectedDegree,
      //   grade: selectedGrade,
      //   skills: selectedSkills,
      //   cv: file,
      //   user_languages: slectedLang,
      // };
      formToSend.append('experience_years', selectedYearEx);
      formToSend.append('educational_level', selectedId4);
      formToSend.append('fields_of_study[]', selectedFeild);
      formToSend.append('university', selectedUniversty);
      formToSend.append('degree', selectedDegree);
      formToSend.append('grade', selectedGrade);
      formToSend.append('user_languages[]', slectedLang);
      formToSend.append('skills[]', selectedSkills);
      console.log('formmm' + JSON.stringify(formToSend));

      // console.log('====fil' + JSON.stringify(selectedFeild).toString());
      // formToSend.append('experience_years', 2);
      // formToSend.append('educational_level', 1);
      // formToSend.append('fields_of_study[]', ['1', '2']);
      // formToSend.append('university', 2);
      // formToSend.append('degree', 2023);
      // formToSend.append('grade', 1);
      // formToSend.append('user_languages[]', [
      //   {lang: '1', level: '3'},
      //   {lang: '2', level: '1'},
      //   {lang: '3', level: '2'},
      // ]);
      // formToSend.append('skills[]', ['1', '2']);
      dispatch(signUpFourCorporate(formToSend))
        .unwrap()
        .then(() => {
          Toast.show({
            text1: 'Success',
            text2: 'SignUp Corporate Success',
            type: 'success',
            visibilityTime: 1500,
          });
          setTimeout(() => {
            navigation.replace(ScreenNames.BottomTabs);
          }, 1000);
        })
        .catch(err => {
          // navigation.replace(ScreenNames.BottomTabs);

          Toast.show({
            type: 'error',
            text1: 'Error',
            text2: err,
            position: 'top',
            visibilityTime: 3000,
          });
        });
    }
  };
  const transformedSelected = useMemo(
    () =>
      slectedLang.map(sel => {
        const language = languages?.find(
          lang => lang.code === sel?.lang,
        )?.default_name;
        const level = languagesLevel?.find(
          level => level.code === sel.level,
        )?.default_name;
        return {lang: language, level: level};
      }),
    [slectedLang, languages, languagesLevel],
  );

  // console.log('choiceeeesssss-----' + JSON.stringify(choicesStep3));
  return (
    <View>
      {/*Personal Info */}
      <View style={[styles.SectionBox]}>
        <View style={generalStyles.row}>
          <CustomText
            text="How many years of experience do you have?"
            textStyle={[styles.StepTitle, styles.margnbtn]}
          />
        </View>
        <View>
          <Dropdown
            placeholder="Select Years Of Experience"
            value={selectedYearEx}
            onChangeValue={(value: any) => setSelectedYearEx(value.code)}
            dropDownStyle={generalStyles.DropBorder}
            list={yearsExperience}
          />
        </View>
        {formErrors.year_ex && (
          <CustomText text={formErrors.year_ex} textStyle={styles.ErrorMSG} />
        )}
      </View>
      {/*Personal Info */}

      {/* Career Level */}
      <View style={[styles.SectionBox]}>
        <View style={generalStyles.rowwrap}>
          <CustomText
            text="What is your current educational level?"
            textStyle={styles.StepTitle}
          />
          <CustomText
            text="(If you currently studying, select your expected degree)"
            textStyle={styles.StepTitlechoice}
          />
        </View>
        <View style={styles.CareerLevel}>
          <FlatList
            data={EducationalLevel}
            keyExtractor={item => item.code}
            renderItem={renderItem4}
            numColumns={2}
          />
        </View>
      </View>
      {formErrors.educational_Level && (
        <CustomText
          text={formErrors.educational_Level}
          textStyle={styles.ErrorMSG}
        />
      )}
      {/* Degree Details */}
      <View style={[styles.SectionBox]}>
        <View style={generalStyles.rowwrap}>
          <CustomText text="Degree Details?" textStyle={styles.StepTitle} />
        </View>
        <View style={generalStyles.row}>
          <CustomText
            text="Field(S) of study"
            textStyle={[styles.LapelStyle, styles.margnbtn]}
          />
        </View>
        <View>
          <Dropdown
            placeholder="Field(S) of study"
            value={selectedFeild}
            onChangeValue={(value: any) => setSelectedFeild(value.code)}
            list={feildStudy}
          />
        </View>
        {formErrors.feiled_study && (
          <CustomText
            text={formErrors.feiled_study}
            textStyle={styles.ErrorMSG}
          />
        )}
        <View style={generalStyles.row}>
          <CustomText
            text="University / Institution"
            textStyle={[styles.LapelStyle, styles.margnbtn]}
          />
        </View>
        <View>
          <Dropdown
            placeholder="University / Institution"
            value={selectedUniversty}
            onChangeValue={(value: any) => setSelectedUniversty(value.code)}
            list={universities}
          />
        </View>
        {formErrors.Universty && (
          <CustomText text={formErrors.Universty} textStyle={styles.ErrorMSG} />
        )}
        <View style={generalStyles.row}>
          <CustomText
            text="When did you get your degree?"
            textStyle={[styles.LapelStyle, styles.margnbtn]}
          />
        </View>
        <View>
          <Dropdown
            placeholder="When did you get your degree?"
            value={selectedDegree}
            onChangeValue={(value: any) => setSelectedDegree(value.code)}
            list={yearOptions}
          />
        </View>
        {formErrors.degree_date && (
          <CustomText
            text={formErrors.degree_date}
            textStyle={styles.ErrorMSG}
          />
        )}
        <View style={generalStyles.row}>
          <CustomText
            text="Grade"
            textStyle={[styles.LapelStyle, styles.margnbtn]}
          />
        </View>
        <View>
          <Dropdown
            placeholder="Grade"
            value={selectedGrade}
            onChangeValue={(value: any) => setSelectedGrade(value.code)}
            list={Grades}
          />
        </View>
        {formErrors.grade && (
          <CustomText text={formErrors.grade} textStyle={styles.ErrorMSG} />
        )}
      </View>
      {/* Language  */}
      <View style={[styles.SectionBox]}>
        <View style={generalStyles.rowwrap}>
          <CustomText
            text="What Languages do you know?"
            textStyle={styles.StepTitle}
          />
        </View>
        <View>
          <CustomText
            text={'Language'}
            textStyle={[styles.LapelStyle, styles.MArginBtn]}
          />
          <Dropdown
            placeholder="Langauge"
            value={SelectedLanguage}
            onChangeValue={(value: any) => setselectedLanguage(value.code)}
            list={languages}
          />
        </View>
        {formErrors.language && (
          <CustomText text={formErrors.language} textStyle={styles.ErrorMSG} />
        )}
        {/* Proficiency */}
        <View>
          <CustomText
            text={'Proficiency'}
            textStyle={[styles.LapelStyle, styles.MArginBtn]}
          />
          <Dropdown
            placeholder="Proficiency"
            value={SelectedProficiency}
            onChangeValue={(value: any) => setselectedProficiency(value.code)}
            list={languagesLevel}
          />
          {formErrors.profisincy && (
            <CustomText
              text={formErrors.profisincy}
              textStyle={styles.ErrorMSG}
            />
          )}

          <FlatList
            data={transformedSelected}
            keyExtractor={item => item?.lang}
            horizontal
            renderItem={({item, index}) => (
              <View style={[generalStyles.row, styles.conlang]}>
                <CustomText
                  text={item.lang + ' : '}
                  textStyle={styles.Langtxt}
                />
                <CustomText text={item.level} textStyle={styles.Langtxt2} />

                <TouchableOpacity
                  onPress={() => deleteItemByIndex(index)}
                  style={[styles.delate]}>
                  <CustomText text="x" textStyle={styles.texdel} />
                </TouchableOpacity>
              </View>
            )}
          />
          <Button
            text="Add"
            isDisapled={SelectedLanguage && SelectedProficiency ? false : true}
            disabledBGColor={COLORS.grayLight}
            style={styles.Add}
            onPress={() => {
              addedLanguge();
            }}
          />
        </View>
      </View>
      {/* What skills, tools, technologies and fields of expertise do you have? */}
      <View style={styles.SectionBox}>
        <View>
          <CustomText
            text="What skills, tools, technologies and fields of expertise do you have?"
            textStyle={[styles.StepTitle, styles.marginbtn]}
          />
          <Dropdown
            placeholder="Skills"
            value={selectedSkills}
            onChangeValue={(value: any) => setSelectedSkills(value.code)}
            list={skills}
          />
        </View>
        {formErrors.skills && (
          <CustomText text={formErrors.skills} textStyle={styles.ErrorMSG} />
        )}
      </View>
      {/* Upload your CV */}
      <View style={styles.SectionBox}>
        <View style={generalStyles.rowwrap}>
          <CustomText
            text="Upload your Document"
            textStyle={styles.StepTitle}
          />
        </View>
        <Button
          text="Upload Document"
          style={styles.CV}
          onPress={() => {
            selectDocument();
          }}
        />
        {file?.name && (
          <CustomText text={file?.name} textStyle={styles.CVname} />
        )}
        {/* {formErrors?.Cv_file && (
          <CustomText
            text={formErrors.Cv_file}
            textStyle={[styles.ErrorMSG, styles.centerTExt]}
          />
        )} */}
      </View>

      <Button
        text={currentPosition === 2 ? 'Finsh' : 'Next'}
        loading={loading}
        onPress={() => {
          handlesubmit();
        }}
        style={styles.Bottom}
      />
      {currentPosition === 1 || currentPosition === 2 ? (
        <Button
          text={'Back'}
          onPress={() => {
            setCurrentPosition((pre: any) => pre - 1);
          }}
        />
      ) : (
        ''
      )}
    </View>
  );
};

export default Step3;
