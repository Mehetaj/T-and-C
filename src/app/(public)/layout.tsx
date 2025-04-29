import Footer from "@/components/public/footer";
import Navigation from "@/components/public/Navigation";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <main className="">
        <Navigation />
        {children}
        <Footer />
      </main>
    </div>
  );
}