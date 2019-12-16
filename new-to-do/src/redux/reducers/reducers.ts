import { IStore } from '../store/types';
import { Reducer } from "redux";
import { initialStore } from '../store/store';
import * as actions from '../actions/constants';
import {IAction, IActionBase} from "../action-creators/types";

import uuid from 'uuid/v4';

export const reducer: Reducer<IStore, IActionBase> = (store = initialStore, action) => {
    switch (action.type) {
        case actions.SET_SEARCH_VALUE:
            return onSetSearchValue(store, action as IAction<string>);

        case actions.SET_ADD_FIELD_VALUE:
            return onSetAddFieldValue(store, action as IAction<string>);

        case  actions.ADD_TODO_ITEM:
            return onAddItem(store, action as IAction<string>);

        default:
            return store;
    }
};

export const onSetSearchValue = (store: IStore, action: IAction<string>): IStore => ({
    ...store,
    searchField: action.payload,
});

export const onSetAddFieldValue = (store: IStore, action: IAction<string>): IStore => ({
    ...store,
    addField: action.payload,
});

export const onAddItem = (store: IStore, action: IAction<string>): IStore => ({
    ...store,
    todoList : [...store.todoList, {
        label: action.payload,
        important: false,
        done: false,
        id: uuid(),
    }]
});