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
  (data) => (data)
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
  (id: any) => (id)
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

export const getTwoFactor = createAction(
  '[Profile settings] Get Profile settings page'
);

export const getTwoFactorSuccess = createAction(
  '[Profile settings] Get Profile settings page Success',
  props<{ twoFactor: any }>()
);

export const getTwoFactorFailure = createAction(
  '[Profile settings] Get Profile settings page Failure',
  props<{ error: string }>()
);



export const saveTwoFactor = createAction(
  '[Profile settings] Save Profile settings page',
  (id: any) => (id)
);

export const saveTwoFactorSuccess = createAction(
  '[Profile settings] Save Profile settings page Success',
);

export const saveTwoFactorFailure = createAction(
  '[Profile settings] Save Profile settings page Failure',
  props<{ error: string }>()
);


export const saveProfilePicture = createAction(
  '[Profile settings] Save Profile settings page',
  (data) => (data)
);

export const saveProfilePictureSuccess = createAction(
  '[Profile settings] Save Profile settings page Success',
);

export const saveProfilePictureFailure = createAction(
  '[Profile settings] Save Profile settings page Failure',
  props<{ error: string }>()
);


export const getPersonalData = createAction(
  '[Profile settings] Get Personal Data Page',
  (id: any) => ({ id })
);

export const getPersonalDataSuccess = createAction(
  '[Profile settings] Get Personal Data Page Success',
  props<{ personalData: any }>()
);

export const getPersonalDataFailure = createAction(
  '[Profile settings] Get Personal Data Page Failure',
  props<{ error: string }>()
);

export const getLinkUserData = createAction(
  '[Profile settings] Get Link User Data Page'
);

export const getLinkUserDataSuccess = createAction(
  '[Profile settings] Get Link User Data Page Success',
  props<{ user: any }>()
);

export const getLinkUserDataFailure = createAction(
  '[Profile settings] Get Link User Data Page Failure',
  props<{ error: string }>()
);
