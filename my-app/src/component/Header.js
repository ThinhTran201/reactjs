import React, { useEffect } from "react";
import styled, { css } from "styled-components";
const StyledHeader = styled.div`
  padding: 20px;
  width: 100%;
  background-color: black;
`;
const Header = () => {
  useEffect(() => {
    const handleFixedHeader = () => {
      const header = document.getElementById("header");
      if (window.scrollY > 100) header.classList.add("fixed");
      else header.classList.remove("fixed");
    };
    window.addEventListener("scroll", handleFixedHeader); // tạo sự kiện scroll trong useEffect, khi scroll sẽ gọi hàm handleFixedHeader ra dùng
    return () => {
      window.removeEventListener("scroll", handleFixedHeader);
    };
  }, []);
  return <StyledHeader id="header"></StyledHeader>;
};

export default Header;
