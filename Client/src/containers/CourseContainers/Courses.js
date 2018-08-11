import React from 'react';
import {connect} from 'react-redux';
import {getCourses} from '../../actions/courseAction';
import CourseItem from '../../components/CourseComponents/CourseItem';
import {Link} from 'react-router-dom';

export class Courses extends React.Component {
    componentWillMount(){
        this.props.getCourses();
    }
    render(){
        return (
            <div> 
                <h1>Courses</h1>
                <p></p>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Class</th>
                            <th>Teacher</th>
                            <th>Dates</th>
                            <th>Times</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.courses.map((course,index)=>{
                            return (
                                <CourseItem 
                                    course = {course}
                                    key ={index}
                                    classes = {this.props.classes}
                                    teachers = {this.props.teachers}
                                />
                            );
                        })}
                    </tbody>
                </table>
                <Link to='/admin/courses/add'> <button className="btn btn-success"> Add Course </button> </Link>
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
        getCourses: () => {
            dispatch(getCourses());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Courses);