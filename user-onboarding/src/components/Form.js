import React from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import styled from "styled-components";

const newForm = ({ touched, errors, status }) => {
  return (
    <div className="form-container">
      <Form>
        <label>
          Name:
          <Field type="text" name="name" placeholder="name" />
          {touched.species && errors.species && (
            <p className="errors">{errors.species}</p>
          )}
        </label>
        <label>
          Email:
          <Field type="text" name="email" placeholder="email" />
          {touched.email && errors.email && (
            <p className="errors">{errors.email}</p>
          )}
        </label>
        <label>
          Password:
          <Field type="password" name="password" placeholder="Password" />
          {touched.email && errors.email && (
            <p className="errors">{errors.email}</p>
          )}
        </label>
        <label className="checkbox-container">
          Terms of Service
          <Field type="checkbox" name="terms" />
          <span className="checkmark" />
        </label>
      </Form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues: props => ({
    name: props.name || "",
    email: "",
    password: "",
    terms: false,
    notes: ""
  }),
  validationSchema: yup.object().shape({
    name: yup.string().required("Name is Required"),
    password: yup.number().required("Number is Required"),
    email: yup.string().email().required("Valid email is required")
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
})(newForm);
