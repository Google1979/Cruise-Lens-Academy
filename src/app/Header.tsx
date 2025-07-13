"use client";
import React, { useState, useEffect } from "react";
import Logo from "@/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50  ${
        scrolled && "transition-all duration-300"
      } ${scrolled || mobileOpen ? "backdrop-blur-md bg-black/60" : ""}`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="#home"
            className="flex items-center space-x-3 cursor-pointer"
          >
            <Image
              src={Logo}
              alt="Cruise Lens Academy Logo"
              className="w-28 h-auto"
              loading="eager"
            />
            <span className="md:hidden text-white text-2xl font-semibold">
              Cruise Lens Academy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href={"/#home"}
              className="text-white hover:text-blue-200 transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-white hover:text-blue-200 transition-colors duration-300 font-medium"
            >
              About
            </Link>
            <Link
              href="#courses"
              className="text-white hover:text-blue-200 transition-colors duration-300 font-medium"
            >
              Courses
            </Link>
            <Link
              href="#founders"
              className="text-white hover:text-blue-200 transition-colors duration-300 font-medium"
            >
              Founders
            </Link>
            <Link
              href="#partners"
              className="text-white hover:text-blue-200 transition-colors duration-300 font-medium"
            >
              Partners
            </Link>
            <Link
              href="#recruitment"
              className="text-white hover:text-blue-200 transition-colors duration-300 font-medium"
            >
              Recruitment
            </Link>
            <Link
              href="#testimonials"
              className="text-white hover:text-blue-200 transition-colors duration-300 font-medium"
            >
              Testimonials
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              className="inline-flex items-center justify-center ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cruise-gradient h-11 rounded-md text-black font-bold text-lg px-8 py-4 shadow-lg hover:scale-105 transform transition-all duration-200 group"
              aria-label="Apply Now"
            >
              Apply Now
              <ArrowRight />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <Menu size={36} />
          </button>
        </div>

        {/* Mobile Dropdown */}
        {
          <div
            className={`lg:hidden  py-4 px-6 flex flex-col space-y-4 absolute left-0 right-0 top-full z-40  transition-all duration-300 ${
              mobileOpen ? "block backdrop-blur-md bg-black/60" : "hidden"
            }`}
          >
            <Link
              href={"/#home"}
              className="text-white hover:text-blue-200 transition-colors duration-300 font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-white hover:text-blue-200 transition-colors duration-300 font-medium"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link
              href="#courses"
              className="text-white hover:text-blue-200 transition-colors duration-300 font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="#founders"
              className="text-white hover:text-blue-200 transition-colors duration-300 font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Founders
            </Link>
            <Link
              href="#partners"
              className="text-white hover:text-blue-200 transition-colors duration-300 font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Partners
            </Link>
            <Link
              href="#recruitment"
              className="text-white hover:text-blue-200 transition-colors duration-300 font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Recruitment
            </Link>
            <Link
              href="#testimonials"
              className="text-white hover:text-blue-200 transition-colors duration-300 font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Testimonials
            </Link>
            <button
              className="inline-flex items-center justify-center ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cruise-gradient h-11 rounded-md text-black font-bold text-lg px-8 py-4 shadow-lg hover:scale-105 transform transition-all duration-200 group"
              aria-label="Apply Now"
            >
              Apply Now
              <ArrowRight />
            </button>
          </div>
        }
      </nav>
    </header>
  );
}
