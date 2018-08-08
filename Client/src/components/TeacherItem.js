import React from 'react';

export  class TeacherItem extends React.Component {
    render(){
        return (
            <tr>
                <td>{this.props.teacher.id}</td>
                <td>{this.props.teacher.firstName}</td>
                <td>{this.props.teacher.lastName}</td>
                <td><button 
                    type="button" 
                    data-toggle="modal" 
                    data-target={"#editTeacher" + this.props.teacher.id}
                    className="btn btn-primary btn-sm"
                    >
                    Edit
                    </button>
                    <button 
                        className="btn btn-danger btn-sm"
                        data-toggle="modal"
                        data-target={"#deleteTeacher" + this.props.teacher.id }                  >
                    Delete
                    </button>
                </td>
                <div id={"deleteTeacher"+this.props.teacher.id} className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Deleting Teacher</h4>
                            </div>
                            <div className="modal-body">
                                <p> Are you sure about  deleting {this.props.teacher.firstName} {this.props.teacher.lastName} from teachers? </p>
                            </div>
                            <div className="modal-footer">
                                <button onClick={() => this.props.handleDelete(this.props.teacher)} type="button" className="btn btn-danger" data-dismiss="modal"> Delete </button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id={"editTeacher"+ this.props.teacher.id} className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Editing Teacher</h4>
                            </div>
                            <div className="modal-body">
                                <form>
                                    First name
                                    <input type="text" name="firstName" value={this.props.firstName} onChange={this.props.handleChange} className="form-control" placeholder={this.props.teacher.firstName}/>
                                    Last name
                                    <input type="text" name="lastName" value={this.props.lastName} onChange={this.props.handleChange} className="form-control" placeholder={this.props.teacher.lastName}/>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" disabled={!this.props.inputValidation(this.props.firstName,this.props.lastName)}className="btn btn-primary" data-dismiss="modal" 
                                onClick={() => this.props.handleEdit(this.props.firstName, this.props.lastName, this.props.teacher.id)}> Edit </button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </tr>
        );
    }
}

export default TeacherItem;