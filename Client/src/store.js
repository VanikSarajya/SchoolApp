import {loginReducer} from './reducers/loginReducer';
import {teacherReducer} from './reducers/teacherReducer';
import {classReducer} from './reducers/classReducer';
import {studentReducer} from './reducers/studentReducer';
import {courseReducer} from './reducers/coursereducer';
import {createStore ,applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

export default createStore(combineReducers({loginReducer,teacherReducer,classReducer,studentReducer, courseReducer}) , applyMiddleware(thunk) );