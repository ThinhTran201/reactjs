import React, { useState, useRef } from "react";
import axios from "axios";
import styled, { css } from "styled-components";
import lodash from "lodash";
import UseHackerNewApi from "../../hooks/useHackerNewApi";
// https://hn.algolia.com/api/v1/search?query=react
const StyledInput = styled.input`
  border: 1px solid green;
  color: black;
  padding: 5px;
`;
const StyledFlex = styled.div`
  display: flex;
`;
const StyledButton = styled.button`
  background-color: blue;
  color: white;
  font-weight: bold;
  padding: 5px;
  margin-left: 10px;
  border-radius: 7px;
`;
const HackerNewWithHooks = () => {
  const { hits, query, setQuery, loading, errorMessage, setUrl } =
    UseHackerNewApi();
  return (
    <div>
      <StyledFlex>
        <StyledInput
          type="text"
          defaultValue={query}
          onChange={(e) => setQuery(e.target.value)} // sự kiện onChange là khi ta gõ vào input
          // (e) là event của nó, (e.target.value) nghĩa là khi ta gõ vào ta sẽ lấy được giá trị của nó
        />
        <StyledButton
          onClick={() =>
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          }
        >
          Fetching
        </StyledButton>
      </StyledFlex>
      {loading && <p>Loading....</p>}
      {/* nếu có loading thì hiện thẻ p có chữ loading... */}
      {!loading && errorMessage && <p>{errorMessage}</p>}
      {/* nếu không có loading và có errorMessage và in ra thẻ p có content là biến errorMessage */}
      {!loading &&
        hits.length > 0 && // nếu có không có loading thì mới thực hiện các lệnh tiếp theo
        hits.map((item, index) => <h3 key={item.title}>{item.title}</h3>)}
    </div>
  );
};

export default HackerNewWithHooks;
