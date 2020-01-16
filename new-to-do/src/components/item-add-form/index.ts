import { connect } from 'react-redux';
import { IStore } from 'redux-utils/store/types';
import { addToDo, setAddFieldValue } from 'redux-utils/action-creators/action-creators';
import { ItemAddForm as Component } from './component';
import { getAddItemValue } from 'redux-utils/selectors/selectors';

export const mapStateToProps = (store: IStore) =>({
    fieldValue: getAddItemValue(store)
});

export const mapDispatchToProps = {
    setAddFieldValue: setAddFieldValue,
    addToDo: addToDo,
};

export const ItemAddForm = connect(mapStateToProps, mapDispatchToProps)(Component);