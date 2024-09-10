import React, {useState} from 'react';
import {Pressable, ScrollView, View} from 'react-native';
import {
  AppHeader,
  AppInput,
  AppScreenContainer,
  CustomText,
  Dropdown,
} from '../../components';
import {styles} from './styles';
import {FlatList} from 'react-native-gesture-handler';

const JobPost = () => {
  const JopTypes = [
    {id: '1', title: 'Part time'},
    {id: '2', title: 'Full time'},
    {id: '3', title: 'Trainning'},
  ];
  const data = [
    {id: '1', title: 'Job'},
    {id: '2', title: 'Trainnig'},
  ];
  const JopTypes2 = [
    {id: '1', title: 'on site'},
    {id: '2', title: 'remotly'},
    {id: '3', title: 'hybrid'},
  ];
  const CareerLevel = [
    {id: '1', title: 'Student'},
    {id: '2', title: 'Entry Level'},
    {id: '3', title: 'Experienced'},
    {id: '4', title: 'Manager'},
    {id: '5', title: 'Senior Management'},
    {id: '6', title: 'Not Specified'},
  ];

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedId2, setSelectedId2] = useState<string | null>(null);
  const [selectedId4, setSelectedId4] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const handlePress = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(prevSelected => prevSelected.filter(item => item !== id));
    } else {
      setSelectedIds(prevSelected => [...prevSelected, id]);
    }
  };
  const renderItem = ({item}: {item: {id: string; title: string}}) => (
    <Pressable
      style={[
        styles.choise,
        selectedId === item.id ? styles.selected : styles.unselected,
      ]}
      onPress={() => setSelectedId(item.id)}>
      <CustomText
        text={item.title}
        textStyle={
          selectedId === item.id ? styles.textSlected : styles.textunselected
        }
      />
    </Pressable>
  );

  const renderItem2 = ({item}: {item: {id: string; title: string}}) => (
    <Pressable
      style={[
        styles.choise,
        selectedId2 === item.id ? styles.selected : styles.unselected,
      ]}
      onPress={() => setSelectedId2(item.id)}>
      <CustomText
        text={item.title}
        textStyle={
          selectedId2 === item.id ? styles.textSlected : styles.textunselected
        }
      />
    </Pressable>
  );

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
  return (
    <AppScreenContainer>
      <AppHeader arrowBack title="Jop Post" />
      <View style={styles.Container}>
        <ScrollView contentContainerStyle={styles.Scrollstyle}>
          <View style={styles.MainStep}>
            <CustomText text="Main Step" textStyle={styles.MainStepText} />
            <CustomText text="Create a job" />
          </View>
          {/* post type */}
          <View>
            <CustomText text="Post Type" textStyle={styles.StepTitle} />
            <FlatList
              data={data}
              keyExtractor={item => item.id}
              renderItem={renderItem}
              horizontal={true}
              extraData={selectedId}
            />
          </View>
          {/* job title */}
          <View style={styles.SectionBox}>
            <CustomText text="job title" textStyle={styles.StepTitle} />
            <AppInput
              containerStyle={styles.ContanerInput}
              placeholder="job title"
            />
          </View>
          {/* job Caregory */}
          <View style={styles.SectionBox}>
            <CustomText text="job Caregory" textStyle={styles.StepTitle} />
            <AppInput
              containerStyle={styles.ContanerInput}
              placeholder="job Caregory"
            />
          </View>
          {/* Job type */}
          <View style={styles.SectionBox}>
            <CustomText text="Job Type" textStyle={styles.StepTitle} />
            <FlatList
              data={JopTypes}
              keyExtractor={item => item.id}
              renderItem={renderItem2}
              horizontal={true}
              extraData={selectedId2}
            />
          </View>
          {/* Job type remotly */}
          <View style={styles.SectionBox}>
            <CustomText
              text="what Type(s) of job are you open to "
              textStyle={styles.StepTitle}
            />
            <FlatList
              data={JopTypes2}
              keyExtractor={item => item.id}
              renderItem={renderItem3}
              horizontal={true}
              extraData={selectedId2}
            />
          </View>
          <View style={styles.SectionBox}>
            <CustomText text="Your Location" textStyle={styles.StepTitle} />
            <CustomText text="Country" textStyle={styles.OptopnTExt} />
            <Dropdown
              list={[
                {label: 'Egypt', value: 'apple'},
                {label: 'Morroco', value: 'banana'},
                {label: 'Italy', value: 'orange'},
              ]}
              //   value={}
            />
            <CustomText text="City" textStyle={styles.OptopnTExt} />
            <Dropdown
              list={[
                {label: 'Egypt', value: 'apple'},
                {label: 'Morroco', value: 'banana'},
                {label: 'Italy', value: 'orange'},
              ]}
              //   value={}
            />
          </View>
          {/* Career Level */}
          <View style={[styles.SectionBox]}>
            <CustomText text="Career Level" textStyle={styles.StepTitle} />
            <View style={styles.CareerLevel}>
              <FlatList
                data={CareerLevel}
                keyExtractor={item => item.id}
                renderItem={renderItem4}
                //   horizontal={true}
                extraData={selectedId4}
                numColumns={2}
              />
            </View>
          </View>
          <View style={[styles.SectionBox]}>
            <CustomText text="Post Type" textStyle={styles.StepTitle} />
          </View>
        </ScrollView>
      </View>
    </AppScreenContainer>
  );
};

export default JobPost;
