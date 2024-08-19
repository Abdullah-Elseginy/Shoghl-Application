import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import ar from './ar.json';
import en from './en.json';
import {store} from 'redux/store';

const {appLang} = store.getState().appSetting;

//App languages
const resources = {
  ar: {translation: ar},
  en: {translation: en},
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: appLang,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
