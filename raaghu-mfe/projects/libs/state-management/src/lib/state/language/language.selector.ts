import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../app.interface';
import { LanguagesState } from './language.reducer';

export const selectLanguages = (state: AppState) => state.languages;

// export const selectAllCountries = createSelector(
//     featureSelector,
//     (state: AppState) => state.countries
// );
export const selectAllLanguages = createSelector(
    selectLanguages,
    (state: LanguagesState) => state.languages
);
//export const selectLanguage = (state: AppState) => state.languages;
// export const selectAllLanguages = createSelector(
//     selectLanguage,
//     (state: LanguagesState) => state.languages
// );

// export const selectCountry = (state: AppState) => state.countries;
// export const selectAllCountries = createSelector(
//     selectCountry,
//     (state: CountryState) => state.countries
// );

// export const selectDefault = (state: AppState) => state.defaultLanguage;
// export const selectDefaultLanguage = createSelector(
//     selectDefault,
//     (state: DefaultLanguageState) => state.defaultLanguage
// );