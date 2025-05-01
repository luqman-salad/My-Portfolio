"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface ToCItem {
  id: string;
  text: string;
  level: number;
}

interface ToCContextType {
  toc: ToCItem[];
  setToC: (items: ToCItem[]) => void;
}

const ToCContext = createContext<ToCContextType | undefined>(undefined);

export function ToCProvider({ children }: { children: ReactNode }) {
  const [toc, setToC] = useState<ToCItem[]>([]);

  return (
    <ToCContext.Provider value={{ toc, setToC }}>
      {children}
    </ToCContext.Provider>
  );
}

export function useToC() {
  const context = useContext(ToCContext);
  if (!context) {
    throw new Error("useToC must be used within a ToCProvider");
  }
  return context;
}