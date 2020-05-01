import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { withFormik, Form, Field } from "formik";
import { login } from "../../actions";
import { LoginVideoBackground, LoginBackgroundContainer, LoginContainerDiv, FormContainerDiv, AwesomeButton, AwesomeInput, AwesomeSubHeader } from "../styles";
import Video from "../../media/videos/vid.mp4";
import Logo from "../../media/logos/large_with_tagline.png";

const LoginPage = ({ errors, touched, isSubmitting, handleSubmit }) => {
  return (
    <LoginVideoBackground>
      <video style={{ zIndex: -100, position: "fixed", width:"100%" }} autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video>
      <LoginBackgroundContainer>
      <LoginContainerDiv>
            <img src={Logo} alt="logo" style={{  width:"80%" }} />
        </LoginContainerDiv>
      <FormContainerDiv>
        <Form onSubmit={handleSubmit}>
          <AwesomeSubHeader>Log in</AwesomeSubHeader>
          <AwesomeInput
            className="input"
            name="username"
            type="username"
            placeholder="Username"
          ></AwesomeInput>
          {touched.username && errors.username && (
            <span>{" " + errors.username}</span>
          )}
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
          <AwesomeButton
            onClick={handleSubmit}
            type="submit"
            className="loggInButton"
            disabled={isSubmitting}
          >
            Submit
          </AwesomeButton>
          <p>
            No Account? No problem!!!{" "}
            <Link to="/register">Create an Account </Link>
          </p>
        </Form>
      </FormContainerDiv>
      </LoginBackgroundContainer>
    </LoginVideoBackground>
  );
};

const FormikLoginPage = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || "",
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Email is required."),
    password: Yup.string().min(2).required(),
  }),
  handleSubmit(values, bag) {
    login(bag.props.dispatch, values);
  },
})(LoginPage);

export default FormikLoginPage;
