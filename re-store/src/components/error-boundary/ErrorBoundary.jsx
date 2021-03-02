import React, { Component } from 'react';
import { ErrorIndicator } from "../error-indicator";

export class ErrorBoundary extends Component {
    state = {
        hasError: false
    };

    componentDidCatch(error, errorInfo) {
        this.setState({error: true})
    }

    render() {
        if(this.state.hasError) {
            return (<ErrorIndicator />);
        }

        return this.props.children;
    }
}
