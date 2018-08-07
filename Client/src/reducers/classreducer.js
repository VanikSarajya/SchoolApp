const initialState = {
    classes: [],
    message: ""
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
            break;
        }
        case "DELETE_CLASS":{
            const deleteMessage = action.message;
            const clas = action.clas;

            const classes = [...state.classes];
            classes.splice(classes.indexOf(clas),1);
            
            state ={
                ...state,
                message:deleteMessage,
                classes
            }
            return state;
            break;
        }
        case "ADD_CLASS":{
            const addMessage = action.message;
            const newClass = action.newClass;
            const classes = [...state.classes, newClass];
            state ={
                ...state,
                message: addMessage,
                classes
            }
            return state;
            break;
        }
        case "EDIT_CLASS":{
            const {message,id,name, teacherId} = action;
            const classes = [...state.classes];
            const currentClass = classes.find((currentClass) => {
                return currentClass.id == id;
            })

            classes[classes.indexOf(currentClass)].name = name;
            classes[classes.indexOf(currentClass)].teacherId = teacherId;

            state = {
                ...state,
                classes,
                message
            }
            return state;
            break;
        }
        default:
            return state;
    }
} 