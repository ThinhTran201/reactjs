import React, { useState } from "react";
import styled from "styled-components";
import useHandleChange from "../../hooks/useHandleChange";
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
const StyledForm = styled.form``;
const StyledButton = styled.button`
  padding: 10px;
  border-radius: 8px;
  background-color: blue;
  color: white;
`;
const Form2 = () => {
  const { values, handleChange } = useHandleChange({
    // ở bên use return về gì thì ghi vào {}     (ở đây là values, handleChange)
    // object này là initialValue đặt bên use, nó như 1 biến có các phần tử là các property: Fullname, email, hobby
    Fullname: "",
    email: "",
    hobby: false,
  });
  const [nameError, setNameError] = useState("");
  console.log(" Form2 ~ values", values);
  const handleSubmitForm = (e) => {
    e.preventDefault(); // ngăn chặn hành vi mặc định( ở đây là tránh load trang khi submit)
    if (values.Fullname === "") {
      setNameError("Your fullname is empty");
    }
  };
  return (
    <StyledDiv>
      <StyledForm autoComplete="off" onSubmit={handleSubmitForm}>
        <StyledInput
          type="text"
          name="Fullname"
          placeholder="Enter your name"
          onChange={handleChange}
        />
        {nameError}

        <StyledInput
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
        />
        {/* <input type="checkbox" name="hobby" onChange={handleChange} /> */}
        <StyledButton type="submit" onSubmit={handleSubmitForm}>
          Submit
        </StyledButton>
      </StyledForm>
    </StyledDiv>
  );
};

export default Form2;
