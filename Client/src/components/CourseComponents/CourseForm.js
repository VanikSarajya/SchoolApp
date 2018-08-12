import React from 'react';
import {Link} from 'react-router-dom';

export class CourseForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            classId: "",
            teacherId: "",
            startingDate: "",
            endingDate: "",
            startingTime: "",
            enddingTime: ""
        }
    }
    handleClick = () => {
        if(this.props.handleAdd){
            this.props.handleAdd(this.state.name,this.state.classId,this.state.teacherId,this.state.startingDate,this.state.endingDate,this.state.startingTime + ":00",this.state.enddingTime+ ":00");
        }
    }
    handleChange = (event) => {
        const target = event.target;
        const {name,value} = target;
        this.setState({
            [name]: value
        })
    }
    inputValidation = (name,classId,teacherId,startingDate,endingDate,startingTime,enddingTime) => {
        return name && classId && teacherId && startingDate && endingDate && startingTime && enddingTime;
    }
    render(){
        return(
            <div> 
                <form>
                    Name
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control"/>
                    Class 
                    <select name="classId" value={this.state.classId} onChange={this.handleChange} className="form-control"> 
                        <option> Select Class </option>
                        {this.props.classes.map(clas => {
                            return (
                                <option key={clas.id} value={clas.id}> {clas.name} </option>
                            )
                        })}
                    </select>
                    Teacher 
                    <select name="teacherId" value={this.state.teacherId} onChange={this.handleChange} className="form-control"> 
                        <option> Select Teacher </option>
                        {this.props.teachers.map(teacher=>{
                            return (
                                <option key={teacher.id} value={teacher.id}> {teacher.firstName} {teacher.lastName} </option>
                            )
                        })}
                    </select>
                    Starting Date
                    <input  name="startingDate" type="date" value={this.state.startingDate} onChange={this.handleChange} className="form-control"/>
                    Ending Date
                    <input  name="endingDate" type="date" value={this.state.endingDate} onChange={this.handleChange}  className="form-control" />
                    Starting Time
                    <input  name="startingTime" type="time" value={this.state.startingTime} onChange={this.handleChange}  className="form-control"/>
                    Ending Time 
                    <input name="enddingTime" type = "time" value={this.state.enddingTime}  onChange={this.handleChange} className="form-control" />
                </form>
                <Link to="/admin/courses" ><button onClick={this.handleClick} disabled={!this.inputValidation(this.state.name,this.state.classId,this.state.teacherId,this.state.startingDate,this.state.endingDate,this.state.startingTime,this.state.enddingTime)} className="btn btn-primary"> Save </button></Link>
                <Link to="/admin/courses" ><button className="btn btn-default"> Cancel </button></Link>
            </div>
        )
    }
}

export default CourseForm;