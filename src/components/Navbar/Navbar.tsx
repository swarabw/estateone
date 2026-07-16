"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { project } from "@/data/project";

const menuItems = [
  {
    title: "Highlights",
    href: "#highlights",
  },
  {
    title: "Amenities",
    href: "#amenities",
  },
  {
    title: "Gallery",
    href: "#gallery",
  },
  {
    title: "Location",
    href: "#location",
  },
  {
    title: "FAQ",
    href: "#faq",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-xl"
            : "bg-black/20 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
          {/* Logo */}

          <Link href="/">
            <div>
              <h1
                className={`text-2xl font-bold ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                Estate<span className="text-yellow-500">One</span>
              </h1>

              <p
                className={`text-xs ${
                  scrolled ? "text-gray-500" : "text-gray-300"
                }`}
              >
                Premium Realtors
              </p>
            </div>
          </Link>

          {/* Desktop */}

          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className={`font-medium transition ${
                  scrolled
                    ? "text-gray-700 hover:text-yellow-600"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {item.title}
              </a>
            ))}

            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-xl">
              <Phone className="mr-2 h-4 w-4" />
              {project.phone}
            </Button>
          </nav>

          {/* Mobile */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
          >
            {mobileOpen ? (
              <X
                className={
                  scrolled ? "text-black" : "text-white"
                }
              />
            ) : (
              <Menu
                className={
                  scrolled ? "text-black" : "text-white"
                }
              />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}

      {mobileOpen && (
        <div className="fixed top-20 left-0 right-0 bg-white shadow-xl z-40 lg:hidden">
          <div className="flex flex-col p-6 gap-6">
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

            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black rounded-xl">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
          </div>
        </div>
      )}
    </>
  );
}