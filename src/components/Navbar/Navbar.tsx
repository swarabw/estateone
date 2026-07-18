"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { project } from "@/data/project";
import PremiumButton from "@/components/ui/PremiumButton";
import { useLeadModal } from "@/components/lead/LeadModalContext";

const menuItems = [
  { title: "Highlights", href: "#highlights" },
  { title: "Amenities", href: "#amenities" },
  { title: "Gallery", href: "#gallery" },
  { title: "Location", href: "#location" },
  { title: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { openModal } = useLeadModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-10 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-2xl"
            : "bg-black/25 backdrop-blur-xl"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* Logo */}

          <Link href="/" className="select-none">
            <h2
              className={`text-2xl font-bold transition ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              Estate<span className="text-[#D4AF37]">One</span>
            </h2>

            <p
              className={`text-xs ${
                scrolled ? "text-gray-500" : "text-gray-300"
              }`}
            >
              Premium Realtors
            </p>
          </Link>

          {/* Desktop Menu */}

          <nav className="hidden items-center gap-8 lg:flex">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className={`font-medium transition ${
                  scrolled
                    ? "text-gray-700 hover:text-[#D4AF37]"
                    : "text-white hover:text-[#D4AF37]"
                }`}
              >
                {item.title}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}

          <div className="hidden items-center gap-4 lg:flex">

            <a
              href={`tel:${project.phone}`}
              className={`flex items-center gap-2 rounded-full px-4 py-2 transition ${
                scrolled
                  ? "text-black"
                  : "text-white"
              }`}
            >
              <Phone size={18} />
              <span className="font-medium">{project.phone}</span>
            </a>

            <PremiumButton onClick={openModal}>
              Book Free Site Visit
            </PremiumButton>

          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
          >
            {mobileOpen ? (
              <X className={scrolled ? "text-black" : "text-white"} />
            ) : (
              <Menu className={scrolled ? "text-black" : "text-white"} />
            )}
          </button>

        </div>
      </header>

      {/* Mobile Menu */}

      {mobileOpen && (
        <div className="fixed top-[120px] left-0 right-0 z-40 bg-white shadow-2xl lg:hidden">

          <div className="flex flex-col gap-5 p-6">

            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="font-medium text-gray-700"
              >
                {item.title}
              </a>
            ))}

            <PremiumButton
              onClick={() => {
                setMobileOpen(false);
                openModal();
              }}
            >
              Book Free Site Visit
            </PremiumButton>

          </div>

        </div>
      )}
    </>
  );
}