import { connect } from 'react-redux';
import { IStore } from '../../redux/store/types';
import { App as Component } from './component';
import { addToDo } from '../../redux/action-creators/action-creators';
import {getFilterValue, getToDoList} from '../../redux/selectors/selectors';

export const mapStateToProps = (store: IStore) => ({
    toDoData: getToDoList(store),
    filter: getFilterValue(store)
});

export const mapDispatchToProps = {
    addToDo,
};

export const App = connect(mapStateToProps, mapDispatchToProps)(Component);