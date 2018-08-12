import React from 'react';
import CourseForm from '../../components/CourseComponents/CourseForm';

export class CourseEdit extends React.Component {
    render() {
        return (
            <div> 
                <h1>Editing Course</h1> 
                <CourseForm />
            </div>
        );
    }
}

export default CourseEdit;