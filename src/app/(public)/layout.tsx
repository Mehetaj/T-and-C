import Footer from "@/components/public/footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <main className="">
        {children}
        <Footer />
      </main>
    </div>
  );
}