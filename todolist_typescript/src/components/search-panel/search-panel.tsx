import * as React from 'react';
import { Component } from 'react';
import { IPropsSearchPanel } from './types-search-panel';
export class SearchPanel extends Component<IPropsSearchPanel> {

    state = {
        term: ''
    };

    onSearchChange = (event: MouseEvent): void => {
        const term: string = event.target.value;
        this.setState(term);
        this.props.onSearchChange(term);
    };

    render(): JSX.Element {
        return (
            <div className="form-control-wrapper">
                <div className="flex-search-element">
                    <input type="text" className="form-control search input"
                           placeholder="search"
                           value={this.state.term}
                           onChange={this.onSearchChange}/>
                </div>
            </div>
        )
    }
}