// 1. Tạo component có tên là Tooltip
// 2. Component này có props children, props text
// 3. Áp dụng portal để khi rê chuột vào text thì sẽ hiển thị tooltip content ở phía trên, và chính giữa đoạn text
// 4. Dùng kiến thức đã học ở video trước sử dụng getBoundingClientRect()
import React, { useState } from "react";
import styled from "styled-components";
import useHover from "../../hooks/useHover";
import ReactDOM from "react-dom";
const StyledDiv = styled.div`
  padding: 50px;
  margin: 50px;
  .text {
    font-weight: 600;
    cursor: pointer;
  }
  .children {
    padding: 10px;
    color: white;
    background-color: black;
    border-radius: 16px;
    position: absolute;
    transform: translate(-50%, -100%);
    display: inline-block; // chuyển sang thẻ inline-block để cho nó ngắn bằng đoạn text nó chứa chứ không full ngang
  }
`;
const Tooltip = ({ children, text }) => {
  const { hovered, nodeRef } = useHover();
  const [coords, setCoords] = useState({});
  const handleHover = (e) => {
    setCoords(e.target.getBoundingClientRect());
  };
  return ReactDOM.createPortal(
    <StyledDiv>
      {hovered && <TooltipContent coords={coords}>{children}</TooltipContent>}
      <span className="text" ref={nodeRef} onMouseOver={handleHover}>
        {text}
      </span>
    </StyledDiv>,
    document.querySelector("body")
  );
};
function TooltipContent({ children, coords }) {
  return (
    <p
      className="children"
      style={{
        top: coords.top - coords.height,
        left: coords.left + coords.width / 2,
      }}
    >
      {children}
    </p>
  );
}
export default Tooltip;
