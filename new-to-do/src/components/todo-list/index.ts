import { IStore } from "../../redux-utils/store/types";
import { connect } from "react-redux";
import { deleteItem, toggleDone, toggleImportant } from 'redux-utils/action-creators/action-creators';
import { getFilterValue, getSearchValue, getToDoList}  from '../../redux-utils/selectors/selectors';
import { TodoList as Component } from "./component";

export const mapStateToProps = (store: IStore) => ({
    todoList: getToDoList(store),
    searchValue: getSearchValue(store),
    filterValue: getFilterValue(store),
});

export const mapDispatchToProps = {
    onToggleImportant: toggleImportant,
    onToggleDone: toggleDone,
    onDeleted: deleteItem
};

export const TodoList = connect(mapStateToProps, mapDispatchToProps)(Component);