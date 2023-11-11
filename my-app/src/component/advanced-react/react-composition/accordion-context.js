import { createContext, useContext } from "react";
import useToggle from "./useToggle";
// sử dụng context để sử dụng các biến xuyên suốt các component
const AccordionContext = createContext();
function AccordionProvider(props) {
  const { value: show, handleToggleValue: handleToggleShow } = useToggle();
  const values = { show, handleToggleShow };
  return (
    <AccordionContext.Provider
      value={values}
      {...props}
    ></AccordionContext.Provider>
  );
}
function useAcccordion() {
  const context = useContext(AccordionContext);
  if (typeof context === "undefined")
    throw new Error("useAccordion must be used within AccordionProvider");
  return context;
}
export { useAcccordion, AccordionProvider };
