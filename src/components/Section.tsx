import type { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="overflow-hidden" id="fonts">
      <div className="container my-5">
        <h2 className="h4 font-weight-light">{title}</h2>
        {children}
      </div>
    </section>
  );
}
