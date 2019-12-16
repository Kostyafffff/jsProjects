import { connect } from 'react-redux';
import { IStore } from '../../redux/store/types';
import { Component } from '../item-add-form/component';
import { addToDo } from "../../redux/action-creators/action-creators";

export const mapStateToProps = (store: IStore) => ({

});

export const mapDispatchToProps = {
    addToDo,
};

export const App = connect(mapStateToProps, mapDispatchToProps)(Component);