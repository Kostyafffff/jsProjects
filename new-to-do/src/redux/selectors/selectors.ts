import { IStore } from '../store/types';

export const getSearchValue = (store: IStore) => store.searchField;

export const getAddItemValue = (store: IStore) => store.addField;