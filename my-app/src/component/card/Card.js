import React from "react";
import styled, { css } from "styled-components";
/*
const StyledCard = styled.tag(h1, h2, div, span, strong, a, p, selection, article,...)``
CSS-in-JS
*/
const StyledCard = styled.div`
  position: relative;
`;
const CardImage = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit; // kế thừa của cha nó
`;
const CardContent = styled.div`
  position: absolute;
  left: 50%;
  width: calc(100% - 76px);
  transform: translate(-50%, 50%);
  bottom: 0;
  background-color: white;
  z-index: 10;
  border-radius: 40px;
  padding: 20px;
`;
const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-bottom: 30px; */
`;
const CardUser = styled.div`
display: flex;
align-items; center;
column-gap: 12px;
`;
const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 10rem;
  object-fit: cover;
  flex-shrink: 0;
`;

const UserName = styled.span`
  font-weight: 300;
  font-size: 16px;
  color: #333;
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: black;
`;
const CardAmount = styled.span`
font-size:${(props) =>
  props.fontSize ||
  "18px"}; // nếu có props.fontSize thì lấy fontSize còn không thì nhận "18px"
font-weight: bold;
background: linear-gradient(86.88deg, #7D6AFF 1.38%, #FFB86C 64.35%, #FC2B72 119.91%);
${(props) =>
  props.secondary && // các thẻ nào mà có secondary thì sẽ thêm css dưới đây
  css`
    background: linear-gradient(86.88deg, #20e3b2, #2cccff);
  `};
${(props) =>
  !props.secondary && // các thẻ nào mà có secondary thì sẽ thêm css dưới đây
  css`
    background: linear-gradient(
      86.88deg,
      #7d6aff 1.38%,
      #ffb86c 64.35%,
      #fc2b72 119.91%
    );
  `};
color: transparent;
-webkit-background-clip: text;
background-clip; text;
`;
const CardMeta = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;
const Heart = styled.img`
  width: 15px;
  height: 15px;
`;
const Card = (props) => {
  console.log("Card ~ props", props);
  return (
    <StyledCard>
      <CardImage>
        <CardImg
          src="https://images.unsplash.com/photo-1509316554658-04f9287cdb78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
      </CardImage>
      <CardContent>
        <CardTop>
          <CardUser>
            <UserAvatar
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt=""
            />
            <UserName>@david</UserName>
          </CardUser>
          <CardMeta>
            <Heart
              src="https://i.natgeofe.com/k/7bfcf2d2-542e-44f0-962a-c36f2efa98a5/heart_4x3.jpg"
              alt=""
            />
            <span>256</span>
          </CardMeta>
        </CardTop>
        <CardFooter>
          <CardTitle>Cosmic Perspective</CardTitle>
          <CardAmount secondary={props.secondary} fontSize="22px">
            12,000 PSL
          </CardAmount>
        </CardFooter>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
