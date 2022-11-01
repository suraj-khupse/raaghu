import { createAction, props } from "@ngrx/store";
//import { CreateOrUpdateLanguageInput } from "projects/libs/shared/src/lib/service-proxies";
import { Countries, Language, PostLanguage } from "./language.models";

export const getLanguages = createAction('[Language Page] Get Languages');


export const getLanguageSuccess = createAction(
    '[Language Page] Get Languages Success',
    props<{ languages: any }>()
);

export const getLanguageFailure = createAction(
    '[Language Page] Get Languages Failure',
    props<{ error: string }>()
);

export const getCountryList = createAction('[Language Page] Get Country List');

export const getCountryListSuccess = createAction(
    '[Language Page] Get Coutry List Success',
    props<{ countries: any }>()
);

export const getCountryListFailure = createAction(
    '[Language Page] Get Country List Failure',
    props<{ error: string }>()
);

export const saveLanguage = createAction(
    '[Language Page] Save Language',
    (language: any) => ({ language })
);

export const deleteLanguage = createAction(
    '[Language Page] Delete Language',
    (id: any) => ({ id })
);

export const saveLanguageSuccess = createAction(
    '[Language Page] Save Language Success', props<{ language: PostLanguage }>()
);

export const setDefaultLanguage = createAction(
    '[Language Page] Set Default Language',
    (name: any) => ({ name })
);

export const setDefaultLanguageForUI = createAction(
    '[Language Page] Set Default Language For UI',
    (name: string) => ({ name })
);

// export const setDefaultLanguageForUISuccess = createAction(
//     '[Language Page] Set Default Language For UI Success',
//     (name: string) => ({ name })
// );