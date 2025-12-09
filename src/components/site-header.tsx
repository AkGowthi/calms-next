"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import BookFreeDemoButton from "@/components/book-free-demo-button";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Our Solutions", href: "/solutions" },
  { label: "Pricing", href: "/new-pricing" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  const closeMenu = () => setOpen(false);

  return (
    <header className="bg-[#E0EEFF] h-[70px] flex items-center sticky top-0 z-50">
      <div className="w-full mx-auto px-4 md:px-28">
        <div className="flex w-full items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <Image
              src="/images/logo.png"
              alt="CALMS International"
              width={160}
              height={48}
              className="h-12 w-auto"
              style={{ width: "auto" }}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 w-full justify-end">
            <nav className="hidden md:flex gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    "relative inline-block text-[#282828] font-normal hover:opacity-90 transition " +
                    (isActive(item.href)
                      ? "after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-[3px] after:w-[42px] after:bg-[#0154D6] after:rounded-full"
                      : "")
                  }
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <BookFreeDemoButton />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-[#282828] border border-[#002a70]/30"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Open main menu</span>
            <div className="relative w-5 h-3.5">
              <span
                className={`absolute inset-x-0 top-0 h-[3px] bg-[#002a70] rounded transition-transform ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 top-1/2 -translate-y-1/2 h-[3px] bg-[#002a70] rounded transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute inset-x-0 bottom-0 h-[3px] bg-[#002a70] rounded transition-transform ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Nav Panel */}
      <div
        className={
          "md:hidden fixed top-[70px] left-0 right-0 bg-[#E0EEFF] px-6 py-6 space-y-6 z-40 transition-all duration-200 will-change-transform " +
          (open
            ? "translate-y-0 opacity-100 visible pointer-events-auto"
            : "-translate-y-full opacity-0 invisible pointer-events-none")
        }
        aria-hidden={!open}
      >
        <nav className="flex flex-col gap-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-[#282828] text-lg"
              onClick={closeMenu}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        <BookFreeDemoButton onClick={closeMenu} size="sm" />
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;
