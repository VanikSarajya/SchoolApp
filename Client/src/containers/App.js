import React from 'react';
import {connect} from 'react-redux';
import { Redirect,BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Error from '../components/Error';
import Home from '../components/Home';
import Admin from '../components/Admin';
import { authenticate } from '../actions/loginaction';
export class App extends React.Component {
    componentWillMount() {
        this.props.authenticate(localStorage.getItem('jwtToken'));
    }
    render(){
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path ="/admin" render={() =>(
                            this.props.loggedIn ? (<Admin/>) : (<Redirect to="/login"/>)
                        )

                        }/>
                        <Route  path="/login" render={() => (
                        this.props.loggedIn ? (<Redirect to="/admin/classes"/>) : (<Login/>))}/>
                        <Route component={Error}/>
                    </Switch>
                </div>
            </Router> 
        );    
    }
}
const mapStateToProps = (state) => {
    return {
        loggedIn: state.loginReducer.loggedIn
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        authenticate: (token) => {
            dispatch(authenticate(token));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);