import {View} from 'react-native';
import React from 'react';
import {AppInput, CustomText, Dropdown} from '../../../components';
import {generalStyles} from '../../../constants';
import {styles} from './styles';
const List = [
  {label: 'Egypt', value: 'apple'},
  {label: 'Morroco', value: 'banana'},
  {label: 'Italy', value: 'orange'},
];
const Step2 = () => {
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
            <Dropdown list={List} dropDownStyle={[styles.DropBorder2]} />
          </View>
          <View>
            <CustomText
              text="Nationality"
              textStyle={[styles.LapelStyle, styles.MArginBtn]}
            />
            <Dropdown list={List} dropDownStyle={styles.DropBorder2} />
          </View>
        </View>
      </View>
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
            <Dropdown list={List} dropDownStyle={[styles.DropBorder2]} />
          </View>
          <View>
            <CustomText
              text="City"
              textStyle={[styles.LapelStyle, styles.MArginBtn]}
            />
            <Dropdown list={List} dropDownStyle={styles.DropBorder2} />
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
