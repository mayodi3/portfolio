"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-md py-4">
      <div className="container mx-auto px-4">
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/"
              className={`hover:text-amber-500 transition-colors ${
                pathname === "/" ? "text-amber-500" : "text-gray-100"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/subscriptions"
              className={`hover:text-amber-500 transition-colors ${
                pathname === "/subscriptions"
                  ? "text-amber-500"
                  : "text-gray-100"
              }`}
            >
              Subscriptions
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`hover:text-amber-500 transition-colors ${
                pathname === "/contact" ? "text-amber-500" : "text-gray-100"
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
