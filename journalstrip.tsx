export default function JournalStrip() {
  return (
    <section>
      <div className="flex items-end justify-between">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl">Punto Azul Journal</h2>
          <p className="text-stone/70">Stories on culture, design, and sport</p>
        </div>
        <a className="text-sm uppercase tracking-wider2 hover:opacity-60" href="#">
          Read All
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {[
          {
            id: "1618172193763-c511deb635ca",
            title: "Notes from the Coast",
            excerpt:
              "On fabric hand-feel, airflow, and how we balance performance with elegance.",
          },
          {
            id: "1533435137002-455932c85305",
            title: "Studio Process",
            excerpt:
              "Pattern-making, testing drape, and dialing silhouettes for movement.",
          },
          {
            id: "1520975916090-3105956dac38",
            title: "Court to City",
            excerpt:
              "Translating sport details into everyday uniforms for Houston & Acapulco.",
          },
        ].map((a, i) => (
          <article
            key={i}
            className="rounded-3xl bg-white shadow-[0_10px_30px_rgba(0,0,0,.08)] overflow-hidden"
          >
            <img
              className="w-full h-48 object-cover"
              src={`https://images.unsplash.com/photo-${a.id}?q=80&w=1600&auto=format&fit=crop`}
              alt={a.title}
            />
            <div className="p-6">
              <h3 className="font-serif text-xl">{a.title}</h3>
              <p className="text-stone/80 text-sm mt-2">{a.excerpt}</p>
              <a
                href="#"
                className="inline-block mt-4 text-sm uppercase tracking-wider2 text-azul"
              >
                Continue
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
