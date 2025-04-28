import Link from "next/link"
import { Facebook, Twitter, Instagram, Link2, YoutubeIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-[#222222] text-white pt-16">
      {/* Decorative curved edge at the top */}
      <div className="absolute top-0 left-0 right-0 transform -translate-y-[99%] h-8 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 48"
          fill="#222222"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path d="M0,0 C720,96 1440,0 1440,0 V48 H0 V0 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <div className="flex flex-col items-start mb-6">
              <span className="text-white text-2xl font-bold tracking-wider">GRAND</span>
              <span className="text-white text-xs tracking-[0.3em] -mt-1">RESTAURANT</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Dolor church-key veniam, fap Bushwick mumblecore irure Vice consectetur 3 wolf moon sapiente literally
              quinoa.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-[#d8b78e] transition-colors">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="text-white hover:text-[#d8b78e] transition-colors">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="text-white hover:text-[#d8b78e] transition-colors">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="text-white hover:text-[#d8b78e] transition-colors">
                <Link2 size={18} />
              </Link>
              <Link href="#" className="text-white hover:text-[#d8b78e] transition-colors">
                <YoutubeIcon size={18} />
              </Link>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase">Overview</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#d8b78e] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#d8b78e] transition-colors">
                  Food Menus
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#d8b78e] transition-colors">
                  Online Delivery
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#d8b78e] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#d8b78e] transition-colors">
                  Blog Posts
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#d8b78e] transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#d8b78e] transition-colors">
                  Terms of use
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#d8b78e] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>

            <h3 className="text-white font-bold mt-8 mb-6 uppercase">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +65.4566743
              </li>
              <li className="flex items-center text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                info@grandrestauranttheme.com
              </li>
              <li className="flex items-center text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.172 13.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.101"
                  />
                </svg>
                grandrestauranttheme.com
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase">Location</h3>
            <div className="flex items-start text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-gray-400 mt-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p>
                732/21 Second Street,
                <br />
                Manchester, King Street,
                <br />
                Kingston United Kingdom
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© Copyright Grand Restaurant Theme Demo - Theme by ThemeGoods</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-[#d8b78e] text-sm transition-colors">
              About Us
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#d8b78e] text-sm transition-colors">
              Our Chef
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#d8b78e] text-sm transition-colors">
              Blog
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#d8b78e] text-sm transition-colors">
              Delivery
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
