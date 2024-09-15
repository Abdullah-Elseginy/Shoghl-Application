import React, {useState} from 'react';
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
  const [selectedId2, setSelectedId2] = useState<string | null>(null);
  const [selectedId4, setSelectedId4] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [Checked, setChecked] = useState<boolean>(false);
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
  const clearSubSelction = index => {
    if (index == 0) {
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
            <CustomText text="Post New Job" textStyle={styles.MainStepText} />
            <CustomText text="Create a job post" />
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
          {/* Location */}
          <View style={styles.SectionBox}>
            <CustomText text="Your Location" textStyle={styles.StepTitle} />
            <CustomText text="Country" textStyle={styles.OptopnTExt} />
            <Dropdown
              list={[
                {label: 'Egypt', value: 'apple'},
                {label: 'Morroco', value: 'banana'},
                {label: 'Italy', value: 'orange'},
              ]}
              dropDownStyle={styles.DropBorder}

              //   value={}
            />
            <CustomText text="City" textStyle={styles.OptopnTExt} />
            <Dropdown
              list={[
                {label: 'Egypt', value: 'apple'},
                {label: 'Morroco', value: 'banana'},
                {label: 'Italy', value: 'orange'},
              ]}
              dropDownStyle={styles.DropBorder}

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
          {/* Year Of Experience */}
          <View style={[styles.SectionBox]}>
            <CustomText
              text="Years of Experience"
              textStyle={styles.StepTitle}
            />
            <View style={generalStyles.row}>
              <View>
                <Dropdown
                  list={[
                    {label: '1-3 years', value: 'apple'},
                    {label: '4-6 years', value: 'banana'},
                    {label: '7-9 years', value: 'orange'},
                    {label: '10+ years', value: 'grape'},
                  ]}
                  dropDownStyle={styles.DropStyles}
                  ItemsBOX={styles.DropStyles}
                  placeholder="Min"
                  //   value={}
                />
              </View>
              <View style={styles.ContaibYear}>
                <Dropdown
                  list={[
                    {label: '1-3 years', value: 'a'},
                    {label: '4-6 years', value: 'c'},
                    {label: '7-9 years', value: 'e'},
                    {label: '10+ years', value: 'v'},
                  ]}
                  dropDownStyle={styles.DropStyles}
                  //   value={}
                  placeholder="Max"
                />
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
                  placeholder="SAR / Month"
                />
              </View>
              <View>
                <AppInput
                  containerStyle={styles.InputBox}
                  placeholder="SAR / Month"
                />
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
            <Dropdown
              list={[
                {label: '1', value: 'apple'},
                {label: '2', value: 'banana'},
                {label: '5', value: 'orange'},
              ]}
              dropDownStyle={styles.DropBorder}
              //   value={}
            />
          </View>
          {/*About Job */}
          <View style={[styles.SectionBox]}>
            <CustomText
              text="About Job"
              textStyle={[styles.StepTitle, styles.StepText]}
            />
            <View>
              <AppInput
                placeholder="Type here"
                containerStyle={styles.JobDEs}
                multiline={true}
                inputStyle={styles.inputstyle}
                label="Job description"
              />
            </View>
            <View>
              <AppInput
                placeholder="Type here"
                containerStyle={styles.JobDEs}
                multiline={true}
                inputStyle={styles.inputstyle}
                label="Job requirements"
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
              text="Job Option"
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
          <Button text="Post Now" style={styles.Buttom} onPress={() => {}} />
        </ScrollView>
      </View>
    </AppScreenContainer>
  );
};

export default JobPost;
