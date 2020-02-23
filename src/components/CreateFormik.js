import React from 'react';
import { withFormik, Form, Field } from 'formik';
import callApi from '../api/apiCaller';

const MyForm = props => {
    const { touched, errors, handleBlur } = props;
    return (
        <Form>
            <div className="form-group">
                <label>Name</label>
                <Field type="text" onBlur={handleBlur} name="name" className="form-control"/>
                {errors.name && touched.name && <div id="feedback">{errors.name}</div>}
            </div>
            
            <div className="form-group">
                <label>School</label>
                <Field type="text" onBlur={handleBlur} name="school" className="form-control"/>
                {errors.school && touched.school && <div id="feedback">{errors.school}</div>}
            </div>

            <div className="form-group">
                <label>Email</label>
                <Field type="text" onBlur={handleBlur} name="email" className="form-control"/>
                {errors.email && touched.email && <div id="feedback">{errors.email}</div>}
            </div>

            <div className="form-group">
                <label>Status</label>
                <Field component="select" name="status" className="form-control">
                    <option value={true}>Intern</option>
                    <option value={false}>Fresher</option>
                </Field>
                {errors.status && touched.status && <div id="feedback">{errors.status}</div>}
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </Form>
    )
};

const CreateFormik = withFormik({
    mapPropsToValues: ({ name, school, email, status }) => ({ 
        name: name || "",
        school: school || "",
        email: email || "",
        status: status || true  
    }),

    // Custom sync validation
    validate: values => {
        const errors = {};

        if (!values.name) {
            errors.name = 'Required';
        }
        if (!values.school) {
            errors.school = 'Required';
        }
        if (!values.email) {
            errors.email = 'Required';
        }
        if (!values.status) {
            errors.status = 'Required';
        }

        return errors;
    },

    handleSubmit: (values) => {
        callApi("interns", "POST", values).then(res => {
            console.log(res.data);
        })
    },

    displayName: 'BasicForm',
})(MyForm);

export default (CreateFormik);
