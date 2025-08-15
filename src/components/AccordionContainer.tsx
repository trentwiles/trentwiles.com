import type { ReactNode } from "react";

interface AccordionContainerProps {
  id: string; // ex. "01"
  children: ReactNode;
}

export default function AccordionContainer({
  id,
  children,
}: AccordionContainerProps) {
  const parentId = "accordion-" + id;
  return (
    <div className="accordion-group my-3" role="tablist" id={parentId}>
      {children}
    </div>
  );
}
