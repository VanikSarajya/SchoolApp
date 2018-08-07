import axios from 'axios';
require('dotenv').config();

export function getClasses(){
    return async (dispatch) => {
        const response = await axios.get(process.env.REACT_APP_SERVER_URL + '/admin/classes');
        const {classes,message} = await response.data;
        dispatch({
            type: "GET_CLASSES",
            classes
        })
    }
}

export function deleteClass(clas) {
    return async dispatch => {
        const response = await axios.delete(process.env.REACT_APP_SERVER_URL + "/admin/classes", {data: {id : clas.id}});
        const {message} = await response.data;
        dispatch({
            type: "DELETE_CLASS",
            message,
            clas
        })
    }
}

export function addClass(name, teacherId){
    return async (dispatch) => {
        const response = await axios.post(process.env.REACT_APP_SERVER_URL + '/admin/classes', {name, teacherId});
        const {message, newClass} = await response.data;
        dispatch({
            type: "ADD_CLASS",
            message,
            newClass
        })

    }
}

export function editClass(id, name, teacherId){
    return async (dispatch) => {
        const response = await axios.put(process.env.REACT_APP_SERVER_URL + '/admin/classes', {id ,name,teacherId});
        const {message} = await response.data;
        dispatch ({
            type: "EDIT_CLASS",
            message,
            id,
            name,
            teacherId
        })
    }
}