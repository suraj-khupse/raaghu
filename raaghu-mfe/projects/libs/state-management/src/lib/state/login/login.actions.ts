//import { CreateOrUpdateRoleInput, IsTenantAvailableInput } from "@libs/shared";
import { createAction, props } from "@ngrx/store";


// export const ValidateTenantName = createAction('[Login Page] Validate Tenant',
//  (tenancyName: IsTenantAvailableInput) => ( {tenancyName} ));

export const ValidateTenantNameSuccess = createAction(
    '[Login Page] Validate Tenant Success',
    props<{ ValidatetenantState: any, tenancyName }>()
);

export const ValidateTenantNameFailure = createAction(
    '[Login Page] Validate Tenant Failure',
    props<{ error: string }>()
);

export const getCurrentLoginInformation = createAction('[Login Page] Get Login Info');

export const getCurrentLoginInformationSuccess = createAction(
    '[Login Page] Get Login Info Success',
    props<{getCurrentLoginInformationResult: any}>()
);

export const getCurrentLoginInformationFailure = createAction(
    '[Login Page] Get Login Info Failure',
    props<{ error: string }>()
);



export const GetProfilePicture = createAction('[Login Page] Get Profile picture');

export const GetProfilePictureSuccess = createAction(
    '[Role Page] Get Profile picture Success',
    props<{ ProfilePictureState: any }>()
);

export const GetProfilePictureFailure = createAction(
    '[Role Page] Get Profile picture Failure',
    props<{ error: string }>()
);



export const GetSubscriptionExpiringData = createAction('[Login Page] Get Subscription Expiring Data');

export const GetSubscriptionExpiringDataSuccess = createAction(
    '[Role Page] Get Subscription Expiring Data Success',
    props<{ GetSubscriptionExpiringDataState: any }>()
);

export const GetSubscriptionExpiringDataFailure = createAction(
    '[Role Page] Get Subscription Expiring Data Failure',
    props<{ error: string }>()
);





