import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
const StyledTotal = styled.div`
  padding: 5px;
  display: flex;
  gap: 5px; // khoản cách ngang giữa các phần tử
`;
const Counter = () => {
  const [count, setCount] = useState(0);
  const [info, setInfo] = useState({
    firstName: "tran",
    lastName: "tuan",
  });
  useEffect(() => {
    console.log("info");
  }, [info]);
  // const handleIncrement = () => {
  //   // console.log("clicked");
  //   setTimeout(function delay() {
  //     // trong setTimeout thid sau 1 khoảng thời gian nào đó n mơi thực hiện
  //     setCount((count) => count + 1);
  //   }, 1000); // ở đây ta dùng stale state là khi ta nhấn bao nhiu lần nó sẽ lưu giá trị cộng lại và sau 1000ms nó sẽ hiện kết quả
  // };
  // useEffect(() => {
  //   console.log(`Count: ${count}`);
  // }, [count]); // nếu ta không điền[](là dependencies) thì useEffect sẽ chạy sau khi component chạy
  // nếu có [] mà không điền giá trị gì thì useEffect sẽ chạy 1 lần đầu tiên khi load và không chạy nữa
  // nếu ta điền [count] vào ví dụ này thì sau mỗi lần click count + 1 và đẽ thay đổi nên useEffect sẽ chạy sau mỗi lần click
  return (
    <StyledTotal>
      <input
        type="text"
        name="firstName"
        value={info.lastName}
        onChang={(e) => setInfo({ ...info, firstName: e.target.value })}
      />
      <span className="count">{count}</span>
      <button onClick={() => setCount(count + 1)} className="increment">
        Increment
      </button>
    </StyledTotal>
  );
};

export default Counter;
