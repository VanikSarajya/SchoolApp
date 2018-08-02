import React from 'react';
import {connect} from 'react-redux';
import { Link, Redirect,BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import {Error} from '../components/Error';
import {Home} from '../components/Home';
import {Admin} from '../components/Admin';
import {Classes} from './Classes';
export class App extends React.Component {
    render(){
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path ="/admin" exact render={() =>(
                            this.props.loggedIn ? (<Admin/>) : (<Redirect to="login"/>)
                        )

                        }/>
                        <Route  path="/login" render={() => (
                        this.props.loggedIn ? (<Redirect to="/admin"/>) : (<Login/>))}/>
                        <Route component={Error}/>
                    </Switch>
                </div>
            </Router> 
        );    
    }
}
const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn
    }
}
export default connect(mapStateToProps)(App);