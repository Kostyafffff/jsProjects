import { IAction } from './types';
import * as actions from '../actions/constants';

export const setSearchValue = (value: string): IAction<string> => ({
    type: actions.SET_SEARCH_VALUE,
    payload: value,
});

export const setAddFieldValue = (value: string): IAction<string> => ({
    type: actions.SET_ADD_FIELD_VALUE,
    payload: value,
});

export const addToDo = (value: string): IAction<string> => ({
    type: actions.ADD_TODO_ITEM,
    payload: value,
});

export const setFilter = (value: string): IAction<string> => ({
    type: actions.SET_FILTER_VALUE,
    payload: value,
});

export const toggleImportant = (value: string): IAction<string> => ({
    type: actions.TOGGLE_IMPORTANT_ITEM,
    payload: value,
});

export const deleteItem = (value: string): IAction<string> => ({
    type: actions.DELETE_TODO_ITEM,
    payload: value
});

export const toggleDone = (value: string): IAction<string> => ({
    type: actions.TOGGLE_DONE_ITEM,
    payload: value,
});