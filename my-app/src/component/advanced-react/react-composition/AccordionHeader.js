import React from "react";
import { useAcccordion } from "./accordion-context";
// Specialized component
const AccordionHeader = ({ children }) => {
  const { show, handleToggleShow } = useAcccordion();
  return (
    <div
      className="header cursor-pointer p-4 border border-gray-200 rounded-lg flex items-center justify-between"
      onClick={handleToggleShow}
    >
      <span>{children}</span>
      {/* children này là nỗi dung, là header bên accordion */}
      {show ? <span>-</span> : <span>+</span>}
    </div>
  );
};

export default AccordionHeader;
