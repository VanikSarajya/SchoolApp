const teacherInitialState = {
    teachers : [],
    message : "",
    firstName: "",
    lastName: ""
}

export const teacherReducer = (state = teacherInitialState, action) => {
    switch(action.type){
        case "CHANGE":{
            const target = action.event.target;
            const {name,value} = target;

            state = {
                ...state,
                [name]:value
            }
            return state;
            break;
        }
        case "GET_TEACHERS":{
            const {teachers} = action;
            state = {
                ...state,
                teachers
            }
            return state;
            break;
        }
        case "EDIT_TEACHER":{
            const {message, id, firstName, lastName} = action;
            const teachers = [...state.teachers];
            const teacher = teachers.find((teacher) => {
                return teacher.id === id;
            })
            teachers[teachers.indexOf(teacher)].firstName = firstName;
            teachers[teachers.indexOf(teacher)].lastName = lastName;
            state = {
                ...state,
                teachers,
                message
            }
            return state;
            break;
        }
        case "DELETE_TEACHER":{
            const deleteMessage = action.message;
            const teacher = action.teacher;

            const teachers = [...state.teachers];
            teachers.splice(teachers.indexOf(teacher),1);
            
            state ={
                ...state,
                message:deleteMessage,
                teachers
            }
            return state;
            break;
        }
        case "ADD_TEACHER":{
            const addMessage = action.message;
            const newTeacher = action.newTeacher;
            const teachers = [...state.teachers, newTeacher];
            state ={
                ...state,
                message: addMessage,
                teachers
            }
            return state;
            break;
        }    
        default:
            return state;    
    }

}