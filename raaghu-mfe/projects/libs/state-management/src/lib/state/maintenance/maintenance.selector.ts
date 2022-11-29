import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../app.interface';
import { maintenanceState } from './maintenance.reducer'

export const selectmaintenance = (state: AppState) => state.maintenances;
export const selectAllmaintenance = createSelector(
    selectmaintenance,
    (state: maintenanceState) => state.maintenances
);
export const selectAllWebsitelog = createSelector(
    selectmaintenance,
    (state: maintenanceState) => state.Websitelogs
);
