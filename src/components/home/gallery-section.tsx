"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Search, Play, Maximize, Minimize } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "/g1.jpg?height=600&width=600",
    alt: "Food arrangement with orange flowers",
  },
  {
    id: 2,
    src: "/g2.jpg?height=600&width=600",
    alt: "Greek salad with feta cheese",
  },
  {
    id: 3,
    src: "/g3.jpg?height=600&width=600",
    alt: "Person arranging herbs",
  },
  {
    id: 4,
    src: "/g4.jpg?height=600&width=600",
    alt: "Chef preparing food",
  },
  {
    id: 5,
    src: "/g5.jpg?height=600&width=600",
    alt: "Outdoor dining with string lights",
  },
  {
    id: 6,
    src: "/g6.jpg?height=600&width=600",
    alt: "Bowl of food on teal cloth",
  },
  {
    id: 7,
    src: "/st-1.jpg?height=600&width=600",
    alt: "Food dish with yellow ingredients",
  },
  {
    id: 8,
    src: "/st-2.jpg?height=600&width=600",
    alt: "Restaurant dining area",
  },
]

export default function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = "auto"
  }

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((e) => {
        console.error(`Error attempting to enable fullscreen: ${e.message}`)
      })
      setIsFullscreen(true)
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
        setIsFullscreen(false)
      }
    }
  }

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Gallery Header */}
        <div className="text-center mb-12">
          <h3 className="text-[#d8b78e] text-4xl font-script mb-1">Our</h3>
          <h2 className="text-[#000000] text-5xl font-bold mb-6">GALLERY</h2>
          <div className="flex justify-center mb-8">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5L10 9H14L12 5Z" fill="#d8b78e" />
              <path d="M12 9L10 13H14L12 9Z" fill="#d8b78e" />
              <path d="M12 13L10 17H14L12 13Z" fill="#d8b78e" />
            </svg>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="relative h-[300px] cursor-pointer overflow-hidden"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src || "/g1.jpg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Counter */}
          <div className="absolute top-4 left-4 text-white text-sm">
            {currentImageIndex + 1} / {galleryImages.length}
          </div>

          {/* Controls */}
          <div className="absolute top-4 right-4 flex space-x-4">
            <button className="text-white hover:text-gray-300">
              <Search size={20} />
            </button>
            <button className="text-white hover:text-gray-300">
              <Play size={20} />
            </button>
            <button className="text-white hover:text-gray-300" onClick={toggleFullscreen}>
              {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
            </button>
            <button className="text-white hover:text-gray-300" onClick={closeLightbox}>
              <X size={20} />
            </button>
          </div>

          {/* Navigation */}
          <button
            className="absolute left-4 p-2 text-white hover:text-gray-300"
            onClick={prevImage}
            aria-label="Previous image"
          >
            <ChevronLeft size={40} />
          </button>

          <button
            className="absolute right-4 p-2 text-white hover:text-gray-300"
            onClick={nextImage}
            aria-label="Next image"
          >
            <ChevronRight size={40} />
          </button>

          {/* Image */}
          <div className="relative h-[80vh] w-[80vw] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={galleryImages[currentImageIndex].src || "/g1.jpg"}
              alt={galleryImages[currentImageIndex].alt}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </section>
  )
}
