import React from "react";
import {connect} from 'react-redux'
import { createPost } from "../redux/actions";

class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };
    }

    submitHandler = event => {
        event.preventDefault();

        const { title } = this.state;

        const newPost = {
            title, id: Date.now().toString()
        }
        this.props.createPost(newPost)
        this.setState({ title: '' } )
    }

    changeInputHandler = event => {
        event.persist();

        this.setState(prevState  => (
            {...prevState, ...{
               [event.target.name]: event.target.value }
            }
        ))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="title">Заголовок поста</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={this.state.title}
                        onChange={this.changeInputHandler}
                    />
                    <input className="btn btn-success" type="submit"/>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = {
    createPost
}
export default connect(null, mapDispatchToProps)(PostForm);