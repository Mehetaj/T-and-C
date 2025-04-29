import ReservationHero from "@/components/menu/online-reserve";
import SignatureDishes from "@/components/menu/signature-items";
import StartersMenu from "@/components/menu/starter-items";
import PageBanner from "@/components/public/page-banner";


export default function MenusPage() {
  return (
    <main>
      <PageBanner
        title="OUR MENUS"
        subtitle="Check out"
        backgroundImage="/g4.jpg?height=1000&width=2000"
        height="large"
      />

      <div className="flex flex-col justify-center items-center my-10 gap-6 font-bold">
        <h1 className="text-4xl">Until I discovered cooking I was never <br /> really interested in anything</h1>

        <h2 className="text-xl">Our Founder John Phillipe</h2>

        <h4>John Phillipe</h4>
      </div>

      <SignatureDishes />
      <StartersMenu />
      <ReservationHero />
    </main>
  )
}
