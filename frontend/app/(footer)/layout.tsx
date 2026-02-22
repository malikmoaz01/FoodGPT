import Footer from '../components/Footer';

export default function FooterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="min-h-screen pt-20">{children}</main>
      <Footer />
    </>
  );
}
