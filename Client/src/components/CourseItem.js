import React from 'react';

export class CourseItem extends React.Component {
    getTeacherNameFromCourse(course){
        if(this.props.teachers){
            const teachers = this.props.teachers;
            for(let i=0; teachers && i < teachers.length; ++i){
                if (course.teacherId == teachers[i].id){
                    return teachers[i].firstName + " " + teachers[i].lastName;
                }
            }
        }
    }
    getClassNameFromCourse(course){
        if(this.props.classes){
            const classes = this.props.classes;
            for(let i=0; classes && i < classes.length; ++i){
                if (course.classId == classes[i].id){
                    return classes[i].name;
                }
            }
        }
    }
    render(){
        return (
            <tr>
                <td>{this.props.course.id} </td>
                <td>{this.props.course.name}</td>
                <td>{this.getClassNameFromCourse(this.props.course)}</td>
                <td>{this.getTeacherNameFromCourse(this.props.course)} </td>
                <td> 01/09/2018 {this.props.course.startingDate} - {this.props.course.endingDate} 26/12/2018</td>
                <td> 11:00 - 12:30</td>
                <td> 
                    <button 
                        className="btn btn-primary"
                    > Edit 
                    </button> 
                    <button 
                        className="btn btn-danger"
                    > Delete 
                    </button> 
                </td>
            </tr>
        );
    }
}

export default CourseItem;