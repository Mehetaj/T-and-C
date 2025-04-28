import Image from "next/image"

export default function ContactSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-stretch">
          {/* Left side image grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-12 grid-rows-12 gap-3 mb-10 lg:mb-0">
            {/* Top row */}
            <div className="col-span-4 row-span-4 relative">
              <Image
                src="/g1.jpg"
                alt="Restaurant interior with lights"
                fill
                className="object-cover"
              />
            </div>
            <div className="col-span-4 row-span-4 relative">
              <Image
                src="/g2.jpg"
                alt="Chef preparing food"
                fill
                className="object-cover"
              />
            </div>
            <div className="col-span-4 row-span-4 relative">
              <Image
                src="/g3.jpg"
                alt="Outdoor dining table"
                fill
                className="object-cover"
              />
            </div>

            {/* Middle row */}
            <div className="col-span-6 row-span-4 relative">
              <Image
                src="/g6.jpg"
                alt="Restaurant dining area"
                fill
                className="object-cover"
              />
            </div>
            <div className="col-span-6 row-span-4 relative">
              <Image
                src="/g4.jpg"
                alt="Food dish on blue plate"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom row */}
            <div className="col-span-3 row-span-4 relative">
              <Image
                src="/g5.jpg"
                alt="Person eating at restaurant"
                fill
                className="object-cover"
              />
            </div>
            <div className="col-span-6 row-span-4 relative">
              <Image
                src="/st-1.jpg"
                alt="Food dish with tomatoes"
                fill
                className="object-cover"
              />
            </div>
            <div className="col-span-3 row-span-4 relative">
              <Image
                src="/st-2.jpg"
                alt="Bowl of food on teal cloth"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right side contact form */}
          <div className="w-full lg:w-1/2 lg:pl-16 flex flex-col justify-center">
            <div className="max-w-md mx-auto lg:mx-0">
              <h3 className="text-[#d8b78e] text-4xl font-script text-center lg:text-left mb-1">Get</h3>
              <h2 className="text-[#000000] text-5xl font-bold text-center lg:text-left mb-6">IN TOUCH</h2>

              <div className="flex justify-center lg:justify-start mb-8">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5L10 9H14L12 5Z" fill="#d8b78e" />
                  <path d="M12 9L10 13H14L12 9Z" fill="#d8b78e" />
                  <path d="M12 13L10 17H14L12 13Z" fill="#d8b78e" />
                </svg>
              </div>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d8b78e] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d8b78e] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your message (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d8b78e] focus:border-transparent"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-[#d8b78e] text-white font-medium hover:bg-[#c3a57d] transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
