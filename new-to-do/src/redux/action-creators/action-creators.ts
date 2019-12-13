import { IAction } from "./types";
import * as actions from '../actions/constants';

export const setSearchValue = (value: string): IAction<string> => ({
    type: actions.SET_SEARCH_VALUE,
    payload: value,
});

export const setAddFieldValue = (value: string): IAction<string> => ({
    type: actions.SET_ADD_FIELD_VALUE,
    payload: value,
});