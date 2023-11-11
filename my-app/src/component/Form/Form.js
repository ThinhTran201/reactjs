import React, { useState } from "react";
import styled from "styled-components";
const StyledDiv = styled.div`
  padding: 20px;
  display: flex;
`;
const StyledInput = styled.input`
  width: 100%;
  max-width: 300px;
  border: 1px solid gray;
  border-radius: 8px;
  padding: 20px;
`;
// const StyledTextArea = styled.textarea`
//   width: 100%;
//   max-width: 300px;
//   border: 1px solid gray;
//   border-radius: 8px;
//   padding: 20px;
// `;

/// Có 2 cách truy xuất dữ liệu trong object:
//  Cách 1: obj.property  ( gọi là dot notation)
// Cách 2:  obj[property]
const Form = () => {
  const [values, setValues] = useState({
    Fullname: "",
    email: "",
    hobby: false,
  });
  console.log("Form ~ value", values);
  // const [fullname, setFullName] = useState("");
  // const [message, setMessage] = useState("");
  // const [country, setCountry] = useState("");
  const handleInputChange = (e) => {
    const type = e.target.type;
    setValues({
      ...values, // clone lại values cũ để khi input vào sẽ không bị mất giá trị cũ
      [e.target.name]: type === `checkbox` ? e.target.checked : e.target.value, // checked là giá trị của checkbox chứ không phải value như name, email,...
      // giá trị của name=: nếu type = checkbox sẽ là checked(true/false), còn ngược lại sẽ là value( giá trị điền vào, ở đây là nói khi ta input vào name và email,...)
    });
    // if (type === `checkbox`) {
    //   setValues({
    //     ...values,
    //     [e.target.name]: e.target.checked,
    //   });
    // }
    // // khi gõ vào input nó sẽ có 1 cái event ở đây
    // // event.target ở đây sẽ là input, nên để lấy giá trị sẽ là: .value
    // console.log(e.target.type);
    // setValues({
    //   ...values,
    //   [e.target.name]: e.target.value, // lấy property name trong trường input gán cho giá trị e.target.value là giá trị mà ta nhập vào
    // });
  };
  // const handleTextAreaChange = (e) => {
  //   console.log(e.target.value);
  //   setMessage(e.target.value);
  // };
  // const handleSelectChange = (e) => {
  //   console.log(e.target.value);
  //   setCountry(e.target.value);
  // };
  return (
    <StyledDiv>
      <StyledInput
        type="text"
        name="Fullname"
        placeholder="Enter your name"
        onChange={handleInputChange}
      />

      <StyledInput
        type="email"
        name="email"
        placeholder="Enter your email"
        onChange={handleInputChange}
      />
      <input type="checkbox" name="hobby" onChange={handleInputChange} />
      {/* {message}
      <StyledTextArea
        name="message"
        placeholder="Enter your message"
        onChange={handleTextAreaChange}
      ></StyledTextArea>
      {country}
      <select name="country" onChange={handleSelectChange}>
        <option value="vietnam">Viêt Nam</option>
        <option value="usa">USA</option>
        <option value="japan">Japan</option>
      </select> */}
    </StyledDiv>
  );
};

export default Form;
