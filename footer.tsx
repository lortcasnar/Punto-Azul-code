export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8 text-sm">
        {/* Brand info */}
        <div className="col-span-2">
          <div className="font-serif text-xl">Punto Azul</div>
          <p className="text-stone mt-3 max-w-sm">
            Athleisure streetwear blending Acapulco heritage and modern luxury.
            Designed for movement, built for the coast and the city.
          </p>
        </div>

        {/* Help links */}
        <div>
          <div className="uppercase tracking-wider2 text-[11px] text-stone">
            Help
          </div>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="hover:opacity-60">Shipping</a></li>
            <li><a href="#" className="hover:opacity-60">Returns</a></li>
            <li><a href="#" className="hover:opacity-60">Care</a></li>
          </ul>
        </div>

        {/* Social links */}
        <div>
          <div className="uppercase tracking-wider2 text-[11px] text-stone">
            Follow
          </div>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="hover:opacity-60">Instagram</a></li>
            <li><a href="#" className="hover:opacity-60">TikTok</a></li>
            <li><a href="#" className="hover:opacity-60">Newsletter</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-stone pb-10">
        © {new Date().getFullYear()} Punto Azul. All rights reserved.
      </div>
    </footer>
  );
}