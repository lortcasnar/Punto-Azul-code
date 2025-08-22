import Link from "next/link";

function Dot() {
	return (
		<span
			className="inline-block w-2 h-2 rounded-full bg-azul align-middle ml-1"
			aria-hidden
		/>
	);
}

export default function Header() {
	return (
		<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-cream/70 border-b border-black/5">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					{/* Left navigation */}
					<nav
						className="hidden md:flex items-center gap-6 text-sm"
						aria-label="primary"
					>
						<Link href="/">Shop</Link>
						<span className="opacity-60">Lookbook</span>
						<span className="opacity-60">Journal</span>
						<Link href="/music">Music</Link>
						<Link href="/community">Community</Link>
					</nav>

					{/* Brand logo */}
					<Link
						href="/"
						className="text-2xl md:text-3xl font-serif tracking-tight"
					>
						PUNTO AZUL<Dot />
					</Link>

					{/* Right side */}
					<div className="hidden md:flex items-center gap-6 text-sm">
						<button className="hover:opacity-60">Newsletter</button>
						<Link href="#" className="hover:opacity-60">
							Cart
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}
