"use client";

import { createContext, useContext } from "react";

type LeadModalContextType = {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const LeadModalContext =
  createContext<LeadModalContextType | null>(null);

export function useLeadModal() {
  const context = useContext(LeadModalContext);

  if (!context) {
    throw new Error(
      "useLeadModal must be used inside LeadModalProvider"
    );
  }

  return context;
}