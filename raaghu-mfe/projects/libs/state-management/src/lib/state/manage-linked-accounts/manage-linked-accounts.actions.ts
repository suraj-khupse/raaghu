import { createAction, props } from "@ngrx/store";
import { ManageLinkedAccounts ,ManageLinkedAccountsItem} from "./manage-linked-accounts.models";

export const getManageLinkedAccounts = createAction('[ManageLinkedAccounts Page] Get ManageLinkedAccounts');

export const getManageLinkedAccountsSuccess = createAction(
    '[ManageLinkedAccounts Page] Get ManageLinkedAccounts Success',
    props<{ linkedAccounts: any }>()
);

export const getManageLinkedAccountsFailure = createAction(
    '[ManageLinkedAccounts Page] Get ManageLinkedAccounts Failure',
    props<{ error: string }>()
);

export const linkAccount = createAction(
    '[ManageLinkedAccounts Page] Link user',
    (body)=> (body)
)
export const linkAccountSuccess = createAction(
    '[ManageLinkedAccounts Page] Link user',
)

export const unLinkaccount = createAction('[ManageLinkedAccounts Page] Delete Link Account',
(user: any) => ({ user }));

export const unLinkAccountSuccess = createAction(
    '[ManageLinkedAccounts Page] UnLink Account Success',
);

export const generateLinkToken = createAction('[ManageLinkedAccounts Page] Generate Link Token',
);

export const generateLinkTokenSuccess = createAction(
    '[ManageLinkedAccounts Page] Generate Link Token Success',
);