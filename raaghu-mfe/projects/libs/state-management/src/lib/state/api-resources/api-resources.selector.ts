import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.interface';
import { ApiResourcesState } from './api-resources.reducer';

export const selectApiResources = (state: AppState) => state.apiResources;

export const selectAllApiResource = createSelector(
    selectApiResources,
    (state: ApiResourcesState) => state.allApiResources
);
export const selectApiResource = createSelector(
    selectApiResources,
    (state: ApiResourcesState) => state.apiResource
);
