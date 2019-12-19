import { IStore } from "../../redux/store/types";
import { connect } from "react-redux";
import {deleteItem, toggleDone, toggleImportant} from "redux/action-creators/action-creators";
import { getToDoList } from "../../redux/selectors/selectors";
import { TodoList as Component } from "./component";

export const mapStateToProps = (store: IStore) => ({
    todoList: getToDoList(store),
});

export const mapDispatchToProps = {
    onToggleImportant: toggleImportant,
    onToggleDone: toggleDone,
    onDeleted: deleteItem
};

export const TodoList = connect(mapStateToProps, mapDispatchToProps)(Component);