import React, { useState } from "react";

const Dropdown = () => {
  const [show, setShow] = useState(false);
  const handleToggleDropdown = () => {
    setShow(!show);
  };
  return (
    <div className="relative inline-block w-full max-w-[300px]">
      <div
        className="placeholder flex items-center justify-between p-4 border border-gray-300 rounded cursor-pointer"
        onClick={handleToggleDropdown}
      >
        Please select an option
      </div>
      {show && (
        <div className="options border border-gray-300 rounded">
          <div className="option-item p-4 cursor-pointer">Frontend</div>
          <div className="option-item p-4 cursor-pointer">Backend</div>
          <div className="option-item p-4 cursor-pointer">Fullstack</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
