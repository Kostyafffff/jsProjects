import { IStore } from 'redux-utils/store/types';
import { connect } from 'react-redux';
import { ItemStatusFilter as Component } from './component';
import { setFilter } from 'redux-utils/action-creators/action-creators';
import { getFilterValue } from 'redux-utils/selectors/selectors';

export const mapStateToProps = (store: IStore) =>({
    filter: getFilterValue(store),
});

export const mapDispatchToProps = {
    onFilterChange: setFilter,
};

export const ItemStatusFilter = connect(mapStateToProps, mapDispatchToProps)(Component);