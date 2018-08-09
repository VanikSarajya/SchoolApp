const initialState = {
    courses: [],
    message: ""
}


export const courseReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_COURSES":{
            const {courses} = action;

            state = {
                ...state,
                courses
            }
            return state;
        }
        default: 
            return state;
    }
}