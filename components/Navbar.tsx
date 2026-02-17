"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative sticky top-0 z-50 border-b border-gray-200 bg-[#08203e]">

      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 sm:px-8 py-4">

        {/* Logo / Name */}
        <h1
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setOpen(false);
          }}
          className="text-lg sm:text-xl font-bold text-white cursor-pointer"
        >
          Mirza Muhammad Shehryar
        </h1>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-4">
          <Link href="#about">
            <Button type="text" size="large" className="!text-white hover:!text-blue-600">
              About
            </Button>
          </Link>

          <Link href="#projects">
            <Button type="text" size="large" className="!text-white hover:!text-blue-600">
              Projects
            </Button>
          </Link>

          <Link href="#contact">
            <Button type="text" size="large" className="!text-white hover:!text-blue-600">
              Contact
            </Button>
          </Link>
        </div>

        {/* Hamburger (Mobile Only) */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-white text-2xl relative z-50"
        >
          <EllipsisOutlined />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="sm:hidden absolute top-full right-4 mt-2 w-40 bg-[#08203e] rounded-md shadow-lg flex flex-col items-start p-2 gap-2 z-40">
          <Link href="#about" onClick={() => setOpen(false)}>
            <Button type="text" className="!text-white hover:!text-blue-600 w-full text-left">
              About
            </Button>
          </Link>

          <Link href="#projects" onClick={() => setOpen(false)}>
            <Button type="text" className="!text-white hover:!text-blue-600 w-full text-left">
              Projects
            </Button>
          </Link>

          <Link href="#contact" onClick={() => setOpen(false)}>
            <Button type="text" className="!text-white hover:!text-blue-600 w-full text-left">
              Contact
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
