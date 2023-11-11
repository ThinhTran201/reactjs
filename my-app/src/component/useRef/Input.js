import React, { useEffect, useRef } from "react";

const Input = () => {
  const divRef = useRef();
  const inputRef = useRef();
  useEffect(() => {
    // console.log(divRef.current);
    // if (divRef.current) divRef.current.style.backgroundColor = "red";
    inputRef.current.focus();
  }, []);
  return (
    <div className="input-div" ref={divRef}>
      <input type="text" placeholder="Auto focus" ref={inputRef} />
    </div>
  );
};

export default Input;
