import axios from 'axios';
require('dotenv').config();

/*
export function editTeacher(id){
    return async dispatch => {
        const response = await axios.put(process.env.REACT_APP_SERVER_URL + "/admin/teacher", {id});
    }
}

export function deleteTeacher(id) {
    return async dispatch => {
        const response = await axios.delete(process.env.REACT_APP_SERVER_URL + "/admin/teacher", {id});
    }
}
*/

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