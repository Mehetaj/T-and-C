import Link from "next/link"
import ReservationButton from "./reversation-button"

export default function Navigation() {
  return (
    <nav className="bg-black py-6">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="flex flex-col items-center">
          <span className="text-white text-2xl font-bold tracking-wider">GRAND</span>
          <span className="text-white text-xs tracking-[0.3em] -mt-1">RESTAURANT</span>
        </Link>

        <div className="flex space-x-8 items-center">
          <Link href="/" className="text-[#d8b78e] hover:text-white transition-colors flex items-center">
            Home
          </Link>

          <Link href="/menus" className="text-[#d8b78e] hover:text-white transition-colors flex items-center">
            Menus
          </Link>

          <Link href="/pages" className="text-[#d8b78e] hover:text-white transition-colors flex items-center">
            Pages
          </Link>

          <Link href="/shop" className="text-[#d8b78e] hover:text-white transition-colors">
            Shop
          </Link>

          <Link href="/blog" className="text-[#d8b78e] hover:text-white transition-colors flex items-center">
            Blog
          </Link>

          <ReservationButton />
        </div>
      </div>
    </nav>
  )
}
