import axios from 'axios';
require('dotenv').config();

export function deleteTeacher(teacher) {
    return async dispatch => {
        const response = await axios.delete(process.env.REACT_APP_SERVER_URL + "/admin/teachers", {data: {id : teacher.id}});
        const {message} = await response.data;
        dispatch({
            type: "DELETE_TEACHER",
            message,
            teacher
        })
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

export function change(event){
    return {
        type: "CHANGE",
        event
    }
}


export function addTeacher(firstName, lastName){
    return async (dispatch) => {
        const response = await axios.post(process.env.REACT_APP_SERVER_URL + '/admin/teachers', {firstName,lastName});
        const {message, newTeacher} = await response.data;
        dispatch({
            type: "ADD_TEACHER",
            message,
            newTeacher
        })

    }
}

export function editTeacher(firstName, lastName, id){
    return async (dispatch) => {
        const response = await axios.put(process.env.REACT_APP_SERVER_URL + '/admin/teachers', {id,firstName,lastName});
        const {message} = await response.data;
        dispatch ({
            type: "EDIT_TEACHER",
            message,
            id,
            firstName,
            lastName
        })
    }
}