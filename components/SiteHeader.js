import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="shadow">
      <nav className="flex items-center py-8 px-14 justify-between">
        <div className="flex items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold text-white-bold">triWeb</h1>
          </Link>
        </div>
        <div className="ml-10">
          <ul className="md:flex space-x-8 hidden ">
            <li>
              <Link href="#" className="text-white font-semibold">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white font-semibold">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-white font-semibold">
                Blog
              </Link>
            </li>
            <li>
              <Link href="contact" className="text-white font-semibold">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button className="outline-none mobile-menu-button">
            <svg
              className="w-6 h-6 text-white"
              x-show="!showMenu"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
