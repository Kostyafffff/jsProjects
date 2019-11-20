import React, {Component} from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
      label:''
    };

    onLabelChange = (elem) => {
        console.log(elem.target.value);

        this.setState({
            label : elem.target.value
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

                <input type = "text"
                       className="form-control"
                       onChange={this.onLabelChange}
                       placeholder="Needs to be Done"
                       value={this.state.label}
                />
                <button className="add-item-element btn btn-outline-secondary"
                        onClick={()=> this.props.onAddItem}
                >Add element
                </button>
            </form>
        )
    }
}