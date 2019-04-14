import React, { Component } from "react";
import { Row, Col } from "antd";
import { Field, reduxForm } from "redux-form";
// import { SelectField, TextField } from "redux-form-antd";
import { renderField } from "./FormComponents";

class SignupForm extends Component {
  render() {
    return (
      <div>
        <div>Signup</div>
        <Row>
          <Col xs={0} md={1} />
          <Col xs={24} md={22}>
            <form
              onSubmit={this.props.handleSubmit}
              style={{ marginBottom: 10 }}
            >
              <div>
                <Field
                  name="full_name"
                  label="full_name"
                  component={renderField}
                  type="text"
                  placeholder="Full Name"
                />

                <Field
                  name="password"
                  label="password"
                  component={renderField}
                  type="password"
                  placeholder="Password"
                />
              </div>

              <div className="signup-form-div clearfix">
                <input
                  type="submit"
                  className="register-button"
                  value="Register"
                  onClick={this.props.handleRegister}
                  style={{ margin: "20px 0px", background: "red" }}
                />
              </div>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}
const validate = values => {
  // const errors = {};
  // if (
  //   !values.address &&
  //   !values.full_name &&
  //   !values.business_name &&
  //   !values.business_email &&
  //   !values.password &&
  //   !values.phone
  // ) {
  //   errors.address = "Please fill all the fields";
  // }
  // console.log(errors);
  // return errors;
};
SignupForm = reduxForm({
  form: "userSignupForm",
  validate
})(SignupForm);
export default SignupForm;
