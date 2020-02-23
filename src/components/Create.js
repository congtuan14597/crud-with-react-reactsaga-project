import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';
import { actAddIntern } from "./../actions/index";
import { connect } from "react-redux";
import Form from './Form';

class Create extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         id: "",
    //         name: "",
    //         school: "",
    //         email: "",
    //         status: true
    //     }
    // }

    // onChange = (event) => {
    //     var target = event.target;
    //     var name = target.name;
    //     var value = target.value;
    //     this.setState({
    //         [name]: value
    //     });
    // }

    // onAddIntern = () => {
    //     var { name, school, email, status } = this.state;
    //     var intern = {
    //         name: name,
    //         school: school,
    //         email: email,
    //         status: status
    //     }
    //     // callApi("interns", "POST", intern).then(res => {
    //     //     this.props.onAddIntern(res.data.data)//lay du lieu tren server luu vao store 
    //     // })
    //     this.props.onAddIntern(intern);
    // }

    // onSubmit = (values) => {
    //     this.props.onAddIntern(values);
    // }

    render() {
        return (
            <div>
                <div>
                    <Title title="Create Intern"></Title>
                </div>  

                {/* <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input onChange={this.onChange} value={ this.state.name } name="name" type="text" className="form-control" placeholder="Enter name" />
                    </div>

                    <div className="form-group">
                        <label>School</label>
                        <input onChange={this.onChange} value={ this.state.school } name="school" type="text" className="form-control" placeholder="Enter School" />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.onChange} value={ this.state.email } name="email" type="text" className="form-control" placeholder="Enter Email" />
                    </div>

                    <div className="form-group">
                        <label>Status</label>
                        <select onChange={this.onChange} value={ this.state.status } className="form-control" name="status">
                            <option value={true}>Intern</option>
                            <option value={false}>Fresher</option>
                        </select>
                    </div>
                    
                    <Link to={"/interns"} className="btn btn-primary" onClick={ this.onAddIntern }>New Intern</Link>
                    <Link to={"/interns"} className="btn btn-danger">Cancel</Link>
                </form> */}
                <Form onSubmit={ this.onSubmit }></Form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddIntern: (intern) => {
            dispatch(actAddIntern(intern));
        }
    }
}

export default connect(null, mapDispatchToProps)(Create);
