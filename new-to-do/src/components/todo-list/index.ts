import { IStore } from "../../redux/store/types";
import { connect } from "react-redux";
import { onToggleImportant } from "redux/action-creators/action-creators";
import { getToDoList } from "../../redux/selectors/selectors";
import { Component } from "./todo-list/component";


export const mapStateToProps = (store: IStore) => ({
    todoList: getToDoList(store),
});

export const mapDispatchToProps = {
    onToggleImportant
};

export const TodoList = connect(mapStateToProps, mapDispatchToProps)(Component);


