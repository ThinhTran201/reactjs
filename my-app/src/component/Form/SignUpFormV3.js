import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
const StyledForm = styled.div`
  padding: 40px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  .name {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 20px;
    .input {
      padding: 16px;
      border-radius: 8px;
      border: 1px solid gray;
    }
    .error {
      color: red;
      font-size: 16px;
    }
  }
  .button {
    width: 100%;
    padding: 16px;
    background-color: blue;
    color: white;
    font-weight: bold;
    border-radius: 8px;
  }
`;

const SignUpFormV3 = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(10, "Must be 10 characters or less")
          .required("Required"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form autoComplete="off">
        <StyledForm>
          <div className="name">
            <label htmlFor="firstName">Firstname</label>
            <Field
              name="firstName"
              type="text"
              placeholder="Enter your first name"
              className="input"
            ></Field>
            <div className="error">
              <ErrorMessage name="firstName"></ErrorMessage>
            </div>
          </div>
          <div className="name">
            <label htmlFor="lastName">Last name</label>
            <Field
              name="lastName"
              type="text"
              placeholder="Enter your first name"
              className="input"
            ></Field>
            <div className="error">
              <ErrorMessage name="lastName"></ErrorMessage>
            </div>
          </div>
          <div>
            <button type="submit" className="button">
              Submit
            </button>
          </div>
        </StyledForm>
      </Form>
    </Formik>
  );
};

export default SignUpFormV3;
