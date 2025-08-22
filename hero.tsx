export default function Hero() {
  return (
    <div className="grid md:grid-cols-2 gap-6 items-stretch mt-8 md:mt-14">
      {/* Left side image */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,.08)]">
        <img
          src="https://images.unsplash.com/photo-1552072805-8af9c807df08?q=80&w=1600&auto=format&fit=crop"
          alt="Punto Azul editorial"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Right side text + mini-gallery */}
      <div className="flex flex-col justify-between">
        <div className="space-y-6">
          <h1 className="font-serif text-4xl md:text-6xl leading-tight">
            Punto Azul SS25 Drop
          </h1>
          <p className="text-stone/90 max-w-prose">
            A cinematic approach to athleisure. Crafted in small batches,
            inspired by the coasts of Acapulco and designed for the streets of
            Houston.
          </p>
          <div className="flex gap-3">
            <a
              href="#shop"
              className="px-5 py-3 bg-azul text-cream rounded-full text-sm uppercase tracking-wider2"
            >
              Shop New
            </a>
            <a
              href="#lookbook"
              className="px-5 py-3 border border-azul text-azul rounded-full text-sm uppercase tracking-wider2"
            >
              View Lookbook
            </a>
          </div>
        </div>

        {/* Mini gallery under text */}
        <div className="grid grid-cols-3 gap-3 mt-10">
          <img
            className="rounded-xl object-cover aspect-[3/4]"
            src="https://images.unsplash.com/photo-1574701148212-2f2d61aeb5c1?q=80&w=1000&auto=format&fit=crop"
            alt="Azul knit tee"
          />
          <img
            className="rounded-xl object-cover aspect-[3/4]"
            src="https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1000&auto=format&fit=crop"
            alt="Technical twill short"
          />
          <img
            className="rounded-xl object-cover aspect-[3/4]"
            src="https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1000&auto=format&fit=crop"
            alt="Court sneaker"
          />
        </div>
      </div>
    </div>
  );
}