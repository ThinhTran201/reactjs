import React from "react";
import { useCount } from "./Count-context";

const Count = () => {
  const { count } = useCount();
  return (
    <span className="flex-1 flex items-center justify-center text-3xl font-medium bg-blue-400 text-white">
      {count}
    </span>
  );
};

export default Count;
