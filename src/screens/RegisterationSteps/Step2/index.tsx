import {View} from 'react-native';
import React, {useState} from 'react';
import {AppInput, CustomText, Dropdown} from '../../../components';
import {generalStyles, hp, wp} from '../../../constants';
import {styles} from './styles';
import {DowenArrow, UpperArrow} from '../../../assets';
const Country = ['Egypt', 'Morroco', 'Italy'];
const GenderList = ['male', 'Femele', 'prefer Not to say'];
const Nationality = ['Egptien', 'Italy', 'france'];
const City = ['Tanta', 'Cairo', 'London'];
const Step2 = () => {
  const [SelectedGender, setselectedGender] = useState('');
  const [ShowMenuGender, SetShowMenuGender] = useState(false);
  const [SelectedNationality, setselectedNationality] = useState('');
  const [ShowMenuNationality, SetShowMenuNationality] = useState(false);
  const [SelectedCountry, setselectedCountry] = useState('');
  const [ShowMenuCountry, SetShowMenuCountry] = useState(false);
  const [SelectedCity, setselectedCity] = useState('');
  const [ShowMenuCity, SetShowMenuCity] = useState(false);
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
            <AppInput
              containerStyle={styles.DropBorder2}
              styleMenuOption={styles.menuOptopn}
              menueOption={GenderList}
              value={SelectedGender || GenderList[0]}
              editable={false}
              showMenue={ShowMenuGender}
              isdisabled={false}
              setShowMenue={SetShowMenuGender}
              onChangeText={val => setselectedGender(val)}
              rightIcon={
                ShowMenuGender ? (
                  <UpperArrow width={wp(6)} height={hp(1.5)} />
                ) : (
                  <DowenArrow width={wp(6)} />
                )
              }
            />
            {ShowMenuNationality ? <View style={styles.sefeAreaView} /> : ''}
          </View>
          <View>
            <CustomText
              text="Nationality"
              textStyle={[styles.LapelStyle, styles.MArginBtn]}
            />
            <AppInput
              containerStyle={styles.DropBorder2}
              styleMenuOption={styles.menuOptopn}
              menueOption={Nationality}
              value={SelectedNationality || Nationality[0]}
              editable={false}
              showMenue={ShowMenuNationality}
              isdisabled={false}
              setShowMenue={SetShowMenuNationality}
              onChangeText={val => setselectedNationality(val)}
              rightIcon={
                ShowMenuNationality ? (
                  <UpperArrow width={wp(6)} height={hp(1.5)} />
                ) : (
                  <DowenArrow width={wp(6)} />
                )
              }
            />
            {ShowMenuGender ? <View style={styles.sefeAreaView} /> : ''}
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
            <AppInput
              containerStyle={styles.DropBorder2}
              styleMenuOption={styles.menuOptopn}
              menueOption={Country}
              value={SelectedCountry || Country[0]}
              editable={false}
              showMenue={ShowMenuCountry}
              isdisabled={false}
              setShowMenue={SetShowMenuCountry}
              onChangeText={val => setselectedCountry(val)}
              rightIcon={
                ShowMenuCountry ? (
                  <UpperArrow width={wp(6)} height={hp(1.5)} />
                ) : (
                  <DowenArrow width={wp(6)} />
                )
              }
            />
          </View>
          <View>
            <CustomText
              text="City"
              textStyle={[styles.LapelStyle, styles.MArginBtn]}
            />
            <AppInput
              containerStyle={styles.DropBorder2}
              styleMenuOption={styles.menuOptopn}
              menueOption={City}
              value={SelectedCity || City[0]}
              editable={false}
              showMenue={ShowMenuCity}
              isdisabled={false}
              setShowMenue={SetShowMenuCity}
              onChangeText={val => setselectedCity(val)}
              rightIcon={
                ShowMenuCity ? (
                  <UpperArrow width={wp(6)} height={hp(1.5)} />
                ) : (
                  <DowenArrow width={wp(6)} />
                )
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
