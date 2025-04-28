import Image from "next/image"
import Link from "next/link"

export default function StorySection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-stretch">
          {/* Left side images */}
          <div className="w-full lg:w-1/2 flex space-x-4 mb-10 lg:mb-0">
            <div className="w-1/2">
              <div className="relative h-[430px] w-full">
                <Image
                  src="/st-1.jpg?height=860&width=600"
                  alt="Food arrangement with orange flowers"
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
            </div>
            <div className="w-1/2">
              <div className="relative h-[430px] w-full">
                <Image
                  src="/st-2.jpg?height=860&width=600"
                  alt="Bowl of food on teal cloth"
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
            </div>
          </div>

          {/* Right side content */}
          <div className="w-full lg:w-1/2 lg:pl-16 flex flex-col justify-center">
            <div className="max-w-md mx-auto lg:mx-0">
              <h3 className="text-[#d8b78e] text-4xl font-script text-center lg:text-left mb-1">Discover</h3>
              <h2 className="text-[#000000] text-5xl font-bold text-center lg:text-left mb-6">OUR STORY</h2>
              
              <div className="flex justify-center lg:justify-start mb-8">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5L10 9H14L12 5Z" fill="#d8b78e" />
                  <path d="M12 9L10 13H14L12 9Z" fill="#d8b78e" />
                  <path d="M12 13L10 17H14L12 13Z" fill="#d8b78e" />
                </svg>
              </div>
              
              <p className="text-gray-700 text-center lg:text-left mb-8 leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
              </p>
              
              <div className="flex justify-center lg:justify-start">
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
      </div>
    </section>
  )
}
