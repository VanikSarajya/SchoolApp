import React from 'react';
import {connect} from 'react-redux'
import StudentForm from '../../components/StudentComponents/StudentForm';
import { editStudent, getStudent, clearCurrentStudent } from '../../actions/studentActions';

export class StudentEdit extends React.Component {
    render(){
        return(
            <div> 
                <h1> Editing Student </h1>
                <StudentForm 
                    classes = {this.props.classes}
                    handleEdit = {this.props.handleEdit}
                    studentId = {this.props.match.params.id}
                    getStudent = {this.props.getStudent}
                    clearCurrentStudent = {this.props.clearCurrentStudent}
                    currentStudent = {this.props.currentStudent}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        classes: state.classReducer.classes,
        currentStudent: state.studentReducer.currentStudent
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleEdit: (id, firstName, lastName, classId)=> {
            dispatch(editStudent(id, firstName, lastName, classId));
        },
        getStudent: (id) => {
            dispatch(getStudent(id));
        },
        clearCurrentStudent: ()=>{
            dispatch(clearCurrentStudent());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentEdit);