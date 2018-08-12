import React from 'react';
import {connect} from 'react-redux';
import CourseForm from '../../components/CourseComponents/CourseForm';
import {getCourse ,clearCurrentCourse, editCourse} from '../../actions/courseAction';

export class CourseEdit extends React.Component {
    render() {
        return (
            <div> 
                <h1>Editing Course</h1> 
                <CourseForm 
                    courseId = {this.props.match.params.id}
                    teachers = {this.props.teachers}
                    classes = {this.props.classes}
                    getCourse = {this.props.getCourse}
                    currentCourse = {this.props.currentCourse}
                    clearCurrentCourse = {this.props.clearCurrentCourse}
                    handleEdit = {this.props.handleEdit}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentCourse: state.courseReducer.currentCourse,
        classes: state.classReducer.classes,
        teachers: state.teacherReducer.teachers
    }
}
 const mapDispatchToProps = (dispatch) => {
     return {
        getCourse: (id) => {
            dispatch(getCourse(id));
        },
        clearCurrentCourse: () => {
            dispatch(clearCurrentCourse());
        },
        handleEdit: (id,name, classId, teacherId, startingDate, endingDate, startingTime, enddingTime) => {
            dispatch(editCourse(id,name, classId, teacherId, startingDate, endingDate, startingTime, enddingTime));
        }
     }
 }


export default connect(mapStateToProps,mapDispatchToProps)(CourseEdit);