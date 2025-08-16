import React, { createContext, useContext, useState } from "react";

const TabsCtx = createContext(null);

export function Tabs({ defaultValue, children, className = "" }) {
  const [value, setValue] = useState(defaultValue);
  return (
    <TabsCtx.Provider value={{ value, setValue }}>
      <div className={className}>{children}</div>
    </TabsCtx.Provider>
  );
}

export function TabsList({ children, className = "" }) {
  return <div className={`inline-flex gap-2 ${className}`}>{children}</div>;
}

export function TabsTrigger({ value, children, className = "", ...props }) {
  const ctx = useContext(TabsCtx);
  const active = ctx?.value === value;
  return (
    <button
      className={`px-3 h-9 rounded-md border text-sm ${
        active ? "bg-emerald-600 text-white" : "bg-white"
      } ${className}`}
      onClick={() => ctx?.setValue(value)}
      {...props}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children, className = "" }) {
  const ctx = useContext(TabsCtx);
  if (ctx?.value !== value) return null;
  return <div className={className}>{children}</div>;
}
