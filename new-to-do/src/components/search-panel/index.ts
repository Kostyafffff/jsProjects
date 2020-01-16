import {IStore} from 'redux-utils/store/types';
import { setSearchValue } from 'redux-utils/action-creators/action-creators';
import { connect } from 'react-redux';
import { SearchPanel as Component } from './component';
import { getSearchValue } from 'redux-utils/selectors/selectors';

export const mapStateToProps = (store : IStore) => ({
    fieldValue: getSearchValue(store),
});

export const mapDispatchToProps = {
    setSearchValue,
};

export const SearchPanel = connect(mapStateToProps, mapDispatchToProps)(Component);