import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.interface';
import { TextTemplateState } from './text-template.reducer';


export const selectApiResources = (state: AppState) => state.textTemplate;

export const selecAllTextTemplate = createSelector(
    selectApiResources,
    (state: TextTemplateState) => state.allTextTemplate
);
export const selectTextContent = createSelector(
    selectApiResources,
    (state: TextTemplateState) => state.templateContent
);
