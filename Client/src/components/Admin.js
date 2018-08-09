import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Classes from '../containers/Classes';
import Teachers from '../containers/Teachers';
import Students from '../containers/Students';
import Courses from '../containers/Courses';
import AddCourse from '../containers/AddCourse';
import '../assets/styles/admin.css';

export class Admin extends React.Component {
    render(){
        return (
            <Router>
                <div className="admin">
                    <div className="sidebar">
                        <Navbar />
                    </div>
                    <Switch>
                        <Route path="/admin/classes" component={ () => {
                            return (
                                <div className="content">
                                    <Classes />
                                </div>
                            );
                        }}/> 
                        <Route path="/admin/students" component={ () => {
                            return (
                                <div className="content">
                                    <Students />
                                </div>
                            );
                        }}/>
                        <Route path="/admin/teachers" component={ () => {
                            return (
                                <div className="content">
                                    <Teachers />
                                </div>
                            );
                        }}/>
                        <Route path="/admin/courses" exact component={ () => {
                            return (
                                <div className="content">
                                    <Courses />
                                </div>
                            );
                        }}/>
                        <Route path="/admin/courses/add" component={() => {
                            return (
                                <div className="content">
                                    <AddCourse />
                                </div>    
                            );
                        }} />
                    </Switch>  
                </div>       
            </Router>           
        );
    }
}

export default Admin;