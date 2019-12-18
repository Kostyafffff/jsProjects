import { Component } from 'react';
import React from 'react';
import { IPropsItemStatusFilter, IButtons } from './types-status-filter';
import './item-status-filter.css';
export class ItemStatusFilter extends Component<IPropsItemStatusFilter> {
    buttons: IButtons[] = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' },
    ];

    onButtonClick = ({ currentTarget: { accessKey } }: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        const { onFilterChange } = this.props;

        onFilterChange(accessKey);
    };

    render(): JSX.Element {

        const { filter } = this.props;

        const buttons = this.buttons.map(({ name, label }) => {
            const isActive = filter === name;

            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';

            return (
                <button
                    type="button"
            className={`btn ${clazz}`}
            key={name}
            accessKey={name}
            onClick={this.onButtonClick}
                >
                { label }
                </button>
        )
        });

        return (
            <div className="btn-group">
            <div className="btn-group-wrapper">
                { buttons }
                </div>
                </div>
        );
    }
}