import { createAction, props } from "@ngrx/store";

export const getSecuritylogs = createAction('[Security logs Page] Get Security logs Page');

export const getSecuritylogsSuccess = createAction(
    '[Organization Unit Page] Get Organization Unit Tree Success',
    props<{ logs: any }>()
);

export const getSecuritylogsFailure = createAction(
    '[Organization Unit Page] Get Organization Unit Tree Failure',
    props<{ error: string }>()
);