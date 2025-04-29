import Image from 'next/image';
import React from 'react';

const Gallery = () => {
    return (
        <section className="grid grid-cols-3 md:grid-cols-6 gap-0">
            {/* Row 1 */}
            <div className="relative h-[150px]">
                <Image src="/g2.jpg?height=300&width=300" alt="Food 1" fill className="object-cover" />
            </div>
            <div className="relative h-[150px]">
                <Image src="/g2.jpg?height=300&width=300" alt="Food 2" fill className="object-cover" />
            </div>
            <div className="relative h-[150px]">
                <Image src="/g2.jpg?height=300&width=300" alt="Food 3" fill className="object-cover" />
            </div>
            <div className="relative h-[150px]">
                <Image src="/g2.jpg?height=300&width=300" alt="Chef" fill className="object-cover" />
            </div>
            <div className="relative h-[150px]">
                <Image src="/g2.jpg?height=300&width=300" alt="Restaurant" fill className="object-cover" />
            </div>
            <div className="relative h-[150px]">
                <Image src="/g2.jpg?height=300&width=300" alt="Food 4" fill className="object-cover" />
            </div>

            {/* Row 2 */}
            <div className="relative h-[150px]">
                <Image src="/g2.jpg?height=300&width=300" alt="Food 5" fill className="object-cover" />
            </div>
            <div className="relative h-[150px]">
                <Image src="/g2.jpg?height=300&width=300" alt="Food 6" fill className="object-cover" />
            </div>
            <div className="relative h-[150px]">
                <Image src="/g2.jpg?height=300&width=300" alt="Outdoor Dining" fill className="object-cover" />
            </div>
            <div className="relative h-[150px]">
                <Image src="/g2.jpg?height=300&width=300" alt="Food 7" fill className="object-cover" />
            </div>
            <div className="relative h-[150px]">
                <Image src="/g2.jpg?height=300&width=300" alt="Food 8" fill className="object-cover" />
            </div>
            <div className="relative h-[150px]">
                <Image src="/g2.jpg?height=300&width=300" alt="Food 9" fill className="object-cover" />
            </div>

            {/* Row 3 */}
            <div className="relative h-[150px]">
                <Image src="/g2.jpg?height=300&width=300" alt="Food 10" fill className="object-cover" />
            </div>
            <div className="relative h-[150px]">
                <Image src="/g2.jpg?height=300&width=300" alt="Food 11" fill className="object-cover" />
            </div>
            <div className="relative h-[150px]">
                <Image src="/g2.jpg?height=300&width=300" alt="Food 12" fill className="object-cover" />
            </div>
            <div className="relative h-[150px]">
                <Image src="/g2.jpg?height=300&width=300" alt="Outdoor Dining 2" fill className="object-cover" />
            </div>
            <div className="relative h-[150px]">
                <Image src="/g2.jpg?height=300&width=300" alt="Chef 2" fill className="object-cover" />
            </div>
            <div className="relative h-[150px]">
                <Image src="/g2.jpg?height=300&width=300" alt="Outdoor Dining 3" fill className="object-cover" />
            </div>

            {/* Row 4 - Special Sizes */}
            <div className="relative h-[300px] col-span-3">
                <Image src="/g2.jpg?height=600&width=900" alt="Food Dish" fill className="object-cover" />
            </div>
            <div className="relative h-[300px] col-span-2">
                <Image src="/g2.jpg?height=600&width=600" alt="Restaurant Interior" fill className="object-cover" />
            </div>
            <div className="relative h-[300px] col-span-1">
                <Image src="/g2.jpg?height=600&width=300" alt="Food Dish 2" fill className="object-cover" />
            </div>
        </section>
    );
};

export default Gallery;