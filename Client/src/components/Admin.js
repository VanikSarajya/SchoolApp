import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Classes from '../containers/Classes';
import Teachers from '../containers/Teachers';
import Students from '../containers/Students';
import Courses from '../containers/Courses';
import AddCourse from '../containers/AddCourse';
import TeacherAdd from '../containers/TeacherAdd';
import TeacherEdit from '../containers/TeacherEdit';
import '../assets/styles/admin.css';

export class Admin extends React.Component {
    render(){
        return (
            <Router>
                <div className="admin">
                    <div className="sidebar">
                        <Navbar />
                    </div>
                    <div className="content">
                        <Switch>
                            <Route path="/admin/classes" exact component={Classes}/> 
                            <Route path="/admin/students" exact component={Students}/>
                            <Route path="/admin/teachers" exact component={Teachers}/>
                            <Route path="/admin/teachers/add" exact component={TeacherAdd} />
                            <Route path="/admin/teachers/edit/:id" exact component={TeacherEdit}/>
                            <Route path="/admin/courses" exact component={Courses} />
                            <Route path="/admin/courses/add" exact component={AddCourse} />
                        </Switch> 
                    </div> 
                </div>       
            </Router>           
        );
    }
}

export default Admin;