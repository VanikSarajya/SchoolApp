import React from 'react';
import '../assets/styles/login.css'

export class Login extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateForm() {
        const {email, password} = this.state;
        let validEmail = false;
        let validPassword = false;
        if (email.length>=5 && email.length<=40){
            validEmail = true;
        }
        if (password.length >= 6){
            validPassword = true
        }

        return validEmail && validPassword;
    }

    handleSubmit(event) {
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({[name]: value});
    }

    render() {
        return(
            <div className="form">  
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>
                            Email adress
                        </label>    
                        <input className="form-control" type="text" name="email" onChange={this.handleChange} value={this.state.email} placeholder="Email"/>
                    </div> 
                    <div className="form-group">
                        <label>
                            Password
                        </label>    
                        <input className="form-control" type="password" name="password" onChange={this.handleChange}  value={this.state.password} placeholder="Password"/>
                    </div>
                    <input className="btn btn-primary" disabled={!this.validateForm()} type="submit" value="Log-In" />
                </form>  
            </div>
        );
    }
}

export default Login;
