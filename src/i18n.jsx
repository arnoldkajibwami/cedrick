import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";

const fallbackLng = ["en"];

i18n
  // .use(Backend) // used to load data from othe directory
  .use(LanguageDetector) // detects the current language
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    debug: true,
    fallbackLng: "en", // default language
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: {
          keywords: {
            Accueil: "Home"
          }
        }
      },
      fr: {
        translation: {
          keywords: {
            Accueil: "Accueil"
          }
        }
      }
    },
    // detection: {
    //   checkWhitelist: true,
    // },
    backend: {
      loadPath: "../public/local/{{lng}}/translate.json",
    },
  });

export default i18n;