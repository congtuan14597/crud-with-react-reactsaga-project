import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import appReducers from './reducers/index';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    appReducers,
    composeEnhancer(applyMiddleware(thunk ,sagaMiddleware)),
);

sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <BrowserRouter>
    <Provider store={ store }>
        <App></App>
    </Provider>
    </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
