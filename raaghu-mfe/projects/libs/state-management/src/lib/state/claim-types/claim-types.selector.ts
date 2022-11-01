import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.interface';
import { ClaimTypesState } from './claim-types.reducer';

export const selectClaimTypes = (state: AppState) => state.claimTypes;
// export const selectDynamicEntity = (state: AppState) => state.dynamicEntity;

export const selectAllClaimTypes = createSelector(
    selectClaimTypes,
    (state: ClaimTypesState) => state.allClaimTypes
);