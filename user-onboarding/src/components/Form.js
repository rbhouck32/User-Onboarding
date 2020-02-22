import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import styled from "styled-components";
import "./Form.css";
const NewForm = ({ touched, errors, status }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    status && setUser(status);
  }, [status]);

  return (
    <div className="form-container">
      <Form className="form">
        <label className="text-input">
          First Name:
          <Field
            className="field-input"
            type="text"
            name="firstName"
            placeholder="First Name"
          />
          {touched.firstName && errors.firstName && (
            <p className="errors">{errors.firstName}</p>
          )}
        </label>

        <label className="text-input">
          Last Name:
          <Field
            className="field-input"
            type="text"
            name="lastName"
            placeholder="Last Name"
          />
          {touched.lastName && errors.lastName && (
            <p className="errors">{errors.lastName}</p>
          )}
        </label>
        <label className="text-input">
          Email:
          <Field
            className="field-input"
            type="text"
            name="email"
            placeholder="email"
          />
          {touched.email && errors.email && (
            <p className="errors">{errors.email}</p>
          )}
        </label>
        <label className="text-input">
          Password:
          <Field
            className="field-input"
            type="password"
            name="password"
            placeholder="Password"
          />
          {touched.password && errors.password && (
            <p className="errors">{errors.password}</p>
          )}
        </label>
        <label className="checkbox-container">
          Terms of Service
          <Field type="checkbox" name="terms" />
          <span className="checkmark" />
        </label>
        <button>Submit!</button>
      </Form>
      <div className="card-returned">
        {user.firstName && (
          <ul key={user.id}>
            <li>Name: {user.firstName}</li>
            <li>Email: {user.email}</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default withFormik({
  mapPropsToValues: props => ({
    firstName: props.firstName || "",
    lastName: props.lastName || "",
    email: props.email || "",
    password: props.email || "",
    terms: false
  }),
  validationSchema: yup.object().shape({
    firstName: yup.string().required("Name is Required"),
    lastName: yup.string().required("Name is Required"),
    password: yup.string().required("Number is Required"),
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
