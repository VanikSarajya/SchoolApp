import React from 'react';
import {connect} from 'react-redux';
import StudentForm from '../../components/StudentComponents/StudentForm';
import { addStudent } from '../../actions/studentAction';

export class StudentAdd  extends React.Component {
    render(){
        return(
            <div> 
                <h1> Adding Student </h1>
                <StudentForm 
                    classes = {this.props.classes}
                    handleAdd = {this.props.handleAdd}
                />
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return{
        classes: state.classReducer.classes,
        students: state.studentReducer.students
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleAdd: (firstName, lastName, classId) => {
            dispatch(addStudent(firstName,lastName,classId));
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentAdd);