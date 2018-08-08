import React from 'react';
import {connect} from 'react-redux';
import {getClasses, deleteClass, addClass ,editClass} from '../actions/classaction';
import {getTeachers} from '../actions/teacheraction';
import ClassItem from '../components/ClassItem';

export class Classes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            teacherId: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const {name,value} = target;
        this.setState({
            [name]: value
        })
    }
    inputValidation(name, teacher){
        return (name.length>=2 && name.length<=10) && (teacher.length>0);
    }

    componentWillMount(){   
        this.props.getClasses();
        this.props.getTeachers();
    }

    getOnlyFreeTeachers(teachers,classes){
        const freeTeachers = [];
        if(teachers && classes){
            for (let i=0; i < teachers.length; ++i){
                var matched = false;
                for(let j=0; j < classes.length; ++j){
                    if(teachers[i].id == classes[j].teacherId){
                        matched = true;
                    }
                }
                if(!matched){
                    freeTeachers.push(teachers[i]);
                }
            }
        }
        return freeTeachers;
    }
    
    render () {
        return (
            <div className="classes">
                <h1>Classes</h1>
                <p>{this.props.message}</p>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Teacher</th>
                            <th> Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.classes.map((clas, index) => {
                            return (
                                <ClassItem 
                                    key = {index}
                                    class = {clas}
                                    handleDelete = {this.props.handleDelete}
                                    handleEdit = {this.props.handleEdit}
                                    handleChange = {this.handleChange}
                                    name = {this.state.name}
                                    teacherId = {this.state.teacherId}
                                    teachers = {this.props.teachers}
                                    classes= {this.props.classes}
                                    getOnlyFreeTeachers = {this.getOnlyFreeTeachers}
                                    inputValidation = {this.inputValidation}
                                />
                            );    
                        })}
                    </tbody>
                </table>
                <button data-toggle="modal" data-target="#addClass" type="button" className="btn btn-success">Add Class</button>
                <div id="addClass" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Adding Class</h4>
                        </div>
                        <div className="modal-body">
                            <form>
                                Name
                                <input type="text" name="name" onChange={this.handleChange} value={this.state.name}  className="form-control"/>
                                Teacher
                                <select name="teacherId" value={this.state.teacherId} onChange={this.handleChange} className="form-control">
                                    <option>Select Teacher</option>
                                    {this.getOnlyFreeTeachers(this.props.teachers,this.props.classes).map((teacher,index) => {
                                        return (
                                            <option value={teacher.id}> {teacher.firstName} {teacher.lastName}</option>
                                        );
                                    })}
                                </select>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" disabled={!this.inputValidation(this.state.name,this.state.teacherId)} onClick={()=> this.props.addClass(this.state.name, this.state.teacherId)} className="btn btn-primary"  data-dismiss="modal" > Add </button>
                            <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        classes: state.classReducer.classes,
        message: state.classReducer.message,
        teachers: state.teacherReducer.teachers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getClasses: () => {
            dispatch(getClasses());
        },
        handleDelete: (clas) => {
            dispatch(deleteClass(clas));
        },
        addClass: (name, teacherId) => {
            dispatch(addClass(name, teacherId));
        },
        handleEdit: (id,name, teacherId) => {
            dispatch(editClass(id ,name, teacherId));
        },
        getTeachers: () => {
            dispatch(getTeachers());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Classes);
 