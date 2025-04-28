import Link from 'next/link';

export default function VideoSection() {
  return (
    <section className="bg-[#1a1a1a] py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/videos" className="text-sm hover:underline">
          MORE VIDEOS
        </Link>
        <div className="flex space-x-4">
          <div className="w-24 h-16 bg-gray-700 rounded"></div>
          <div className="w-24 h-16 bg-gray-700 rounded"></div>
        </div>
      </div>
    </section>
  );
}