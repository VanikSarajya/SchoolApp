import React from 'react';
import {connect} from 'react-redux';
import {getTeachers} from '../actions/teacheraction';
import TeacherItem from '../components/TeacherItem';

export class Teachers extends React.Component {
    componentWillMount(){
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
                        <TeacherItem />
                    </tbody>
                </table>
                <button className="btn-success">Add Teacher</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        message:state.teacherReducer.message,
        teachers:state.teacherReducer.teachers
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getTeachers: () => {
            dispatch(getTeachers());
        }

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Teachers);