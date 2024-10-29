import * as React from 'react';
import {
  AppScreenContainer,
  Button,
  Checkbox,
  CustomBottomSheet,
  CustomText,
} from '../../components';
import {styles} from './styles';
import {FlatList, ScrollView, TouchableOpacity, View} from 'react-native';
import {Optionsdata} from '../../utils/Data';
import {generalStyles, hp, wp} from '../../constants';
import {useState} from 'react';
import {
  DowenArrow,
  Filte,
  JobTitle,
  Location,
  Skills,
  UpperArrow2,
} from '../../assets';
import ScreenNames from '../../navigations/ScreenNames';
const applicantsItems = ({item, navigation}: any) => (
  <TouchableOpacity
    onPress={() => {
      navigation.navigate(ScreenNames.ComplateSearchedCv);
    }}
    activeOpacity={0.5}
    style={styles.CardBox}>
    <View style={styles.nameBox}>
      <CustomText text={item.name} textStyle={[styles.name]} />
    </View>
    <View style={styles.SkillsBox}>
      <JobTitle width={wp(6)} height={hp(2.5)} />
      <CustomText text={item.title} textStyle={styles.title} />
    </View>
    <View style={styles.SkillsBox}>
      <Skills width={wp(6)} height={hp(2.5)} />
      <CustomText text={item.skills.toString()} />
    </View>
    <View style={styles.SkillsBox}>
      <Location width={wp(6)} height={hp(2.5)} />
      <CustomText text={item.location} />
    </View>
  </TouchableOpacity>
);

const FilterSection = ({
  item,
  onSelectionChange,
  index,
  expanded,
  setExpanded,
  setfilterdcount,
  myfilterData,
}: {
  item: any;
  onSelectionChange: (category: string, selectedOptions: string[]) => void;
  index: any;
  expanded: any;
  setExpanded: any;
  setfilterdcount: any;
  filterdcount: any;
  myfilterData: any;
}) => {
  const [FilterOptions, setOptions] = useState<Array<any>>(item.options ?? []);
  const [expanded1, setExpanded1] = useState(false);

  // Toggle selection for individual checkbox
  const toggleCheckbox = (index: number) => {
    setOptions(prevOptions =>
      prevOptions.map((opt: any, i: number) =>
        i === index ? {...opt, selected: !opt.selected} : opt,
      ),
    );
  };
  setfilterdcount(
    myfilterData?.career_level?.length +
      myfilterData?.city?.length +
      myfilterData?.contract_type?.length,
  );
  React.useEffect(() => {
    const selectedOptions = FilterOptions.filter(opt => opt.selected).map(
      opt => opt.id || opt.code,
    );
    onSelectionChange(item.title2, selectedOptions);
  }, [FilterOptions]);

  React.useEffect(() => {
    if (!expanded) {
      setOptions(prevOptions =>
        (prevOptions ?? []).map(opt => ({...opt, selected: false})),
      );
      setExpanded1(false);
    }
  }, [expanded1, expanded]);

  return (
    <View>
      <View style={styles.Line} />
      <TouchableOpacity
        style={[styles.filtersSections, generalStyles.rowBetween]}
        onPress={() => {
          setExpanded1(!expanded1);
          setExpanded(true);
        }}>
        <View style={generalStyles.row}>
          <CustomText text={item.title} textStyle={styles.filtersText} />
          <View style={styles.countBox}>
            <CustomText
              text={FilterOptions?.length + ''}
              textStyle={styles.Count}
            />
          </View>
        </View>
        {expanded1 ? <UpperArrow2 /> : <DowenArrow />}
      </TouchableOpacity>
      {expanded1 && expanded ? (
        <FlatList
          data={FilterOptions}
          keyExtractor={(option, index) => index.toString()}
          contentContainerStyle={styles.contencontainer}
          renderItem={({item, index}) => (
            <View style={styles.filterChoices}>
              <Checkbox
                isChecked={item.selected}
                setIsChecked={() => toggleCheckbox(index)}
              />
              <TouchableOpacity onPress={() => toggleCheckbox(index)}>
                <CustomText text={item.label} textStyle={styles.ItemText} />
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        ''
      )}
    </View>
  );
};
const ApplicantsDAta = [
  {
    id: 1,
    name: 'Abdullah Elseginy',
    title: 'Front-End',
    skills: ['PHP', 'React js', 'React Native', 'CSS3'],
    location: 'Tanta,Egypt',
  },
  {
    id: 2,
    name: 'Mohamed Ahmed',
    title: 'Back-End',
    skills: ['Laravel', 'PHP', 'Node js', 'Python'],
    location: 'Alex,Egypt',
  },
  {
    id: 3,
    name: 'Sama Elmohamady',
    title: 'Testing Engineer',
    skills: ['HTML5', 'CSS3', 'React Native', 'Hooks'],
    location: 'Benha,Egypt',
  },
];
const Applicants = ({navigation}) => {
  // ----------Filter ------------------
  const [openSheet, SetOpenSheet] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [filterdcount, setfilterdcount] = useState(0);
  const [myfilterData, setMyfilterData] = useState({});

  const handleSelectionChange = (
    category: string,
    selectedOptions: string[],
  ) => {
    setMyfilterData(prevState => ({
      ...prevState,
      [category]: selectedOptions,
    }));
  };
  return (
    <AppScreenContainer style={styles.container}>
      <TouchableOpacity
        onPress={() => SetOpenSheet(true)}
        style={styles.filterBottm}>
        <Filte width={wp(5.5)} height={hp(4)} />
      </TouchableOpacity>
      <FlatList
        data={ApplicantsDAta}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => applicantsItems({item, navigation})}
      />

      {/* Fitlter */}
      <CustomBottomSheet
        isOpen={openSheet}
        height={hp(50)}
        onClose={() => SetOpenSheet(false)}
        children={
          <ScrollView contentContainerStyle={styles.buttomSheetScroll}>
            <View style={styles.FilterBox}>
              <View style={[styles.filtersSections, generalStyles.rowBetween]}>
                <CustomText
                  text={filterdcount + ' Filters'}
                  textStyle={styles.filtersText}
                />
                <TouchableOpacity onPress={() => setExpanded(false)}>
                  <CustomText
                    text="Clear all filters"
                    textStyle={styles.PrimaryColor}
                  />
                </TouchableOpacity>
              </View>
              <FlatList
                data={Optionsdata}
                keyExtractor={item => item.id}
                renderItem={({item, index}) => (
                  <FilterSection
                    item={item}
                    index={index}
                    onSelectionChange={handleSelectionChange}
                    expanded={expanded}
                    setExpanded={setExpanded}
                    setfilterdcount={setfilterdcount}
                    filterdcount={filterdcount}
                    myfilterData={myfilterData}
                  />
                )}
              />
            </View>
            <Button text="done" onPress={() => null} style={styles.btn} />
          </ScrollView>
        }
      />
    </AppScreenContainer>
  );
};

export default Applicants;
