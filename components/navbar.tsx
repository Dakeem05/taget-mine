"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4">
      <div className="container-custom">
        <div className="flex items-center justify-between rounded-full border border-black px-14 py-4 bg-white/80 backdrop-blur-md">
          <Link href="/" className="text-2xl font-medium">
            <Image src="/logo.svg" alt="Taget Logo" width={80} height={24} />
          </Link>

          <nav className="hidden md:flex items-center space-x-[76px]">
            <Link
              href="/"
              className={`text-base font-light text-[#0D0D0D] hover:text-gray-600 transition-colors ${
                pathname === "/" ? "font-medium" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/#about"
              className={`text-base font-light text-[#0D0D0D] hover:text-gray-600 transition-colors ${
                pathname === "/about" ? "font-medium" : ""
              }`}
            >
              About Us
            </Link>
            <Link
              href="/events"
              className={`text-base font-light text-[#0D0D0D] hover:text-gray-600 transition-colors ${
                pathname === "/events" || pathname.startsWith("/events/") ? "font-medium" : ""
              }`}
            >
              Events
            </Link>
            <Link
              href="/cbf"
              className={`text-base font-light hover:text-gray-600 transition-colors ${
                pathname === "/contact" ? "font-light" : ""
              }`}
            >
              CBF
            </Link>
          </nav>

          <Link
            href="/#contact"
            className="bg-[#0D0D0D] w-[107px] h-[51px] flex items-center justify-center text-white px-4 py-2 rounded-[12px] text-base font-light hover:bg-gray-800 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}
