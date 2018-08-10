import React from 'react';
import {connect} from 'react-redux';
import ClassForm from '../components/ClassForm';
import {editClass, getClass, clearCurrentClass} from '../actions/classAction';

export class ClassEdit extends React.Component {
    render(){
        return (
            <div>
                <h1> Editing Class </h1>
                <ClassForm 
                    currentClass = {this.props.currentClass}
                    handleEdit = {this.props.handleEdit}
                    getClass = {this.props.getClass}
                    classId = {this.props.match.params.id}
                    teachers = {this.props.teachers}
                    classes = {this.props.classes}
                    clearCurrentClass = {this.props.clearCurrentClass}
                />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return{
        currentClass: state.classReducer.currentClass,
        teachers: state.teacherReducer.teachers,
        classes: state.classReducer.classes

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getClass: (id) => {
            dispatch(getClass(id));
        },
        handleEdit: (id,name, teacherId) => {
            dispatch(editClass(id ,name, teacherId));
        },
        clearCurrentClass: ()=> {
            dispatch(clearCurrentClass());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ClassEdit);