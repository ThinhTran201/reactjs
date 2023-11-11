import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const StyledTotal = styled.form`
  padding: 40px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  .input {
    padding: 16px;
    border: 1px solid gray;
    border-radius: 6px;
  }
  .form-button {
    width: 100%;
    padding: 20px;
    font-size: 15px;
    font-weight: bold;
    background-color: blue;
    color: white;
    cursor: pointer;
    border-radius: 8px;
  }
  .last-name {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 20px;
  }
`;
const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
  .error {
    color: #ef4444;
    font-size: 0.875rem;
  }
  .errors {
    color: #ef4444;
    font-size: 0.875rem;
  }
`;
const SignUpFormV2 = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
      }}
      validatetionSchema={Yup.object({
        firstName: Yup.string()
          .max(20, `Must be 20 character or less`)
          .required(`Required`),
        lastName: Yup.string()
          .max(10, `Must be 10 chrracter or less`)
          .required(`Required`),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
      autoComplete="off"
    >
      <StyledTotal>
        <StyledForm>
          <label htmlFor="firstName">Firstname</label>
          <Field
            className="input"
            name="firstName"
            type="text"
            placeholder="Enter your first name"
          ></Field>
          <ErrorMessage name="firstName"></ErrorMessage>
          {/* Field này tượng trưng cho input trong form */}
        </StyledForm>
        <div className="last-name">
          <label htmlFor="lastName">Lastname</label>
          <Field
            className="input"
            name="lastName"
            type="text"
            placeholder="Enter your last name"
          ></Field>
          <ErrorMessage name="lastName"></ErrorMessage>
        </div>
        <button type="submit" className="form-button">
          Submit
        </button>
      </StyledTotal>
    </Formik>
  );
};

export default SignUpFormV2;
