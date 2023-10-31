import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enJson from "../json/en.json";

import ruJson from "../json/ru.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enJson,
    },
    ru: {
      translation: ruJson,
    },
  },
  lng: "ru",
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
