import React, {useState} from 'react';
import {
  AppHeader,
  AppInput,
  AppScreenContainer,
  Button,
  Checkbox,
  CustomBottomSheet,
  CustomText,
} from '../../components';
import {
  FlatList,
  ScrollView,
  SectionList,
  TouchableOpacity,
  View,
} from 'react-native';
import {DowenArrow, Filte, Search, Tips2, UpperArrow2} from '../../assets';
import {generalStyles, hp, wp} from '../../constants';
import {styles} from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>;
};
const FilterSection = ({item}: any) => {
  const [expanded, setExpanded] = useState(false);
  const [checkedItems, setCheckedItems] = useState<{
    [section: string]: string[];
  }>({});
  console.log(checkedItems);

  const handleItemToggle = (section: string, choice: string) => {
    setCheckedItems(prevCheckedItems => {
      const sectionChoices = prevCheckedItems[section] || [];
      if (sectionChoices.includes(choice)) {
        return {
          ...prevCheckedItems,
          [section]: sectionChoices.filter(item => item !== choice),
        };
      } else {
        return {
          ...prevCheckedItems,
          [section]: [...sectionChoices, choice],
        };
      }
    });
  };

  return (
    <View>
      <View style={styles.Line} />
      <TouchableOpacity
        style={[styles.filtersSections, generalStyles.rowBetween]}
        onPress={() => setExpanded(!expanded)}>
        <View style={generalStyles.row}>
          <CustomText text={item.title} textStyle={styles.filtersText} />
          {item.new ? (
            <View style={styles.New}>
              <CustomText text="New" />
            </View>
          ) : null}
          {item.nom ? (
            <View style={styles.nomber}>
              <CustomText text={item.nom} />
            </View>
          ) : null}
        </View>
        {expanded ? <UpperArrow2 /> : <DowenArrow />}
      </TouchableOpacity>
      {expanded && (
        <SectionList
          sections={item.options}
          keyExtractor={secitem => secitem}
          renderSectionHeader={({section: {subtitle}}) => (
            <CustomText text={subtitle} textStyle={styles.SectionTitle} />
          )}
          contentContainerStyle={styles.contencontainer}
          renderItem={({item, section}: any) => (
            <View>
              <TouchableOpacity
                onPress={() => handleItemToggle(section.subtitle, item.choice)}
                style={[styles.filterChoices]}>
                <Checkbox
                  isChecked={checkedItems[section.subtitle]?.includes(
                    item.choice,
                  )}
                  setIsChecked={() =>
                    handleItemToggle(section.subtitle, item.choice)
                  }
                />
                <CustomText text={item.choice} textStyle={styles.ItemText} />
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

const ComplateSearchedCv = ({navigation}: Props) => {
  const [FlatData, setFlatData] = useState([
    {
      id: '1',
      title: 'Work Samples',
      nom: '5',
      new: true,
      options: [
        {
          id: '1',
          subtitle: 'country',
          data: [
            {
              id: '1',
              choice: 'Country1',
              seleceted: false,
            },
            {
              id: '2',
              choice: 'Country2',
              seleceted: false,
            },
            {
              id: '3',
              choice: 'Country3',
              seleceted: false,
            },
            {
              id: '4',
              choice: 'Country4',
              seleceted: false,
            },
          ],
        },
        {
          id: '2',
          subtitle: 'scince',
          data: [
            {
              id: '1',
              choice: 'Country1',
              seleceted: false,
            },
            {
              id: '2',
              choice: 'Country2',
              seleceted: false,
            },
            {
              id: '3',
              choice: 'Country3',
              seleceted: false,
            },
            {
              id: '4',
              choice: 'Country4',
              seleceted: false,
            },
          ],
        },
        {
          id: '3',
          subtitle: 'mona',
          data: [
            {
              id: '1',
              choice: 'Country1',
              seleceted: false,
            },
            {
              id: '2',
              choice: 'Country2',
              seleceted: false,
            },
            {
              id: '3',
              choice: 'Country3',
              seleceted: false,
            },
            {
              id: '4',
              choice: 'Country4',
              seleceted: false,
            },
          ],
        },
      ],
    },
    {
      id: '2',
      title: 'By Location',
      nom: '5',
      new: false,
      options: [
        {
          id: '1',
          subtitle: 'country',
          data: [
            {
              id: '1',
              choice: 'Country1',
              seleceted: false,
            },
            {
              id: '2',
              choice: 'Country2',
              seleceted: false,
            },
            {
              id: '3',
              choice: 'Country3',
              seleceted: false,
            },
            {
              id: '4',
              choice: 'Country4',
              seleceted: false,
            },
          ],
        },
        {
          id: '2',
          subtitle: 'work',
          data: [
            {
              id: '1',
              choice: 'Country1',
              seleceted: false,
            },
            {
              id: '2',
              choice: 'Country2',
              seleceted: false,
            },
            {
              id: '3',
              choice: 'Country3',
              seleceted: false,
            },
            {
              id: '4',
              choice: 'Country4',
              seleceted: false,
            },
          ],
        },
        {
          id: '3',
          subtitle: 'Salem',
          data: [
            {
              id: '1',
              choice: 'Country1',
              seleceted: false,
            },
            {
              id: '2',
              choice: 'Country2',
              seleceted: false,
            },
            {
              id: '3',
              choice: 'Country3',
              seleceted: false,
            },
            {
              id: '4',
              choice: 'Country4',
              seleceted: false,
            },
          ],
        },
      ],
    },
    {
      id: '3',
      title: 'By Education',
      nom: '',
      new: false,
      options: [
        {
          id: '1',
          subtitle: 'country',
          data: [
            {
              id: '1',
              choice: 'Country1',
              seleceted: false,
            },
            {
              id: '2',
              choice: 'Country2',
              seleceted: false,
            },
            {
              id: '3',
              choice: 'Country3',
              seleceted: false,
            },
            {
              id: '4',
              choice: 'Country4',
              seleceted: false,
            },
          ],
        },
        {
          id: '2',
          subtitle: 'work',
          data: [
            {
              id: '1',
              choice: 'Country1',
              seleceted: false,
            },
            {
              id: '2',
              choice: 'Country2',
              seleceted: false,
            },
            {
              id: '3',
              choice: 'Country3',
              seleceted: false,
            },
            {
              id: '4',
              choice: 'Country4',
              seleceted: false,
            },
          ],
        },
        {
          id: '3',
          subtitle: 'Salem',
          data: [
            {
              id: '1',
              choice: 'Country1',
              seleceted: false,
            },
            {
              id: '2',
              choice: 'Country2',
              seleceted: false,
            },
            {
              id: '3',
              choice: 'Country3',
              seleceted: false,
            },
            {
              id: '4',
              choice: 'Country4',
              seleceted: false,
            },
          ],
        },
      ],
    },
  ]);
  const [OpenSheet, SetOpenSheet] = React.useState(false);
  return (
    <AppScreenContainer>
      <AppHeader arrowBack={true} title="search result" />
      <ScrollView>
        <View style={[styles.MainHeader, styles.SeconBox]}>
          <CustomText
            text="Search Candidates CVs "
            textStyle={styles.headerTExt}
          />
          <View style={generalStyles.rowCenter}>
            <Tips2 width={wp(5)} height={hp(2.5)} color={'#0ad'} />
            <CustomText
              text="Tips for better search"
              textStyle={styles.SupTExt}
            />
          </View>
          <AppInput
            containerStyle={styles.InputSearch}
            leftIcon={<Search width={wp(5)} height={hp(3)} />}
            placeholder="Search by job title with tools"
            rightIcon={
              <Button
                text="Search"
                style={styles.Serxhbtn}
                onPress={() => {
                  // navigation.navigate(ScreenNames.ComplateSearchedCv);
                }}
              />
            }
          />
          {/* Filter */}
          <TouchableOpacity
            onPress={() => SetOpenSheet(true)}
            style={styles.filterBottm}>
            <CustomText
              text="Filter"
              textStyle={[styles.filtersText, styles.filterTextComplate]}
            />
            <Filte width={wp(7)} height={hp(4)} />
          </TouchableOpacity>
          <CustomBottomSheet
            isOpen={OpenSheet}
            onClose={() => SetOpenSheet(false)}
            height={hp(50)}
            children={
              <ScrollView contentContainerStyle={styles.buttomSheetScroll}>
                <View style={styles.FilterBox}>
                  <View style={styles.filtersSections}>
                    <CustomText text="Filters" textStyle={styles.filtersText} />
                    <View style={generalStyles.rowBetween}>
                      <CustomText text="1 filterd selection" />
                      <TouchableOpacity>
                        <CustomText
                          text="clear all filters"
                          textStyle={styles.PrimaryColor}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <FlatList
                    data={FlatData}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <FilterSection item={item} />}
                  />
                </View>
                <Button
                  text="done"
                  onPress={() => SetOpenSheet(false)}
                  style={styles.DoneFilter}
                />
              </ScrollView>
            }
          />
        </View>
      </ScrollView>
    </AppScreenContainer>
  );
};

export default ComplateSearchedCv;
