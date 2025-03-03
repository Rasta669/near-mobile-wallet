import { DefaultNamespace, useTranslation, UseTranslationOptions, UseTranslationResponse } from "react-i18next";
import { KeyPrefix, Namespace } from "i18next";

export function useTranslate<N extends Namespace = DefaultNamespace, TKPrefix extends KeyPrefix<N> = undefined>(
    ns?: N | Readonly<N>,
    options?: UseTranslationOptions<TKPrefix>,
): UseTranslationResponse<N, TKPrefix>["t"] {
    return useTranslation<N, TKPrefix>(ns, options).t;
}
