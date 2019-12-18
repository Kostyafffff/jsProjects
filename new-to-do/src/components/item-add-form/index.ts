import { IStore } from '../../redux/store/types';
import {addToDo, setAddFieldValue} from '../../redux/action-creators/action-creators';
import { connect } from 'react-redux';
import { Component } from './component';
import { getAddItemValue } from "../../redux/selectors/selectors";

export const mapStateToProps = (store: IStore) =>({
    fieldValue: getAddItemValue(store)
});

export const mapDispatchToProps = {
    setAddFieldValue: setAddFieldValue,
    addToDo: addToDo
};

export const ItemAddForm = connect(mapStateToProps, mapDispatchToProps)(Component);