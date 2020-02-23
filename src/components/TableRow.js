import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actDeleteIntern } from '../actions';
import { connect } from 'react-redux';

class TableRow extends Component {

    onDelete = () => {
        // if(confirm("Are you sure?")) { //eslint-disable-line
        //     callApi(`interns/${this.props.obj.id}`, "DELETE", null).then(console.log("Deleted"))
        // }
        this.props.onDeleteIntern(this.props.obj.id);
    }

    render() {
        return (
            <tr>
                <td> { this.props.index + 1 } </td>
                <td> { this.props.obj.name } </td>
                <td> { this.props.obj.school } </td>
                <td> { this.props.obj.email } </td>
                <td> { this.props.obj.status === "false" ? "Fresher" : "Intern" } </td>
                <td> 
                    <Link to={ "/edit/" + this.props.obj.id } className="btn btn-warning">Edit</Link>
                </td>
                <td> 
                    <button type="button" className="btn btn-info">Show</button> 
                </td>
                <td> 
                    <Link to={ "/interns" } onClick={ this.onDelete } className="btn btn-danger">Delete</Link>
                </td>
            </tr>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteIntern: (id) => {
            dispatch(actDeleteIntern(id));
        }
    }
}

export default connect(null, mapDispatchToProps)(TableRow);
