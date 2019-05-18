import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
