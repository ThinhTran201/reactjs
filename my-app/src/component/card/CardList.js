import React from "react";
import styled from "styled-components";
const StyledCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // 3 cột(tương tự như flex)
  gap: 90px 30px; // khoảng cách các hàng là 90px(column-gap), cách các phần tử trong hàng là 30px
  padding: 30px;
`;
const CardList = (props) => {
  return <StyledCardList>{props.children}</StyledCardList>;
};

export default CardList;
