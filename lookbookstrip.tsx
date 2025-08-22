export default function LookbookStrip() {
  return (
    <section className="max-w-6xl mx-auto px-4">
      <h2 className="font-serif text-3xl md:text-4xl">Lookbook</h2>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {[
          "1517677208171-0bc6725a3e60",
          "1530797219576-ae9ff1cf7df8",
          "1520975961820-cf2d154cf9a2",
        ].map((id, i) => (
          <figure
            key={i}
            className="relative rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,.08)]"
          >
            <img
              className="w-full h-full object-cover aspect-[3/4]"
              src={`https://images.unsplash.com/photo-${id}?q=80&w=1600&auto=format&fit=crop`}
              alt={`Lookbook ${i + 1}`}
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
