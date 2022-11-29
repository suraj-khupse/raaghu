import { createAction, props } from '@ngrx/store';

export const getProfilepic = createAction('[ Profile picture ] Get Profile');

export const getProfileSuccess = createAction(
  '[Profile picture] Get Profilepicture Success',
  props<{ profile: any  }>()
);

export const getProfileFailure = createAction(
  '[Profile picture] Get Profilepicture Failure',
   props<{ error: string }>()
  );

export const updateProfile = createAction(
  '[ Profile picture ] Update Profile',
    (data) => (data)
  );

export const updateProfileSuccess = createAction(
  '[Profile picture] Get Profilepicture Success',
  props<{ profile: any  }>()
);

export const updateProfileFailure = createAction(
  '[Profile picture] Get Profilepicture Failure',
   props<{ error: string }>()
  );
