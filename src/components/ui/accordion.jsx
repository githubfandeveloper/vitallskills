import React, { createContext, useContext, useState } from "react";

const AccordionCtx = createContext(null);
const ItemCtx = createContext(null);

export function Accordion({ type = "single", collapsible = true, children, className = "" }) {
  const [open, setOpen] = useState(null); // stores the open item value
  return (
    <AccordionCtx.Provider value={{ open, setOpen, type, collapsible }}>
      <div className={className}>{children}</div>
    </AccordionCtx.Provider>
  );
}

export function AccordionItem({ value, children, className = "" }) {
  return (
    <ItemCtx.Provider value={value}>
      <div className={`border rounded-md mb-2 ${className}`}>{children}</div>
    </ItemCtx.Provider>
  );
}

export function AccordionTrigger({ children, className = "", ...props }) {
  const acc = useContext(AccordionCtx);
  const itemValue = useContext(ItemCtx);
  const isOpen = acc?.open === itemValue;
  return (
    <button
      className={`w-full text-left px-4 py-3 font-medium ${className}`}
      onClick={() => {
        if (isOpen && acc?.collapsible) acc.setOpen(null);
        else acc?.setOpen(itemValue);
      }}
      {...props}
    >
      {children}
    </button>
  );
}

export function AccordionContent({ children, className = "", ...props }) {
  const acc = useContext(AccordionCtx);
  const itemValue = useContext(ItemCtx);
  const isOpen = acc?.open === itemValue;
  return isOpen ? (
    <div className={`px-4 pb-4 text-sm ${className}`} {...props}>
      {children}
    </div>
  ) : null;
}
