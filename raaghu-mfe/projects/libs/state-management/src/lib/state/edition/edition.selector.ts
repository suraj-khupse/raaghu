import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.interface';
import { EditionsState } from './edition.reducer';

export const editionSelector = (state: AppState) => state.editions;
export const selectAllEditions = createSelector(
    editionSelector,
    (state: EditionsState) => state.editions
);
export const selectEditionInfo = createSelector(
    editionSelector,
    (state: EditionsState) => state.editionInfo
);

export const selectEditionPageComboboxItems = createSelector(
  editionSelector,
  (state: EditionsState) => state.editionComboboxItem
);

export const selectTenant = createSelector(
  editionSelector,
  (state: EditionsState) => state.tenantCount
);
