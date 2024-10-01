/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {TouchableOpacity, View, FlatList, ScrollView} from 'react-native';
import {
  AppScreenContainer,
  Button,
  Checkbox,
  CustomBottomSheet,
  CustomText,
} from '../../components';
import {styles} from './styles';
import {Add, DowenArrow, Filte, UpperArrow2} from '../../assets';
import {generalStyles, hp, wp} from '../../constants';
import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {JOBS, Optionsdata, QUETIONS} from '../../utils/Data';
import Job from '../../components/Jobs';

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase, string>;
};
const FilterSection = ({item}: {item: any}) => {
  const [expanded, setExpanded] = useState(false);
  const [FilterOptions, setOptions] = useState<Array<any>>(item.options);

  const toggleCheckbox = (index: number) => {
    setOptions(prevOptions =>
      prevOptions.map((opt, i) =>
        i === index ? {...opt, selected: !opt.selected} : opt,
      ),
    );
  };
  return (
    <View>
      <View style={styles.Line} />
      <TouchableOpacity
        style={[styles.filtersSections, generalStyles.rowBetween]}
        onPress={() => setExpanded(!expanded)}>
        <CustomText text={item.title} textStyle={styles.filtersText} />
        {expanded ? <UpperArrow2 /> : <DowenArrow />}
      </TouchableOpacity>
      {expanded && (
        <FlatList
          data={FilterOptions}
          keyExtractor={(option, index) => index.toString()} // Using index as key for options
          contentContainerStyle={styles.contencontainer}
          renderItem={({item, index}) => (
            <View>
              <View style={styles.filterChoices}>
                <Checkbox
                  isChecked={item.selected}
                  setIsChecked={() => toggleCheckbox(index)}
                />
                <CustomText text={item.title} textStyle={styles.ItemText} />
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

const Quetions = ({item}: any) => {
  return (
    <View style={styles.quetionBox}>
      <CustomText text={item.text} textStyle={styles.filtersText} />
      <Add />
    </View>
  );
};
const Explore = ({navigation}: Props) => {
  const [openSheet, SetOpenSheet] = useState(false);
  return (
    <AppScreenContainer>
      {/* <AppHeader arrowBack={true} title="Search jobs" /> */}
      <ScrollView contentContainerStyle={styles.container}>
        {/* Section1 Search Title */}
        <View style={styles.Secion1Box}>
          <CustomText
            text="Senior Management Jobs in Saudi Arabia"
            textStyle={styles.sectionTitle}
          />
          <CustomText text="123 jobs found" textStyle={styles.jobsNumber} />
        </View>
        {/* Section2 Filter */}
        <TouchableOpacity
          onPress={() => SetOpenSheet(true)}
          style={styles.filterBottm}>
          <Filte width={wp(5.5)} height={hp(4)} />
        </TouchableOpacity>
        <CustomBottomSheet
          isOpen={openSheet}
          height={hp(60)}
          onClose={() => SetOpenSheet(false)}
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
                  data={Optionsdata}
                  keyExtractor={item => item.id}
                  renderItem={({item}) => <FilterSection item={item} />}
                />
              </View>
              <Button
                text="done"
                onPress={() => SetOpenSheet(false)}
                style={styles.btn}
              />
            </ScrollView>
          }
        />
        {/* Jobs*/}
        <View>
          <FlatList
            data={JOBS}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <Job navigation={navigation} item={item} />}
          />
        </View>
        {/* َQuetions */}
        <View>
          <FlatList
            data={QUETIONS}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <Quetions item={item} />}
          />
        </View>
      </ScrollView>
    </AppScreenContainer>
  );
};
export default Explore;
