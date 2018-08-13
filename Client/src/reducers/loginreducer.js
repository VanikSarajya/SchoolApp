const initialState = {
    email: "",
    password: "",
    loggedIn: false,
    message: "",
    firstName: "",
    lastName: ""
}

export const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case "CHANGE":
            const target = action.event.target;
            const {name,value} = target;
            state = {
                ...state,
                [name]:value
            };
            return state;
        case "LOGIN":{
            const {message} = action;
            state={
                ...state,
                message,
            }
            return state;
        }
        case "AUTHENTICATE":{
            const {answer, error, admin} = action;
            const {firstName,lastName,email} = admin;
            state = {
                ...state,
                loggedIn:answer,
                message: error,
                firstName,
                lastName,
                email
            } 
            return state;   
        }
        default: 
            return state;    
    }
}