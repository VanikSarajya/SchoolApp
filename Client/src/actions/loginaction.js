import axios from "axios";
export function change(event){
    return {
        type: "CHANGE",
        event
    }
}

export function login(email,password){
    return async (dispatch) => {
        const response = await axios.post("http://localhost:3001/admin",{email,password});
        const logged= await response.data.logged;

        dispatch({
            type: "LOGIN",
            loggedIn:logged
        })

    }
}

export function isValid(email, password) {
    return (email.length >= 6 && email.length<=45 && password.length>=6);
}