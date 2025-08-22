"use client";
import EmbedPlayer from "../../components/EmbedPlayer";

export default function MusicPage() {
	return (
		<div className="max-w-6xl mx-auto px-4 py-10">
			<h1 className="font-serif text-4xl">Music</h1>
			<p className="text-stone/80 mt-2">Soundtrack for Punto Azul.</p>

			<div className="grid md:grid-cols-2 gap-6 mt-8">
				<EmbedPlayer
					title="Studio Playlist"
					provider="spotify"
					src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYpdgoIcn6"
				/>
				<EmbedPlayer
					title="Drop 01 — Teaser"
					provider="youtube"
					src="https://www.youtube.com/embed/dQw4w9WgXcQ"
				/>
			</div>
		</div>
	);
}
