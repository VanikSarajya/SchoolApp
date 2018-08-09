import axios from "axios";
import isEmail from 'validator/lib/isEmail';
require('dotenv').config();

export function change(event){
    return {
        type: "CHANGE",
        event
    }
}

export function login(email,password){
    return async (dispatch) => {
        const response = await axios.post(process.env.REACT_APP_SERVER_URL +"/admin/login",{email,password});
        const logged= await response.data.logged;
        const message = await response.data.message;
        const token = await response.data.token;

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
        const {answer,error} = await response.data;

        dispatch({
            type: "AUTHENTICATE",
            answer,
            error
        })
    }
}

export function logout(){
    localStorage.removeItem('jwtToken');
}

export function isValid(email, password) {
    return (isEmail(email) && password.length>=6);
}