import React, { Fragment } from "react";
import { useAcccordion } from "./accordion-context";
// Specialized component
const AccordionContent = ({ children }) => {
  const { show } = useAcccordion();
  return (
    <Fragment>
      {show && (
        <div className="content p-4 border border-gray-200 rounded-lg mt-2">
          {children}
        </div>
      )}
    </Fragment>
  );
};

export default AccordionContent;
