/* eslint-disable react-native/no-inline-styles */
import {FlatList, Pressable, ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import {AppScreenContainer, CustomText, Dropdown} from '../../components';
import styles from './style';
import {generalStyles, hp, wp} from '../../constants';
import {Add, Eye, Lock, Search} from '../../assets';
import {JOBS, QUETIONS} from '../../utils/Data';
import Job from '../../components/Jobs';

const Quetions = ({item}: any) => {
  return (
    <View style={styles.quetionBox}>
      <CustomText text={item.text} textStyle={styles.filtersText} />
      <Add />
    </View>
  );
};
const Applications = ({navigation}: any) => {
  const [selected, setSelected] = useState<String>('Application');
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedCountr, setSelectedCountry] = useState('');

  const handleDropdownOpen = (dropdownId: any) => {
    if (openDropdown === dropdownId) {
      setOpenDropdown(null);
      setOpenDropdown(dropdownId);
    }
  };
  const handlePress = (choice: string) => {
    setSelected(choice);
  };
  return (
    <AppScreenContainer style={styles.maincontainer}>
      {/* <AppHeader arrowBack title="Applications" /> */}
      <View style={styles.container}>
        <View style={styles.MAinheader}>
          <Pressable
            onPress={() => handlePress('Application')}
            style={
              selected == 'Application'
                ? styles.selected
                : styles.applicationBox
            }>
            <CustomText
              text="Application"
              text2="(50)"
              textStyle={styles.appication}
            />
          </Pressable>
          <Pressable
            onPress={() => handlePress('Archive')}
            style={
              selected == 'Archive' ? styles.selected : styles.applicationBox
            }>
            <CustomText text="Archive" textStyle={styles.appication} />
          </Pressable>
        </View>
        <View style={styles.dropBox}>
          <CustomText text="Sorted by" textStyle={styles.sortedby} />
          <View>
            <Dropdown
              placeholder="Select Your Country"
              value={selectedCountr}
              setValue={setSelectedCountry}
              dropDownStyle={styles.dropdwon}
              list={[{label: 'KSA', id: '1'}]}
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
        <ScrollView>
          <View style={[generalStyles.rowBetween, styles.mainbox]}>
            <View style={[generalStyles.row, styles.Box]}>
              <View style={styles.searchBox}>
                <Search width={wp(6)} height={hp(3)} />
              </View>
              <View style={generalStyles.marginLeft}>
                <CustomText text="15" textStyle={styles.Bold} />
                <CustomText
                  text="Search appearance"
                  textStyle={styles.searchText}
                />
              </View>
            </View>
            <View style={[generalStyles.row, styles.Box]}>
              <View style={styles.searchBox}>
                <Eye width={wp(6)} height={hp(3)} />
              </View>
              <View style={generalStyles.marginLeft}>
                <CustomText text="15" textStyle={styles.Bold} />
                <CustomText
                  text="Search appearance"
                  textStyle={styles.searchText}
                />
              </View>
            </View>
          </View>
          <View style={[generalStyles.row, styles.Box]}>
            <View style={styles.searchBox}>
              <Lock width={wp(6)} height={hp(3)} />
            </View>
            <View style={generalStyles.marginLeft}>
              <CustomText text="15" textStyle={styles.Bold} />
              <CustomText
                text="Search appearance"
                textStyle={styles.searchText}
              />
            </View>
          </View>
          {/* Jobs*/}
          <View style={styles.marTop}>
            <FlatList
              data={JOBS}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <Job navigation={navigation} item={item} />
              )}
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
      </View>
    </AppScreenContainer>
  );
};

export default Applications;
