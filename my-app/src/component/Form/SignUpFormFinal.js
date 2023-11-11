import React from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
const StyledForm = styled.div`
  padding: 40px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  .textarea {
    padding: 16px;
    border-radius: 8px;
    border: 1px solid gray;
    height: 150px;
    resize: none;
  }
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

    .select {
      padding: 16px;
      border-radius: 8px;
      border: 1px solid gray;
      font-weight: bold;
    }
    .error {
      color: red;
      font-size: 16px;
    }
  }
  .checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
    /* margin-bottom: 20px; */
    .checkbox-label {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
  .button {
    width: 100%;
    padding: 16px;
    background-color: blue;
    color: white;
    font-weight: bold;
    border-radius: 8px;
    margin-top: 20px;
  }
`;

const SignUpFormFinal = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        job: "",
        terms: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(10, "Must be 10 characters or less")
          .required("Required"),
        email: Yup.string().email().required("Required"),
        intro: Yup.string().required("Required"),
        job: Yup.string().required("Required"),
        terms: Yup.boolean().oneOf(
          [true],
          "Please check the terms or conditions"
        ),
      })}
      onSubmit={(values, actions) => {
        console.log(actions);
      }}
    >
      <Form autoComplete="off">
        <StyledForm>
          {/* <div className="name">
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
          </div> */}
          <MyInput
            label="firstName"
            name="firstName"
            placeholder="Enter your firstname"
            id="firstName"
          ></MyInput>
          <MyInput
            label="lastName"
            name="lastName"
            placeholder="Enter your last name"
            id="lastName" // có id để khi focus vài label thì sẽ focus tới input ta trỏ
          ></MyInput>
          <MyInput
            label="Email Address"
            name="email"
            placeholder="Enter your email address"
            id="email"
            type="email" // email thì phải có type email chứ không phải text
          ></MyInput>
          <MyTextarea
            label="Introdeuce Yourselt"
            name="intro"
            placeholder="Enter your introduce yourselt"
            id="intro"
            /// textarea thì phải có type textarea chứ không phải text
          ></MyTextarea>
          <MySelectBox
            label="Select your job"
            name="job"
            placeholder="Enter your Job"
            type="select"
          >
            <option value="fronend">Fronend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="fullstack">Fullstack Developer</option>
          </MySelectBox>
          <MyCheckBox name="checkbox">
            <p>I accept the terms and conditions</p>
          </MyCheckBox>

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
// useField sử dụng theo kiểu:
// destructuring, rest parameter ...
// spread operator ...
const MyInput = ({ label, ...props }) => {
  // label và các props còn lại sẽ dùng trên input
  const [field, meta] = useField(props); // field vs meta là tên ta tùy ý đặt, field tương ứng với field[0](vị trid index 0 trong array field )
  // console.log("MyInput ~ props", field, meta); // meta cũng vậy, tương ứng với field[1] trong array field
  // field: firstName, value, onChange, onBlur
  // meta: error, touched
  return (
    <div className="name">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input type="text" className="input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
      {/* ...props là các props còn lại khi ta dùng ở component chính(placeholder,...) */}
    </div>
  );
};
const MyTextarea = ({ label, ...props }) => {
  const [field, meta] = useField(props); // field vs meta là tên ta tùy ý đặt, field tương ứng với field[0](vị trid index 0 trong array field )
  // console.log("MyInput ~ props", field, meta); // meta cũng vậy, tương ứng với field[1] trong array field
  // field: firstName, value, onChange, onBlur
  // meta: error, touched
  return (
    <div className="name">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea type="textarea" className="textarea" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
      {/* ...props là các props còn lại khi ta dùng ở component chính(placeholder,...) */}
    </div>
  );
};
const MySelectBox = ({ label, ...props }) => {
  const [field, meta] = useField(props); // field vs meta là tên ta tùy ý đặt, field tương ứng với field[0](vị trid index 0 trong array field )
  // field: firstName, value, onChange, onBlur
  // meta: error, touched
  return (
    <div className="name">
      <select type="select" className="select" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
      {/* ...props là các props còn lại khi ta dùng ở component chính(placeholder,...) */}
    </div>
  );
};
const MyCheckBox = ({ children, ...props }) => {
  // vì ở checkbox có thẻ p là dòng chữ ở giữa nên phải dùng children trong props
  const [field, meta] = useField(props);
  return (
    <div className="checkbox">
      <label htmlFor={props.name} className="checkbox-label">
        <input type="checkbox" className="checkbox" {...field} {...props} />
        {children}{" "}
        {/* children là cái ở giữa nên phải dùng props kiểu children  */}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
      {/* ...props là các props còn lại khi ta dùng ở component chính(placeholder,...) */}
    </div>
  );
};
export default SignUpFormFinal;
