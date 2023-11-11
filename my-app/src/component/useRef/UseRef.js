import React, { useRef } from "react";
// const inputRaf, abcRaf = React.useRaf(initialValue);
// const countRef = useRef(0);
//   // truy xuất giá trị của raf
//   console.log(countRef.current);
//   // update giá trị của raf
//   countRef.current = 10;
const UseRef = () => {
  const countRef = useRef(0);
  const handle = () => {
    const updateCount = countRef.current + 1;
    console.log(updateCount);
    countRef.current++;
  };
  console.log("Render");
  return (
    <div>
      <button onClick={handle}>Click me</button>
    </div>
  );
};

export default UseRef;
