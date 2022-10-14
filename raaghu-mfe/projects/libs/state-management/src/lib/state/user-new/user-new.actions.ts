import { createAction, props } from '@ngrx/store';

export const get = createAction(
  '[Component Name] Get'
);

export const getSuccess = createAction(
  '[Componnet Name] GetSuccess',

);

export const getError = createAction('[Componnet Name] GetError');

