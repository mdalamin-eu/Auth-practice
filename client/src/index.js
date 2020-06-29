import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import App from './components/App';
import reducer from './components/reducers/index'
import {composeWithDevTools} from 'redux-devtools-extension'
import reduxThunk from 'redux-thunk'

const store= createStore(
  reducer, composeWithDevTools(applyMiddleware(reduxThunk))
)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


