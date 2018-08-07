import React from 'react';

export class ClassItem extends React.Component {
    constructor(){
        super();
    }
    render(){
        return (
            <tr> 
                <td> {this.props.class.id} </td>
                <td> {this.props.class.name} </td>
                <td> {this.props.class.teacherId} </td>
                <td> <button 
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target={"#editClass" + this.props.class.id}
                    > Edit 
                    </button> 
                    <button 
                        className="btn btn-danger"
                        data-toggle="modal"
                        data-target={"#deleteClass" + this.props.class.id}
                    > Delete 
                    </button> 
                </td>
                <div id={"deleteClass"+this.props.class.id} className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Deleting Class</h4>
                            </div>
                            <div className="modal-body">
                                <p> Are you sure about  deleting {this.props.class.name} class ? </p>
                            </div>
                            <div className="modal-footer">
                                <button onClick={() => this.props.handleDelete(this.props.class)} type="button" className="btn btn-danger" data-dismiss="modal"> Delete </button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id={"editClass" + this.props.class.id}className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Editing Class</h4>
                        </div>
                        <div className="modal-body">
                            <form>
                                Name
                                <input type="text" name="name" onChange={this.props.handleChange} value={this.props.name} placeholder={this.props.class.name} className="form-control"/>
                                Teacher
                                <select name="teacherId" value={this.props.teacherId} onChange={this.props.handleChange} className="form-control">
                                    <option>{this.props.class.id}</option>
                                    {this.props.teachers.map((teacher, index) => {
                                        return (
                                            <option> {teacher.id}</option>
                                        );
                                        
                                    })}
                                </select>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={()=> this.props.handleEdit(this.props.class.id, this.props.name, this.props.teacherId)} className="btn btn-primary"  data-dismiss="modal" > Edit </button>
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