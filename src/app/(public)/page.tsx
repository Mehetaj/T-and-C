import GallerySection from "@/components/home/gallery-section";
import ContactSection from "@/components/home/get-in-touch";
import HeroSection from "@/components/home/HeroSection";
import Navigation from "@/components/public/Navigation";
import RestaurantGallerySection from "@/components/home/restauran-gallery-section";
import StorySection from "@/components/home/story-section";
import TopBar from "@/components/public/TopBar";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <TopBar />
      <HeroSection videoId="WdWEMXnHBVI" />
      <StorySection />
      <RestaurantGallerySection />
      <ContactSection/>
      <GallerySection/>
    </div>
  );
}