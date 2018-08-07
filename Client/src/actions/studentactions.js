import axios from 'axios';
require('dotenv').config();

export function getStudents(){
    return async (dispatch) => {
        const response = await axios.get(process.env.REACT_APP_SERVER_URL + '/admin/students');
        const {students,message} = await response.data;
        dispatch({
            type: "GET_STUDENTS",
            students
        })
    }
}

export function addStudent(firstName,lastName, classId){
    return async (dispatch) => {
        const response = await axios.post(process.env.REACT_APP_SERVER_URL + '/admin/students', {firstName,lastName,classId});
        const {message, newStudent} = await response.data;
        dispatch({
            type: "ADD_STUDENT",
            message,
            newStudent
        })

    }
}

export function deleteStudent(student) {
    return async dispatch => {
        const response = await axios.delete(process.env.REACT_APP_SERVER_URL + "/admin/students", {data: {id : student.id}});
        const {message} = await response.data;
        dispatch({
            type: "DELETE_STUDENT",
            message,
            student
        })
    }
}

export function editStudent(id, firstName, lastName, classId){
    return async (dispatch) => {
        const response = await axios.put(process.env.REACT_APP_SERVER_URL + '/admin/students', {id ,firstName, lastName, classId});
        const {message} = await response.data;
        dispatch ({
            type: "EDIT_STUDENT",
            message,
            id,
            firstName,
            lastName,
            classId
        })
    }
}