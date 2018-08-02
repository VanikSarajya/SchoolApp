import React from 'react';
import {connect} from 'react-redux';
import {change, login, isValid} from '../actions/loginaction'
import '../assets/styles/login.css';

export class Login extends React.Component {
    render() {
        return(
            <div className="form">  
                <form onSubmit={(e)=>{e.preventDefault();this.props.login(this.props.email,this.props.password)}}>
                    <div className="form-group">
                        <label>
                            Email adress
                        </label>    
                        <input className="form-control" type="text" name="email" onChange={this.props.handleChange} value={this.props.email} placeholder="Email"/>
                    </div> 
                    <div className="form-group">
                        <label>
                            Password
                        </label>    
                        <input className="form-control" type="password" name="password" onChange={this.props.handleChange}  value={this.props.password} placeholder="Password"/>
                    </div>
                    <input className="btn btn-primary" disabled={!isValid(this.props.email,this.props.password)} type="submit" value="Log-In" />
                </form> 
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        email:state.email,
        password:state.password,
        loggedIn:state.loggedIn
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (event) => {
            dispatch(change(event));
        },
        login: (email,password) => {
            dispatch(login(email,password));
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
