import {IStore} from 'redux/store/types';
import { setSearchValue } from 'redux/action-creators/action-creators';
import { connect } from 'react-redux';
import { SearchPanel as Component } from './component';
import { getSearchValue } from 'redux/selectors/selectors';

export const mapStateToProps = (store : IStore) => ({
    fieldValue: getSearchValue(store),
});

export const mapDispatchToProps = {
    setSearchValue,
};

export const SearchPanel = connect(mapStateToProps, mapDispatchToProps)(Component);