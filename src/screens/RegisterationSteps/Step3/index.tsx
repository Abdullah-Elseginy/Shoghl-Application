/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Button, CustomText, Dropdown} from '../../../components';
import {styles} from './styles';
import {COLORS, generalStyles} from '../../../constants';
import {Alert, FlatList, Pressable, View} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {CareerLevel2, FieldList, YearsExList} from '../../../utils/Data';

const Step3 = ({navigation, currentPosition, setCurrentPosition}: any) => {
  const [SelectedProficiency, setselectedProficiency] = useState('');
  const [SelectedLanguage, setselectedLanguage] = useState('');
  const [selectedId4, setSelectedId4] = useState<string | null>(null);
  // dropDwens
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedYearEx, setSelectedYearEx] = useState('');
  const [selectedFeild, setSelectedFeild] = useState('');
  const [selectedUniversty, setSelectedUniversty] = useState('');
  const [selectedDegree, setSelectedDegree] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const handleDropdownOpen = (dropdownId: any) => {
    if (openDropdown === dropdownId) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdownId);
    }
  };
  const renderItem4 = ({item}: {item: {id: string; title: string}}) => (
    <Pressable
      style={[
        styles.Careerchoise,
        selectedId4 === item.id ? styles.selected : styles.unselected,
      ]}
      onPress={() => setSelectedId4(item.id)}>
      <CustomText
        text={item.title}
        textStyle={
          selectedId4 === item.id ? styles.textSlected : styles.textunselected
        }
      />
    </Pressable>
  );
  const [file, setFile] = useState(null);
  const [slectedLang, setSelectedLang] = useState([]);

  const selectDocument = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.plainText],
      });
      setFile(res[0]);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Document selection was canceled');
      } else {
        Alert.alert('Unknown Error: ' + JSON.stringify(err));
      }
    }
  };

  const addedLanguge = () => {
    for (let i = 0; i < slectedLang.length; i++) {
      if (slectedLang[i]?.lang === SelectedLanguage) {
        Alert.alert('You have already selected this language');
        return;
      }
    }
    setSelectedLang([
      ...slectedLang,
      {lang: SelectedLanguage, prof: SelectedProficiency},
    ]);
  };
  const deleteItemByIndex = (indexToDelete: number) => {
    setSelectedLang(prevLanguages =>
      prevLanguages.filter((_, index) => index !== indexToDelete),
    );
  };
  const formData = {
    year_ex: selectedYearEx,
    educational_Level: selectedId4,
    feiled_study: selectedFeild,
    Universty: selectedUniversty,
    degree_date: selectedDegree,
    grade: selectedGrade,
    language: SelectedLanguage,
    profisincy: SelectedProficiency,
    Cv_file: file,
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
    Cv_file: '',
    skills: '',
  });
  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    if (!formData.year_ex) {
      errors.year_ex = 'Year Experience Required';
    }
    if (!formData.educational_Level?.length)
      errors.educational_Level = 'Educational Level Required';
    if (!formData.feiled_study) errors.feiled_study = 'Feiled Study Required';
    if (!formData.Universty) {
      errors.Universty = 'Universty Required';
    }
    if (!formData.degree_date) {
      errors.degree_date = 'Degree Date Required';
    }
    if (!formData.grade) {
      errors.grade = 'Grade Required';
    }
    if (!formData.language) {
      errors.language = 'Language Required';
    }
    if (!formData.profisincy) {
      errors.profisincy = 'Profetiency Required';
    }
    if (!formData.Cv_file) {
      errors.Cv_file = 'CV Required';
    }
    if (!formData.skills) {
      errors.skills = 'Skills Required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  return (
    <>
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
            setValue={setSelectedYearEx}
            dropDownStyle={generalStyles.DropBorder}
            list={YearsExList}
            containerStyle={{
              zIndex: openDropdown === 'dropdown1' ? 10000 : 1,
            }}
            isOpen={openDropdown === 'dropdown1'}
            onDropdownOpen={isOpen =>
              handleDropdownOpen(isOpen ? 'dropdown1' : null)
            }
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
            data={CareerLevel2}
            keyExtractor={item => item.id}
            renderItem={renderItem4}
            extraData={selectedId4}
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
            setValue={setSelectedFeild}
            dropDownStyle={generalStyles.DropBorder}
            list={FieldList}
            containerStyle={{
              zIndex: openDropdown === 'dropdown3' ? 10000 : 1,
            }}
            isOpen={openDropdown === 'dropdown3'}
            onDropdownOpen={isOpen =>
              handleDropdownOpen(isOpen ? 'dropdown3' : null)
            }
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
            setValue={setSelectedUniversty}
            dropDownStyle={generalStyles.DropBorder}
            list={FieldList}
            containerStyle={{
              zIndex: openDropdown === 'dropdown4' ? 10000 : 1,
            }}
            isOpen={openDropdown === 'dropdown4'}
            onDropdownOpen={isOpen =>
              handleDropdownOpen(isOpen ? 'dropdown4' : null)
            }
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
            setValue={setSelectedDegree}
            dropDownStyle={generalStyles.DropBorder}
            list={FieldList}
            containerStyle={{
              zIndex: openDropdown === 'dropdown5' ? 10000 : 1,
            }}
            isOpen={openDropdown === 'dropdown5'}
            onDropdownOpen={isOpen =>
              handleDropdownOpen(isOpen ? 'dropdown5' : null)
            }
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
            setValue={setSelectedGrade}
            dropDownStyle={generalStyles.DropBorder}
            list={FieldList}
            containerStyle={{
              zIndex: openDropdown === 'dropdown6' ? 10000 : 1,
            }}
            isOpen={openDropdown === 'dropdown6'}
            onDropdownOpen={isOpen =>
              handleDropdownOpen(isOpen ? 'dropdown6' : null)
            }
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
            setValue={setselectedLanguage}
            dropDownStyle={generalStyles.DropBorder}
            list={FieldList}
            containerStyle={{
              zIndex: openDropdown === 'dropdown7' ? 10000 : 1,
            }}
            isOpen={openDropdown === 'dropdown7'}
            onDropdownOpen={isOpen =>
              handleDropdownOpen(isOpen ? 'dropdown7' : null)
            }
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
            setValue={setselectedProficiency}
            dropDownStyle={generalStyles.DropBorder}
            list={FieldList}
            containerStyle={{
              zIndex: openDropdown === 'dropdown8' ? 10000 : 1,
            }}
            isOpen={openDropdown === 'dropdown8'}
            onDropdownOpen={isOpen =>
              handleDropdownOpen(isOpen ? 'dropdown8' : null)
            }
          />
          {formErrors.profisincy && (
            <CustomText
              text={formErrors.profisincy}
              textStyle={styles.ErrorMSG}
            />
          )}

          <Button
            text="Add"
            isDisapled={SelectedLanguage && SelectedProficiency ? false : true}
            disabledBGColor={COLORS.grayLight}
            style={styles.Add}
            onPress={() => {
              addedLanguge();
            }}
          />
          <FlatList
            data={slectedLang}
            keyExtractor={item => item?.lang}
            renderItem={({item, index}) => (
              <View style={[generalStyles.rowBetween]}>
                <CustomText text={item.lang} textStyle={styles.Langtxt} />
                <CustomText text={item.prof} textStyle={styles.Langtxt} />
                <Button
                  text="Delate"
                  onPress={() => deleteItemByIndex(index)}
                  style={[styles.delate]}
                />
              </View>
            )}
          />
        </View>
      </View>
      {/* What skills, tools, technologies and fields of expertise do you have? */}
      <View style={styles.SectionBox}>
        <View style={generalStyles.rowwrap}>
          <CustomText
            text="What skills, tools, technologies and fields of expertise do you have?"
            textStyle={[styles.StepTitle, styles.marginbtn]}
          />
          <Dropdown
            placeholder="Skills"
            value={selectedGrade}
            setValue={setSelectedGrade}
            dropDownStyle={generalStyles.DropBorder}
            list={FieldList}
            containerStyle={{
              zIndex: openDropdown === 'dropdown6' ? 10000 : 1,
            }}
            isOpen={openDropdown === 'dropdown6'}
            onDropdownOpen={isOpen =>
              handleDropdownOpen(isOpen ? 'dropdown6' : null)
            }
          />
        </View>
        {formErrors.skills && (
          <CustomText text={formErrors.skills} textStyle={styles.ErrorMSG} />
        )}
      </View>
      {/* Upload your CV */}
      <View style={styles.SectionBox}>
        <View style={generalStyles.rowwrap}>
          <CustomText text="Upload your CV" textStyle={styles.StepTitle} />
        </View>
        <Button
          text="Upload CV"
          style={styles.CV}
          onPress={() => {
            selectDocument();
          }}
        />
        {JSON.stringify(file?.name) && (
          <CustomText
            text={JSON.stringify(file?.name)}
            textStyle={styles.CVname}
          />
        )}
        {formErrors.Cv_file && (
          <CustomText text={formErrors.Cv_file} textStyle={[styles.ErrorMSG,styles.centerTExt]} />
        )}
      </View>

      <Button
        text={currentPosition === 2 ? 'Finsh' : 'Next'}
        onPress={() => {
          validateForm();
        }}
        style={styles.Bottom}
      />
      {currentPosition === 1 || currentPosition === 2 ? (
        <Button
          text={'Back'}
          onPress={() => {
            setCurrentPosition(pre => pre - 1);
          }}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default Step3;
