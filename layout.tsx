import "../../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Punto Azul — Athleisure Streetwear",
  description: "Blending Acapulco heritage with modern streetwear.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="w-full bg-azul text-cream text-xs tracking-wider2 uppercase py-2 text-center">
          Punto Azul Drop — Free US shipping over $150
        </div>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
