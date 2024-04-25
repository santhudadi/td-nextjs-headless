import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="shadow">
      <nav class="flex items-center py-8 px-14 justify-between">
        <div class="flex items-center">
          <h1 class="text-2xl font-bold text-white-bold">triWeb</h1>
        </div>
        <div class="ml-10">
          <ul class="md:flex space-x-8 hidden ">
            <li>
              <Link href="#" class="text-white font-semibold">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" class="text-white font-semibold">
                About
              </Link>
            </li>
            <li>
              <Link href="#" class="text-white font-semibold">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" class="text-white font-semibold">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
