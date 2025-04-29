import Image from "next/image";

const dishes = [
  {
    name: "Salted Fried Chicken",
    price: 20.0,
    description: "Chicken / Olive Oil / Salt",
    isNew: false,
  },
  {
    name: "Crab With Curry Sources",
    price: 24.5,
    description: "Crab / Potatoes / Rice",
    isNew: false,
  },
  {
    name: "Imported Salmon Steak",
    price: 18.9,
    description: "Salmon / Veggies / Oil",
    isNew: false,
  },
  {
    name: "Baked Potato Pizza",
    price: 12.0,
    description: "Potato / Bread / Cheese",
    isNew: true,
  },
];

const images = [
  {
    src: "/g3.jpg?height=400&width=400",
    alt: "Greek salad with feta cheese",
  },
  {
    src: "/g5.jpg?height=400&width=400",
    alt: "Dish on blue plate",
  },
  {
    src: "/g6.jpg?height=400&width=400",
    alt: "Green dish with garnish",
  },
  {
    src: "/g4.jpg?height=400&width=400",
    alt: "Tomato based dish",
  },
];

export default function SignatureDishes() {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start">
          {/* Left side - Image Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 mb-10 lg:mb-0">
            {images.map((image, index) => (
              <div key={index} className="relative h-[200px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  priority={index === 0} // Load the first image faster
                />
              </div>
            ))}
          </div>

          {/* Right side - Menu Items */}
          <div className="w-full lg:w-1/2 lg:pl-16">
            <h2 className="text-4xl font-bold mb-6">Signature Dishes</h2>

            {/* Icon */}
            <div className="flex justify-start mb-8">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 5L10 9H14L12 5Z" fill="#d8b78e" />
                <path d="M12 9L10 13H14L12 9Z" fill="#d8b78e" />
                <path d="M12 13L10 17H14L12 13Z" fill="#d8b78e" />
              </svg>
            </div>

            {/* Dishes */}
            <div className="space-y-8">
              {dishes.map((dish, index) => (
                <div
                  key={index}
                  className={dish.isNew ? "border border-gray-200 p-4" : ""}
                >
                  {dish.isNew && (
                    <div className="bg-black text-white py-2 px-4 mb-4 inline-block">
                      <span className="font-medium">New</span>
                    </div>
                  )}
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-lg font-bold">{dish.name}</h3>
                    <div className="flex items-center">
                      <span className="border-b border-dotted border-gray-400 flex-grow mx-2 relative top-[-4px]">
                        {Array(20).fill("·").join("")}
                      </span>
                      <span className="font-bold">${dish.price.toFixed(1)}</span>
                    </div>
                  </div>
                  <p className="text-gray-600">{dish.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
