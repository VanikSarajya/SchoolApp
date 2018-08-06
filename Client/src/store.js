import {loginReducer} from './reducers/loginreducer';
import {teacherReducer} from './reducers/teacherreducer';
import {createStore ,applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

export default createStore(combineReducers({loginReducer,teacherReducer}) , applyMiddleware(thunk) );