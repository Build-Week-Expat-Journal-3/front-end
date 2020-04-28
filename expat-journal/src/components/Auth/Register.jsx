import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import { Styles } from './Styles';
import { withFormik, Form, Field } from "formik";
import { signup } from "../../actions"

const RegisterPage = ({ touched, errors, isSubmitting, handleSubmit }) => {
    return (

        <Styles>
            <Form onSubmit={handleSubmit} className="register">
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

    }),
    handleSubmit(values, bag) {
        const newUser = {
            username: values.username,
            password: values.password
        }
        signup(bag.props.dispatch, newUser)
        // axios.post("https:expat-journal3.herokuapp.com/api/auth/register", newUser)
        //     .then(response => {
        //         console.log(response);
        //         bag.props.pushUser("/");
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })
    }
})(RegisterPage);

export default FormikRegisterPage;
