import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.interface';
import { ScopeState } from './api-scope.reducer';


export const selectScope = (state: AppState) => state.apiScope;
// export const selectDynamicEntity = (state: AppState) => state.dynamicEntity;

export const selectAllScope = createSelector(
    selectScope,
    (state: ScopeState) => state.allScope
);

export const selectApiScope = createSelector(
    selectScope,
    (state: ScopeState) => state.apiScope
);

export const selectClaimTypesAll = createSelector(
    selectScope,
    (state: ScopeState) => state.claims
)
