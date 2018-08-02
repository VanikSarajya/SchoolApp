import React from 'react';
import {Navbar} from './Navbar';

export class Home extends React.Component {
    render(){
        return (
            <div>
                <Navbar />
                <h1> HOME </h1>
            </div>    
        );
    }
}