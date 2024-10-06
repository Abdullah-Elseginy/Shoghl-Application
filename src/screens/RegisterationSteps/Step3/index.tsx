/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Button, CustomText, Dropdown} from '../../../components';
import {styles} from './styles';
import {COLORS, generalStyles} from '../../../constants';
import {Alert, FlatList, Pressable, View} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {CareerLevel2, FieldList, YearsExList} from '../../../utils/Data';

const Step3 = ({navigation}: any) => {
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
        <CustomText
          text={JSON.stringify(file?.name)}
          textStyle={styles.CVname}
        />
      </View>
    </>
  );
};

export default Step3;
