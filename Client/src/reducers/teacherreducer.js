const teacherInitialState = {
    teachers : [],
    message : ""
}

export const teacherReducer = (state = teacherInitialState, action) => {
    switch(action.type){
        case "GET_TEACHERS":
            const {teachers,message} = action;
            state = {
                ...state,
                message,
                teachers
            }
            return state;
            break;
        case "EDIT_TEACHER":
            break;
            return state;
        case "DELETE_TEACHER":
            break;
            return state;
        case "ADD_TEACHER":
            break;
            return state;    
        default:
            return state;    
    }

}