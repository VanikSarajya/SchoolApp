import React from 'react';
import {connect} from 'react-redux';
import {getTeachers, addTeacher, change, editTeacher, deleteTeacher} from '../actions/teacheraction';
import TeacherItem from '../components/TeacherItem';

export class Teachers extends React.Component {
    componentWillMount(){
        this.props.getTeachers();
    }
    inputValidation(firstName,lastName){
        return (firstName.length>=3 && firstName.length<=80) && (lastName.length>=3 && lastName.length<=80);
    }
    render () {
        return (
            <div className="teachers">
                <h1>Teachers</h1>
                <p>{this.props.message}</p>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.teachers.map((teacher, index) => {
                            return (
                                <TeacherItem 
                                    key={teacher.id}
                                    teacher={teacher}
                                    handleDelete = {this.props.handleDelete}
                                    handleEdit = {this.props.handleEdit}
                                    handleChange = {this.props.handleChange}
                                    firstName = {this.props.firstName}
                                    lastName = {this.props.lastName}
                                    inputValidation = {this.inputValidation}
                                />
                            );    
                        })}
                    </tbody>
                </table>
                <button data-toggle="modal" data-target="#addTeacher" type="button" className="btn btn-success">Add Teacher</button>


                <div id="addTeacher" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Adding Teacher</h4>
                    </div>
                    <div className="modal-body">
                        <form>
                            First name
                            <input type="text" name="firstName" value={this.props.firstName} onChange={this.props.handleChange} className="form-control" placeholder="First name"/>
                            Last name
                            <input type="text" name="lastName" value={this.props.lastName} onChange={this.props.handleChange} className="form-control" placeholder="Last name"/>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" disabled={!this.inputValidation(this.props.firstName,this.props.lastName)} className="btn btn-primary" onClick={() => this.props.addTeacher(this.props.firstName,this.props.lastName)} data-dismiss="modal" > Add </button>
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
        message:state.teacherReducer.message,
        teachers:state.teacherReducer.teachers,
        firstName:state.teacherReducer.firstName,
        lastName:state.teacherReducer.lastName
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getTeachers: () => {
            dispatch(getTeachers());
        },
        handleChange: (event) => {
            dispatch(change(event));
        },
        addTeacher: (firstName, lastName) => {
            dispatch(addTeacher(firstName,lastName))
        },
        handleEdit: (id, firstName, lastName) => {
            dispatch(editTeacher(id, firstName, lastName));
        },
        handleDelete: (teacher) => {
            dispatch(deleteTeacher(teacher));
        },
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Teachers);