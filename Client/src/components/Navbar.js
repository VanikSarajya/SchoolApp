import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/pictures/logo.png';
import {logout} from '../actions/loginaction';

export class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <div>
                    <img className="logo" src={image}/> 
                    <ul>
                        <div className="bar">
                            <li><Link to="/admin/classes">Classes</Link></li>
                        </div>
                        <div className="bar">
                            <li><Link to="/admin/students">Students</Link></li>
                        </div>
                        <div className="bar">
                            <li><Link to="/admin/teachers">Teachers</Link></li>
                        </div>
                        <div className="bar">
                            <li><a href="/" onClick={logout}>Log out</a></li>
                        </div>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
