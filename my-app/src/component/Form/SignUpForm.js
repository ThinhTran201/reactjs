import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
const StyledTotal = styled.form`
  padding: 40px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  input {
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
    gap: 8px; // khoản trống giữa
    margin-bottom: 20px;
  }
`;
const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px; // khoản trống giữa
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
// const validate = (values) => {
//   // sẽ gọi validate ra dùng trong function formik
//   // tạo function validate và nhận values(cũng là values ở dưới formik là giá trị nhập vào input) là parametor
//   const errors = {}; // tạo biến error để xử lý các lỗi
//   if (!values.firstName) {
//     // nếu không có values.firstName(firstName là 1 property trong object values trong formik)
//     errors.firstName = "Required"; // thì thêm 1 property firstName có giá trị là Required vào trong error(ban đầu tạo ra là object rỗng)
//   } else if (values.firstName.length > 20) {
//     errors.firstName = "Must be 20 characters or less";
//   }

//   if (!values.lastName) {
//     errors.lastName = "Required";
//   } else if (values.lastName.length > 10) {
//     errors.lastName = "Must be 10 character or less";
//   }
//   return { errors };
// };
// const validate2 = (values) => {
//   const error2 = {};

//   return error2;
// };
const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      // là giá trị values trong console
      firstName: "", // là property của values
      lastName: "",
    },
    // validate,
    validatetionSchema: Yup.object({
      // sử dụng Yup là 1 object thay cho validate như trên
      firstName: Yup.string() // có property là firstName
        .max(20, `Must be 20 character or less`) // điều kiện length của firstName max 20 ký tự thì sẽ báo lỗi và hiện dòng chữ
        .required(`Required`), // lỗi này là bắt buộc nếu không điền sẽ hiện là Required
      lastName: Yup.string()
        .max(10, `Must be 10 chrracter or less`)
        .required(`Required`), // lỗi này là bắt buộc nếu không điền sẽ hiện là Required
    }),

    onSubmit: (values) => {
      // sau khi điền values vào input và nhấn submit thì mới nhận giá trị values (là input nhập vào) ở phần submit này
      console.log(values); // sau khi nhấn submit mới thực hiện in ra ở đây. không thì chỉ hiện trong formiksau khi ta điền vào input
    },
  });
  console.log("SignUpForm ~ formik", formik);
  // formik là 1 object chứa các property(values,...) và các function như onChange, handleChang,...
  return (
    <StyledTotal onSubmit={formik.handleSubmit} autoComplete="off">
      <StyledForm>
        <label htmlFor="firstName">Firstname</label>
        <input
          type="text"
          id="firstName"
          // name="firstName"
          placeholder="Enter your first name"
          // value={formik.values.firstName} // value là giá trị ta nhập vào input và sẽ được đưa vào firstName ở trên initialVales
          // onChange={formik.handleChange} // event này được sử lý bằng hàm handleChange trong formik nên (formik.handleChange)
          // onBlur={formik.handleBlur} // event này là khi ta visit vào input và click ra nên ngoài, và được sử lý bằng hàm handleBlur có sẵn trong formik
          {...formik.getFieldProps("firstName")} // có thể thay (name, value, onChange, onBlur) bằng dòng này để rút gon code
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="errors">{formik.errors.firstName}</div>
        ) : null}
      </StyledForm>
      <div className="last-name">
        <label htmlFor="lastName">Lastname</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Enter your last name"
          value={formik.values.lastName} // value là giá trị ta nhập vào input và sẽ được đưa vào firstName ở trên initialVales
          onChange={formik.handleChange} // event này được sử lý bằng hàm handleChange trong formik nên (formik.handleChange)
          onBlur={formik.handleBlur}
        />
        {formik.touched.lastName && formik.errors.lastName ? ( // nếu có touched.lastName(true) và có lỗi thì sẽ hiện dòng div ở dưới
          <div className="error">{formik.errors.lastName}</div>
        ) : null}
      </div>

      <button type="submit" className="form-button">
        Submit
      </button>
    </StyledTotal>
  );
};

export default SignUpForm;
