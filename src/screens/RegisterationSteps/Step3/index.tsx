import React, {useState} from 'react';
import {
  AppInput,
  Button,
  CustomText,
  Dropdown,
  GeneralModal,
} from '../../../components';
import {styles} from './styles';
import {COLORS, generalStyles, hp, wp} from '../../../constants';
import {Alert, FlatList, Pressable, View} from 'react-native';
import ScreenNames from '../../../navigations/ScreenNames';
import DocumentPicker from 'react-native-document-picker';
import {DowenArrow, UpperArrow} from '../../../assets';
const List = ['Egypt', 'Morroco', 'Italy'];
const LanguageList = ['Arabic', 'English', 'Italy', 'france'];
const ProficiencyList = [
  'Native',
  'Beginner',
  'Intermediate',
  'Advanced',
  'Expert',
];
const YearsExList = ['0-1', '2-5', '5-10', '10-20'];

const CareerLevel = [
  {id: '1', title: 'Student'},
  {id: '2', title: 'Entry Level'},
  {id: '3', title: 'Experienced'},
  {id: '4', title: 'Manager'},
  {id: '5', title: 'Senior Management'},
  {id: '6', title: 'Not Specified'},
];
const Step3 = ({navigation}: any) => {
  const [DropDwensData, setDropDwensData] = useState([
    {
      id: '1',
      title: 'Field(S) of study',
      list: ['CS', 'IT', 'SE', 'AI'],
      SelectedProficiency: '',
      ShowMenuProficiency: false,
    },
    {
      id: '2',
      title: 'University / Institution',
      list: ['Tanta', 'Alex', 'Cairo', 'Aswan'],
      SelectedProficiency: '',
      ShowMenuProficiency: false,
    },
    {
      id: '3',
      title: 'When did you get your degree?Field(S) of study?',
      list: ['2020', '2021', '2022', '2023', '2024'],
      SelectedProficiency: '',
      ShowMenuProficiency: false,
    },
    {
      id: '4',
      title: 'Grade',
      list: ['poor', 'good', 'Very Good', 'Excelant'],
      SelectedProficiency: '',
      ShowMenuProficiency: false,
    },
  ]);
  const [SelectedProficiency, setselectedProficiency] = useState('');
  const [ShowMenuProficiency, SetShowMenuProficiency] = useState(false);
  const [SelectedLanguage, setselectedLanguage] = useState('');
  const [ShowMenuLanguage, SetShowMenuLanguage] = useState(false);
  const [SelectedYearsEx, setselectedYearsEx] = useState('');
  const [ShowMenuYearsEx, SetShowMenuYearsEx] = useState(false);
  const [selectedId4, setSelectedId4] = useState<string | null>(null);
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
  const updateSelectedProficiency = (id, value) => {
    setDropDwensData(prevData =>
      prevData.map(item =>
        item.id === id ? {...item, SelectedProficiency: value} : item,
      ),
    );
  };

  const toggleShowMenuProficiency = id => {
    setDropDwensData(prevData =>
      prevData.map(item =>
        item.id === id
          ? {...item, ShowMenuProficiency: !item.ShowMenuProficiency}
          : item,
      ),
    );
  };
  const renderItem6 = ({
    item,
  }: {
    item: {
      id: string;
      title: string;
      list: any;
      SelectedProficiency: string;
      ShowMenuProficiency: boolean;
    };
  }) => (
    <View>
      <CustomText
        text={item.title}
        textStyle={[styles.LapelStyle, styles.MArginBtn]}
      />
      <AppInput
        menueOption={item.list}
        value={item.SelectedProficiency || item.list[0]} // Use item's SelectedProficiency
        editable={false}
        showMenue={item.ShowMenuProficiency} // Use item's ShowMenuProficiency
        isdisabled={false}
        setShowMenue={() => toggleShowMenuProficiency(item.id)} // Toggle menu for this item
        onChangeText={val => updateSelectedProficiency(item.id, val)} // Update proficiency for this item
        rightIcon={
          item.ShowMenuProficiency ? (
            <UpperArrow width={wp(6)} height={hp(1.5)} />
          ) : (
            <DowenArrow width={wp(6)} />
          )
        }
      />
    </View>
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
          <AppInput
            menueOption={YearsExList}
            value={SelectedYearsEx || YearsExList[0]}
            editable={false}
            showMenue={ShowMenuYearsEx}
            isdisabled={false}
            setShowMenue={SetShowMenuYearsEx}
            onChangeText={val => setselectedYearsEx(val)}
            rightIcon={
              ShowMenuYearsEx ? (
                <UpperArrow width={wp(6)} height={hp(1.5)} />
              ) : (
                <DowenArrow width={wp(6)} />
              )
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
            data={CareerLevel}
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
        <FlatList data={DropDwensData} renderItem={renderItem6} />
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
          <AppInput
            menueOption={LanguageList}
            value={SelectedLanguage || LanguageList[0]}
            editable={false}
            showMenue={ShowMenuLanguage}
            isdisabled={false}
            setShowMenue={SetShowMenuLanguage}
            onChangeText={val => setselectedLanguage(val)}
            rightIcon={
              ShowMenuProficiency ? (
                <UpperArrow width={wp(6)} height={hp(1.5)} />
              ) : (
                <DowenArrow width={wp(6)} />
              )
            }
          />
        </View>
        {/* Proficiency */}
        <View>
          <CustomText
            text={'Proficiency'}
            textStyle={[styles.LapelStyle, styles.MArginBtn]}
          />
          <AppInput
            menueOption={ProficiencyList}
            value={SelectedProficiency || ProficiencyList[0]}
            editable={false}
            showMenue={ShowMenuProficiency}
            isdisabled={false}
            setShowMenue={SetShowMenuProficiency}
            onChangeText={val => setselectedProficiency(val)}
            rightIcon={
              ShowMenuProficiency ? (
                <UpperArrow width={wp(6)} height={hp(1.5)} />
              ) : (
                <DowenArrow width={wp(6)} />
              )
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
            textStyle={styles.StepTitle}
          />
          <Dropdown
            list={List}
            dropDownStyle={[styles.DropBorder, styles.MArgintop]}
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
