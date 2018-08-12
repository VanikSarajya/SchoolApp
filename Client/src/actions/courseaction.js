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
