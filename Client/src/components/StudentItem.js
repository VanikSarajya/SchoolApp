import React from 'react';

export class ClassItem extends React.Component {
    getClassNameFromStudent(student){
        if(this.props.classes){
            const {classes} = this.props;
            for(let i=0; classes && i <  classes.length; ++i){
                if (student.classId == classes[i].id){
                    return classes[i].name;
                }
            }
        }
    }
    render(){
        return (
            <tr> 
                <td> {this.props.student.id} </td>
                <td> {this.props.student.firstName} </td>
                <td> {this.props.student.lastName} </td>
                <td> {this.getClassNameFromStudent(this.props.student)} </td>
                <td> <button 
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target={"#editStudent" + this.props.student.id}
                    > Edit 
                    </button> 
                    <button 
                        className="btn btn-danger"
                        data-toggle="modal"
                        data-target={"#deleteStudent" + this.props.student.id}
                    > Delete 
                    </button> 
                </td>
                <div id={"deleteStudent"+this.props.student.id} className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Deleting Student</h4>
                            </div>
                            <div className="modal-body">
                                <p> Are you sure about  deleting {this.props.student.firstName} {this.props.student.lastName}  ? </p>
                            </div>
                            <div className="modal-footer">
                                <button onClick={() => this.props.handleDelete(this.props.student)} type="button" className="btn btn-danger" data-dismiss="modal"> Delete </button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div id={"editStudent" + this.props.student.id} className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Editing Student</h4>
                        </div>
                        <div className="modal-body">
                            <form>
                                First Name
                                <input type="text" name="firstName" onChange={this.props.handleChange} value={this.props.firstName} placeholder={this.props.student.firstName} className="form-control"/>
                                First Name
                                <input type="text" name="lastName" onChange={this.props.handleChange} value={this.props.lastName}  placeholder={this.props.student.lastName} className="form-control"/>
                                Select Class
                                <select name="classId" value={this.props.classId} onChange={this.props.handleChange}  className="form-control">
                                    <option>{this.getClassNameFromStudent(this.props.student)}</option>
                                    {this.props.classes.map((clas, index) => {
                                        return (
                                            <option value={clas.id}> {clas.name}</option>
                                        );
                                        
                                    })}
                                </select>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" disabled={!this.props.inputValidation(this.props.firstName,this.props.lastName,this.props.classId)} onClick={()=> this.props.handleEdit(this.props.student.id, this.props.firstName, this.props.lastName, this.props.classId)} className="btn btn-primary"  data-dismiss="modal" > Edit </button>
                            <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                        </div>
                        </div>
                    </div>
                </div>
            </tr>
        );

    }
}

export default ClassItem;