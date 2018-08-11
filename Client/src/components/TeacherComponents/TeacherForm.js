import React from 'react';
import {Link} from 'react-router-dom';


export class TeacherForm extends React.Component {
    constructor(){
        super();
        this.state = {
            firstName: "",
            lastName: ""
        }
    }

    componentDidMount(){
        if(this.props.handleEdit){
            this.props.getTeacher(this.props.teacherId);
        }
    }

    componentDidUpdate(){
        if (this.props.currentTeacher) {
            this.setState({
                firstName: this.props.currentTeacher.firstName,
                lastName: this.props.currentTeacher.lastName
            });
            this.props.clearCurrentTeacher()
        }
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
            this.props.handleAdd(this.state.firstName,this.state.lastName);
        } else {
            this.props.handleEdit(this.state.firstName,this.state.lastName,this.props.teacherId);
        }
    }
    validateInput(firstName,lastName){
        return firstName.length>=3 && firstName.length<=60 && lastName.length>=3 && lastName.length<=60;
    }
    render(){
        return(
            <div> 
                <form>
                    First name
                    <input type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName}className="form-control" placeholder="First name"/>
                    Last name
                    <input type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName} className="form-control" placeholder="Last name"/>
                </form>
                <Link to='/admin/teachers/'><button type="button" disabled={!this.validateInput(this.state.firstName,this.state.lastName)} onClick={this.handleClick} className="btn btn-primary"> Save </button></Link>
                <Link to="/admin/teachers/"><button type="button"  className="btn btn-default">Cancel</button></Link>
                
            </div>
        );
    }
}

export default TeacherForm;