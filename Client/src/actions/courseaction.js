import axios from 'axios';
require('dotenv').config();

export function getCourses(){
    return async (dispatch) => {
        const response = await axios.get(process.env.REACT_APP_SERVER_URL + '/admin/courses');
        const {courses} = await response.data;
        dispatch({
            type: "GET_COURSES",
            courses
        })
    }
}
