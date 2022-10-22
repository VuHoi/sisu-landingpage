import { RootState } from "@config/reduxStore";
import { createSelector } from "@reduxjs/toolkit";

import { OverviewState } from "./example.slice";

const selector = (state: RootState): OverviewState => state.exampleReducer;

export const userSelector = createSelector(selector, ({ user }) => user);
