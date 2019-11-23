import {Component} from "react";
import * as React from "react";

interface IState {
    label: string;
}

export class ItemAddForm extends Component<{}>{

    private state : IState = {
        label : ''
    };

    private onLabelChange : (elem : string) =>{

    };

    private onSubmit : (event : React.FormEvent<HTMLInputElement>) => {

    };
    
    // onLabelChange = (elem) => {
    //     this.setState({
    //         label: elem.target.value
    //     })
    // };


    private render(){
        return(
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
        );
    }

}