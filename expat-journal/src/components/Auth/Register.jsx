import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { withFormik, Form, Field } from "formik";
import { signup } from "../../actions"
import { LoginVideoBackground, LoginBackgroundContainer, LoginContainerDiv, FormContainerDiv, AwesomeButton, AwesomeInput, AwesomeSubHeader } from "../styles";
import Video from "../../media/videos/vid3.mp4";
import Logo from "../../media/logos/large_with_tagline.png";
import { LogoAnimate } from "../styles"


const RegisterPage = ({ touched, errors, isSubmitting, handleSubmit }) => {
    return (
        <LoginVideoBackground>
        <video style={{ zIndex: -100, position: "fixed", width:"100%" }} autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
        <LoginBackgroundContainer>
      <LoginContainerDiv>
          <LogoAnimate>
            <img src={Logo} alt="logo" style={{  width:"80%" }} />
            </LogoAnimate>
        </LoginContainerDiv>
      <FormContainerDiv>
            <Form onSubmit={handleSubmit} className="register">
                <AwesomeSubHeader>Sign Up</AwesomeSubHeader>

                <AwesomeInput
                    className="input"
                    name="username"
                    type="username"
                    placeholder="Username"
                ></AwesomeInput>
                {touched.username && errors.username && <span>{" " + errors.username}</span>}
                <br />
                <AwesomeInput
                    className="input"
                    name="password"
                    type="password"
                    placeholder="Password"
                ></AwesomeInput>
                {touched.password && errors.password && (
                    <span>{" " + errors.password}</span>
                )}
                <br />
                <AwesomeButton className="button" disabled={isSubmitting}>
                    Submit
      </AwesomeButton>
      <p>
                    Have an account? <Link to="/login">Log In!</Link>
                </p>
            </Form>
            </FormContainerDiv>
      </LoginBackgroundContainer>
    </LoginVideoBackground>
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

    }
})(RegisterPage);

export default FormikRegisterPage;
