import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getClasses, deleteClass} from '../../actions/classAction';
import {getTeachers} from '../../actions/teacherAction';
import ClassItem from '../../components/ClassComponents/ClassItem';

export class Classes extends React.Component {
    componentWillMount(){   
        this.props.getClasses();
        this.props.getTeachers();
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
                        {this.props.classes.map((clas) => {
                            return (
                                <ClassItem 
                                    key = {clas.id}
                                    class = {clas}
                                    handleDelete = {this.props.handleDelete}
                                />
                            );    
                        })}
                    </tbody>
                </table>
                <Link to="/admin/classes/add"><button type="button" className="btn btn-success">Add Class</button></Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.classReducer.message,
        classes: state.classReducer.classes
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
        getTeachers: () => {
            dispatch(getTeachers());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Classes);
 