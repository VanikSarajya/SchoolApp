import React from 'react';
import {connect} from 'react-redux';

import {getStudents, addStudent, deleteStudent, editStudent} from '../actions/studentactions';
import StudentItem from '../components/StudentItem';

export class Students extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            classId: null,
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentWillMount(){
        this.props.getStudents();
    }

    handleChange(event) {
        const target = event.target;
        const {name,value} = target;
        this.setState({
            [name]: value
        })
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
                            <th>Class ID</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.students.map((student, index) => {
                            return (
                                <StudentItem 
                                    key = {index}
                                    student = {student}
                                    classes = {this.props.classes}
                                    handleDelete = {this.props.handleDelete}
                                    handleEdit = {this.props.handleEdit}
                                    handleChange = {this.handleChange}
                                    firstName = {this.state.firstName}
                                    lastName = {this.state.lastName}
                                    classId = {this.state.classId}
                                />
                            );    
                        })}
                    </tbody>
                </table>
                <button data-toggle="modal" data-target="#addStudent" type="button" className="btn btn-success">Add Student</button>
                <div id="addStudent" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Adding Student</h4>
                        </div>
                        <div className="modal-body">
                            <form>
                                First Name
                                <input type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName}  className="form-control"/>
                                Last Name
                                <input type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName}  className="form-control"/>
                                Class 
                                <select name="classId" value={this.state.classId} onChange={this.handleChange} className="form-control">
                                    <option>Select Class </option>
                                    {this.props.classes.map((clas,index) => {
                                        return (
                                            <option> {clas.id}</option>
                                        );
                                    })}
                                </select>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={()=> this.props.addStudent(this.state.firstName,this.state.lastName, this.state.classId)}className="btn btn-primary"  data-dismiss="modal" > Add </button>
                            <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                        </div>
                        </div>
                    </div>
                </div>
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
        addStudent : (firstName, lastName, classId) => {
            dispatch(addStudent(firstName,lastName,classId));
        },
        handleDelete: (student) => {
            dispatch(deleteStudent(student));
        },
        handleEdit : (id,firstName,lastName,classId) => {
            dispatch(editStudent(id, firstName,lastName, classId));
        }
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Students);