import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userPostFetch } from "./../actions/index";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            phone: ""
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onCreateUser(this.state);
    }
    
    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <label>Name</label>
                    <input onChange={this.onChange} value={ this.state.name } name="username" type="text" className="form-control" placeholder="Enter name" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input onChange={this.onChange} value={ this.state.password } name="password" type="password" className="form-control" placeholder="Enter School" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input onChange={this.onChange} value={ this.state.email } name="email" type="text" className="form-control" placeholder="Enter Email" />
                </div>

                <div className="form-group">
                    <label>Phone</label>
                    <input onChange={this.onChange} value={ this.state.phone } name="phone" type="text" className="form-control" placeholder="Enter Email" />
                </div>

                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onCreateUser: (user) => {
            dispatch(userPostFetch(user))
        }
    }
}

export default connect(null, mapDispatchToProps)(Signup);
