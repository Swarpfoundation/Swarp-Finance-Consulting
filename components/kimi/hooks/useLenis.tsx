"use client";

import { createContext, useContext } from "react";
import type Lenis from "lenis";

interface ScrollContextType {
  lenis: Lenis | null;
  scrollTo: (target: string | number, options?: object) => void;
}

const ScrollContext = createContext<ScrollContextType>({
  lenis: null,
  scrollTo: () => {},
});

export const ScrollProvider = ScrollContext.Provider;

export function useLenis() {
  return useContext(ScrollContext);
}
