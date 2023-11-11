import React, { useState } from "react";
import useClickOutSide from "../hooks/useClickOutSide";
import ReactDOM from "react-dom";
import styled from "styled-components";
const StyledTotal = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  .title {
    width: 100%;
    padding: 20px;
    border: 1px solid gray;
    border-radius: 8px;
    cursor: pointer;
  }
`;
const StyledList = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: white;
  top: 100%;
  border: 1px solid gray;
  border-radius: 8px;
  .item {
    padding: 20px;
    cursor: pointer;
  }
`;
const DropdownPortal = () => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const [coords, setCoords] = useState({});
  const handleClick = (e) => {
    console.log(nodeRef.current.getBoundingClientRect()); //lấy vị trí của nodeRef
    setCoords(nodeRef.current.getBoundingClientRect());
    setShow(!show);
  };
  return (
    <StyledTotal ref={nodeRef}>
      <div className="titile" onClick={handleClick}>
        Selected
      </div>
      {show && <DropdownList coords={coords}></DropdownList>}
    </StyledTotal>
  );
};

function DropdownList({ coords }) {
  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(
    <StyledList
      style={{
        left: coords.left,
        top: coords.top + coords.height + window.scrollY,
        width: coords.width,
      }}
    >
      <div className="item">Javascript</div>
      <div className="item">ReactJS</div>
      <div className="item">VueJS</div>
    </StyledList>,
    document.querySelector("body")
  );
}

export default DropdownPortal;
