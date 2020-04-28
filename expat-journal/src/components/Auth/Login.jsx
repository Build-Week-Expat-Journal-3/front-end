import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { withFormik, Form, Field } from "formik";
import { Styles } from './Styles'

const LoginPage = ({ errors, touched, isSubmitting }) => {



    return (
        <Styles>
            <Form className="login">
                <h5 className="loginTitle">Log in</h5>
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
                <button type="submit" className="loggInButton" disabled={isSubmitting}>
                    Submit
      </button>
                <p className="change">
                    <Link to="/register">Create Account </Link>
                </p>
            </Form>
        </Styles>
    );
};

const FormikLoginPage = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || "",
            password: password || ""
        };
    },
    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email("Email is not valid.")
            .required("Email is required."),
        password: Yup.string()
            .min(4)
            .required()
    }),
    handleSubmit(values, bag) {

        console.log(values);
        axios.post("https:expat-journal3.herokuapp.com/api/auth/login", values)
            .then(response => {
                console.log(response);
                localStorage.setItem("token", response.data.token);
                bag.props.pushUser("/tasks");
            })
            .catch(error => {
                console.log(error);
            })
    }
})(LoginPage);

export default FormikLoginPage;
