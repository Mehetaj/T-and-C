import Image from "next/image";

export default function ReservationHero() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/rv.jpg')", // Replace this
        }}
      />

      {/* Top White Curve */}
      <div className="absolute top-0 left-0 w-full z-10">
        <svg
          className="w-full h-32"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,160L48,149.3C96,139,192,117,288,106.7C384,96,480,96,576,122.7C672,149,768,203,864,229.3C960,256,1056,256,1152,218.7C1248,181,1344,107,1392,69.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4">
        <button className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition font-medium mb-4">
          Make an Online Reservation
        </button>
        <p className="text-lg font-semibold">or call us +65.4566743</p>
      </div>
    </section>
  );
}
