import React, {Component} from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (elem) => {
        this.setState({
            label: elem.target.value
        })
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAddItem(this.state.label);
        this.setState({
            label: ''
        })
    };

    render() {
        return (
            <form className="item-add-form d-flex"
                  onSubmit={this.onSubmit}
            >
                <div className="item-add-form-wrapper">
                    <input type="text"
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
        )
    }
}