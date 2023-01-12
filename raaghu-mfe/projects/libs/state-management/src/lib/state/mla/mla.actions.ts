import { LinkToUserInput, ListResultDtoOfLinkedUserDto, ListResultDtoOfOrganizationUnitDto, PagedResultDtoOfOrganizationUnitRoleListDto, PagedResultDtoOfOrganizationUnitUserListDto, UnlinkUserInput } from "@libs/shared";
import { createAction, props } from "@ngrx/store";
import { GetNotificationsOutput, UpdateNotificationSettingsInput,ImpersonateOutput } from "projects/libs/shared/src/lib/service-proxies";

export const getMLATenancyData = createAction('[MLA Page] Get MLA Tenancy data');

export const getMLATenancyDataSuccess = createAction(
    '[MLA Page] Get MLA Tenancy data Success',
    props<{ tenancyData: any }>()
);

export const getMLATenancyDataFailure = createAction(
    '[MLA Page] Get MLA Tenancy data Failure',
    props<{ error: string }>()
);

export const deleteAccount = createAction(
    '[MLA Page] Delete Account',
    (user: UnlinkUserInput) => ({ user })
);

export const linkToUser = createAction(
    '[MLA Page] Link to User',
    (user: LinkToUserInput) => ({ user })
);

export const getUserNotification = createAction('[MLA Page Page] Get Notification');

export const getUserNotificationSuccess = createAction(
    '[MLA Page] Get Notification Success',
    props<{ getNotificaitonsOutput }>()
);

export const getUserNotificationFailure = createAction(
    '[MLA Page] Get Notifications Failure',
    props<{ error: string }>()
);


export const SetAllNotificationsAsRead = createAction('[MLA Page] Set All Notification Read');


export const SetNotificationRead = createAction('[MLA Page] Set Notification Read',
    (user) => (user));

export const getNotificationSettings = createAction('[MLA Page] Get Notification Settings');

export const getNotificationSettingsSuccess = createAction(
    '[MLA Page] Get  Notification Settings Success',
    props<{ notificationSettings: any }>()
);

export const getNotificationSettingsFailure = createAction(
    '[MLA Page] Get  Notification Settings Failure',
    props<{ error: string }>()
);

export const updateNotificationSettings = createAction(
    '[MLA Page] update notification settings',
    (data: UpdateNotificationSettingsInput) => ({ data })
);

export const backToImpersonator = createAction('[MLA Page] Back To Impersonator to Account',);

export const backToImpersonatorSuccess = createAction(
    '[MLA Page] Back To Impersonator to Account Success',
    props<{ tokenResult: ImpersonateOutput }>()
);

export const backToImpersonatorFailure = createAction(
    '[MLA Page] Back To Impersonator to Account Failure',
    props<{ error: string }>()
);

