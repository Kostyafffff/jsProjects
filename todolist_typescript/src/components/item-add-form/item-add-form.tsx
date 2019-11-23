import React, { ChangeEvent, Component } from 'react';

interface IState {
    label: string
}

export class ItemAddForm extends Component<{}, IState>{
    state : IState = {
        label : ''
    };

    onLabelChange = (elem: ChangeEvent<HTMLInputElement>): void => {
        const { value: label } = elem.target;
        this.setState({ label });
    };

    onSubmit = (event : React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
      //  this.props.onAddItem(this.state.label);
    };

    // onLabelChange = (elem) => {
    //     this.setState({
    //         label: elem.target.value
    //     })
    // };

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
                        // onClick={() => this.props.onAddItem}
                    >Add
                    </button>
                </div>
            </form>
        );
    }

}