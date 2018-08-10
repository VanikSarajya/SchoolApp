import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getTeachers, deleteTeacher} from '../actions/teacherAction';
import TeacherItem from '../components/TeacherItem';

export class Teachers extends React.Component {
    componentDidMount(){
        this.props.getTeachers();
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
                        {this.props.teachers.map((teacher) => {
                            return (
                                <TeacherItem 
                                    key={teacher.id}
                                    teacher={teacher}
                                    handleDelete = {this.props.handleDelete}
                                />
                            );    
                        })}
                    </tbody>
                </table>
                <Link to='/admin/teachers/add'><button  type="button" className="btn btn-success">Add Teacher</button></Link>

            </div>    
        );
    }
}

const mapStateToProps = (state) => {
    return {
        message:state.teacherReducer.message,
        teachers:state.teacherReducer.teachers,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getTeachers: () => {
            dispatch(getTeachers());
        },
        handleDelete: (teacher) => {
            dispatch(deleteTeacher(teacher));
        },
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Teachers);