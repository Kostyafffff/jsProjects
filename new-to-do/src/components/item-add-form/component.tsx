import React, { PureComponent } from 'react';
import { IPropsItemAddForm } from './types-item-add-form';
import './item-add-form.css'

export class Component extends PureComponent<IPropsItemAddForm> {

    // onLabelChange = (elem: ChangeEvent<HTMLInputElement>): void => {
    //     const { value: label } = elem.target;
    //     this.setState({ label });
    // };

    onLabelChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>): void => {
        const { setAddFieldValue } = this.props;

        setAddFieldValue(value);
    };

    onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        const { addToDo, setAddFieldValue, fieldValue } = this.props;

        event.preventDefault();
        addToDo(fieldValue);
        setAddFieldValue('');
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
                        value={this.props.fieldValue}
                    />
                    <button className="add-item-element btn btn-success">
                        Add
                    </button>
                </div>
            </form>
        );
    }
}