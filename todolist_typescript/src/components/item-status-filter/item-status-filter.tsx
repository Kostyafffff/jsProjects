import { Component } from 'react';
import * as React from 'react';

interface IButtons {
    name: string,
    label: string
}

export class ItemStatusFilter extends Component<Readonly<{}>, IButtons>{

    buttons: IButtons[] = [
        {
            name: 'all', label: 'All',
        },
        {
            name: 'active', label: 'Active'
        },
        {
            name: 'done', label: 'Done'
        }
    ];

    render(): JSX.Element {

        const { filter, onFilterChange } = this.props;

        const buttons = this.buttons.map(({ name, label }) => {
            const isActive = filter === name;

            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';

            return (
                <button type="button"
                        className={`btn ${clazz}`}
                        key={name}
                        onClick={ () : void => onFilterChange(name)}>
                    {label}
                </button>
            )
        });

        return (
            <div className="btn-group">
                <div className="btn-group-wrapper">
                    {buttons}
                </div>
            </div>
        );
    }
};