import React from 'react';
import {connect} from 'react-redux';
import CourseForm from '../../components/CourseComponents/CourseForm';
import {addCourse} from '../../actions/courseAction';

export class CourseAdd extends React.Component {
    render() {
        return (
            <div> 
                <h1>Adding Course</h1> 
                <CourseForm 
                    handleAdd = {this.props.handleAdd}
                    classes = {this.props.classes}
                    teachers = {this.props.teachers}
                />
            </div>
        );
    }
}


const mapStateToProps =  (state) => {
    return {
        courses:state.courseReducer.courses,
        teachers: state.teacherReducer.teachers,
        classes: state.classReducer.classes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAdd: (name,classId,teacherId,startingDate,endingDate,startingTime,enddingTime) => {
            dispatch(addCourse(name,classId,teacherId,startingDate,endingDate,startingTime,enddingTime));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CourseAdd);