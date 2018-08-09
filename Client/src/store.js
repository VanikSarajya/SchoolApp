import {loginReducer} from './reducers/loginreducer';
import {teacherReducer} from './reducers/teacherReducer';
import {classReducer} from './reducers/classreducer';
import {studentReducer} from './reducers/studentreducer';
import {courseReducer} from './reducers/coursereducer';
import {createStore ,applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

export default createStore(combineReducers({loginReducer,teacherReducer,classReducer,studentReducer, courseReducer}) , applyMiddleware(thunk) );