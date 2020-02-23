// import React from 'react';
// import { withFormik, Form, Field } from 'formik';

// const MyForm = props => {
//     const { touched, errors, handleBlur } = props;
//     console.log(props.match.params.id)
//     return (
//         <Form>
//             <div className="form-group">
//                 <label>Name</label>
//                 <Field type="text" onBlur={handleBlur} name="name" className="form-control"/>
//                 {errors.name && touched.name && <div id="feedback">{errors.name}</div>}
//             </div>
            
//             <div className="form-group">
//                 <label>School</label>
//                 <Field type="text" onBlur={handleBlur} name="school" className="form-control"/>
//                 {errors.school && touched.school && <div id="feedback">{errors.school}</div>}
//             </div>

//             <div className="form-group">
//                 <label>Email</label>
//                 <Field type="text" onBlur={handleBlur} name="email" className="form-control"/>
//                 {errors.email && touched.email && <div id="feedback">{errors.email}</div>}
//             </div>

//             <div className="form-group">
//                 <label>Status</label>
//                 <Field component="select" name="status" className="form-control">
//                     <option value={true}>Intern</option>
//                     <option value={false}>Fresher</option>
//                 </Field>
//                 {errors.status && touched.status && <div id="feedback">{errors.status}</div>}
//             </div>

//             <button type="submit" className="btn btn-primary">Submit</button>
//         </Form>
//     )
// };

// const EditFormik = withFormik({
//     mapPropsToValues: ({ name, school, email, status }) => ({ 
//         name: name || "",   
//         school: school || "",
//         email: email || "",
//         status: status || true  
//     }),

//     // Custom sync validation
//     validate: values => {
//         const errors = {};

//         if (!values.name) {
//             errors.name = 'Required';
//         }
//         if (!values.school) {
//             errors.school = 'Required';
//         }
//         if (!values.email) {
//             errors.email = 'Required';
//         }
//         if (!values.status) {
//             errors.status = 'Required';
//         }

//         return errors;
//     },

//     handleSubmit: (values) => {
//         console.log(values);
//     },

//     displayName: 'BasicForm',
// })(MyForm);

// export default (EditFormik);

import React, { Component } from 'react';
import { withFormik } from 'formik';
import callApi from '../api/apiCaller';

class EditFormik extends Component {

    componentDidMount() {
        var { id } = this.props.match.params;
        callApi(`interns/${id}`, "GET", null).then(res => {
            var { name, school, email, status } = res.data.data;
            this.props.values.name = name;
            this.props.values.school = school;
            this.props.values.email = email;
            this.props.values.status = status;
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        var { id } = this.props.match.params;
        var { name, school, email, status } = this.props.values;
        var intern = {
            id: id,
            name: name,
            school: school,
            email: email,
            status: status
        }
        callApi(`interns/${id}`, "PUT", intern).then(res => {
            console.log(res.data);
        })
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <label>Name</label>
                    <input value={ this.props.values.name } onChange={this.props.handleChange} name="name" component="input" type="text" className="form-control"/>
                </div>

                <div className="form-group">
                    <label>School</label>
                    <input value={ this.props.values.school } onChange={this.props.handleChange} name="school" component="input" type="text" className="form-control"/>
                </div>
                
                <div className="form-group">
                    <label>Email</label>
                    <input value={ this.props.values.email } onChange={this.props.handleChange} name="email" component="input" type="email" className="form-control"/>
                </div>

                <div className="form-group">
                    <label>Status</label>
                    <input value={ this.props.values.status } onChange={this.props.handleChange} name="status" component="input" type="text" className="form-control"/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

const FormikForm = withFormik({
    mapPropsToValues() {
        return {
            name: "",
            school: "",
            email: "",
            status: ""
        }
    }
})(EditFormik)

export default FormikForm;
