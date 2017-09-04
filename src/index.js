import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import Router from './Utils/Router';
import MyTest from './Components/MyTest'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import TestReducer from './Reducers/index';

const store = createStore(TestReducer,composeWithDevTools(
    applyMiddleware()));

ReactDOM.render(<Provider store={store}>
    <MyTest/>
</Provider>, document.getElementById('root'));
