import axios from "axios";
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
    }
}

export function authenticate(token){
    return async (dispatch) => {
        const response = await axios.post(process.env.REACT_APP_SERVER_URL+"/admin/auth",{token});
        const {answer,error, admin} = response.data;

        dispatch({
            type: "AUTHENTICATE",
            answer,
            admin,
            error
        })
    }
}

export function logout(){
    localStorage.removeItem('jwtToken');
}
