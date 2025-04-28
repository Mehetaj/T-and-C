import Image from "next/image"
import Link from "next/link"

export default function RestaurantGallerySection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Left side content */}
          <div className="w-full lg:w-2/5 mb-8 lg:mb-0 flex flex-col justify-center">
            <div className="max-w-md mx-auto lg:mx-0">
              <h3 className="text-amber-400 text-4xl font-light italic text-center lg:text-left mb-2">Visit Our</h3>
              <h2 className="text-black text-5xl font-bold text-center lg:text-left mb-6">RESTAURANT</h2>
              
              <div className="flex justify-center lg:justify-start mb-8">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L10 8H14L12 4Z" fill="#d8b78e" />
                  <path d="M12 10L10 14H14L12 10Z" fill="#d8b78e" />
                  <path d="M12 16L10 20H14L12 16Z" fill="#d8b78e" />
                </svg>
              </div>
              
              <p className="text-gray-700 text-center lg:text-left mb-8">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
              </p>
              
              <div className="flex justify-center lg:justify-start">
                <Link
                  href="/locations"
                  className="text-amber-400 border-b border-amber-400 pb-1 hover:text-amber-500 transition-colors"
                >
                  Get Locations
                </Link>
              </div>
            </div>
          </div>
          
          {/* Right side image grid */}
          <div className="w-full lg:w-3/5 grid grid-cols-6 gap-4">
            {/* Top row */}
            <div className="col-span-2">
              <div className="relative h-48 w-full">
                <Image
                  src="/g1.jpg"
                  alt="Restaurant lighting and ambiance"
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
            </div>
            <div className="col-span-3">
              <div className="relative h-48 w-full">
                <Image
                  src="/g2.jpg"
                  alt="Restaurant dining tables"
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="relative h-48 w-full">
                <Image
                  src="/g3.jpg"
                  alt="Chef preparing food"
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
            </div>
            
            {/* Bottom row */}
            <div className="col-span-2">
              <div className="relative h-40 w-full">
                <Image
                  src="/g4.jpg"
                  alt="Restaurant food dishes"
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
            </div>
            <div className="col-span-2">
              <div className="relative h-40 w-full">
                <Image
                  src="/g5.jpg"
                  alt="Beautifully plated dish"
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
            </div>
            <div className="col-span-2">
              <div className="relative h-40 w-full">
                <Image
                  src="/g6.jpg"
                  alt="Person enjoying a meal"
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}