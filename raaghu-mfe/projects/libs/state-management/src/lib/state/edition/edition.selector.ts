import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../app.interface';
import { EditionsState } from './edition.reducer';

export const selectEditions = (state: AppState) => state.editions;

export const selectAllEditions = createSelector(
  selectEditions,
    (state: EditionsState) => state.editions
);
export const selectEditionInfo = createSelector(
  selectEditions,
    (state: EditionsState) => state.editionInfo
);
export const selectEditionFeatures = createSelector(
  selectEditions,
  (state: EditionsState) => state.feature
);
