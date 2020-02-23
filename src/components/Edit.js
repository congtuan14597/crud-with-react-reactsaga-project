import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Title from './Title';
import { actGetIntern, actUpdateIntern } from "./../actions/index";
import { connect } from "react-redux";
import callApi from '../api/apiCaller';
import Form from './Form';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            school: "",
            email: "",
            status: true
        }
    }

    componentDidMount() {
        var { match } = this.props;
        if(match) {
            var id = match.params.id;
            callApi(`interns/${id}`, "GET", null).then(res => {
                var data = res.data.data;                
                this.props.onEditIntern(data);
            })
        }
    }

    // componentWillReceiveProps(nextProps) {
    //     if(nextProps && nextProps.internEditing) {
    //         var { internEditing } = nextProps;
    //         this.setState({
    //             id: internEditing.id,
    //             name: internEditing.name,
    //             school: internEditing.school,
    //             email: internEditing.email,
    //             status: internEditing.status
    //         });
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

    // onClick = () => {
    //     var { name, school, email, status } = this.state;
    //     var id = this.props.match.params.id;
    //     var intern = {
    //         id: id,
    //         name: name,
    //         school: school,
    //         email: email,
    //         status: status
    //     }
    //     // callApi(`interns/${id}`, "PUT", intern).then(res => {
    //     //     this.props.onUpdateIntern(intern);//luu vao store
    //     // })
    //     this.props.onUpdateIntern(intern);
    // }

    onSubmit = (values) => {
        // this.props.onUpdateIntern(values);
    }

    render() {
        return (
            <div>
                <div>
                    <Title title="Edit Intern"></Title>
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
                    
                    <Link to={"/interns"} className="btn btn-primary" onClick={ this.onClick }>Update Intern</Link>
                </form> */}
                <Form onSubmit={ this.onSubmit }></Form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        interns: state.interns,
        internEditing: state.internEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onEditIntern: (id) => {
            dispatch(actGetIntern(id));
        },
        onUpdateIntern: (intern) => {
            dispatch(actUpdateIntern(intern));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
