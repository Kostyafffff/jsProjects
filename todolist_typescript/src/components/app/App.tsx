import * as React from 'react';
import { Component } from 'react';
import AppHeader from  '../app-header/app-header'

export class App extends Component{
    onAddItem = (text: string): object =>  {
        let x: object = {};

        return x;
    };

    render(): JSX.Element {
        return (
            <div>
                <AppHeader
                    done="done"
                    toDo="toDo"
                />
            </div>
        );
    }
}