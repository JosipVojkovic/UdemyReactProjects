import { createContext, useContext } from "react";
import { useAccordionContext } from "./Accordion";
import AccordionTitle from "./AccordionTitle";

const AccordionItemContext = createContext();

export function useAccordionItemContext() {
  const ctx = useContext(AccordionItemContext);

  if (!ctx) {
    throw new Error(
      "Accordion-item-related components must be wrapped by <Accordion.Item>."
    );
  }

  return ctx;
}

export default function AccordionItem({ id, children, className }) {
  return (
    <AccordionItemContext.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordionItemContext.Provider>
  );
}