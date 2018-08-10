import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {getStudents, addStudent, deleteStudent, editStudent} from '../actions/studentActions';
import StudentItem from '../components/StudentItem';

export class Students extends React.Component {
    componentDidMount(){
        this.props.getStudents();
    }
    render () {
        return (
            <div>
                <h1>Students</h1>
                <p>{this.props.message} </p>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Class</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.students.map((student) => {
                            return (
                                <StudentItem 
                                    key = {student.id}
                                    student = {student}
                                    handleDelete = {this.props.handleDelete}
                                />
                            );    
                        })}
                    </tbody>
                </table>
                <Link to='/admin/students/add'><button type="button" className="btn btn-success">Add Student</button></Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        students:state.studentReducer.students,
        message: state.studentReducer.message,
        classes: state.classReducer.classes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStudents: () => {
            dispatch(getStudents());
        },
        handleDelete: (student) => {
            dispatch(deleteStudent(student));
        }        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Students);