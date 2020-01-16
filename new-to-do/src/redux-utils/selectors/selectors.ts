import { IStore } from '../store/types';
export const getSearchValue = (store: IStore) => store.searchField;

export const getAddItemValue = (store: IStore) => store.addField;

export const getFilterValue = (store: IStore) => store.filterBy;

export const getToDoList = (store: IStore) => store.todoList;

export const getDoneCount = (store: IStore) => store.todoList.filter(element => element.done).length;

export const getToDoCount = (store: IStore) => store.todoList.length - getDoneCount(store);