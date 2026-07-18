"use client";

import { useEffect, useMemo, useState } from "react";
import { LeadModalContext } from "./LeadModalContext";
import LeadModal from "./LeadModal";

export default function LeadModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  // Auto open popup after 8 seconds (only once per browser session)
  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("lead-popup-shown");

    if (alreadyShown) return;

    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem("lead-popup-shown", "true");
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const value = useMemo(
    () => ({
      open,
      openModal: () => setOpen(true),
      closeModal: () => setOpen(false),
    }),
    [open]
  );

  return (
    <LeadModalContext.Provider value={value}>
      {children}
      <LeadModal />
    </LeadModalContext.Provider>
  );
}