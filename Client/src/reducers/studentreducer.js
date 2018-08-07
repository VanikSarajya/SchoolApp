const initialState = {
    students: [],
    message: ""
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
        case "ADD_STUDENT": {
            const {newStudent,message} = action;
            const students = [...state.students, newStudent];

            state = {
                ...state,
                students,
                message
            }
            return state;
        }
        case "DELETE_STUDENT":{
            const {student,message} = action;

            const students = [...state.students];
            students.splice(students.indexOf(student),1);
            state ={
                ...state,
                message,
                students
            }
            return state;
        }
        case "EDIT_STUDENT":{
            const {message,id,firstName, lastName, classId} = action;
            const students = [...state.students];
            const student = students.find((currentStudent) => {
                return currentStudent.id == id;
            })

            students[students.indexOf(student)].firstName = firstName;
            students[students.indexOf(student)].lastName = lastName;
            students[students.indexOf(student)].classId = classId;


            state = {
                ...state,
                students,
                message
            }
            return state;
        }
        default:
            return state;
    }
}