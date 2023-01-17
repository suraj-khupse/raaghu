import { createAction, props } from '@ngrx/store';

export const getProfileSettings = createAction(
  '[Profile settings] Get Profile settings'
);

export const getProfileSettingsSuccess = createAction(
  '[Profile settings] Get Profile settings Success',
  props<{ profile: any }>()

);

export const getProfileSettingsError = createAction(
  '[Profile settings] Get Profile settings Error',
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
  '[Profile settings] Save Changed password page',
  (id: any) => (id)
);

export const saveChangedPassWordSuccess = createAction(
  '[Profile settings] Save Changed password page Success',
);

export const saveChangedPassWordFailure = createAction(
  '[Profile settings] Save Changed password page Failure',
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
  '[Profile settings] Save Two Factor',
  (value: any) => (value)
);

export const saveTwoFactorSuccess = createAction(
  '[Profile settings] Save Two Factor Success',
);

export const saveTwoFactorFailure = createAction(
  '[Profile settings] Save Two Factor Failure',
  props<{ error: string }>()
);


export const saveProfilePicture = createAction(
  '[Profile settings] Save Profile Picture',
  (data) => (data)
);

export const saveProfilePictureSuccess = createAction(
  '[Profile settings] Save Profile Picture Success',
);

export const saveProfilePictureFailure = createAction(
  '[Profile settings] Save Profile Picture Failure',
  props<{ error: string }>()
);

export const getProfilePictureData = createAction(
  '[Profile settings] Get Profile Picture',
  (data) => (data)
);

export const getProfilePictureDataSuccess = createAction(
  '[Profile settings] Get Profile Picture Success',
  props<{ profilePicData: any }>()
);

export const getProfilePictureDataFailure = createAction(
  '[Profile settings] Get Profile Picture Failure',
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

export const requestPersonalData = createAction(
  '[Profile settings] Request Personal Data'
);

export const requestPersonalDataSuccess = createAction(
  '[Profile settings] Request Personal Data Success'
);

export const requestPersonalDataFailure = createAction(
  '[Profile settings] Request Personal Data Failure',
  props<{ error: string }>()
);

export const deletePersonalData = createAction(
  '[Profile settings] Delete Personal Data'
);

export const deletePersonalDataSuccess = createAction(
  '[Profile settings] Delete Personal Data Success'
);

export const deletePersonalDataFailure = createAction(
  '[Profile settings] Delete Personal Data Failure',
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

export const downloadData = createAction(
  '[Profile settings] DownloadData Page',
  (data: any) => (data)
);

export const downloadDataSuccess = createAction(
  '[Profile settings] DownloadData Page Success',
  props<{ downloadData: any }>()
);

export const downloadDataFailure = createAction(
  '[Profile settings] DownloadData Page Failure',
  props<{ error: string }>()
);

export const logout = createAction(
  '[Profile settings] Logout Page'
);

export const logoutSuccess = createAction(
  '[Profile settings] Logout Page Success'
);

export const logoutFailure = createAction(
  '[Profile settings] Logout Page Failure',
  props<{ error: string }>()
);
