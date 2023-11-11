import React from "react";

const LoandingSkeleton = (props) => {
  return (
    <div
      className="skeleton"
      style={{
        height: props.height,
        width: props.width,
        borderRadius: props.radius,
      }}
    ></div>
  );
};

export default LoandingSkeleton;
