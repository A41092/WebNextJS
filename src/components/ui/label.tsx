// src/components/ui/label.tsx
import React from "react";

export function Label({ children, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className="block mb-1 text-sm font-medium text-gray-700" {...props}>
      {children}
    </label>
  );
}
