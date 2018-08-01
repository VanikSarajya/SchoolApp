import {loginReducer} from './reducers/loginreducer';
import {createStore ,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

export default createStore(loginReducer , applyMiddleware(thunk) );