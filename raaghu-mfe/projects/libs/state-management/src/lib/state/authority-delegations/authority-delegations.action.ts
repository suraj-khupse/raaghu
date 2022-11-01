// import { CreateUserDelegationDto, DelegatedImpersonateInput, FindUsersInput, PagedResultDtoOfUserDelegationDto } from "@libs/shared";
import { createAction, props } from "@ngrx/store";
import { Delegation, UserNames } from "./authority-delegations.model";

export const getDelegations = createAction('[User Authority Delegations] Get Delegations');
export const getDelegationsSuccess = createAction(
  '[User Authority Delegations] Get User Authority Delegations Success',
  props<{ Delegation: any }>()
);
export const getDelegationsFailure = createAction(
  '[User Authority Delegations] Get User Authority Delegations Failure',
  props<{ error: string }>()
);
export const deleteDelegations = createAction(
  '[User Authority Delegations] Delete User Authority Delegations',
  (id: number) => ({ id })
);
export const saveDelegations = createAction(
  '[User Authority Delegations] Save Delegations',
  (Delegation: any) => ({ Delegation })
);
export const getUsername = createAction(
  '[[User Authority Delegations] Get User names',
  (usernameFilter: any) => ({ usernameFilter })
);

export const getUsernameSuccess = createAction(
  '[User Authority Delegations] get Username Success',
  props<{ usernames: UserNames }>()
);

export const getUsernameFailure = createAction(
  '[User Authority Delegations] getUsername Failure',
  props<{ error: string }>()
);