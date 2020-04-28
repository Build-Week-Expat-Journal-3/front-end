import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import { Styles } from './Styles';
import { withFormik, Form, Field } from "formik";

const RegisterPage = ({ touched, errors, isSubmitting }) => {
    return (

        <Styles>
            <Form className="register">
                <h5>Sign Up</h5>

                <Field
                    className="input"
                    name="username"
                    type="username"
                    placeholder="username"
                ></Field>
                {touched.username && errors.username && <span>{" " + errors.username}</span>}
                <br />
                <Field
                    className="input"
                    name="password"
                    type="password"
                    placeholder="Password"
                ></Field>
                {touched.password && errors.password && (
                    <span>{" " + errors.password}</span>
                )}
                <br />
                <button className="button" disabled={isSubmitting}>
                    Submit
      </button>
                <p className="change">
                    <Link to="/">Login</Link>
                </p>
            </Form>
        </Styles>
    );
};

const FormikRegisterPage = withFormik({
    mapPropsToValues({ username, password, }) {
        return {
            username: username || "",
            password: password || "",

        };
    },
    validationSchema: yup.object().shape({
        username: yup.string()
            .required("Username is required."),
        password: yup.string()
            .min(4)
            .required(),
        fname: yup.string().required("First name is required."),
        lname: yup.string().required("Last name is required.")
    }),
    handleSubmit(values, bag) {
        const newUser = {
            username: values.username,
            password: values.password
        }
        axios.post("https://quarantine-productivity.herokuapp.com/api/auth/register", newUser)
            .then(response => {
                console.log(response);
                bag.props.pushUser("/");
            })
            .catch(error => {
                console.log(error);
            })
    }
})(RegisterPage);

export default FormikRegisterPage;
