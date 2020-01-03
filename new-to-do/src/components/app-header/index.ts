import { IStore } from "../../redux-utils/store/types";
import {getDoneCount, getToDoCount} from "../../redux-utils/selectors/selectors";
import { connect } from "react-redux";
import { AppHeader as Component } from "./component";

export const mapStateToProps = (store: IStore) => ({
    toDo: getToDoCount(store),
    done: getDoneCount(store),
});

export const AppHeader = connect(mapStateToProps)(Component);