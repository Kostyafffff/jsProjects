import { IStore } from "../../redux/store/types";
import {getDoneCount, getToDoCount} from "../../redux/selectors/selectors";
import { connect } from "react-redux";
import { AppHeader as Component } from "./component";

export const mapStateToProps = (store: IStore) => ({
    toDo: getToDoCount(store),
    done: getDoneCount(store),
});

export const AppHeader = connect(mapStateToProps)(Component);