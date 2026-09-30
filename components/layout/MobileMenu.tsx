"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

interface MobileMenuProps {
  links: { href: string; label: string }[];
  cta: { href: string; label: string };
  openLabel: string;
  closeLabel: string;
  navLabel: string;
}

export default function MobileMenu({ links, cta, openLabel, closeLabel, navLabel }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-md text-dark lg:hidden"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? closeLabel : openLabel}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
      </button>

      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-light px-6 pb-8 pt-4 lg:hidden"
      >
        <nav aria-label={navLabel}>
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-dark/10 py-4 font-display text-2xl font-semibold text-dark"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={cta.href}
          onClick={() => setOpen(false)}
          className="mt-8 flex w-full items-center justify-center rounded-lg bg-brand-accent px-7 py-4 font-body text-base font-semibold text-dark"
        >
          {cta.label}
        </a>
      </div>
    </>
  );
}
