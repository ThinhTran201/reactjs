import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
const StyledDiv = styled.div`
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
function createPortalWrapper() {
  const element = document.createElement("div");
  element.id = "portal-wrapper";
  return element;
}
const portalWrapperElm = createPortalWrapper();
const Portal = ({
  containerClassName = "",
  bodyClassName = "",
  containerStyle = {},
  bodyStyle = {},
  onClose = () => {},
  overlay = true,
  children,
}) => {
  useEffect(() => {
    document.body.appendChild(portalWrapperElm);
  }, []);
  const renderContent = (
    <StyledDiv className={containerClassName} style={containerStyle}>
      {overlay && <div className="overlay" onClick={onClose}></div>}
      <div className={bodyClassName} style={bodyStyle}>
        {children} {/* children là nội dung ở giữa ví dụ như Lorem... */}
      </div>
    </StyledDiv>
  );
  return createPortal(renderContent, portalWrapperElm);
};
Portal.propTypes = {
  containerClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
  containerStyle: PropTypes.object,
  bodyStyle: PropTypes.object,
  onClose: PropTypes.func,
  visible: PropTypes.bool.isRequired, // có isRequired có nghĩa là prop này là bắt buộc phải có
  children: PropTypes.node, // .node có nghĩa là các element mà ta sẽ truyền vào đó
  overlay: PropTypes.bool,
};

export default Portal;
