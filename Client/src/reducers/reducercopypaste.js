//////// class --------------------
const initialState = {
    classes: [],
    message: "",
    currentClass: null
}

export const classReducer  = (state = initialState, action) => {
    switch(action.type){
        case "GET_CLASSES":{
            const {classes} = action;

            state = {
                ...state,
                classes
            }
            return state;
        }
        case "GET_CLASS": {
            const {clas} = action;
            state = {
                ...state,
                currentClass: clas
            }
            return state
        }
        case "CLEAR_CURRENT_CLASS":{
            const currentClass = null;

            state = {
                ...state,
                currentClass
            }
            return state;
        }
        case "DELETE_CLASS":{
            const deleteMessage = action.message;            
            state ={
                ...state,
                message:deleteMessage,
            }
            return state;
        }
        case "ADD_CLASS":{
            const addMessage = action.message;
            state ={
                ...state,
                message: addMessage,
            }
            return state;
        }
        case "EDIT_CLASS":{
            const {message} = action;
            state = {
                ...state,
                message
            }
            return state;
        }
        default:
            return state;
    }
} 
////////////////////////////// course ---------------------------------

const initialState = {
    courses: [],
    message: "",
    currentCourse: null
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
        case "GET_COURSE":{
            const {message,currentCourse} = action;

            state = {
                ...state,
                message,
                currentCourse
            }
            return state;
        }
        case "CLEAR_CURRENT_COURSE":{
            const currentCourse = null;

            state = {
                ...state,
                currentCourse
            }
            return state;
        }
        case "ADD_COURSE":{
            const {message} = action;
            state = {
                ...state,
                message
            }
            return state;
        }
        case "EDIT_COURSE": {
            const {message} = action;
            state = {
                ...state,
                message
            }
            return state;
        }
        case "DELETE_COURSE":{
            const {message} = action;
            state = {
                ...state,
                message
            }
            return state;
        }
        default: 
            return state;
    }
}

////// login ----------------------------
const initialState = {
    email: "",
    message: "",
    firstName: "",
    lastName: "",
}

export const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case "LOGIN":{
            const {message} = action;
            state={
                ...state,
                message,
            }
            return state;
        }
        case "GET_USER_DATA":{
            const {error, admin} = action;
            const {firstName,lastName,email} = admin;
            state = {
                ...state,
                message: error,
                firstName,
                lastName,
                email,
            } 
            return state;  
        }
        case "AUTHENTICATE":{
            const {error, admin} = action;
            const {firstName,lastName,email} = admin;
            state = {
                ...state,
                message: error,
                firstName,
                lastName,
                email,
            } 
            return state;   
        }
        default: 
            return state;    
    }
}

//////////// studnts ---------------------
const initialState = {
    students: [],
    message: "",
    currentStudent: null
}

export const studentReducer = (state=initialState, action) => {
    switch(action.type){
        case "GET_STUDENTS": {
            const {students} = action;

            state = {
                ...state,
                students
            }
            return state;
        }
        case "GET_STUDENT":{
            const {student} = action;

            state = {
                ...state,
                currentStudent: student
            }
            return state;
        }
        case "CLEAR_CURRENT_STUDENT":{
            const currentStudent = null;

            state = {
                ...state,
                currentStudent
            }
            return state;
        }
        case "ADD_STUDENT": {
            const {message} = action;
            state = {
                ...state,
                message
            }
            return state;
        }
        case "DELETE_STUDENT":{
            const {message} = action;

            state ={
                ...state,
                message,
            }
            return state;
        }
        case "EDIT_STUDENT":{
            const {message} = action;
            state = {
                ...state,
                message
            }
            return state;
        }
        default:
            return state;
    }
}

/////////// teacher ---------------------
const teacherInitialState = {
    teachers : [],
    freeTeachers:[],
    message : "",
    currentTeacher: null
}

export const teacherReducer = (state = teacherInitialState, action) => {
    switch(action.type){
        case "GET_TEACHERS":{
            const {teachers} = action;
            state = {
                ...state,
                teachers
            }
            return state;
        }
        case "GET_TEACHER":{
            const {teacher} = action;
            state = {
                ...state,
                currentTeacher: teacher
            }
            return state;
        }
        case "GET_FREE_TEACHERS":{
            const {freeTeachers} = action;
            state = {
                ...state,
                freeTeachers
            }
            return state;
        }
        case "CLEAR_CURRENT_TEACHER": {
            const currentTeacher = null;
            state = {
                ...state,
                currentTeacher
            }
            return state;
        }
        case "EDIT_TEACHER":{
            const {message} = action;
            state = {
                ...state,
                message
            }
            return state;
        }
        case "DELETE_TEACHER":{
            const deleteMessage = action.message;            
            state ={
                ...state,
                message:deleteMessage,
            }
            return state;
        }
        case "ADD_TEACHER":{
            const addMessage = action.message;
            state ={
                ...state,
                message: addMessage,
            }
            return state;
        }    
        default:
            return state;    
    }

}