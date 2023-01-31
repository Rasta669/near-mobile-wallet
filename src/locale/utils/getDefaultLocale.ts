import * as Localization from "expo-localization";
import { LocaleType } from "locale";

export function getDefaultLocale(): LocaleType {
    const locales: LocaleType[] = ["en", "es"];
    const systemLocaleEnd = Localization.locale.slice(-2).toLowerCase();
    const systemLocaleStart = Localization.locale.slice(0, 2).toLowerCase();
    return locales.find((l) => systemLocaleStart === l || systemLocaleEnd === l) ?? "en";
}
