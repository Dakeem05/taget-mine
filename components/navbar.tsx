import Link from "next/link"

export default function Navbar() {
  return (
    <header className="py-4">
      <div className="container-custom">
        <div className="flex items-center justify-between rounded-full border border-gray-200 px-6 py-2">
          <Link href="/" className="text-2xl font-bold">
            TAGET
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-gray-600">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-gray-600">
              About Us
            </Link>
            <Link href="/events" className="text-sm font-medium hover:text-gray-600">
              Events
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-gray-600">
              Contact
            </Link>
          </nav>

          <Link
            href="/join"
            className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Join Us
          </Link>
        </div>
      </div>
    </header>
  )
}
