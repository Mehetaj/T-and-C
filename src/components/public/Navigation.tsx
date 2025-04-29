"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ReservationButton from "./reversation-button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/menus", label: "Menus" },
  { href: "/shop", label: "Shop" },
  { href: "/our-services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${isScrolled ? "bg-white shadow" : "bg-black"} fixed w-full z-50 transition-all duration-300`}>
      <div className="container mx-auto flex justify-between items-center px-4 py-6">
        <Link href="/" className="flex flex-col items-center">
          <span className={`${isScrolled ? "text-black" : "text-white"} text-2xl font-bold tracking-wider`}>
            GRAND
          </span>
          <span className={`${isScrolled ? "text-black" : "text-white"} text-xs tracking-[0.3em] -mt-1`}>
            RESTAURANT
          </span>
        </Link>

        <div className="flex items-center space-x-8">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${
                isScrolled ? "text-black" : "text-[#d8b78e]"
              } hover:text-[#d8b78e] transition-colors flex items-center`}
            >
              {label}
            </Link>
          ))}

          <ReservationButton />
        </div>
      </div>
    </nav>
  );
}
