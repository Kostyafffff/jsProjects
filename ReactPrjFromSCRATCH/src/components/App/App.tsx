import React from "react";
import {IAppState } from "./types";
import { Component } from "../../simpleComponent/componentTSX";

export class App extends React.Component<Readonly<{}>, IAppState> {

    state: IAppState = {
        id: '1111',
        name: 'Kostya'
    }


    render(): JSX.Element {

        return(
            <div>
                <Component />
                {this.state.name}
                {this.state.id}
            </div>
        )

    }
}