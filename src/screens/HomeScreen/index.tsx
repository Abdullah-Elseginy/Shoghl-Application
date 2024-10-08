/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  AppInput,
  AppScreenContainer,
  Button,
  CustomModal,
  CustomText,
  Dropdown,
} from '../../components';
import {styles} from './styles';
import {FlatList, ScrollView, TouchableOpacity, View} from 'react-native';
import {Cancel, Cash, Crown, Help, Location, UploadDoc} from '../../assets';
import {generalStyles, hp, wp} from '../../constants';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {
  CAREERLEVEL,
  City,
  HOWITWORK,
  JOBSHOME,
  PARTENERS,
  BROWESLOCATION,
} from '../../utils/Data';

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>;
};

const HomeScreen = ({navigation}: Props) => {
  const [city, setCity] = React.useState('');
  const [modalVisible, SetModalVisable] = React.useState(true);
  const HowItWork = ({item}: any) => {
    return (
      <View style={styles.HowItWorkBox}>
        {item.imag}
        <CustomText textStyle={styles.job} text={item.title} />
        <CustomText
          textStyle={[styles.sectionSubTitle, styles.HIWContentText]}
          text={item.content}
        />
      </View>
    );
  };
  const Job = ({item}: any) => {
    return (
      <View style={styles.jobBox}>
        <View style={styles.jobTopBox}>
          <View style={generalStyles.row}>
            {item.img}
            <View style={styles.jobTopContent}>
              <CustomText text={item.status} textStyle={styles.status} />
              <CustomText text={item.job} textStyle={styles.job} />
              <CustomText text={item.period} textStyle={styles.period} />
            </View>
          </View>
        </View>
        <View style={styles.jobBottomBox}>
          <View style={[generalStyles.row, styles.JobButtomBox2]}>
            <Crown width={hp(2)} height={hp(2)} style={styles.btnIcon} />
            <CustomText text={item.status} textStyle={styles.jobBottomTxt} />
            <Location
              width={hp(2)}
              height={hp(2)}
              style={[styles.btnIcon, styles.LocationBTN]}
            />
            <CustomText text={item.location} textStyle={styles.jobBottomTxt} />
          </View>
          <View style={generalStyles.row}>
            <Cash width={hp(2)} height={hp(2)} style={styles.btnIcon} />
            <CustomText text={item.price} textStyle={styles.jobBottomTxt} />
          </View>
        </View>
      </View>
    );
  };
  const Parteners = ({item}: any) => {
    return <View>{item.imag}</View>;
  };

  const CareerLevels = ({item}: any) => {
    return (
      <View style={styles.SearchByCareer}>
        {item.imag}
        <CustomText
          text={item.title}
          textStyle={[styles.CareerLevelTitle, styles.sectionSubTitle]}
        />
      </View>
    );
  };
  const BrowesLocation = ({item}: any) => {
    return (
      <View style={styles.SearchByLocation}>
        {item.imag}
        <CustomText text={item.title} textStyle={styles.BrowseLocationTitle} />
      </View>
    );
  };
  const ModalContent = () => {
    return (
      <>
        {/* Step 1 */}
        <View style={styles.stepContainer}>
          <View style={styles.stepNumber}>
            <CustomText text="1" textStyle={styles.stepText} />
          </View>
          <View style={styles.stepInfo}>
            <CustomText
              text="Confirm your email address"
              textStyle={styles.stepTitle}
            />
            <CustomText
              text="An email confirmation has been sent to"
              textStyle={styles.stepSubtitle}
            />
            <CustomText
              textStyle={styles.email}
              text="infinitySolution1@gmail.com"
            />
            <TouchableOpacity>
              <CustomText
                textStyle={styles.resend}
                text="Resend Confirmation email"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Step 2 */}
        <View style={styles.stepContainer}>
          <View style={styles.stepNumber}>
            <CustomText textStyle={styles.stepText} text="2" />
          </View>
          <View style={styles.stepInfo}>
            <CustomText
              textStyle={styles.stepTitle}
              text="Add your Company Tax Card or Commercial Register."
            />
            <CustomText
              textStyle={styles.stepSubtitle}
              text="In order to approve your company account, we need your Tax Card or your Commercial Registration Document."
            />
            <TouchableOpacity>
              <CustomText
                text="Why do we need these documents?"
                textStyle={styles.whyText}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.uploadButton}>
              <UploadDoc width={wp(5)} height={hp(3)} />
              <CustomText
                text="Upload Documents"
                textStyle={styles.uploadText}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Skip For Now */}
        <View style={generalStyles.rowBetween}>
          <TouchableOpacity style={styles.helpCenter}>
            <Help width={wp(5)} height={hp(3)} />
            <CustomText text="Help Center" textStyle={styles.helpCenterText} />
          </TouchableOpacity>
          <Button
            text="Skip For Now"
            style={styles.skipButton}
            onPress={() => SetModalVisable(false)}
          />
        </View>
      </>
    );
  };
  const [openDropdown, setOpenDropdown] = React.useState(null);

  const handleDropdownOpen = (dropdownId: any) => {
    if (openDropdown === dropdownId) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdownId);
    }
  };
  return (
    <AppScreenContainer style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.SearchBox}>
          <CustomText text="find job" textStyle={styles.sectionTitle} />
          <CustomText
            text="Hire Experts or be hired in sales & marketing"
            textStyle={styles.sectionSubTitle}
          />
          <AppInput
            placeholder="Job Tittle, Skill, Industry"
            appInputStyle={styles.containerStyle}
          />
          <Dropdown
            placeholder="City"
            value={city}
            setValue={setCity}
            dropDownStyle={[generalStyles.DropBorder, styles.containerStyle]}
            list={City}
            containerStyle={{
              zIndex: openDropdown === 'dropdown1' ? 10000 : 1,
            }}
            isOpen={openDropdown === 'dropdown1'}
            onDropdownOpen={isOpen =>
              handleDropdownOpen(isOpen ? 'dropdown1' : null)
            }
          />
          <AppInput
            placeholder="All Categories"
            appInputStyle={styles.containerStyle}
          />
          <Button
            text="search"
            style={styles.btn}
            onPress={() => navigation.navigate('SearchedJobs')}
          />
        </View>
        <View style={styles.HowItWorkSection}>
          <CustomText text="Recent Jobs" textStyle={styles.sectionTitle} />
        </View>
        <FlatList
          data={JOBSHOME}
          horizontal={true}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <Job item={item} />}
        />
        <Button text="show more jobs" style={styles.btn} onPress={() => null} />
        {/* How it Work Section */}
        <View>
          <View style={styles.HowItWorkSection}>
            <CustomText text="How it works?" textStyle={styles.sectionTitle} />
            <CustomText
              text="Shoghl helps you achieve your goals!"
              textStyle={styles.sectionSubTitle}
            />
          </View>
          <FlatList
            horizontal={true}
            data={HOWITWORK}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <HowItWork item={item} />}
          />
        </View>
        {/* Global Parteners */}
        <View>
          <View style={styles.HowItWorkSection}>
            <CustomText
              text="Global partners that trusted us"
              textStyle={styles.sectionTitle}
            />
          </View>
          <FlatList
            horizontal={true}
            data={PARTENERS}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <Parteners item={item} />}
          />
        </View>
        {/*browes career level */}
        <View style={styles.careerSearchSection}>
          <CustomText
            text="Browse Jobs by Career Level"
            textStyle={[styles.sectionTitle, styles.BrowseJobbyCareerLevel]}
          />
        </View>
        <View>
          <FlatList
            horizontal={true}
            data={CAREERLEVEL}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <CareerLevels item={item} />}
          />
        </View>
        {/* Browse Jobs By location */}
        <View>
          <View style={styles.HowItWorkSection}>
            <CustomText
              text="Browse Jobs by Career Location"
              textStyle={[
                styles.sectionTitle,
                styles.BrowseJobsbCareerLocation,
              ]}
            />
          </View>
          <View style={styles.SearchLocationContainer}>
            <FlatList
              horizontal
              data={BROWESLOCATION}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => <BrowesLocation item={item} />}
            />
          </View>
          <Button text="show more" style={styles.btn} onPress={() => null} />
        </View>
      </ScrollView>
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={() => SetModalVisable(prev => !prev)}
        title="You are almost done!"
        subtitle="Complete these two simple steps to publish your first job post."
        closeIcon={true}
        children={<ModalContent />}
      />
    </AppScreenContainer>
  );
};

export default HomeScreen;
