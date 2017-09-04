import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import Router from './Utils/Router';
import MyTest from './Components/MyTest'
import Provider from 'react-redux'
import {createStore} from 'redux'

let store = createStore();

ReactDOM.render(<Provider store={store}>
    <MyTest/>
</Provider>, document.getElementById('root'));
