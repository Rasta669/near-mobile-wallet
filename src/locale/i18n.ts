import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { en, es, fr, id, it, ru, uk, pt, vi, zh_CN, zh_TW } from "./locales";

// Polyfill Intl as it is not included in RN (needed for number formatting)
import "intl";
import "intl/locale-data/jsonp/en";
import "intl/locale-data/jsonp/es";
import "intl/locale-data/jsonp/fr";
import "intl/locale-data/jsonp/id";
import "intl/locale-data/jsonp/it";
import "intl/locale-data/jsonp/pt";
import "intl/locale-data/jsonp/ru";
import "intl/locale-data/jsonp/uk";
import "intl/locale-data/jsonp/vi";
import "intl/locale-data/jsonp/zh-Hans-CN";
import "intl/locale-data/jsonp/zh-Hant-TW";

import LanguageDetectorPlugin from "./pluguins/LanguageDetectorPlugin/LanguageDetectorPlugin";

export const defaultNS = "translation";

export const resources = { en, es, fr, id, it, pt, ru, uk, vi, ["zh-CN"]: zh_CN, ["zh-TW"]: zh_TW } as const;

i18next
    .use(initReactI18next)
    .use(LanguageDetectorPlugin)
    .init({
        compatibilityJSON: "v3",
        fallbackLng: "en",
        resources,
        debug: process.env.NODE_ENV === "development",
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
        returnNull: false,
    });

export default i18next;
