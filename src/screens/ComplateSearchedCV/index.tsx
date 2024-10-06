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
import {
  Doc,
  DowenArrow,
  Exit,
  Filte,
  GraduteCap,
  Lock,
  Search,
  SendMSG,
  ShoglBag,
  Tips2,
  UpperArrow2,
} from '../../assets';
import {generalStyles, hp, wp} from '../../constants';
import {styles} from './styles';
import {FlatData, data} from '../../utils/Data';

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
const renderItem = ({item}: any) => (
  <View style={styles.Box}>
    {/* pic and its row */}
    <View style={generalStyles.row}>
      <View style={{height: hp(13)}}>{item.img}</View>
      <View style={styles.textsBox}>
        <View style={[generalStyles.row, styles.namesbox]}>
          <CustomText text="Abdullah Elseginy" textStyle={styles.name} />
          <View style={styles.Lock}>
            <Lock height={hp(1.8)} width={wp(3.7)} />
          </View>
          <View style={[styles.Lock, styles.CVbg]}>
            <CustomText text="CV" textStyle={[styles.CV]} />
          </View>
        </View>
        <CustomText text={item.subText1} textStyle={styles.supproftext} />
        <View style={generalStyles.rowBetween}>
          <CustomText text={item.lastseen} textStyle={styles.lastseen} />
        </View>
      </View>
    </View>
    {/* other informations */}
    <View style={styles.Sectionmeduim}>
      <View style={generalStyles.row}>
        <View style={{height: hp(6.22)}}>
          <ShoglBag width={wp(5)} height={wp(4)} />
        </View>
        <View style={styles.medtexBox}>
          <CustomText
            text={item.subText3.slice(0, item.subText3.indexOf('('))}
            text2={item.subText3.slice(item.subText3.indexOf('(')).trim()}
            textStyle2={styles.tex2}
            textStyle={styles.tex1}
          />
          <CustomText
            text={item.subtext4.slice(0, item.subtext4.lastIndexOf('('))}
            text2={item.subtext4.slice(item.subtext4.lastIndexOf('(')).trim()}
            textStyle2={styles.tex2}
            textStyle={styles.tex1}
          />
        </View>
      </View>
      <View style={generalStyles.row}>
        <View style={{height: hp(4)}}>
          <GraduteCap width={wp(5)} height={wp(4)} />
        </View>
        <View style={styles.medtexBox}>
          <CustomText
            text={item.subtext5.slice(0, item.subtext5.indexOf('('))}
            text2={item.subtext5.slice(item.subtext5.indexOf('(')).trim()}
            textStyle2={styles.tex2}
            textStyle={styles.tex1}
          />
        </View>
      </View>
      <View style={generalStyles.row}>
        <View style={{height: hp(9.6)}}>
          <Doc width={wp(5)} height={wp(4)} />
        </View>
        <View style={styles.medtexBox}>
          <CustomText
            text="Job Title:"
            text2={item.jobtitle}
            textStyle2={styles.jobtitle}
            textStyle={styles.tex1}
          />
        </View>
      </View>
    </View>
    {/* Footer */}
    <View style={generalStyles.rowBetween}>
      <View style={styles.immmediatstart}>
        <CustomText text2="Immediate Start" textStyle={styles.Apply} />
      </View>
      <TouchableOpacity style={[generalStyles.row, styles.applyBox]}>
        <SendMSG width={wp(3)} height={hp(2.5)} />
        <CustomText text="invite to apply" textStyle={styles.Apply} />
      </TouchableOpacity>
    </View>
  </View>
);
const ComplateSearchedCv = () => {
  const [OpenSheet, SetOpenSheet] = React.useState(false);
  return (
    <AppScreenContainer>
      <AppHeader arrowBack={true} title="search result" />
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
                  // navigation.navigate(ScreenNames.ComplateSearchedCv);
                }}
              />
            }
          />
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
                text2="45,458"
                textStyle2={styles.tex2}
                textStyle={styles.texone}
              />
              <CustomText text="results" />
            </View>
            <TouchableOpacity style={[styles.Exit]}>
              <CustomText text="+ Save This Search" textStyle={styles.tex2} />
            </TouchableOpacity>
          </View>
          {/* Serch results */}
          <View style={styles.MainBox}>
            <FlatList
              data={data}
              keyExtractor={item => item.id}
              renderItem={renderItem}
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
