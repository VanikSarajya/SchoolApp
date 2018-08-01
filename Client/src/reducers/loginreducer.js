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
            if (email == "vaniksarajyan@gmail.com" && password == "12345678"){
                state = {
                    ...state,
                    loggedIn: true
                }
            }
            return state;
            break;
        default: 
            return state;    
    }
}