import { ReactNode } from "react";
export default function Section({ id, title, subtitle, children }:{ id?: string, title?: string, subtitle?: string, children: ReactNode }){
  return (
    <section id={id} className="section">
      {title && (<div className="mb-8"><h2 className="h2">{title}</h2>{subtitle && <p className="p mt-2">{subtitle}</p>}</div>)}
      {children}
    </section>
  )
}
