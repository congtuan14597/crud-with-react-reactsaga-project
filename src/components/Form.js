import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { actAddIntern } from "./../actions/index";

class Form extends Component {
    handleSubmitForm = data => {
        this.props.onAddIntern(data);
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

Form = reduxForm({
    form: "interns"
})(Form)

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddIntern: (intern) => {
            dispatch(actAddIntern(intern));
        }
    }
}

export default connect(null, mapDispatchToProps)(Form);
