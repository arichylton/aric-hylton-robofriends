import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import 'tachyons';
import App from './container/App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { searchRobots, requestRobots } from './reducers';
import { createLogger } from 'redux-logger';

const rootReducer = combineReducers({
    searchRobots,
    requestRobots
});
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
    <Provider store={store}>
        <App  />,
    </Provider>, 
    document.getElementById('root')
);

serviceWorker.unregister();
