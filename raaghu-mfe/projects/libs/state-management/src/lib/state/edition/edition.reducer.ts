import { createReducer, on } from "@ngrx/store";
import { deleteEdition, deleteEditionFailure, deleteEditionSuccess, getEditionFailure, getEditionFeature, getEditionFeatureFailure, getEditionFeatureSuccess, getEditionInfo, getEditionInfoFailure, getEditionInfoSuccess,    getEditions, getEditionSuccess,  getPlanLookupFailure, getplanLookupInfo, getPlanLookupSuccess, saveEdition, saveEditionFailure, saveEditionSuccess, updateEdition, updateEditionFailure, updateEditionFeatureValues, updateEditionFeatureValuesSuccess, updateEditionSuccess } from "./edition.action";
import { Edition, EditionItem } from "./edition.model";


export interface EditionsState {
    editions: any,
    editionInfo: any,
    error: string;
    planLookup:any;
    feature:any;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const editionInitialState: EditionsState = {
    editions: null,
    editionInfo: null,
    error: null,
    feature:null,
    planLookup:null,
    status: 'pending',
};

export const EditionReducer = createReducer(
    editionInitialState,
    on(getEditions, (state) => ({ ...state, status: 'loading' })),
    on(getEditionSuccess, (state, { editions }) => ({
        ...state,
        editions: editions.items,
        error: null,
        status: 'success',
    })),
    on(getEditionFailure, (state, { error }) => ({
      ...state,
      error: error,
      status: 'success',
    })),

    on(getplanLookupInfo, (state) => ({ ...state, status: 'loading' })),
    on(getPlanLookupSuccess, (state, { planLookup }) => ({
        ...state,
        planLookup: planLookup,
        error: null,
        status: 'success',
    })),
    on(getPlanLookupFailure, (state, { error }) => ({
      ...state,
      error: error,
      status: 'success',
    })),

    on(getEditionInfo, (state) => ({ ...state, status: 'loading' })),
    on(getEditionInfoSuccess, (state, { editionInfo }) => ({
        ...state,
        editionInfo: editionInfo,
        error: null,
        status: 'success',
    })),
    on(getEditionInfoFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),

    on(getEditionFeature, (state) => ({ ...state, status: 'loading' })),
    on(getEditionFeatureSuccess, (state, { feature }) => ({
        ...state,
        feature: feature,
        error: null,
        status: 'success',
    })),
    on(getEditionFeatureFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),

    on(updateEditionFeatureValues, (state) => ({ ...state, status: 'loading' })),

    on(updateEditionFeatureValuesSuccess, (state) => ({
        ...state,
        error: null,
        status: 'success',
    })),

    on(updateEdition, (state) => ({ ...state, status: 'loading' })),
    on(updateEditionSuccess, (state) => ({
        ...state,
        error: null,
        status: 'success',
    })),
    on(updateEditionFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),

    on(saveEdition, (state) => ({ ...state, status: 'loading' })),
    on(saveEditionSuccess, (state) => ({
        ...state,
        error: null,
        status: 'success',
    })),
    on(saveEditionFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),

    on(deleteEdition, (state) => ({ ...state, status: 'loading' })),
    on(deleteEditionSuccess, (state) => ({
        ...state,
        error: null,
        status: 'success',
    })),
    on(deleteEditionFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),

)