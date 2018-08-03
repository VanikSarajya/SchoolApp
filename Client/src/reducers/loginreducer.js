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
                loggedIn:action.loggedIn,
                message
            }
            return state;
            break;
        default: 
            return state;    
    }
}