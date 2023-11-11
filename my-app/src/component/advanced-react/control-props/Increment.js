import React from "react";
import { useCount } from "./Count-context";

const Increment = () => {
  const { handleIncrement } = useCount(); // gọi Increment từ counter ra sử dụng thông qua component useCount(context)
  return (
    <button
      className="increment bg-slate-200 p-5 flex items-center justify-center text-lg cursor-pointer"
      onClick={handleIncrement}
    >
      +
    </button>
  );
};

export default Increment;
