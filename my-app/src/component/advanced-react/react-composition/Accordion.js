import React from "react";
import { AccordionProvider } from "./accordion-context";
import AccordionContent from "./AccordionContent";
import AccordionHeader from "./AccordionHeader";
// import useToggle from "./useToggle";
// Specialized component: là những component nó chấp nhận các props và thực hiện 1 chức năng cụ thể
// container component: là component cha wrap lại các specialized component bên trong
const Accordion = ({ header, children }) => {
  return (
    <AccordionProvider>
      <div className="mb-5">
        <AccordionHeader>{header}</AccordionHeader>
        <AccordionContent>{children}</AccordionContent>
      </div>
    </AccordionProvider>
  );
};

export default Accordion;
