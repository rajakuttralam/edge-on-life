import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import TopBar from "../components/TopBar";
import SearchBar from "../components/SearchBar";
import PlaceCard from "../components/PlaceCard";
import BottomNav from "../components/BottomNav";
import { destinations, travelPackages } from "../data";

export default function Home() {
  const placeCards = destinations.slice(0, 2);
  const mesir = travelPackages[0];

  return (
    <div className="relative flex h-full flex-col">
      <div className="flex-1 overflow-y-auto px-6 pb-32 pt-8">
        <TopBar />

        <h1
          className="mt-7 text-[34px] font-extrabold leading-[1.08] text-[#111a2e]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          let's go
          <br />
          trip to africa
        </h1>

        <div className="mt-6">
          <SearchBar withFilter />
        </div>

        <div className="mt-8 flex items-center justify-between">
          <h2 className="text-[15px] font-bold text-[#111a2e]">Travel Place</h2>
          <Link to="/packages" className="text-xs font-medium text-[#111a2e]/40">
            See more
          </Link>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {placeCards.map((p) => (
            <PlaceCard key={p.id} place={p} />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <h2 className="text-[15px] font-bold text-[#111a2e]">Travel Package</h2>
          <Link to="/packages" className="text-xs font-medium text-[#111a2e]/40">
            See more
          </Link>
        </div>
        <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
          <Link
            to={`/place/${destinations[3].id}`}
            className="flex w-[220px] shrink-0 items-center gap-3 rounded-2xl bg-white p-2.5 shadow-[0_8px_20px_-10px_rgba(15,23,41,0.2)]"
          >
            <img
              src={mesir.image}
              alt={mesir.name}
              className="h-16 w-16 shrink-0 rounded-xl object-cover"
            />
            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-[#111a2e]">{mesir.name}</p>
              <p className="truncate text-xs text-[#111a2e]/45">{mesir.location}</p>
              <div className="mt-1 flex items-center gap-1">
                <Star size={11} className="fill-[#f5a623] text-[#f5a623]" />
                <span className="text-[11px] font-semibold text-[#111a2e]/70">
                  {mesir.rating}
                </span>
                <span className="text-[11px] text-[#3b6ef5]">See details</span>
              </div>
            </div>
          </Link>
          <Link
            to="/packages"
            className="w-16 shrink-0 overflow-hidden rounded-2xl"
          >
            <img
              src={destinations[1].image}
              alt="More packages"
              className="h-full w-full object-cover"
            />
          </Link>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
