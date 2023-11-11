import React, { useState } from "react";
import styled, { css } from "styled-components";
const StyledTotal = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const StyledDiv = styled.div`
  background-color: rgba(128, 128, 128, 0.2);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  width: 300px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  transform: translateX(-100%);
  .Showed {
    transform: translateX(100%);
  }
`;
const StyledButton = styled.button`
  display: inline-block;
  margin: 10px;
  padding: 10px;
  color: white;
  background-color: green;
  border-radius: 8px;
  cursor: pointer;
`;
const SideBarMenu = () => {
  const [show, setShow] = useState(false);
  if (show) {
    console.log("show");
  } else {
    console.log("unshow");
  }
  return (
    <StyledTotal>
      <StyledButton onClick={() => setShow(!show)}>Show Menu</StyledButton>
      <StyledDiv className={`sideBar ${show ? "showed" : ""}`}></StyledDiv>
    </StyledTotal>
  );
};

export default SideBarMenu;
