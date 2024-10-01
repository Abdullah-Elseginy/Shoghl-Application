/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React, {useState} from 'react';
import {AppInput, CustomText, Dropdown} from '../../../components';
import {generalStyles} from '../../../constants';
import {styles} from './styles';
import {Nationality, Country, City, GenderList} from '../../../utils/Data';
const Step2 = () => {
  // DropDwens
  const [openDropdown, setOpenDropdown] = useState(null); // Track the currently open dropdown
  const [selectedGender, setSelectedGEnder] = useState('');
  const [selectedNationality, setSelectedNationality] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const handleDropdownOpen = (dropdownId: any) => {
    if (openDropdown === dropdownId) {
      setOpenDropdown(null); // Close it if it's already open
    } else {
      setOpenDropdown(dropdownId); // Open the new dropdown
    }
  };
  return (
    <>
      {/*Personal Info */}
      <View style={[styles.SectionBox]}>
        <View style={generalStyles.row}>
          <CustomText text="Your Personal Info" textStyle={styles.StepTitle} />
        </View>
        <View style={generalStyles.rowBetween}>
          <View>
            <AppInput
              containerStyle={styles.ContanerInput}
              placeholder="e.g Ahmed"
              label="First Name"
              labelStyle={styles.LapelStyle}
            />
          </View>
          <View>
            <AppInput
              containerStyle={styles.ContanerInput}
              placeholder="e.g Salem"
              label="Last Name"
              labelStyle={styles.LapelStyle}
            />
          </View>
        </View>
        {/* BirhDay */}
        <View style={generalStyles.rowBetween}>
          <View>
            <AppInput
              containerStyle={styles.ContanerInput2}
              placeholder="Day"
              label="Birthdate"
              labelStyle={styles.LapelStyle}
            />
          </View>
          <View>
            <AppInput
              containerStyle={styles.ContanerInput2}
              placeholder="Month"
              label=" "
              labelStyle={styles.LapelStyle}
            />
          </View>
          <View>
            <AppInput
              containerStyle={styles.ContanerInput2}
              placeholder="Year"
              label=" "
              labelStyle={styles.LapelStyle}
            />
          </View>
        </View>
        {/* Gender and nationalaty */}
        <View style={generalStyles.rowBetween}>
          <View>
            <CustomText
              text="Gender"
              textStyle={[styles.LapelStyle, styles.MArginBtn]}
            />
            <Dropdown
              placeholder="Select Gender"
              value={selectedGender}
              setValue={setSelectedGEnder}
              dropDownStyle={generalStyles.DropBorder2}
              list={GenderList}
              containerStyle={{
                zIndex: openDropdown === 'dropdown1' ? 10000 : 1,
              }}
              isOpen={openDropdown === 'dropdown1'}
              onDropdownOpen={isOpen =>
                handleDropdownOpen(isOpen ? 'dropdown1' : null)
              }
            />
          </View>
          <View>
            <CustomText
              text="Nationality"
              textStyle={[styles.LapelStyle, styles.MArginBtn]}
            />
            <Dropdown
              placeholder="Select Nationality"
              value={selectedNationality}
              setValue={setSelectedNationality}
              dropDownStyle={generalStyles.DropBorder2}
              list={Nationality}
              containerStyle={{
                zIndex: openDropdown === 'dropdown2' ? 10000 : 1,
              }}
              isOpen={openDropdown === 'dropdown2'}
              onDropdownOpen={isOpen =>
                handleDropdownOpen(isOpen ? 'dropdown2' : null)
              }
            />
          </View>
        </View>
      </View>
      {/* Location */}
      <View style={styles.SectionBox}>
        <View style={generalStyles.row}>
          <CustomText text="Your Location" textStyle={styles.StepTitle} />
        </View>
        <View style={generalStyles.rowBetween}>
          <View>
            <CustomText
              text="Country"
              textStyle={[styles.LapelStyle, styles.MArginBtn]}
            />
            <Dropdown
              placeholder="Select Country"
              value={selectedCountry}
              setValue={setSelectedCountry}
              dropDownStyle={generalStyles.DropBorder2}
              list={Country}
              containerStyle={{
                zIndex: openDropdown === 'dropdown3' ? 10000 : 1,
              }}
              isOpen={openDropdown === 'dropdown3'}
              onDropdownOpen={isOpen =>
                handleDropdownOpen(isOpen ? 'dropdown3' : null)
              }
            />
          </View>
          <View>
            <CustomText
              text="City"
              textStyle={[styles.LapelStyle, styles.MArginBtn]}
            />
            <Dropdown
              placeholder="Select Country"
              value={selectedCity}
              setValue={setSelectedCity}
              dropDownStyle={generalStyles.DropBorder2}
              list={City}
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
      <View style={styles.SectionBox}>
        <View style={generalStyles.row}>
          <CustomText text="Contact Info" textStyle={styles.StepTitle} />
        </View>
        <AppInput
          containerStyle={styles.ContanerInput3}
          placeholder="01557888124"
          label="Mobile Number"
          labelStyle={styles.LapelStyle}
        />
      </View>
    </>
  );
};

export default Step2;
