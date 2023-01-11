import { createAction, props } from "@ngrx/store";
import { AnyFn } from "@ngrx/store/src/selector";
//import { CreateEditionDto, MoveTenantsToAnotherEditionDto, UpdateEditionDto } from "projects/libs/shared/src/lib/service-proxies";
import { Edition } from "./edition.model";

export const getEditions = createAction('[Edition Page] Get Edition');

export const getEditionSuccess = createAction(
    '[Edition Page] Get Edition Success',
    props<{ editions: any }>()
);

export const getEditionFailure = createAction(
    '[Edition Page] Get Edition Failure',
    props<{ error: string }>()
);

export const getplanLookupInfo = createAction('[Edition Page] Get PlanLookup Info');

export const getPlanLookupSuccess = createAction(
    '[Edition Page] Get PlanLookup Info Success',
    props<{ planLookup: any }>()
);

export const getPlanLookupFailure = createAction(
    '[Edition Page] Get PlanLookup Info Failure',
    props<{ error: string }>()
);

export const getEditionInfo = createAction('[Edition Page] Get Edition Info', (id: any | undefined) => ({ id }));

export const getEditionInfoSuccess = createAction(
    '[Edition Page] Get Edition Info Success',
    props<{ editionInfo: any }>()
);

export const getEditionInfoFailure = createAction(
    '[Edition Page] Get Edition Info Failure',
    props<{ error: string }>()
);
export const getEditionFeature = createAction('[Edition Page] Get Edition Feature', (id: any | undefined) => ({ id }));

export const getEditionFeatureSuccess = createAction(
    '[Edition Page] Get Edition Feature Success',
    props<{ feature: any }>()
);

export const getEditionFeatureFailure = createAction(
    '[Edition Page] Get Edition Feature Failure',
    props<{ error: string }>()
);

export const saveEdition = createAction(
  '[Edition Page] Save Edition',
  (edition: any) => ({ edition })
);
export const saveEditionSuccess = createAction(
  '[Edition Page] Save Edition Success'
);
export const saveEditionFailure = createAction(
  '[Edition Page] Save Edition Failure',
  props<{ error: string }>()
);

export const deleteEdition = createAction(
    '[Edition Page] Delete Edition',
    (id: any) => ({ id })
);

export const deleteEditionSuccess = createAction(
  '[Edition Page] Delete Edition Success',
);

export const deleteEditionFailure = createAction(
  '[Edition Page] Delete Edition Failure',
  props<{ error: string }>()
);

export const updateEdition = createAction(
    '[Edition Page] Update Edition',
    (data: any) => ({ data })
);

export const updateEditionSuccess = createAction(
    '[Edition Page] Edition Update Success',

);
export const updateEditionFailure= createAction(
  '[Edition Page] Edition Update Success',
  props<{ error: any }>()
);

export const updateEditionFeatureValues = createAction(
  '[Edition Page] Update Edition Feature Values',
  (data: any) => ({ data })
);

export const updateEditionFeatureValuesSuccess = createAction(
  '[Edition Page] Edition Feature Update Success',

);



