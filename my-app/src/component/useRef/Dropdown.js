import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
const StyledDropdown = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  /* padding: 20px; */
  margin: 10px;
`;
const StyledSelected = styled.div`
  padding: 20px;
  border: 1px solid gray;
  width: 100%;
  border-radius: 0.75rem;
  cursor: pointer;
`;
const StyledList = styled.div`
  padding: 20px;
  width: 100%;
  border: 1px solid gray;
  border-radius: 0.75rem;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  /* visibility: hidden; // ẩn thẻ này đi */
`;
const StyledJava = styled.div`
  padding: 20px;
  /* border-bottom: 1px solid gray; */
  cursor: pointer;
`;
const StyledJava1 = styled.div`
  padding: 20px;
  cursor: pointer;
`;
const StyledJava2 = styled.div`
  padding: 20px;
  cursor: pointer;
`;
const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickDropdown(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        // !dropdownRef.current.contains(e.target) : nội dung mà ta nhấn vào không phải là dropdownRef.current(ở đây là trong dropdown) => có nghĩa là nhấn ra bên ngoài
        console.log("Click outsize dropdown");
        setShowDropdown(false); // khi ta click ra bên ngoài thì set lại giá trị cho showDropdown là false()
      }
      // else {
      //     console.log("Click insize dropdown");
    }
    document.addEventListener("click", handleClickDropdown); // add event vào document và truyền vào function handleClickDropdown
    return () => {
      // sau khi useEffect unmount thi clear sự kiện đi
      document.removeEventListener("click", handleClickDropdown);
    };
  }, []);
  return (
    <StyledDropdown ref={dropdownRef}>
      <StyledSelected onClick={() => setShowDropdown(!showDropdown)}>
        Selected
      </StyledSelected>
      {showDropdown && ( // nếu  coa showDropdown(true) thì thực hiện tiếp sau && (là hiện các class ) và ngược lại là false là không có showDropdown
        <StyledList>
          <StyledJava>Javascript</StyledJava>
          <StyledJava1>ReactJS</StyledJava1>
          <StyledJava2>VueJS</StyledJava2>
        </StyledList>
      )}
    </StyledDropdown>
  );
};

export default Dropdown;
