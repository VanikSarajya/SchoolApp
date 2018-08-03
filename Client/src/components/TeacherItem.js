import React from 'react';

export default class TeacherItem extends React.Component {
    render(){
        return (
            <tr>
                <td>1</td>
                <td>John</td>
                <td>Doe</td>
                <td><button className="btn-primary">Edit</button><button className="btn-danger">Delete</button></td>
            </tr>
        );
    }
}