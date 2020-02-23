import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { actGetIntern, actUpdateIntern } from "./../actions/index";
import callApi from "./../api/apiCaller";

class EditForm extends Component {
    handleSubmitForm = (data) => {
        var { id } = this.props.match.params;
        var intern = {
            id: id,
            name: data.name,
            school: data.school,
            email: data.email,
            status: data.status
        }
        this.props.onUpdateIntern(intern);
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

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={ handleSubmit(this.handleSubmitForm) }>
                <div className="form-group">
                    <label>Name</label>
                    <Field name="name" component="input" type="text" className="form-control"/>
                </div>

                <div className="form-group">
                    <label>School</label>
                    <Field name="school" component="input" type="text" className="form-control"/>
                </div>
                
                <div className="form-group">
                    <label>Email</label>
                    <Field name="email" component="input" type="email" className="form-control"/>
                </div>

                <div className="form-group">
                    <label>Status</label>
                    <Field name="status" component="input" type="text" className="form-control"/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

EditForm = reduxForm({
    form: "interns"
})(EditForm)

const mapStateToProps = state => {
    return {
        interns: state.interns,
        internEditing: state.internEditing,
        initialValues: {
            name: state.internEditing.name,     
            school: state.internEditing.school, 
            email: state.internEditing.email, 
            status: state.internEditing.status
        }
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onEditIntern: (intern) => {
            dispatch(actGetIntern(intern));
        },
        onUpdateIntern: (intern) => {
            dispatch(actUpdateIntern(intern));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
