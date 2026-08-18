import { Link } from "react-router-dom";
import TopBar from "../components/TopBar";
import SearchBar from "../components/SearchBar";
import PlaceCard from "../components/PlaceCard";
import BottomNav from "../components/BottomNav";
import { destinations } from "../data";

export default function Home() {
	const placeCards = destinations.slice(0, 2);
	// const mesir = travelPackages[0];

	return (
		<div className="relative flex h-full flex-col">
			<div className="flex-1 overflow-y-auto px-6 pb-32 pt-8">
				<TopBar />
				<h1 className="mt-7 text-[34px] font-extrabold leading-[1.08] text-[#111a2e]"
					style={{ fontFamily: "var(--font-display)" }} >
					Love
					<br />
					is like a Tree
				</h1>
				<div className="mt-6">
					<SearchBar withFilter />
				</div>
				<div className="mt-8 flex items-center justify-between">
					<h2 className="text-[15px] font-bold text-[#111a2e]">தத்துவவாதிகள்</h2>
					<Link to="/packages" className="text-xs font-medium text-[#111a2e]/40">
						See more
					</Link>
				</div>
				<div className="mt-3 grid grid-cols-2 gap-3">
					{placeCards.map((p) => (
						<PlaceCard key={p.id} place={p} />
					))}
				</div>
			</div>

			<BottomNav />
		</div>
	);
}
