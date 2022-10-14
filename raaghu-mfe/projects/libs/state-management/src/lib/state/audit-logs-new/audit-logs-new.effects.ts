import { Injectable } from "@angular/core";
import { Actions, createEffect } from "@ngrx/effects";

@Injectable()
export class Effects {
  constructor(
    private actions$: Actions,
    // declare the service here
  ) {}

  // Your code will go here within the pipe
  get$ = createEffect(() =>
    this.actions$.pipe()
  );
}

