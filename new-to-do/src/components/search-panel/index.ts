// import { SearchPanel } from './component';
import {IStore} from "../../redux/store/types";
import { setSearchValue } from '../../redux/action-creators/action-creators';
import {connect} from "react-redux";
import {SearchPanel} from "./component";

export const mapStateToProps = (store : IStore) => ({
    fieldValue: store.searchField,
});

export const mapDispatchToProps = {
    setSearchValue: setSearchValue,
};

const ConnectedSearchPanel = connect(mapStateToProps, mapDispatchToProps)(SearchPanel);