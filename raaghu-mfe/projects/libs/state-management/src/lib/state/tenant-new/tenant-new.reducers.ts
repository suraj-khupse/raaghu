import { createReducer, on } from '@ngrx/store';

export interface SampleState {
    // Your models will go here
}

const initialState: SampleState = {
    samples: [],
    selectedSample: null,
};

export const sampleReducer = createReducer(initialState);
