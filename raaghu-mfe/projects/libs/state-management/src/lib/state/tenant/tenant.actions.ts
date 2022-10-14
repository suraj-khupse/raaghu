import { createAction, props } from "@ngrx/store";
import { CreateTenantInput, TenantEditDto, UpdateTenantFeaturesInput } from "projects/libs/shared/src/lib/service-proxies";
import { Tenants } from "./tenant.models";

export const getTenants = createAction('[Tenant Page] Get Tenants',
);

export const getTenantSuccess = createAction(
    '[Tenant Page] Get Tenants Success',
    props<{ tenants: any }>()
);

export const getTenantFailure = createAction(
    '[Tenant Page] Get Tenants Failure',
    props<{ error: string }>()
);

export const deleteTenant = createAction(
    '[Tenant Page] Delete Tenant',
    (id: number,maxresult:number) => ({ id ,maxresult})
);

export const saveTenant = createAction(
    '[Tenant Page] Save Tenant',
    (tenant: CreateTenantInput,maxresult:number) => ({ tenant,maxresult })
);

export const updateTenantFeatureValues = createAction(
    '[Tenant Page] Update Tenant Feature Values',
    (feature: UpdateTenantFeaturesInput) => ({ feature })
);

export const updateTenant = createAction(
    '[Tenant Page] Update Tenant',
    (tenant: TenantEditDto) => ({ tenant })
);


export const getEditionComboboxItems = createAction('[Tenant Page] Get Edition Combobox Items');

export const getEditionComboboxItemsSuccess = createAction(
    '[Tenant Page] Get Edition Combobox Items Success',
    props<{ editionComboboxItem: any }>()
);

export const getEditionComboboxItemsFailure = createAction(
    '[Tenant Page] Get Edition Combobox Items Failure',
    props<{ error: string }>()
);
export const getTenantForEdit = createAction('[Tenant Page] Get Tenant For Edit', (id: number | undefined) => ({ id }));

export const getTenantForEditSuccess = createAction(
    '[Tenant Page] Get Tenant For Edit Success',
    props<{ tenantInfo: any }>()
);

export const getTenantForEditFailure = createAction(
    '[Tenant Page] Get Tenant For Edit Failure',
    props<{ error: string }>()
);

export const getTenantFeaturesForEdit = createAction('[Tenant Page] Get Tenant Features For Edit', (id: number | undefined) => ({ id }));

export const getTenantFeaturesForEditSuccess = createAction(
    '[Tenant Page] Get Tenant Features For Edit Success',
    props<{ tenantFeature: any }>()
);

export const getTenantFeaturesForEditFailure = createAction(
    '[Tenant Page] Get Tenant Features For Edit Failure',
    props<{ error: string }>()
);

