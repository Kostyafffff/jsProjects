import React from "react";
import {Tab} from "../App/common-tab/Tabs";
import {Tabs} from "../App/common-tab/types";

export class  Header extends React.Component {


    render() {
        return(
                <div className="header-wrapper">
                    <Tab tabs={Tabs.CURRENCIES}  />
                    <Tab tabs={Tabs.HISTORY} />
                    <Tab tabs={Tabs.LATEST} />
                </div>
        )
    }
}