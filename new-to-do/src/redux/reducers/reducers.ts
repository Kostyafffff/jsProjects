import { FILTER, IStore, IStoreTodoListItem } from '../store/types';
import { Reducer } from "redux";
import { initialStore } from '../store/store';
import * as actions from '../actions/constants';
import { IAction, IActionBase } from '../action-creators/types';

import uuid from 'uuid/v4';

export const reducer: Reducer<IStore, IActionBase> = (store = initialStore, action) => {
    switch (action.type) {
        case actions.SET_SEARCH_VALUE:
            return onSetSearchValue(store, action as IAction<string>);

        case actions.SET_ADD_FIELD_VALUE:
            return onSetAddFieldValue(store, action as IAction<string>);

        case  actions.ADD_TODO_ITEM:
            return onAddItem(store, action as IAction<string>);

        case actions.TOGGLE_IMPORTANT_ITEM:
            return onToggleImportant(store, action as IAction<string>);

        case actions.TOGGLE_DONE_ITEM:
            return onToggleDone(store, action as IAction<string>);

        case actions.DELETE_TODO_ITEM:
            return onDeleteToDoItem(store, action as IAction<string>);

        case actions.SET_FILTER_VALUE:
            return setFilter(store, action as IAction<FILTER>);
        default:
            return store;
    }
};

export const setFilter = (store: IStore, action: IAction<FILTER>): IStore => ({
    ...store,
    filterBy: action.payload
});

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

export const onDeleteToDoItem = (store: IStore, action: IAction<string>): IStore => ({
    ...store,
    todoList: store.todoList.filter(it => it.id !== action.payload),
});

const toggleProperty = (
    arr: IStoreTodoListItem[],
    id: string,
    propName: string,
): IStoreTodoListItem[] => arr.map(element => {
    if (element.id === id) {
        return {
            ...element,
            [propName]: !element[propName],
        };
    }

    return { ...element };
});

export const onToggleImportant = (store: IStore, action: IAction<string>): IStore => ({
    ...store,
    todoList: toggleProperty(store.todoList, action.payload, 'important'),
});

export const onToggleDone = (store: IStore, action: IAction<string>): IStore => ({
    ...store,
    todoList: toggleProperty(store.todoList, action.payload, 'done'),
});
