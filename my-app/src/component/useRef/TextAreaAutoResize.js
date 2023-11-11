import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
const StyledDiv = styled.div`
  padding: 5px;
`;
const StyledArea = styled.textarea`
  width: 100%;
  max-width: 400px;
  padding: 5px;
  border: 1px solid gray;
  resize: none;
  border-radius: 7px;
  &:focus {
    border: 2px solid blue;
  }
  transition: all; // chạy mượt hơn
  overflow: hidden; // ẩn thanh scroll
`;
const TextAreaAutoResize = () => {
  const [text, setText] = useState("demo");
  const textareaRef = useRef(null);
  const [textareaHeight, setTextareaHeight] = useState("auto");
  //   const [parentHeight, setparentHeight] = useState("auto");
  const handleChange = (event) => {
    setTextareaHeight("auto");
    console.log(event.target.value);
    setText(event.target.value);
  };
  useEffect(() => {
    setTextareaHeight(`${textareaRef?.current?.scrollHeight}px`); // set lại giá trị chiều cao bằng giá trị chiều cao scroll
  }, [text]); // khi text thay đổi thì useEffect sẽ thực hiện
  return (
    <StyledDiv
    //   style={{
    //     minHeight: parentHeight,
    //   }}
    >
      <StyledArea
        placeholder="Please enter your content..."
        value={text}
        ref={textareaRef}
        style={{
          height: textareaHeight,
        }}
        onChange={handleChange}
      ></StyledArea>
    </StyledDiv>
  );
};

export default TextAreaAutoResize;
