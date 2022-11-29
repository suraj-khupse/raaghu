import { createReducer, on } from '@ngrx/store';
import { getProfileFailure, getProfilepic, getProfileSuccess } from './profile-settings.actions';

export interface ProfilepictureState {
profile: string;
  error : string;
  status : 'pending' | 'loading' | 'error' | 'success';
}

export const profileinitialState: ProfilepictureState = {
    profile: null,
    error : null,
    status: 'pending',
};

export const ProfilePicReducer = createReducer(
    profileinitialState,
    on(getProfilepic, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getProfileSuccess, (state, { profile }) => ({
        ...state,
        profilePicture: profile,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getProfileFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),

)



