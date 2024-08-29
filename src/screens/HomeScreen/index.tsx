/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  AppInput,
  AppScreenContainer,
  Button,
  CustomText,
  Dropdown,
} from '../../components';
import {styles} from './styles';
import {FlatList, ScrollView, View} from 'react-native';
import {
  Adidas,
  BlackSmith,
  Carpenter,
  Cash,
  Crown,
  Dreams,
  Electricity,
  FeaturdLogo,
  Hairdresser,
  HowItWork1,
  HowItWork2,
  Location,
  Nike,
  Photoshop,
  Riyadh,
  Samsung,
  Tiktok,
  Udacity,
} from '../../assets';
import {generalStyles, hp, wp} from '../../constants';

const CITY = [
  {id: 1, label: 'Cairo'},
  {id: 2, label: 'Alex'},
  {id: 3, label: 'Giza'},
];

const JOBS = [
  {
    id: 1,
    img: <Photoshop />,
    status: 'telimed',
    job: 'electrician',
    period: 'full time',
    location: 'Paris, France',
    price: '$30,000.00 - $35,000.00',
  },
  {
    id: 2,
    img: <Nike />,
    status: 'telimed',
    job: 'electrician',
    period: 'full time',
    location: 'Paris, France',
    price: '$30,000.00 - $35,000.00',
  },
  {
    id: 3,
    img: <Tiktok />,
    status: 'telimed',
    job: 'electrician',
    period: 'full time',
    location: 'Paris, France',
    price: '$30,000.00 - $35,000.00',
  },
  {
    id: 4,
    img: <Samsung />,
    status: 'telimed',
    job: 'electrician',
    period: 'full time',
    location: 'Paris, France',
    price: '$30,000.00 - $35,000.00',
  },
  {
    id: 5,
    img: <Udacity />,
    status: 'telimed',
    job: 'electrician',
    period: 'full time',
    location: 'Paris, France',
    price: '$30,000.00 - $35,000.00',
  },
  {
    id: 6,
    img: <Adidas />,
    status: 'telimed',
    job: 'electrician',
    period: 'full time',
    location: 'Paris, France',
    price: '$30,000.00 - $35,000.00',
  },
];
const HOWITWORK = [
  {
    id: 1,
    title: 'Post a Job',
    imag: <HowItWork1 width={'70%'} />,
    content:
      'Select a package that suits your needs and submit your job details.',
  },
  {
    id: 2,
    title: 'Post a Job',
    imag: <HowItWork2 />,
    content:
      'Select a package that suits your needs and submit your job details.',
  },
  {
    id: 3,
    title: 'Post a Job',
    imag: <HowItWork2 />,
    content:
      'Select a package that suits your needs and submit your job details.',
  },
];
const PARTENERS = [
  {
    id: 1,
    imag: <Dreams />,
  },
  {
    id: 2,
    imag: <FeaturdLogo />,
  },
  {
    id: 3,
    imag: <Dreams />,
  },
  {
    id: 4,
    imag: <FeaturdLogo />,
  },
  {
    id: 5,
    imag: <Dreams />,
  },
  {
    id: 6,
    imag: <FeaturdLogo />,
  },
];
const CAREERLEVEL = [
  {
    id: 1,
    imag: <Hairdresser style={{marginTop: hp(-8)}} width={'65%'} />,
    title: 'Hairdresser',
  },
  {
    id: 2,
    imag: <BlackSmith style={{marginTop: hp(-8)}} width={'65%'} />,
    title: 'BlackSmith',
  },
  {
    id: 3,
    imag: <Carpenter style={{marginTop: hp(-8)}} width={'65%'} />,
    title: 'Carpenter',
  },
  {
    id: 4,
    imag: <Electricity style={{marginTop: hp(-8)}} width={'65%'} />,
    title: 'Electricity',
  },
];
const BROWESLOCATION = [
  {
    id: 1,
    imag: <Riyadh width={'50%'} />,
    title: 'Riyadh',
  },
  {
    id: 2,
    imag: <Riyadh width={'50%'} />,
    title: 'Riyadh',
  },
  {
    id: 3,
    imag: <Riyadh width={'50%'} />,
    title: 'Riyadh',
  },
  {
    id: 4,
    imag: <Riyadh width={'50%'} />,
    title: 'Riyadh',
  },
];

const HomeScreen = ({navigation}) => {
  const [city, setCity] = React.useState('');
  const HowItWork = ({item}) => {
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
  const Job = ({item}) => {
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
  const Parteners = ({item}) => {
    return <View>{item.imag}</View>;
  };

  const CareerLevels = ({item}) => {
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
  const BrowesLocation = ({item}) => {
    return (
      <View style={styles.SearchByLocation}>
        {item.imag}
        <CustomText text={item.title} textStyle={styles.BrowseLocationTitle} />
      </View>
    );
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
            placeholder={'City'}
            list={CITY}
            value={city}
            setValue={setCity}
            dropDownStyle={styles.containerStyle}
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
          data={JOBS}
          horizontal={true}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <Job item={item} />}
        />
        <Button text="show more jobs" style={styles.btn} onPress={() => null} />
        {/* How it Work Section */}
        {/* <View style={styles.Line} /> */}
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
        {/* <View style={styles.Line} /> */}
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
          {/* <View style={styles.Line} /> */}

          <FlatList
            horizontal={true}
            data={CAREERLEVEL}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <CareerLevels item={item} />}
          />
        </View>
        {/* Browse Jobs By location */}
        <View>
          {/* <View style={styles.Line} /> */}
          <View style={styles.HowItWorkSection}>
            <CustomText
              text="Browse Jobs by Career Location"
              textStyle={[styles.sectionTitle,styles.BrowseJobsbCareerLocation ]}
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
    </AppScreenContainer>
  );
};

export default HomeScreen;
