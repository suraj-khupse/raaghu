import { createAction, props } from '@ngrx/store';

export const getProfileSettings = createAction(
  '[Profile settings] Get Profile settings'
);

export const getProfileSettingsSuccess = createAction(
  '[Profile settings] Get Profile Success',
  props<{ profile: any }>()

);

export const getProfileSettingsError = createAction(
  '[Profile settings] Get Profile Error',
  props<{ error: string }>()
);

export const saveProfile = createAction(
  '[Profile settings] Save Profile settings page',
  (data) => ( data )
  );

export const saveProfileScopeSuccess = createAction(
  '[Profile settings] Save Profile settings page Success',
);

export const saveProfileScopeFailure = createAction(
  '[Profile settings] Save Profile settings page Failure',
  props<{ error: string }>()
);

export const saveChangedPassWord = createAction(
  '[Profile settings] Save Profile settings page',
  (id:any) => ( id )
  );

export const saveChangedPassWordSuccess = createAction(
  '[Profile settings] Save Profile settings page Success',
);

export const saveChangedPassWordFailure = createAction(
  '[Profile settings] Save Profile settings page Failure',
  props<{ error: string }>()
);

export const savePersonalInfo = createAction(
  '[Profile settings] Save Profile settings page',
  
  );

export const savePersonalInfoSuccess = createAction(
  '[Profile settings] Save Profile settings page Success',
);

export const savePersonalInfoFailure = createAction(
  '[Profile settings] Save Profile settings page Failure',
  props<{ error: string }>()
);

export const saveTwoFactor = createAction(
  '[Profile settings] Save Profile settings page',
  (id:any) => ( id )
  );

export const saveTwoFactorSuccess = createAction(
  '[Profile settings] Save Profile settings page Success',
);

export const saveTwoFactorFailure = createAction(
  '[Profile settings] Save Profile settings page Failure',
  props<{ error: string }>()
);
