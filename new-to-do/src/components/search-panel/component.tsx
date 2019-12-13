import React from 'react';
import { Component } from 'react';
import { IPropsSearchPanel } from './types';
import './search-panel.css'
export class SearchPanel extends Component<IPropsSearchPanel> {
    onSearchChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>): void => {
        const { setSearchValue } = this.props;

        setSearchValue(value);
    };

    render(): JSX.Element {
        const { fieldValue } = this.props;

        return (
            <div className='form-control-wrapper'>
                <div className='flex-search-element'>
                    <input
                        type='text'
                        className='form-control search input'
                        placeholder='search'
                        value={fieldValue}
                        onChange={this.onSearchChange}
                    />
                </div>
            </div>
        )
    }
}