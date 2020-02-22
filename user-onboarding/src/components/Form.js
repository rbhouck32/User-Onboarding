import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import { StyledLabel, StyledField, StyledDropDown, FormStyle } from "./Style";

const NewForm = ({ touched, errors, status }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    status && setUser(status);
  }, [status]);

  return (
    <FormStyle>
      <Form className="form">
        <h2>Please Fill Out</h2>
        <StyledLabel>
          First Name:
          <StyledField type="text" name="firstName" placeholder="First Name" />
          {touched.firstName && errors.firstName && (
            <p className="errors">{errors.firstName}</p>
          )}
        </StyledLabel>

        <StyledLabel>
          Last Name:
          <StyledField type="text" name="lastName" placeholder="Last Name" />
          {touched.lastName && errors.lastName && (
            <p className="errors">{errors.lastName}</p>
          )}
        </StyledLabel>
        <StyledLabel>
          Email:
          <StyledField type="text" name="email" placeholder="Email" />
          {touched.email && errors.email && (
            <p className="errors">{errors.email}</p>
          )}
        </StyledLabel>
        <StyledLabel>
          Password:
          <StyledField type="password" name="password" placeholder="Password" />
          {touched.password && errors.password && (
            <p className="errors">{errors.password}</p>
          )}
        </StyledLabel>
        <StyledLabel>
          Role:
          <StyledDropDown component="select" name="role">
            <option>Choose an Option</option>
            <option value="Front-End-Developer">Front-End Developer</option>
            <option value="Back-End-Developer">Back-End Developer</option>
            <option value="Data-Science">Data Science</option>
            <option value="UI/UX">UI Designer</option>
          </StyledDropDown>
        </StyledLabel>
        <StyledLabel>
          Terms of Service
          <StyledField type="checkbox" name="terms" />
          <span className="checkmark" />
        </StyledLabel>
        <button type="submit">Submit!</button>
      </Form>
      <div className="card-returned">
        {user.firstName && (
          <div key={user.id}>
            <p>Name: {user.firstName}</p>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
          </div>
        )}
      </div>
    </FormStyle>
  );
};

export default withFormik({
  mapPropsToValues: props => ({
    firstName: props.firstName || "",
    lastName: props.lastName || "",
    email: props.email || "",
    password: props.email || "",
    terms: false,
    role: props.role || ""
  }),
  validationSchema: yup.object().shape({
    firstName: yup.string().required("Name is Required"),
    lastName: yup.string().required("Name is Required"),
    password: yup.string().required("Password is Required"),
    email: yup
      .string()
      .email()
      .required("Valid email is required")
  }),
  handleSubmit: (values, { resetForm, setStatus }) => {
    // console.log("Submitting!", formikBag)
    // POST body === {}
    axios
      .post("https://reqres.in/api/users/", values)
      .then(response => {
        console.log(response);
        setStatus(response.data);
        resetForm();
      })
      .catch(err => console.log(err.response));
  }
})(NewForm);
