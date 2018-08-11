import React from 'react';
import {Link} from 'react-router-dom';

export class StudentForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            classId: "",
        }
    }

    componentDidMount(){
        if(this.props.studentId){
            this.props.getStudent(this.props.studentId)
        }
    }

    componentDidUpdate(){
        if (this.props.currentStudent) {
            this.setState({
                firstName: this.props.currentStudent.firstName,
                lastName: this.props.currentStudent.lastName,
                classId: this.props.currentStudent.classId
            });
            this.props.clearCurrentStudent()
        }
    }

    inputValidation (firstName, lastName, clas) {
        return (firstName.length>=3 && firstName.length<=60) && (lastName.length>=3 && lastName.length<=60) && clas;
    }
    handleChange = (event) => {
        const target = event.target;
        const {name,value} = target;
        this.setState({
            [name]: value
        })
    }
    handleClick = () => {
        if (this.props.handleAdd){
            this.props.handleAdd(this.state.firstName,this.state.lastName, this.state.classId);
        } else {
            this.props.handleEdit(this.props.studentId, this.state.firstName, this.state.lastName, this.state.classId);
        }
    }
    render(){
        return (
            <div> 
                <form>
                    First Name
                    <input type="text" value={this.state.firstName} onChange={this.handleChange} name="firstName" className="form-control"/>
                    Last Name
                    <input type="text" value={this.state.lastName} onChange={this.handleChange} name="lastName"  className="form-control"/>
                    Class 
                    <select name="classId" value={this.state.classId} onChange={this.handleChange} className="form-control">
                        <option>Select Class </option>
                        {this.props.classes.map((clas)=> {
                            return (
                                <option value={clas.id}> {clas.name} </option>
                            )
                        })}
                    </select>
                </form>
                <Link to='/admin/students'><button disabled={!this.inputValidation(this.state.firstName,this.state.lastName,this.state.classId)} onClick={this.handleClick} type="button" className="btn btn-primary"> Save </button></Link>
                <Link to='/admin/students'><button type="button" className="btn btn-default">Cancel</button></Link>
            </div>
        )
    }
}

export default StudentForm;