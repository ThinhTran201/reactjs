import styled from "styled-components";
import useClickOutSide from "../../hooks/useClickOutSide";
const StyledDropdown = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  /* padding: 20px; */
  margin: 10px;
`;
const StyledSelected = styled.div`
  padding: 20px;
  border: 1px solid gray;
  width: 100%;
  border-radius: 0.75rem;
  cursor: pointer;
`;
const StyledList = styled.div`
  padding: 20px;
  width: 100%;
  border: 1px solid gray;
  border-radius: 0.75rem;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  /* visibility: hidden; // ẩn thẻ này đi */
`;
const StyledJava = styled.div`
  padding: 20px;
  /* border-bottom: 1px solid gray; */
  cursor: pointer;
`;
const StyledJava1 = styled.div`
  padding: 20px;
  cursor: pointer;
`;
const StyledJava2 = styled.div`
  padding: 20px;
  cursor: pointer;
`;
const DropdownWithHooks = () => {
  const { show, setShow, nodeRef } = useClickOutSide();
  return (
    <StyledDropdown ref={nodeRef}>
      <StyledSelected onClick={() => setShow(!show)}>Selected</StyledSelected>
      {show && ( // nếu  coa showDropdown(true) thì thực hiện tiếp sau && (là hiện các class ) và ngược lại là false là không có showDropdown
        <StyledList>
          <StyledJava>Javascript</StyledJava>
          <StyledJava1>ReactJS</StyledJava1>
          <StyledJava2>VueJS</StyledJava2>
        </StyledList>
      )}
    </StyledDropdown>
  );
};

export default DropdownWithHooks;
