import React, { ChangeEvent, PureComponent } from 'react';
import { IPropsItemAddForm, IStateItemAddForm } from './types-item-add-form';
import './item-add-form.css'
export class ItemAddForm extends PureComponent<IPropsItemAddForm, IStateItemAddForm>{
    state : IStateItemAddForm = {
        label : ''
    };

    onLabelChange = (elem: ChangeEvent<HTMLInputElement>): void => {
        const { value: label } = elem.target;
        this.setState({ label });
    };

    onSubmit = (event : React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        this.props.onAddItem(this.state.label);
        this.setState({
           label: ''
        })
    };

    render(): JSX.Element {
        return(
            <form
                className="item-add-form d-flex"
                onSubmit={this.onSubmit}
            >
                <div className="item-add-form-wrapper">
                    <input
                        type="text"
                        className="form-control"
                        onChange={this.onLabelChange}
                        placeholder="Needs to be Done"
                        value={this.state.label}
                    />
                    <button className="add-item-element btn btn-success"
                    >Add
                    </button>
                </div>
            </form>
        );
    }

}