import {DevSettings, I18nManager} from 'react-native';
import useAppDispatch from './useAppDispatch';
import {setAppLang} from 'redux/slices/appSettingSlice';
import i18n from 'Locale/i18n';

const useChangeLang = () => {
  const dispatch = useAppDispatch();

  const onChangeLangPress = async (newLang: string) => {
    dispatch(setAppLang(newLang));
    if (newLang === 'en') {
      await I18nManager.forceRTL(false);
      await I18nManager.allowRTL(false);
      console.log('EN');
    } else {
      await I18nManager.forceRTL(true);
      await I18nManager.allowRTL(true);
      console.log('AR');
    }

    setTimeout(() => {
      DevSettings.reload();
    }, 1000);
  };

  return {
    onChangeLangPress,
  };
};

export default useChangeLang;

export const isAr = () => {
  return i18n.language === 'ar';
};
