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
            const {message,admin} = action;
            const {firstName,lastName,email} = admin;
            state={
                ...state,
                message,
                firstName,
                lastName,
                email
            }
            return state;
        }
        case "AUTHENTICATE":
            const {answer, error} = action;
            state = {
                ...state,
                loggedIn:answer,
            } 
            return state;   
            break;
        default: 
            return state;    
    }
}