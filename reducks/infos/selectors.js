import { createSelector } from "reselect";

const infosSelector = (state) => state.infos;

export const getOrdersHistory = createSelector(
    [infosSelector],
);