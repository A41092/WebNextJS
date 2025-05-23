// src/components/ui/card.tsx
import React from "react";

export function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-lg border border-gray-300 p-4 shadow">{children}</div>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="mt-2">{children}</div>;
}
