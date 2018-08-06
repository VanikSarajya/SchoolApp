import React from 'react';
import {connect} from 'react-redux';
import {change, login, isValid} from '../actions/loginaction'
import '../assets/styles/login.css';

export class Login extends React.Component {
    render() {
        return(
            <div className="main">
                <div className="form">  
                    <form onSubmit={()=>{ this.props.login(this.props.email,this.props.password);}}>
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
                        <p className="message">{this.props.message}</p>
                    </form> 
                </div>
            </div>    
        );
    }
}

const mapStateToProps = (state) => {
    return {
        email:state.loginReducer.email,
        password:state.loginReducer.password,
        loggedIn:state.loginReducer.loggedIn,
        message: state.loginReducer.message
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (event) => {
            dispatch(change(event));
        },
        login: (email,password) => {
            dispatch(login(email,password));
        },
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
