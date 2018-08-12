import React from 'react';
import {connect} from 'react-redux';
import {getCourses, deleteCourse} from '../../actions/courseAction';
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
                <p>{this.props.message}</p>
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
                        {this.props.courses.map((course)=>{
                            return (
                                <CourseItem 
                                    course = {course}
                                    key ={course.id}
                                    deleteCourse = {this.props.deleteCourse}
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
        message: state.courseReducer.message
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCourses: () => {
            dispatch(getCourses());
        },
        deleteCourse : (id) => {
            dispatch(deleteCourse(id));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Courses);