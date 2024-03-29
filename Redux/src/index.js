import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import AppVer2 from './AppVer2';
import * as serviceWorker from './serviceWorker';
import { createStore,compose, applyMiddleware } from 'redux'
import myReducer from './reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ToDoListHooks from './components/ToDoListHooks';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    myReducer,
    composeEnhancer(applyMiddleware(thunk)),
);
ReactDOM.render(
    <Provider store={store}>
        {/* <AppVer2 /> */}
        <ToDoListHooks/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
