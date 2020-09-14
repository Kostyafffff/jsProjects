import React from "react";
import { Tab } from "../App/common-tab/Tabs";

export class  Header extends React.Component {


    render() {
        return(
                <div className="header-wrapper">
                    <Tab tabName={'Tab1'} />
                    <Tab tabName={'Tab2'} />
                    <Tab tabName={'Tab3'} />
                </div>
        )
    }
}