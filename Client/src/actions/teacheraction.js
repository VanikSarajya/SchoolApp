import axios from 'axios';
require('dotenv').config();

export function deleteTeacher(teacher) {
    return async dispatch => {
        const id = teacher.id;
        const response = await axios.delete(process.env.REACT_APP_SERVER_URL + `/admin/teachers/${id}`);
        const {message} = await response.data;
        dispatch({
            type: "DELETE_TEACHER",
            message,
            teacher
        })
        dispatch(getTeachers());
    }
}

export function getTeachers(){
    return async (dispatch) => {
        const response = await axios.get(process.env.REACT_APP_SERVER_URL + '/admin/teachers');
        const {teachers,message} = await response.data;
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
        const {teacher} = await response.data;

        dispatch({
            type: 'GET_TEACHER',
            teacher
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
        const {message} = await response.data;
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
        const {message} = await response.data;
        dispatch ({
            type: "EDIT_TEACHER",
            message
        })
        dispatch(getTeachers());
    }
}