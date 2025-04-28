"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"

interface HeroSectionProps {
  videoId: string
}

export default function HeroSection({ videoId = "WdWEMXnHBVI" }: HeroSectionProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <iframe
            ref={videoRef}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&playsinline=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className={`absolute w-[300%] h-[300%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-1000 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white z-10">
        {/* Small gold icon above the logo */}
        <div className="mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15 8L21 9L16.5 14L18 20L12 17L6 20L7.5 14L3 9L9 8L12 2Z" fill="#d8b78e" />
          </svg>
        </div>

        {/* Logo */}
        <div className="text-center">
          <h1 className="text-7xl font-bold tracking-wider mb-2">GRAND</h1>
          <h2 className="text-4xl tracking-[0.3em] -mt-2">RESTAURANT</h2>
        </div>

        {/* Tagline */}
        <p className="mt-8 text-sm tracking-[0.2em] uppercase">Making the delicious premium food since</p>

        {/* Scroll Down Button */}
        <button
          onClick={scrollToContent}
          className="mt-12 rounded-full border border-white p-3 hover:bg-white hover:bg-opacity-20 transition-all duration-300"
        >
          <ChevronDown size={24} />
        </button>
      </div>

     
    </div>
  )
}
