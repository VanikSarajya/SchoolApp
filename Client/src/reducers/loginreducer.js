const initialState = {
    email: "",
    password: "",
    loggedIn: false
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
            state={
                ...state,
                loggedIn:action.loggedIn 
            }
            return state;
            break;
        default: 
            return state;    
    }
}