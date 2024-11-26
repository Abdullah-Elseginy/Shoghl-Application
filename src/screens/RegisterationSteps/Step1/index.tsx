/* eslint-disable quotes */
/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {FlatList, Pressable, View} from 'react-native';
import {
  AppInput,
  Button,
  Checkbox,
  CustomText,
  Dropdown,
} from '../../../components';
import {generalStyles} from '../../../constants';
import {styles} from '../styles';
import Toast from 'react-native-toast-message';
import {signUpTwoCorporate} from '../../../redux/slices/authSlice';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../../redux/store';

const Step1 = ({setCurrentPosition, currentPosition}: any) => {
  const {careerLevel, salaryPer, jobTypes, workSpace, Currency} = useSelector(
    (state: any) => state.helpers,
  );
  const dispatch = useDispatch<AppDispatch>();
  const [selectedId4, setSelectedId4] = useState('');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [selectedIds5, setSelectedIds5] = useState<string[]>([]);
  const [Checked, setChecked] = useState(false);
  console.log('selectedId4---' + selectedId4);
  const renderItem3 = ({
    item,
  }: {
    item: {code: string; default_name: string};
  }) => {
    const isSelected = selectedIds.includes(item.code); // Check if item is selected
    return (
      <Pressable
        style={[
          styles.choise,
          isSelected ? styles.selected : styles.unselected,
        ]}
        onPress={() => handlePress(item.code)}>
        <CustomText
          text={item.default_name}
          textStyle={isSelected ? styles.textSlected : styles.textunselected}
        />
      </Pressable>
    );
  };
  const renderItem5 = ({
    item,
  }: {
    item: {code: string; default_name: string};
  }) => {
    const isSelected = selectedIds5.includes(item.code);
    return (
      <Pressable
        style={[
          styles.choise,
          isSelected ? styles.selected : styles.unselected,
        ]}
        onPress={() => handlePress5(item.code)}>
        <CustomText
          text={item.default_name}
          textStyle={isSelected ? styles.textSlected : styles.textunselected}
        />
      </Pressable>
    );
  };
  // const renderItem6 = ({
  //   item,
  //   index,
  // }: {
  //   item: {id: string; title: string};
  //   index: number;
  // }) => {
  //   return (
  //     <Pressable
  //       onPress={() => {
  //         hadleAddJobToinput(index, item.title);
  //       }}
  //       style={[styles.choise, styles.selected]}>
  //       <CustomText
  //         text={`${item.title}\t\t +`}
  //         textStyle={styles.textSlected}
  //       />
  //     </Pressable>
  //   );
  // };
  const renderItem4 = ({item}: {item: {code: string; default_name: any}}) => (
    <Pressable
      style={[
        styles.Careerchoise,
        selectedId4 === item.code ? styles.selected : styles.unselected,
      ]}
      onPress={() => setSelectedId4(item.code)}>
      <CustomText
        text={item.default_name}
        textStyle={
          selectedId4 === item.code ? styles.textSlected : styles.textunselected
        }
      />
    </Pressable>
  );
  const handlePress = (code: string) => {
    if (selectedIds.includes(code)) {
      setSelectedIds(prevSelected =>
        prevSelected.filter(item => item !== code),
      );
    } else {
      setSelectedIds(prevSelected => [...prevSelected, code]);
    }
  };
  const handlePress5 = (code: string) => {
    if (selectedIds5.includes(code)) {
      setSelectedIds5(prevSelected =>
        prevSelected.filter(item => item !== code),
      );
    } else {
      setSelectedIds5(prevSelected => [...prevSelected, code]);
    }
  };
  // const hadleAddJobToinput = (index: number, item: any) => {
  //   SetSelectedJops((prevState: any) => [...prevState, item]);
  //   SetJopTypes4(prev => prev.filter((_, i) => i !== index));
  //   setcurrentSlectedindex(index);
  // };
  const [openDropdown, setOpenDropdown] = useState(null); // Track the currently open dropdown

  const handleDropdownOpen = (dropdownId: any) => {
    if (openDropdown === dropdownId) {
      setOpenDropdown(null); // Close it if it's already open
    } else {
      setOpenDropdown(dropdownId); // Open the new dropdown
    }
  };
  const [selectedMinNetSalary, setSelectedMinNetSalary] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [MinSalary, setMinSalary] = useState('');
  const {loading} = useSelector((state: any) => state.auth);
  const formData = {
    career_level: selectedId4.toString(),
    job_types: selectedIds,
    workspace_setting: selectedIds5,
    // job_titles: SelectedJops,
    minimum_net_salary: Number(MinSalary),
    minimum_net_salary_per: selectedMinNetSalary,
    minimum_net_salary_currency: selectedCurrency,
    minimum_net_salary_hide: Checked ? 'yes' : 'no',
  };
  const [formErrors, setFormErrors] = React.useState({
    career_level: '',
    job_types: '',
    workspace_setting: '',
    minnuim_net_salary: '',
    minnuim_net_salary_per: '',
    minnuim_net_salary_currency: '',
    minnuim_net_salary_hide: '',
  });
  const validateForm = () => {
    // setCurrentPosition(1);
    const errors: {[key: string]: string} = {};
    if (!formData.career_level) {
      errors.career_level = 'Select at least one career level';
    }
    if (!formData.job_types?.length)
      errors.job_types = 'Select at least one job title';
    if (!formData.workspace_setting?.length)
      errors.workspace_setting = 'Select at least one workspace';
    // if (!formData.job_titles?.length) {
    //   errors.job_titles = 'add one or more job titles';
    // }
    if (!formData.minimum_net_salary) {
      errors.minnuim_net_salary = 'Enter Min netSalary';
    }
    if (!formData.minimum_net_salary_per) {
      errors.minnuim_net_salary_per = 'Please Select a minimum per';
    }
    if (!formData.minimum_net_salary_currency) {
      errors.minnuim_net_salary_currency = 'Please Select currency';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = () => {
    setCurrentPosition(1);
    // console.log('formaaaaaaaaaa' + JSON.stringify(formData));

    if (validateForm()) {
      console.log('formdata--' + JSON.stringify(formData));
      dispatch(signUpTwoCorporate(formData))
        .unwrap()
        .then(() => {
          Toast.show({
            text1: 'Success',
            text2: 'Good Step one Complated',
            type: 'success',
            visibilityTime: 1500,
          });
          setCurrentPosition(1);
        })
        .catch(err => {
          Toast.show({
            type: 'error',
            text1: 'Error',
            text2: err,
            position: 'top',
            visibilityTime: 3000,
          });
        });
    }
  };

  const memoizedSalaryPer = React.useMemo(() => salaryPer || [], [salaryPer]);

  return (
    <View>
      <CustomText
        textStyle={styles.Lapesstyle}
        text="Providing this information enables us to recomend better opportunities to you"
      />
      {/* Career Level */}
      <View style={[styles.SectionBox]}>
        <View style={generalStyles.row}>
          <CustomText
            text="What is Your current career level?"
            textStyle={styles.StepTitle}
          />
          <CustomText text="(Choice one)" textStyle={styles.StepTitlechoice} />
        </View>
        <View style={styles.CareerLevel}>
          <FlatList
            data={careerLevel}
            keyExtractor={item => item.code}
            renderItem={renderItem4}
            extraData={selectedId4}
            numColumns={2}
          />
        </View>
        {formErrors.career_level && (
          <CustomText
            text={formErrors.career_level}
            textStyle={styles.ErrorMSG}
          />
        )}
      </View>
      {/* Job type remotly */}
      <View style={styles.SectionBox}>
        <View style={generalStyles.rowwrap}>
          <CustomText
            text="what Type(s) of job are you open to? "
            textStyle={styles.StepTitle}
          />
          <CustomText
            text="(Choice multible)"
            textStyle={styles.StepTitlechoice}
          />
        </View>
        <FlatList
          data={jobTypes}
          keyExtractor={item => item.code}
          renderItem={renderItem3}
          numColumns={2}
        />
        {formErrors.job_types && (
          <CustomText text={formErrors.job_types} textStyle={styles.ErrorMSG} />
        )}
      </View>
      {/* Job type remotly */}
      <View style={styles.SectionBox}>
        <View style={generalStyles.rowwrap}>
          <CustomText
            text="What your preferred workspace settings? "
            textStyle={styles.StepTitle}
          />
          <CustomText
            text="(Choice multible)"
            textStyle={styles.StepTitlechoice}
          />
        </View>
        <FlatList
          data={workSpace}
          keyExtractor={item => item.code}
          renderItem={renderItem5}
          numColumns={2}
        />
      </View>
      {formErrors.workspace_setting && (
        <CustomText
          text={formErrors.workspace_setting}
          textStyle={styles.ErrorMSG}
        />
      )}
      {/* select jobs*/}
      {/* <View style={styles.SectionBox}>
        <View style={generalStyles.rowwrap}>
          <CustomText
            text="What Type(S) Of job are you to? "
            textStyle={styles.StepTitle}
          />
          <CustomText
            text="(Add 1 or more )"
            textStyle={styles.StepTitlechoice}
          />

          <AppInput
            containerStyle={styles.ContanerInput}
            placeholder="Select"
            Flatdata={SelectedJops}
            setFlatData={SetSelectedJops}
            setDelatedToJobTypesAgain={SetJopTypes4}
          />
        </View>
        {formErrors.job_titles && (
          <CustomText
            text={formErrors.job_titles}
            textStyle={styles.ErrorMSG}
          />
        )}
        <FlatList data={JopTypes4} numColumns={2} renderItem={renderItem6} />
      </View> */}
      {/* minimum salary */}
      <View style={styles.SectionBox}>
        <View style={generalStyles.rowwrap}>
          <CustomText
            text="What is the minnuim you would accept? "
            textStyle={styles.StepTitle}
          />
          <CustomText
            text="(Add a net salary)"
            textStyle={styles.StepTitlechoice}
          />
          <AppInput
            containerStyle={styles.ContanerInput}
            isNumericKeyboard
            placeholder="type your minnuim net salary"
            value={MinSalary}
            onChangeText={val => setMinSalary(val)}
          />
          {formErrors.minnuim_net_salary && (
            <CustomText
              text={formErrors.minnuim_net_salary}
              textStyle={styles.ErrorMSG}
            />
          )}
          <View style={styles.dropBox}>
            <Dropdown
              placeholder="Select salary per?"
              value={selectedMinNetSalary}
              list={memoizedSalaryPer}
              onChangeValue={(value: any) =>
                setSelectedMinNetSalary(value.code)
              }
            />

            {formErrors.minnuim_net_salary_per && (
              <CustomText
                text={formErrors.minnuim_net_salary_per}
                textStyle={styles.ErrorMSG}
              />
            )}
          </View>
          <View style={styles.dropBox}>
            <Dropdown
              placeholder="Select The currency"
              value={selectedCurrency}
              onChangeValue={(value: any) => setSelectedCurrency(value.code)}
              list={Currency}
            />
          </View>
          <View>
            {formErrors.minnuim_net_salary_currency && (
              <CustomText
                text={formErrors.minnuim_net_salary_currency}
                textStyle={styles.ErrorMSG}
              />
            )}

            <View style={[generalStyles.row, styles.Checkbox]}>
              <Checkbox
                isChecked={Checked}
                setIsChecked={() => {
                  setChecked(prev => !prev);
                }}
              />
              <CustomText
                text="Hide Minimum salary"
                textStyle={generalStyles.marginLeft}
              />
            </View>
          </View>
        </View>
      </View>
      <Button
        text={currentPosition === 2 ? 'Finsh' : 'Next'}
        onPress={() => {
          handleSubmit();
        }}
        loading={loading}
        style={styles.Bottom}
      />
      {currentPosition === 1 || currentPosition === 2 ? (
        <Button
          text={'Back'}
          onPress={() => {
            setCurrentPosition((pre: any) => pre - 1);
          }}
        />
      ) : (
        ''
      )}
    </View>
  );
};

export default Step1;
