import React from 'react';
import { App } from './';
import { Provider } from 'react-redux';

export class Root extends React.Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <App />
            </Provider>
        );
    }
}

//@Todo add prop types required store object

export default Root;