import Image from "next/image"

interface PageBannerProps {
  title: string
  subtitle?: string
  backgroundImage: string
  height?: "small" | "medium" | "large"
  overlay?: boolean
  overlayOpacity?: number
  textAlignment?: "left" | "center" | "right"
}

export default function PageBanner({
  title,
  subtitle,
  backgroundImage,
  height = "medium",
  overlay = true,
  overlayOpacity = 0.4,
  textAlignment = "center",
}: PageBannerProps) {
  // Height classes based on the prop
  const heightClasses = {
    small: "h-[300px]",
    medium: "h-[400px]",
    large: "h-[500px]",
  }

  // Text alignment classes
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }

  return (
    <div className={`relative w-full ${heightClasses[height]} overflow-hidden`}>
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={backgroundImage || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        
        {/* Optional dark overlay */}
        {overlay && (
          <div 
            className="absolute inset-0 bg-black" 
            style={{ opacity: overlayOpacity }}
          ></div>
        )}
      </div>
      
      {/* Content */}
      <div className={`relative h-full flex flex-col justify-center ${alignmentClasses[textAlignment]} px-8 md:px-16 z-10`}>
        {subtitle && (
          <h3 className="text-[#d8b78e] text-3xl md:text-4xl font-script mb-2">{subtitle}</h3>
        )}
        <h1 className="text-white text-4xl md:text-6xl font-bold tracking-wide">{title}</h1>
      </div>
    </div>
  )
}
