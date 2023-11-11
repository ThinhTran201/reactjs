import React, { useState } from "react";
import Count from "./Count";
import { CountProvider } from "./Count-context";
import Decrement from "./Decrement";
import Increment from "./Increment";
/* vì bên context đã điền props value nên bên này phải điền ở đây, và value này để dùng cho các component bên dưới có thể lấy được */

const Counter = ({ value = null, initialvalue = 0, onChange }) => {
  // value là giá trị người dùng truyền vào, nếu có truyền vào nghĩa có (iscontrolled) là có được kiểm soát
  const [count, setCount] = useState(initialvalue); // lúc này count = 0
  const isControlled = value !== null && !!onChange; // !! có nghĩa là chuyển sang boolean
  // isControlled: dùng để kiểm tra các lập trình viên có kiểm soát value hay không
  const getCount = () => (isControlled ? value : count);
  const handleCountChange = (newValue) => {
    isControlled ? onChange(newValue) : setCount(newValue);
  };
  const handleIncrement = () => {
    handleCountChange(getCount() + 1);
  };
  const handleDecrement = () => {
    handleCountChange(getCount() - 1);
  };
  return (
    <CountProvider
      value={{ handleIncrement, handleDecrement, count: getCount() }}
    >
      <div className="flex w-full max-w-[200px] mx-auto my-5 border border-gray-300 rounded-lg">
        <Decrement></Decrement>
        <Count></Count>
        <Increment></Increment>
      </div>
    </CountProvider>
  );
};

export default Counter;
