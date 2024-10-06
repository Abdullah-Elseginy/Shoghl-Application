/* eslint-disable react-native/no-inline-styles */
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
import {
  JopTypes,
  data2,
  JopTypes2,
  CareerLevel,
  City,
  Country,
  YEARSEXP,
  YEARSEXP2,
} from '../../utils/Data';

const JobPost = () => {
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
              data={data2}
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
              placeholder="Country"
              value={selectedCountry}
              setValue={setSelectedCountry}
              dropDownStyle={generalStyles.DropBorder}
              list={Country}
              containerStyle={{
                zIndex: openDropdown === 'dropdown1' ? 10000 : 1,
              }}
              isOpen={openDropdown === 'dropdown1'}
              onDropdownOpen={isOpen =>
                handleDropdownOpen(isOpen ? 'dropdown1' : null)
              }
            />
            <CustomText text="City" textStyle={styles.OptopnTExt} />
            <Dropdown
              placeholder="City"
              value={selectedCity}
              setValue={setSelectedCity}
              dropDownStyle={generalStyles.DropBorder}
              list={City}
              containerStyle={{
                zIndex: openDropdown === 'dropdown2' ? 10000 : 1,
              }}
              isOpen={openDropdown === 'dropdown2'}
              onDropdownOpen={isOpen =>
                handleDropdownOpen(isOpen ? 'dropdown2' : null)
              }
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
                  placeholder="MIN"
                  value={selectedYearEX}
                  setValue={setSelectedselectedYearEX}
                  dropDownStyle={styles.DropStyles}
                  list={YEARSEXP}
                  containerStyle={{
                    zIndex: openDropdown === 'dropdown3' ? 10000 : 1,
                  }}
                  isOpen={openDropdown === 'dropdown3'}
                  onDropdownOpen={isOpen =>
                    handleDropdownOpen(isOpen ? 'dropdown3' : null)
                  }
                />
              </View>
              <View style={styles.ContaibYear}>
                <Dropdown
                  placeholder="MAX"
                  value={selectedYearEX2}
                  setValue={setSelectedselectedYearEX2}
                  dropDownStyle={styles.DropStyles}
                  list={YEARSEXP2}
                  containerStyle={{
                    zIndex: openDropdown === 'dropdown4' ? 10000 : 1,
                  }}
                  isOpen={openDropdown === 'dropdown4'}
                  onDropdownOpen={isOpen =>
                    handleDropdownOpen(isOpen ? 'dropdown4' : null)
                  }
                />
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
            <Dropdown
              placeholder="Vacancies"
              value={selectedVacancies}
              setValue={setSelectedselectedVacancies}
              dropDownStyle={generalStyles.DropBorder}
              list={YEARSEXP}
              containerStyle={{
                zIndex: openDropdown === 'dropdown5' ? 10000 : 1,
              }}
              isOpen={openDropdown === 'dropdown5'}
              onDropdownOpen={isOpen =>
                handleDropdownOpen(isOpen ? 'dropdown5' : null)
              }
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
