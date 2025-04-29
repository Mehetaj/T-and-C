import ReservationHero from "@/components/menu/online-reserve"
import Gallery from "@/components/public/gallery"
import PageBanner from "@/components/public/page-banner"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Services Banner */}
            <PageBanner
                title="SERVICES"
                subtitle="Check out"
                backgroundImage="/rv.jpg?height=1000&width=2000"
                height="large"
            />

            {/* Food Delivery Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center">
                        {/* Left Content */}
                        <div className="w-full lg:w-1/3 bg-white p-8 lg:p-12 shadow-lg mb-8 lg:mb-0 lg:mr-8">
                            <h3 className="text-[#d8b78e] text-3xl font-script mb-1">Food</h3>
                            <h2 className="text-4xl font-bold mb-6">DELIVERY</h2>

                            <div className="flex justify-start mb-6">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 5L10 9H14L12 5Z" fill="#d8b78e" />
                                    <path d="M12 9L10 13H14L12 9Z" fill="#d8b78e" />
                                    <path d="M12 13L10 17H14L12 13Z" fill="#d8b78e" />
                                </svg>
                            </div>

                            <p className="text-gray-600 mb-8">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
                            </p>

                            <Link
                                href="#"
                                className="inline-block text-[#d8b78e] border-b border-[#d8b78e] pb-1 hover:text-[#c3a57d] transition-colors"
                            >
                                Order Now
                            </Link>
                        </div>

                        {/* Right Images */}
                        <div className="w-full lg:w-2/3 grid grid-cols-2 gap-4">
                            <div className="relative h-[300px]">
                                <Image
                                    src="/g2.jpg?height=600&width=600"
                                    alt="Food arrangement with orange flowers"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative h-[300px]">
                                <Image
                                    src="/g2.jpg?height=600&width=600"
                                    alt="Bowl of food on teal cloth"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 border-t border-b border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <h3 className="text-5xl font-bold mb-2">25</h3>
                            <p className="text-xs uppercase tracking-widest">Years of experience</p>
                        </div>
                        <div>
                            <h3 className="text-5xl font-bold mb-2">12</h3>
                            <p className="text-xs uppercase tracking-widest">Award winning chefs</p>
                        </div>
                        <div>
                            <h3 className="text-5xl font-bold mb-2">125</h3>
                            <p className="text-xs uppercase tracking-widest">Dishes & menus</p>
                        </div>
                        <div>
                            <h3 className="text-5xl font-bold mb-2">15</h3>
                            <p className="text-xs uppercase tracking-widest">Restaurant branches</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Event Catering Section */}
            <ReservationHero />

            {/* Photo Gallery */}
            <Gallery />
        </main>
    )
}

