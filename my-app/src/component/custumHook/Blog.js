// https://github.com/evondev/react-course

import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import useHover from "../../hooks/useHover";
import useLinkNewTab from "../../hooks/useLinkNewTab";
const StyledDiv = styled.div`
  .content,
  .content1,
  .content2 {
    margin-bottom: 20px;
  }
  .hover {
    color: green;
    font-size: 20px;
  }
`;
const Blog = () => {
  const { contentRef } = useLinkNewTab();
  const { hovered, nodeRef } = useHover(); // lấy custum hooks ra dùng
  return (
    <StyledDiv className="entry-content" ref={contentRef}>
      <p className="content">
        Đây là Link facebook của bạn Phương Trinh xấu gái, ai cần nhấn vào đây
        nhé!
        <a
          href="https://www.facebook.com/profile.php?id=100082301976242"
          className="underline"
          style={{
            color: hovered ? "red" : "", // trong style color nếu có hovered thì value là red, còn không thì empty
          }}
          ref={nodeRef} // sử dụng useRef là nodeRef ở đây là lấy giá trị nodeRef.current là ở thẻ a này(ở đây là hover vào thẻ này)
        >
          TrinhPhuong.com.vn
        </a>
        ?
      </p>
      <p className="content1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
        corrupti iusto modi enim. Distinctio doloribus natus possimus impedit
        quae, animi ex, veritatis fugiat enim nesciunt incidunt eos minima
        perferendis nam
        <a href="https:/google.com" className="underline">
          google.com
        </a>
        ?
      </p>
      <p className="content2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
        corrupti iusto modi enim. Distinctio doloribus natus possimus impedit
        quae, animi ex, veritatis fugiat enim nesciunt incidunt eos minima
        perferendis nam
        <a href="https:/google.com" className="underline">
          google.com
        </a>
        ?
      </p>
    </StyledDiv>
  );
};

export default Blog;
