import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux'
import App from './app';
import reducers from './reducers/index'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('app'));
