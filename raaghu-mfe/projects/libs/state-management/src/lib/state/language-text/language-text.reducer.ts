import { createReducer, on } from "@ngrx/store";
import { getLanguageTextFailure, getLanguageTexts, getLanguageTextSuccess } from "./language-text.actions";

export interface LanguageTextsState {
    languageText: any;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const languageTextInitialState: LanguageTextsState = {
    languageText: null,
    error: null,
    status: 'pending',
};
export const LanguageTextReducer = createReducer(
    // Supply the initial state 
    languageTextInitialState,
    on(getLanguageTexts, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getLanguageTextSuccess, (state, { languageText }) => ({
        ...state,
        languageText: languageText,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getLanguageTextFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    }))
)