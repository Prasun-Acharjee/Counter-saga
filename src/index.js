import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
//import {createmystore} from "./store";
import {createStore,applyMiddleware} from "redux";
import {logger} from "redux-logger";
import createSagaMiddleware from "redux-saga";
import {reducer} from "./reducer/reducer";
import watcherSaga from "./sagas/countersaga";
const saga=createSagaMiddleware();
const createmystore=createStore(reducer,applyMiddleware(saga,logger));
saga.run(watcherSaga);
ReactDOM.render(<Provider store={createmystore}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
