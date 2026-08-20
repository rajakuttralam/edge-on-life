import PlaceCard from "../components/PlaceCard";
import { destinations } from "../data";

export default function Home() {
	const placeCards = destinations.slice(0, 4);

	return (
		<div className="mt-3 grid grid-cols-2 gap-3">
			{placeCards.map((p) => (
				<PlaceCard key={p.id} place={p} />
			))}
		</div>
	);
}
