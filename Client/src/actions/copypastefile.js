// ----------------------------courses-----------------------------
import axios from 'axios';
require('dotenv').config();

export function getCourses(){
    return async (dispatch) => {
        const response = await axios.get(process.env.REACT_APP_SERVER_URL + '/admin/courses');
        const {courses} = response.data;
        dispatch({
            type: "GET_COURSES",
            courses
        })
    }
}

export function getCourse(id){
    return async (dispatch) => {
        const response = await axios.get(process.env.REACT_APP_SERVER_URL + `/admin/courses/${id}`);
        const {message, currentCourse} = response.data;

        dispatch({
            type: "GET_COURSE",
            currentCourse,
            message
        })
    }
}

export function editCourse(id,name, classId, teacherId, startingDate, endingDate, startingTime, enddingTime){
    return async (dispatch) => {
        const response = await axios.put(process.env.REACT_APP_SERVER_URL+ `/admin/courses/edit/${id}`, {name, classId, teacherId, startingDate, endingDate, startingTime, enddingTime});
        const {message} = response.data;

        dispatch({
            type: "EDIT_COURSE",
            message
        })

        dispatch(getCourses());
    }
}

export function clearCurrentCourse(){
    return {
        type: "CLEAR_CURRENT_COURSE",
    }
}

export function addCourse(name,classId,teacherId,startingDate,endingDate,startingTime,enddingTime){
    return async (dispatch) => {
        const response = await axios.post(process.env.REACT_APP_SERVER_URL+'/admin/courses/add', {name,classId,teacherId,startingDate,endingDate,startingTime,enddingTime});
        const {message} = response.data;

        dispatch({
            type: "ADD_COURSE",
            message
        })

        dispatch(getCourses());
    }
}

export function deleteCourse(id){
    return async (dispatch) => {
        const response = await axios.delete(process.env.REACT_APP_SERVER_URL+`/admin/courses/${id}`);
        const {message} = response.data;

        dispatch({
            type: "DELETE_COURSE",
            message
        })
        
        dispatch(getCourses());
    }
}
//-------------------------------------------------------------------

//---------------------------------------------login-----------------------------------------

import axios from "axios";
import { push } from "../../node_modules/react-router-redux";
require('dotenv').config();


export function login(email,password){
    return async (dispatch) => {
        const response = await axios.post(process.env.REACT_APP_SERVER_URL +"/admin/login",{email,password});
        const message = response.data.message;
        const token = response.data.token;

        localStorage.setItem('jwtToken', token);
        dispatch({
            type: "LOGIN",
            message
        })
        dispatch(authenticate(token));
    }
}

export function authenticate(token){
    return async (dispatch) => {
        const response = await axios.post(process.env.REACT_APP_SERVER_URL+"/admin/auth",{token});
        const {error, admin} = response.data;
        if(admin){
            dispatch({
                type: "AUTHENTICATE",
                admin,
                error
            })
            localStorage.setItem('user', admin.email);
            dispatch(push('/admin/classes'))
        }
    }
}

export function getUserData(token){
    return async (dispatch) => {
        const response = await axios.post(process.env.REACT_APP_SERVER_URL+"/admin/auth",{token});
        const {error, admin} = response.data;
        if(admin){
            dispatch({
                type: "GET_USER_DATA",
                admin,
                error
            })
        }
    }
}

export function logout(){
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('user');
}
//-------------------------------------------------------------------------
//----------------------------------------------------------------------
//--------------------------------------------------- teachers -------------------------
import axios from 'axios';
require('dotenv').config();

export function deleteTeacher(teacher) {
    return async dispatch => {
        const id = teacher.id;
        const response = await axios.delete(process.env.REACT_APP_SERVER_URL + `/admin/teachers/${id}`);
        const {message} = response.data;
        dispatch({
            type: "DELETE_TEACHER",
            message
        })
        dispatch(getTeachers());
    }
}

export function getTeachers(){
    return async (dispatch) => {
        const response = await axios.get(process.env.REACT_APP_SERVER_URL + '/admin/teachers');
        const {teachers,message} = response.data;
        dispatch({
            type: "GET_TEACHERS",
            teachers,
            message
        })
    }
}

export function getTeacher(id){
    return async (dispatch) => {
        const response = await axios.get(process.env.REACT_APP_SERVER_URL+ `/admin/teachers/${id}`);
        const {teacher} = response.data;

        dispatch({
            type: 'GET_TEACHER',
            teacher
        })
    }
}

export function getFreeTeachers(){
    return async (dispatch) => {
        const response = await axios.get(process.env.REACT_APP_SERVER_URL+ `/admin/teachers/free/only`);
        const {freeTeachers} = response.data;

        dispatch({
            type: "GET_FREE_TEACHERS",
            freeTeachers
        })
    }
}


export function clearCurrentTeacher(){
    return {
        type: "CLEAR_CURRENT_TEACHER"
    }
}

export function addTeacher(firstName, lastName){
    return async (dispatch) => {
        const response = await axios.post(process.env.REACT_APP_SERVER_URL + '/admin/teachers/add', {firstName,lastName});
        const {message} = response.data;
        dispatch({
            type: "ADD_TEACHER",
            message,
        })
        dispatch(getTeachers());
    }
}

export function editTeacher(firstName, lastName, id){
    return async (dispatch) => {
        const response = await axios.put(process.env.REACT_APP_SERVER_URL + `/admin/teachers/edit/${id}`, {firstName,lastName});
        const {message} = response.data;
        dispatch ({
            type: "EDIT_TEACHER",
            message
        })
        dispatch(getTeachers());
    }
}
