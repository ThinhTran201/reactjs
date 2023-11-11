import React, { useState } from "react";
import Count from "./Count";
import { CountProvider } from "./Count-context";
import Decrement from "./Decrement";
import Increment from "./Increment";
/* vì bên context đã điền props value nên bên này phải điền ở đây, và value này để dùng cho các component bên dưới có thể lấy được */

const Counter = ({
  count = 0,
  handleDecrement = () => {},
  handleIncrement = () => {},
}) => {
  return (
    <CountProvider value={{ count }}>
      <div className="flex w-full max-w-[200px] mx-auto my-5 border border-gray-300 rounded-lg">
        <Decrement onClick={handleDecrement}></Decrement>
        <Count></Count>
        <Increment onClick={handleIncrement}></Increment>
      </div>
    </CountProvider>
  );
};

export default Counter;
