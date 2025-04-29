import Image from "next/image";

const dishes = [
  {
    name: "Spicy Crab Ramen",
    price: 20.0,
    description: "Crab / Veggie / Soup",
    isNew: false,
  },
  {
    name: "Fresh Crab With Lemon",
    price: 24.5,
    description: "Crab / Lemon / Garlic",
    isNew: false,
  },
  {
    name: "Grilled Salmon Sushi",
    price: 15.5,
    description: "Rice / Salmon / Shoyu",
    isNew: false,
  },
  {
    name: "Fried Chicken Salad",
    price: 12.0,
    description: "Chicken / Butter / Veggies",
    isNew: true,
  },
];

const images = [
  "/st-1.jpg?height=600&width=500",
  "/st-2.jpg?height=600&width=500",
];

export default function StartersMenu() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-start gap-8">
        {/* Left - Menu Card */}
        <div className="bg-white rounded-xl shadow-xl p-8 w-full lg:w-[500px]">
          <h2 className="text-3xl font-bold text-center mb-6">Starters</h2>

          <div className="space-y-6">
            {dishes.map((dish, index) =>
              dish.isNew ? (
                <div key={index}>
                  <div className="bg-black text-white px-4 py-1 text-sm font-semibold w-fit mb-2 rounded">
                    New
                  </div>
                  <div className="border rounded-md px-4 py-2">
                    <div className="flex justify-between items-baseline">
                      <span className="font-medium">{dish.name}</span>
                      <span className="text-right">${dish.price.toFixed(1)}</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">{dish.description}</p>
                  </div>
                </div>
              ) : (
                <div key={index}>
                  <div className="flex justify-between items-baseline font-semibold">
                    <span>{dish.name}</span>
                    <span className="text-right">${dish.price.toFixed(1)}</span>
                  </div>
                  <div className="border-b border-dotted border-black my-1"></div>
                  <p className="text-gray-600 text-sm">{dish.description}</p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Right - Images */}
        <div className="flex flex-col md:flex-row gap-6">
          {images.map((src, idx) => (
            <div key={idx} className="relative w-full h-[300px] md:w-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md">
              <Image
                src={src}
                alt={`Dish image ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
