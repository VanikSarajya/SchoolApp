import React from 'react';
import {Link} from 'react-router-dom';

export class ClassForm extends React.Component {
    constructor(){
        super();
        this.state = {
            name: "",
            teacherId: ""
        }
    }

    componentDidMount(){
        if(this.props.handleEdit){
            this.props.getClass(this.props.classId);
        }
    }

    componentDidUpdate(){
        if (this.props.currentClass) {
            this.setState({
                name: this.props.currentClass.name,
                teacherId: this.props.currentClass.teacherId
            });
            this.props.clearCurrentClass()
        }
    }
    getOnlyFreeTeachers(teachers,classes){
        const freeTeachers = [];
        if(teachers && classes){
            for (let i=0; i < teachers.length; ++i){
                var matched = false;
                for(let j=0; j < classes.length; ++j){
                    if(teachers[i].id == classes[j].teacherId){
                        matched = true;
                    }
                }
                if(!matched){
                    freeTeachers.push(teachers[i]);
                }
            }
        }
        return freeTeachers;
    }
    handleChange = (event) => {
        const target = event.target;
        const {name,value} = target;
        this.setState({
            [name]: value
        })
    }
    handleClick = () => {
        if(this.props.handleAdd){
            this.props.handleAdd(this.state.name, this.state.teacherId);
        } else {
            this.props.handleEdit(this.props.classId, this.state.name, this.state.teacherId);
        }
    }
    inputValidation(name, teacher){
        return (name.length>=2 && name.length<=10) && (teacher);
    }
    render(){
        return (
            <div>
                <form>
                    Name
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control"/>
                    Teacher
                    <select name="teacherId" value={this.state.teacherId} onChange={this.handleChange} className="form-control">
                        <option>Select Teacher</option>
                        {this.props.teachers.map((teacher) => {
                            return (
                                <option value={teacher.id}> {teacher.firstName} {teacher.lastName} </option>
                            );
                        })}
                    </select>
                </form>
                <Link to="/admin/classes"><button type="button" disabled={!this.inputValidation(this.state.name,this.state.teacherId)} onClick ={this.handleClick} className="btn btn-primary"> Save </button></Link>
                <Link to="/admin/classes" ><button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button></Link>

            </div>
        );
    }
}

export default ClassForm;