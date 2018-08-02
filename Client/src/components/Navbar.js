import React from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

