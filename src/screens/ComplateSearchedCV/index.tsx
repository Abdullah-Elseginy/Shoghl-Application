import React, {useState} from 'react';
import {
  AppHeader,
  AppInput,
  Apploader,
  AppScreenContainer,
  Button,
  Checkbox,
  CustomBottomSheet,
  CustomText,
} from '../../components';
import {
  FlatList,
  Image,
  ScrollView,
  SectionList,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Doc,
  DowenArrow,
  Exit,
  Filte,
  GraduteCap,
  Lock,
  NotFound,
  Search,
  SendMSG,
  ShoglBag,
  Tips2,
  UpperArrow2,
} from '../../assets';
import {generalStyles, hp, wp} from '../../constants';
import {styles} from './styles';
import {FlatData, data} from '../../utils/Data';
import {useDispatch, useSelector} from 'react-redux';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import ScreenNames from '../../navigations/ScreenNames';
import {AppDispatch} from '../../redux/store';
import {
  getCvsDetailsShowUserProfile,
  getSearchedCVs,
} from '../../redux/slices/JobsSlice';
import Toast from 'react-native-toast-message';

const FilterSection = ({item}: any) => {
  const [expanded, setExpanded] = useState(false);
  const [viewMore, setViewMore] = useState<{
    [section: string]: boolean;
  }>({});
  const [checkedItems, setCheckedItems] = useState<{
    [section: string]: string[];
  }>({});

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

  const toggleViewMore = (section: string) => {
    setViewMore(prevViewMore => ({
      ...prevViewMore,
      [section]: !prevViewMore[section],
    }));
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
          keyExtractor={secItem => secItem.id}
          renderSectionHeader={({section: {subtitle}}) => (
            <CustomText text={subtitle} textStyle={styles.SectionTitle} />
          )}
          contentContainerStyle={styles.contencontainer}
          renderItem={({item, section, index}: any) => {
            const isViewMoreActive = viewMore[section.subtitle] || false;

            const shouldRenderItem = index < 2 || isViewMoreActive;

            if (!shouldRenderItem) return null;

            return (
              <View>
                <TouchableOpacity
                  onPress={() =>
                    handleItemToggle(section.subtitle, item.choice)
                  }
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
            );
          }}
          renderSectionFooter={({section}) => (
            <View>
              {section.data.length > 2 && (
                <TouchableOpacity
                  onPress={() => toggleViewMore(section.subtitle)}
                  style={styles.viewMoreButton}>
                  <CustomText
                    text={
                      viewMore[section.subtitle] ? '-View Less' : '+View More'
                    }
                    textStyle={styles.viewMoreText}
                  />
                </TouchableOpacity>
              )}

              <AppInput
                placeholder={section.subtitle}
                leftIcon={<Search width={wp(5)} height={hp(5)} />}
                containerStyle={styles.SerchStyle}
                inputstyle={styles.input}
              />
            </View>
          )}
        />
      )}
    </View>
  );
};
const renderItem = ({item, getUserCVDetails}: any) => {
  const currentYear = new Date().getFullYear();
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.Box}
      onPress={() => {
        getUserCVDetails(item.code);
      }}>
      {/* pic and its row */}
      <View style={generalStyles.row}>
        <View>
          <Image
            source={{
              uri:
                item.avatar ||
                'https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
            style={styles.im}
          />
        </View>
        <View style={styles.textsBox}>
          <View style={[generalStyles.row, styles.namesbox]}>
            <CustomText text={item.name} textStyle={styles.name} />
            <View style={styles.Lock}>
              <Lock height={hp(1.8)} width={wp(3.7)} />
            </View>
            <View style={[styles.Lock, styles.CVbg]}>
              <CustomText text="CV" textStyle={[styles.CV]} />
            </View>
          </View>
          <CustomText
            text={
              (item.country_name.default_name || 'Saudi Arabia') +
              ',' +
              (item.city_name.default_name || 'Riyadh') +
              '- ' +
              (Number(currentYear) - Number(item.birth_year)) +
              ' years old'
            }
            textStyle={styles.supproftext}
          />
          <View style={generalStyles.rowBetween}>
            <CustomText
              text={'last active 28 days ago'}
              textStyle={styles.lastseen}
            />
          </View>
        </View>
      </View>
      {/* other informations */}
      <View style={styles.Sectionmeduim}>
        <View style={generalStyles.row}>
          <View>
            <ShoglBag width={wp(5)} height={wp(4)} />
          </View>
          <View style={styles.medtexBox}>
            <CustomText
              text={'10 Jobs Done : '}
              text2={'(2000-2009)'}
              textStyle2={styles.tex2}
              textStyle={styles.tex1}
            />
          </View>
        </View>
        <View style={generalStyles.row}>
          <View>
            <Doc width={wp(5)} height={wp(4)} />
          </View>
          <View style={styles.medtexBox}>
            <CustomText
              text="Job Title : "
              text2={item?.job_titles?.map((item2: any) => (
                <CustomText text={item2?.default_name} />
              ))}
              textStyle2={styles.jobtitle}
              textStyle={styles.tex1}
            />
          </View>
        </View>
      </View>
      {/* Footer */}
      <View style={[generalStyles.rowBetween, styles.foterCvcard]}>
        <View style={styles.immmediatstart}>
          <CustomText text2="Immediate Start" textStyle={styles.Apply} />
        </View>
        <TouchableOpacity style={[generalStyles.row, styles.applyBox]}>
          <SendMSG width={wp(3)} height={hp(2.5)} />
          <CustomText text="invite to apply" textStyle={styles.Apply} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
type Props = {
  navigation: NativeStackNavigationProp<ParamListBase, string>;
};
const ComplateSearchedCv = ({navigation, route}: Props) => {
  const {searchVal} = route.params;
  const dispatch = useDispatch<AppDispatch>();
  const [OpenSheet, SetOpenSheet] = React.useState(false);
  const {userCvs, loadinJobs} = useSelector((state: any) => state.jobs);
  const [JobTitle, setJobTitle] = useState(searchVal || '');
  const [error, setError] = useState('');
  //-----------------------APIs----------------------------------------------------------------
  const getUserCVDetails = (code: any) => {
    const userCode = {
      code: code,
    };
    dispatch(getCvsDetailsShowUserProfile(userCode))
      .unwrap()
      .then(() => {
        navigation.navigate(ScreenNames.CVProfile);
      })
      .catch(() => {
        Toast.show({
          text2: 'Failed to fetch CV details',
          text1: 'Error',
          type: 'error',
        });
      });
  };

  const GETCVs = () => {
    // Validate the input
    if (!JobTitle.trim()) {
      setError('Please enter a job title.');
      return;
    }
    setError('');

    const dataForSearch = {
      job_title: JobTitle?.toLocaleLowerCase(),
    };

    dispatch(getSearchedCVs(dataForSearch));
  };
  return (
    <AppScreenContainer>
      <AppHeader arrowBack={true} title="search result" />
      {loadinJobs && <Apploader message="loading.." visible={loadinJobs} />}
      <ScrollView>
        <View style={[styles.MainHeader, styles.SeconBox]}>
          <View style={styles.headerBox}>
            <View>
              <CustomText
                text="Search Candidates CVs "
                textStyle={styles.headerTExt}
              />
              <View style={generalStyles.rowCenter}>
                <Tips2 width={wp(5)} height={hp(2.5)} />
                <CustomText
                  text="Tips for better search"
                  textStyle={styles.SupTExt}
                />
              </View>
            </View>
            <View>
              {/* Filter */}
              <TouchableOpacity
                onPress={() => SetOpenSheet(true)}
                style={styles.filterBottm}>
                <Filte width={wp(5.5)} height={hp(4)} />
              </TouchableOpacity>
            </View>
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
                  GETCVs();
                }}
              />
            }
            value={JobTitle}
            onChangeText={val => setJobTitle(val)}
          />
          {/* Error message */}
          {error ? (
            <CustomText text={error} textStyle={styles.errorText} />
          ) : null}
          {/* Suggesion */}
          <View style={styles.SuggsionBox}>
            <View style={styles.Exit}>
              <CustomText
                text="Egypt "
                text2="(Country)"
                textStyle2={styles.tex2}
                textStyle={styles.texone}
              />
              <Exit width={wp(5)} height={hp(4)} />
            </View>
            <View style={styles.Exit}>
              <CustomText
                text="Egypt "
                text2="(Country)"
                textStyle2={styles.tex2}
                textStyle={styles.texone}
              />
              <Exit width={wp(5)} height={hp(4)} />
            </View>
          </View>
          {/* search results */}

          <View style={styles.bg}>
            <View style={[styles.Exit, styles.nobg]}>
              <CustomText
                text="Showing "
                text2={userCvs?.length}
                textStyle2={styles.tex2}
                textStyle={styles.texone}
              />
              <CustomText text="results" />
            </View>
            <TouchableOpacity style={[styles.Exit]}>
              <CustomText text="+ Save This Search" textStyle={styles.tex2} />
            </TouchableOpacity>
          </View>
          {userCvs?.length === 0 && (
            <View style={styles.noJobs}>
              <CustomText text="No CV's Founded" textStyle={styles.nottext} />
              <NotFound />
            </View>
          )}
          {/* Serch results */}
          <View style={styles.MainBox}>
            <FlatList
              data={userCvs}
              keyExtractor={item => item.code}
              renderItem={({item}) => renderItem({item, getUserCVDetails})}
            />
          </View>
        </View>
      </ScrollView>
      {/* Filter sheet */}
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
    </AppScreenContainer>
  );
};

export default ComplateSearchedCv;
