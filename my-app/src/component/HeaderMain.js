import React from "react";
import { createContext, useContext, useState } from "react";

import styled from "styled-components";
import { useAuth, AuthProvider } from "../context/auth-context";
const StyledDiv = styled.div`
  padding: 16px;
  background-color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  .avatar {
    display: flex;
    align-items: center;
    gap: 12px;
    .image {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }
    .name {
      font-size: 14px;
      font-weight: 500;
    }
  }
  .desc {
    font-size: 14px;
    font-weight: 500;
  }
  .out {
    padding: 8px;
    border-radius: 4px;
    color: black;
    background-color: rgba(128, 128, 128, 0.3);
    margin-left: auto;
    border: none;
    cursor: pointer;
  }
`;
const HeaderMain = () => {
  const { user, setUser } = useAuth();
  console.log("HeaderMian ~ user", user);
  return (
    <StyledDiv>
      {user ? ( // nếu có user thì sẽ có div ở dưới( có avatar và fullname)
        <div className="avatar">
          <img className="image" src={user.avatar} alt="" />
          <span className="name">
            Welcom back! <strong>{user.fullname}</strong>
          </span>
        </div>
      ) : (
        // ngược lại sẽ có thẻ span này
        <span className="desc">Welcom</span>
      )}
      <button className="out" onClick={() => setUser(null)}>
        {/* khi click vào button sẽ set user là null(không có) đồng nghĩa vs hiện thẻ span */}
        Sign out
      </button>
    </StyledDiv>
  );
};

export default HeaderMain;
