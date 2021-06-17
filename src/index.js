import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose } from 'redux'; //redux is a state management system which creates a globalized state called 'redux store'
import thunk from 'redux-thunk'; //for dispatching asynchronous actions
import './index.css';


import reducers from './reducers';


const store= createStore(reducers,compose(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
