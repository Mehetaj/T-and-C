import Link from "next/link"
import { MapPin, Phone, Facebook, Twitter, Instagram, Link2, YoutubeIcon as Yelp } from "lucide-react"

export default function TopBar() {
  return (
    <div className="bg-[#d8b78e] text-white py-3 text-sm border-b border-[#c3a57d]">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1">
            <MapPin size={16} className="text-white" />
            <span>732/21 Second Street, King Street, UK</span>
          </div>
          <div className="flex items-center space-x-1">
            <Phone size={16} className="text-white" />
            <span>+65 4566743</span>
          </div>
        </div>

        <div className="flex items-center">
         

          <div className="flex space-x-3">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={16} className="text-white hover:text-gray-200 transition-colors" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter size={16} className="text-white hover:text-gray-200 transition-colors" />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={16} className="text-white hover:text-gray-200 transition-colors" />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Website">
              <Link2 size={16} className="text-white hover:text-gray-200 transition-colors" />
            </Link>
            <Link href="https://yelp.com" target="_blank" rel="noopener noreferrer" aria-label="Yelp">
              <Yelp size={16} className="text-white hover:text-gray-200 transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
