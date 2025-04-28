import Image from "next/image"
import Link from "next/link"

export default function StoryRestaurantSections() {
  return (
    <div className="w-full bg-white">
      {/* Our Story Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side images */}
          <div className="w-full lg:w-1/2 flex space-x-4 mb-10 lg:mb-0">
            <div className="w-1/2">
              <div className="relative h-[400px] w-full">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Food arrangement with orange flowers"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-1/2">
              <div className="relative h-[400px] w-full">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Bowl of food on teal cloth"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right side content */}
          <div className="w-full lg:w-1/2 lg:pl-16 max-w-lg mx-auto lg:mx-0">
            <h3 className="text-[#d8b78e] text-3xl font-script mb-1">Discover</h3>
            <h2 className="text-5xl font-bold mb-6">OUR STORY</h2>
            <div className="flex justify-center mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5L10 9H14L12 5Z" fill="#d8b78e" />
                <path d="M12 9L10 13H14L12 9Z" fill="#d8b78e" />
                <path d="M12 13L10 17H14L12 13Z" fill="#d8b78e" />
              </svg>
            </div>
            <p className="text-gray-700 text-center mb-6 leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
            </p>
            <div className="flex justify-center">
              <Link
                href="/our-story"
                className="text-[#d8b78e] border-b border-[#d8b78e] pb-1 hover:text-[#c3a57d] transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Restaurant Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          {/* Left side content */}
          <div className="w-full lg:w-1/2 lg:pr-16 max-w-lg mx-auto lg:mx-0 mt-10 lg:mt-0">
            <h3 className="text-[#d8b78e] text-3xl font-script mb-1">Visit Our</h3>
            <h2 className="text-5xl font-bold mb-6">RESTAURANT</h2>
            <div className="flex justify-center mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5L10 9H14L12 5Z" fill="#d8b78e" />
                <path d="M12 9L10 13H14L12 9Z" fill="#d8b78e" />
                <path d="M12 13L10 17H14L12 13Z" fill="#d8b78e" />
              </svg>
            </div>
            <p className="text-gray-700 text-center mb-6 leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
            </p>
            <div className="flex justify-center">
              <Link
                href="/locations"
                className="text-[#d8b78e] border-b border-[#d8b78e] pb-1 hover:text-[#c3a57d] transition-colors"
              >
                Get Locations
              </Link>
            </div>
          </div>

          {/* Right side image grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-6 grid-rows-6 gap-2 h-[500px]">
            {/* Top row */}
            <div className="col-span-2 row-span-3 relative">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Restaurant interior with lights"
                fill
                className="object-cover"
              />
            </div>
            <div className="col-span-3 row-span-3 relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Restaurant dining area"
                fill
                className="object-cover"
              />
            </div>
            <div className="col-span-1 row-span-3 relative">
              <Image
                src="/placeholder.svg?height=400&width=200"
                alt="Chef preparing food"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom row */}
            <div className="col-span-2 row-span-3 relative">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Food dish with yellow ingredients"
                fill
                className="object-cover"
              />
            </div>
            <div className="col-span-2 row-span-3 relative">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Seafood dish on blue plate"
                fill
                className="object-cover"
              />
            </div>
            <div className="col-span-2 row-span-3 relative">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Person eating at restaurant"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
