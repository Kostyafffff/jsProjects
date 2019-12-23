import { IStore } from 'redux/store/types';
import { connect } from 'react-redux';
import { ItemStatusFilter as Component } from './component';
import { setFilter } from 'redux/action-creators/action-creators';
import { getFilterValue } from 'redux/selectors/selectors';

export const mapStateToProps = (store: IStore) =>({
    filter: getFilterValue(store)
});

export const mapDispatchToProps = {
    onFilterChange: setFilter,
};

export const ItemStatusFilter = connect(mapStateToProps, mapDispatchToProps)(Component);