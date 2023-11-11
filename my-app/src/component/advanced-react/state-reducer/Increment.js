import React from "react";
import { useCount } from "./Count-context";

const Increment = ({ onClick, ...props }) => {
  return (
    <button
      className="increment bg-slate-200 p-5 flex items-center justify-center text-lg cursor-pointer"
      onClick={onClick}
      {...props}
    >
      +
    </button>
  );
};

export default Increment;
