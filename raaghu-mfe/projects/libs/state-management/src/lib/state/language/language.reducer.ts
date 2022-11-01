import { createReducer, on } from "@ngrx/store";
import { getCountryList, getCountryListFailure, getCountryListSuccess, getLanguageFailure, getLanguages, getLanguageSuccess, setDefaultLanguage, setDefaultLanguageForUI } from "./language.actions";
import { Countries, Language } from "./language.models";

export interface LanguagesState {
    languages: any;
    countries: any;
    defaultLanguage: any;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const languageInitialState: LanguagesState = {
    languages: null,
    countries: null,
    defaultLanguage: null,
    error: null,
    status: 'pending',
};


export const LanguageReducer = createReducer(
    // Supply the initial state
    languageInitialState,
    on(getLanguages, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getLanguageSuccess, (state, { languages }) => ({
        ...state,
        languages: languages,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getLanguageFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
    on(getCountryList, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getCountryListSuccess, (state, { countries }) => ({
        ...state,
        countries: countries,
        error: null,
        status: 'success',
    })),
    on(getCountryListFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
    on(setDefaultLanguageForUI, (state, { name }) => ({
        ...state,
        defaultLanguage: name,
    }))
)


