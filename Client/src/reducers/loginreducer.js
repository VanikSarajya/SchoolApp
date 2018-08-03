const initialState = {
    email: "",
    password: "",
    loggedIn: false,
    message: ""
}

export const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case "CHANGE":
            const target = action.event.target;
            const {name,value} = target;
            const {email, password} = state;
            state = {
                ...state,
                [name]:value
            };
            return state;
            break;
        case "LOGIN":
            const {message} = action;
            state={
                ...state,
                message
            }
            return state;
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