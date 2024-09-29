import React, {useState} from 'react';
import {
  AppInput,
  Button,
  CustomText,
  Dropdown,
  GeneralModal,
} from '../../../components';
import {styles} from './styles';
import {generalStyles} from '../../../constants';
import {Alert, FlatList, Pressable, View} from 'react-native';
import ScreenNames from '../../../navigations/ScreenNames';
import DocumentPicker from 'react-native-document-picker';
const List = [
  {label: 'Egypt', value: 'apple'},
  {label: 'Morroco', value: 'banana'},
  {label: 'Italy', value: 'orange'},
];
const LanguageList = [
  {label: 'Arabic', value: 'Arabic'},
  {label: 'English', value: 'English'},
  {label: 'Italy', value: 'Italy'},
  {label: 'france', value: 'france'},
];
const ProficiencyList = [
  {label: 'Native', value: 'Native'},
  {label: 'Beginner', value: 'Beginner'},
  {label: 'Intermediate', value: 'Intermediate'},
  {label: 'Advanced', value: 'Advanced'},
  {label: 'Expert', value: 'Expert'},
];
const DropDwensData = [
  {
    id: '1',
    title: 'Field(S) of study',
    list: [
      {label: 'Egypt', value: 'apple'},
      {label: 'Morroco', value: 'banana'},
      {label: 'Italy', value: 'orange'},
    ],
  },
  {
    id: '2',
    title: 'University / Institution',
    list: [
      {label: 'Egypt', value: 'apple'},
      {label: 'Morroco', value: 'banana'},
      {label: 'Italy', value: 'orange'},
    ],
  },
  {
    id: '3',
    title: 'When did you get your degree?Field(S) of study?',
    list: [
      {label: 'Egypt', value: 'apple'},
      {label: 'Morroco', value: 'banana'},
      {label: 'Italy', value: 'orange'},
    ],
  },
  {
    id: '4',
    title: 'Grade',
    list: [
      {label: 'Egypt', value: 'apple'},
      {label: 'Morroco', value: 'banana'},
      {label: 'Italy', value: 'orange'},
    ],
  },
];
const CareerLevel = [
  {id: '1', title: 'Student'},
  {id: '2', title: 'Entry Level'},
  {id: '3', title: 'Experienced'},
  {id: '4', title: 'Manager'},
  {id: '5', title: 'Senior Management'},
  {id: '6', title: 'Not Specified'},
];
const Step3 = ({navigation}: any) => {
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
  const renderItem6 = ({
    item,
  }: {
    item: {id: string; title: string; list: any};
  }) => (
    <View>
      <CustomText
        text={item.title}
        textStyle={[styles.LapelStyle, styles.MArginBtn]}
      />
      <Dropdown list={item.list} dropDownStyle={styles.DropBorder} />
    </View>
  );
  const [file, setFile] = useState(null);
  const [slectedLang, setSelectedLang] = useState([]);
  const [langagevals, setlangaugevals] = useState({
    language: '',
    proficiency: '',
  });
  const Setlanguage = (key, val) => {
    setlangaugevals({...langagevals, [key]: val});
  };
  console.log(langagevals.proficiency);

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
  const [Selected, setselected] = useState('');
  const [ShowMenuProficiency, SetShowMenuProficiency] = useState(false);
  console.log(Selected);
  return (
    <>
      {/*Personal Info */}
      <View style={[styles.SectionBox]}>
        <View style={generalStyles.row}>
          <CustomText
            text="How many years of experience do you have?"
            textStyle={styles.StepTitle}
          />
        </View>
        <View>
          <Dropdown list={List} dropDownStyle={styles.DropBorder} />
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
          <Dropdown
            value={langagevals.language}
            onChangeValue={val => {
              Setlanguage('language', val);
              console.log('first');
            }}
            list={LanguageList}
            dropDownStyle={styles.DropBorder}
          />
        </View>
        <View>
          <CustomText
            text={'Proficiency'}
            textStyle={[styles.LapelStyle, styles.MArginBtn]}
          />
          {/* <Dropdown
            list={ProficiencyList}
            dropDownStyle={styles.DropBorder}
            value={langagevals.proficiency}
            setValue={(val: any) => Setlanguage('proficiency', val)}
          /> */}
          <AppInput
            menueOption={['sc', 'casca']}
            value={Selected}
            editable={false}
            showMenue={ShowMenuProficiency}
            isdisabled={false}
            setShowMenue={SetShowMenuProficiency}
            onChangeText={val => setselected(val)}
          />
          <Button text="Add" style={styles.Add} onPress={() => {}} />
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
