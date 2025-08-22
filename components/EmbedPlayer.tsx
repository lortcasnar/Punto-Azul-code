import { cn } from "../lib/utils";

type Props = {
	provider: "spotify" | "youtube";
	src: string;   // The embed URL
	title: string; // Accessible title
	className?: string;
};

export default function EmbedPlayer({ provider, src, title, className }: Props) {
	return (
		<div className={cn("rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,.08)] bg-white", className)}>
			<div className="aspect-video">
				<iframe
					className="w-full h-full"
					src={src}
					title={title}
					loading="lazy"
					allow={
						provider === "spotify"
							? "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
							: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					}
					allowFullScreen
				/>
			</div>
			<div className="p-4 text-sm text-stone/80">{title}</div>
		</div>
	);
}

// ...existing code from EmbedPlayer.tsx...
// ...existing code from EmbedPlayer.tsx...
