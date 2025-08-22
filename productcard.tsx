export default function ProductCard() {
  return (
    <article className="group">
      {/* Image */}
      <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-white shadow-[0_10px_30px_rgba(0,0,0,.08)]">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src="https://images.unsplash.com/photo-1602810318383-9e6127fef8d0?q=80&w=1600&auto=format&fit=crop"
          alt="Azul Court Polo"
        />
        {/* Quick add (visual only for now) */}
        <button
          className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-azul text-cream text-xs uppercase tracking-wider2 rounded-full px-4 py-2"
          aria-label="Add Azul Court Polo to cart"
        >
          Quick Add
        </button>
      </div>

      {/* Meta */}
      <div className="mt-3 text-sm">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">Azul Court Polo</h3>
          <p>$165</p>
        </div>
        <p className="text-stone">Navy / Sky</p>
      </div>
    </article>
  );
}