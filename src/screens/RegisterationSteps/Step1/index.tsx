import React, {useState} from 'react';
import {FlatList, Pressable, View} from 'react-native';
import {AppInput, Checkbox, CustomText, Dropdown} from '../../../components';
import {generalStyles} from '../../../constants';
import {styles} from '../styles';
const CareerLevel = [
  {id: '1', title: 'Student'},
  {id: '2', title: 'Entry Level'},
  {id: '3', title: 'Experienced'},
  {id: '4', title: 'Manager'},
  {id: '5', title: 'Senior Management'},
  {id: '6', title: 'Not Specified'},
];
const JopTypes2 = [
  {id: '1', title: 'Full time'},
  {id: '2', title: 'Part time'},
  {id: '3', title: 'Freelance/ project'},
  {id: '4', title: 'Internship'},
  {id: '5', title: 'Shift Based'},
  {id: '6', title: 'Volunteering'},
  {id: '7', title: 'Student Activity'},
];
const JopTypes3 = [
  {id: '1', title: 'on site'},
  {id: '2', title: 'remotly'},
  {id: '3', title: 'hybrid'},
];
const Step1 = () => {
  const [JopTypes4, SetJopTypes4] = useState([
    {id: '1', title: 'on site'},
    {id: '2', title: 'remotly'},
    {id: '3', title: 'hybrid'},
  ]);
  const [selectedId4, setSelectedId4] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [selectedIds5, setSelectedIds5] = useState<string[]>([]);
  const [currentSlectedindex, setcurrentSlectedindex] = useState(-1);
  const [SelectedJops, SetSelectedJops] = useState([]);

  const renderItem3 = ({item}: {item: {id: string; title: string}}) => {
    const isSelected = selectedIds.includes(item.id); // Check if item is selected
    return (
      <Pressable
        style={[
          styles.choise,
          isSelected ? styles.selected : styles.unselected,
        ]}
        onPress={() => handlePress(item.id)}>
        <CustomText
          text={item.title}
          textStyle={isSelected ? styles.textSlected : styles.textunselected}
        />
      </Pressable>
    );
  };
  const renderItem5 = ({item}: {item: {id: string; title: string}}) => {
    const isSelected = selectedIds5.includes(item.id);
    return (
      <Pressable
        style={[
          styles.choise,
          isSelected ? styles.selected : styles.unselected,
        ]}
        onPress={() => handlePress5(item.id)}>
        <CustomText
          text={item.title}
          textStyle={isSelected ? styles.textSlected : styles.textunselected}
        />
      </Pressable>
    );
  };
  const renderItem6 = ({
    item,
    index,
  }: {
    item: {id: string; title: string};
    index: number;
  }) => {
    return (
      <Pressable
        onPress={() => {
          hadleAddJobToinput(index, item.title);
        }}
        style={[
          styles.choise,
          currentSlectedindex === index ? styles.selected : styles.unselected,
        ]}>
        <CustomText
          text={`${item.title}\t\t +`}
          textStyle={
            currentSlectedindex === index
              ? styles.textSlected
              : styles.textunselected
          }
        />
      </Pressable>
    );
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
  const handlePress = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(prevSelected => prevSelected.filter(item => item !== id));
    } else {
      setSelectedIds(prevSelected => [...prevSelected, id]);
    }
  };
  const handlePress5 = (id: string) => {
    if (selectedIds5.includes(id)) {
      setSelectedIds5(prevSelected => prevSelected.filter(item => item !== id));
    } else {
      setSelectedIds5(prevSelected => [...prevSelected, id]);
    }
  };
  const hadleAddJobToinput = (index, item) => {
    SetSelectedJops(prevState => [...prevState, item]);
    SetJopTypes4(prev => prev.filter((_, i) => i !== index));
    setcurrentSlectedindex(index);
  };

  return (
    <>
      <CustomText
        textStyle={styles.Lapesstyle}
        text="Providing this information enables us to recomend better opportunities to you"
      />
      {/* Career Level */}
      <View style={[styles.SectionBox]}>
        <View style={generalStyles.row}>
          <CustomText
            text="What is Your current career level?"
            textStyle={styles.StepTitle}
          />
          <CustomText text="(Choice one)" textStyle={styles.StepTitlechoice} />
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
      {/* Job type remotly */}
      <View style={styles.SectionBox}>
        <View style={generalStyles.rowwrap}>
          <CustomText
            text="what Type(s) of job are you open to? "
            textStyle={styles.StepTitle}
          />
          <CustomText
            text="(Choice multible)"
            textStyle={styles.StepTitlechoice}
          />
        </View>
        <FlatList
          data={JopTypes2}
          keyExtractor={item => item.id}
          renderItem={renderItem3}
          numColumns={2}
          // extraData={selectedId2}
        />
      </View>
      {/* Job type remotly */}
      <View style={styles.SectionBox}>
        <View style={generalStyles.rowwrap}>
          <CustomText
            text="What your preferred workspace settings? "
            textStyle={styles.StepTitle}
          />
          <CustomText
            text="(Choice multible)"
            textStyle={styles.StepTitlechoice}
          />
        </View>
        <FlatList
          data={JopTypes3}
          keyExtractor={item => item.id}
          renderItem={renderItem5}
          numColumns={2}
        />
      </View>
      {/* select jobs*/}
      <View style={styles.SectionBox}>
        <View style={generalStyles.rowwrap}>
          <CustomText
            text="What Type(S) Of job are you to? "
            textStyle={styles.StepTitle}
          />
          <CustomText
            text="(Add 1 or more )"
            textStyle={styles.StepTitlechoice}
          />

          <AppInput
            containerStyle={styles.ContanerInput}
            placeholder="Select"
            Flatdata={SelectedJops}
          />
        </View>
        <FlatList data={JopTypes4} numColumns={2} renderItem={renderItem6} />
      </View>
      {/* minimum salary */}
      <View style={styles.SectionBox}>
        <View style={generalStyles.rowwrap}>
          <CustomText
            text="What is the minnuim you would accept? "
            textStyle={styles.StepTitle}
          />
          <CustomText
            text="(Add a net salary)"
            textStyle={styles.StepTitlechoice}
          />
          <AppInput
            containerStyle={styles.ContanerInput}
            placeholder="Select"
          />
          <CustomText text=" " textStyle={styles.OptopnTExt} />
          <Dropdown
            list={[
              {label: 'Egypt', value: 'apple'},
              {label: 'Morroco', value: 'banana'},
              {label: 'Italy', value: 'orange'},
            ]}
            dropDownStyle={styles.DropBorder}

            //   value={}
          />
          <CustomText text=" " textStyle={styles.OptopnTExt} />
          <Dropdown
            list={[
              {label: 'Egypt', value: 'apple'},
              {label: 'Morroco', value: 'banana'},
              {label: 'Italy', value: 'orange'},
            ]}
            dropDownStyle={styles.DropBorder}

            //   value={}
          />
          <View style={[generalStyles.row, styles.Checkbox]}>
            <Checkbox isChecked={true} setIsChecked={() => {}} />
            <CustomText
              text="Hide Minimum salary"
              textStyle={generalStyles.marginLeft}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default Step1;
