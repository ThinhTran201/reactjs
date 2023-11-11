import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
const StyledButton = styled.button`
  padding: 12px;
  border-radius: 8px;
  color: white;
  background-color: blue;
  border: none;
`;
const BlogPageDetails = () => {
  // fetching.com?slug=hello-world
  const { slug } = useParams();
  console.log(useNavigate());
  const navigate = useNavigate();
  // tạo biến gán cho useNavigate( là 1 function từ thư viện để điều hướng đến 1 trang)
  return (
    <div>
      Blog page detail
      {/* dùng event onClick và sử dụng biến của useNavigate để điều hướng từ trang blog slug về trang blog */}
      <StyledButton onClick={() => navigate("/blog")}>
        Navigate to Blog Page
      </StyledButton>
    </div>
  );
};

export default BlogPageDetails;
