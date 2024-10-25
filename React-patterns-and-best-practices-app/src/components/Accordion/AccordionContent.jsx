import { useAccordionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";

export default function AccordionContent({ children, className }) {
  const { openItemId } = useAccordionContext();
  const id = useAccordionItemContext();
  return (
    <div
      className={
        openItemId === id
          ? `${className ?? ""} open`
          : `${className ?? ""} close`
      }
    >
      {children}
    </div>
  );
}
