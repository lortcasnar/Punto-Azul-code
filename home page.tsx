import Hero from "@/components/Hero";
import LookbookStrip from "@/components/LookbookStrip";
import JournalStrip from "@/components/JournalStrip";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-4">
        <Hero />
      </section>

      <section className="max-w-6xl mx-auto px-4 mt-16">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-3xl md:text-4xl">New Arrivals</h2>
          <a className="text-sm uppercase tracking-wider2 hover:opacity-60" href="#">
            View All
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8">
          {[1, 2, 3, 4].map((i) => (
            <ProductCard key={i} />
          ))}
        </div>
      </section>

      <section className="mt-20">
        <LookbookStrip />
      </section>

      <section className="max-w-6xl mx-auto px-4 mt-20">
        <JournalStrip />
      </section>
    </div>
  );
}
