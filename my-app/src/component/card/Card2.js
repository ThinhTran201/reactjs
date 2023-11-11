import React from "react";
import styled, { css } from "styled-components";
/*
const StyledCard = styled.tag(h1, h2, div, span, strong, a, p, selection, article,...)``
CSS-in-JS
*/
const StyledCard = styled.div`
  position: relative;
  .card-image {
    height: 400px;
    width: 100%;
    border-radius: 8px;
    .card-im{
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
  }
  .card-content {
    position: absolute;
    left: 50%;
    width: calc(100% - 76px);
    transform: translate(-50%, 50%);
    bottom: 0;
    background-color: white;
    z-index: 10;
    border-radius: 40px;
    padding: 20px;
    .card-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .card-user{
        display: flex;
        align-items; center;
        column-gap: 12px;
        .avatar{
        width: 30px;
        height: 30px;
        border-radius: 10rem;
        object-fit: cover;
        }
        .user-name{
        font-weight: 300;
        font-size: 16px;
        color: ${(props) =>
          props.theme.colors.orange};//dùng biến props theme bên app.js
        }
      }
      .card-meta{
        display: flex;
        align-items: center;
        column-gap: 12px;
        .card-heart{
          width: 15px;
          height: 15px;
        }
      }
      
    }
    .card-footer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .card-title{
            font-size: 18px;
            font-weight: 500;
            color: ${(props) =>
              props.theme.colors
                .blue};// lấy props bên app.js ra dùng. theme là props theme bên app.js và colors vs blue là key trong object có tên theme ở đầu app.js
        }
        .card-amount{
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
              !props.secondary && // các thẻ nào mà không có secondary thì sẽ thêm css dưới đây
              css`
                background: linear-gradient(
                  86.88deg,
                  #7d6aff 1.38%,
                  #ffb86c 64.35%,
                  #fc2b72 119.91%
                );
              `}
              color: transparent;
              -webkit-background-clip: text;
              background-clip; text;
        }
    
    }
}
`;

const Card2 = (props) => {
  console.log("Card ~ props", props);
  return (
    <StyledCard secondary={props.secondary}>
      <div className="card-image">
        <img
          className="card-im"
          src="https://images.unsplash.com/photo-1509316554658-04f9287cdb78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
      </div>
      <div className="card-content">
        <div className="card-top">
          <div className="card-user">
            <img
              className="avatar"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt=""
            />
            <span className="user-name">@david</span>
          </div>
          <div className="card-meta">
            <img
              className="card-heart"
              src="https://i.natgeofe.com/k/7bfcf2d2-542e-44f0-962a-c36f2efa98a5/heart_4x3.jpg"
              alt=""
            />
            <span>256</span>
          </div>
        </div>
        <div className="card-footer">
          <h3 className="card-title">Cosmic Perspective</h3>
          <span className="card-amount">12,000 PSL</span>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card2;
