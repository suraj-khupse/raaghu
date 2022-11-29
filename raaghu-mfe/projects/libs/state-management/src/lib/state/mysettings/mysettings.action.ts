import { ChangePasswordInput } from "@libs/shared";
import { createAction, props } from "@ngrx/store";
import { Profile } from "./mysettings.models";

export const getProfile = createAction('[My Settings Page] Get Profile');

export const getProfileSuccess = createAction(
    '[My Settings Page] Get Profile Success',
    props<{ profile: any }>()
);

export const getProfileFailure = createAction(
    '[My Settings Page] Get Profile Failure',
    props<{ error: string }>()
);

export const changePassword = createAction(
    '[My Seetings Page] Change Password',
    (passwordInfo:ChangePasswordInput) => ({ passwordInfo })
);