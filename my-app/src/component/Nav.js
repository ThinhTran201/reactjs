import React from "react";
import styled from "styled-components";
import { Link, NavLink, Outlet } from "react-router-dom";
const StyledDiv = styled.div`
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;
  gap: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  .active {
    color: green;
  }
`;
const ListLink = [
  {
    id: 1,
    to: "/",
    title: "Home",
  },
  {
    id: 2,
    to: "/blog",
    title: "BlogPage",
  },
  {
    id: 3,
    to: "/profile",
    title: "ProfilePage",
  },
  {
    id: 4,
    to: "/contact",
    title: "Contact Us",
  },
];
const Nav = () => {
  return (
    <>
      <StyledDiv>
        {ListLink.map(
          (
            item // sử dụng map để tạo nhiều link
          ) => (
            <NavLink
              to={item.to}
              className={({ isActive }) => (isActive ? "active" : "")} // isActive là event khi ta active vào title, link là đường dẫn
              key={item.id}
            >
              {item.title}
            </NavLink>
          )
        )}
        {/* thay tên thẻ span = link và to là trỏ đến đường dẫn page nào */}
      </StyledDiv>
      <Outlet></Outlet>{" "}
      {/* dùng Outlet và đặt có cùng cấp vs các link để nó hiển thị content của các thẻ link này, nếu không có Outlet thì sẽ không hiện các compponent khi ta nhấn vào link */}
    </>
  );
};

export default Nav;
