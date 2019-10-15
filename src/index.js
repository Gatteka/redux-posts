import React from 'react';
import { render }  from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './components/App';
import uuid from 'uuid/v4';

console.log(uuid());
const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);