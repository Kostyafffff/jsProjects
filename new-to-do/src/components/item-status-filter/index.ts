import { IStore } from '../../redux/store/types';
import { connect } from 'react-redux';
import { Component } from 'react';
import { setFilter } from '../../redux/action-creators/action-creators';
import { getFilterValue } from '../../redux/selectors/selectors';

export const mapStateToProps = (store: IStore) =>({
    filter: getFilterValue(store)
});

export const mapDispatchToProps = {
    setFilter,
};

export const ItemStatusFilter = connect(mapStateToProps, mapDispatchToProps)(Component);