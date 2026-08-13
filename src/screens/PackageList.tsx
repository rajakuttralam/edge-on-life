import { useState } from "react";
import TopBar from "../components/TopBar";
import SearchBar from "../components/SearchBar";
import PackageCard from "../components/PackageCard";
import BottomNav from "../components/BottomNav";
import { destinations } from "../data";

export default function PackageList() {
  const [query, setQuery] = useState("");

  const filtered = destinations.filter(
    (d) =>
      d.name.toLowerCase().includes(query.toLowerCase()) ||
      d.location.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative flex h-full flex-col">
      <div className="flex-1 overflow-y-auto px-6 pb-32 pt-8">
        <TopBar />

        <div className="mt-6">
          <SearchBar value={query} onChange={setQuery} />
        </div>

        <div className="mt-7 flex items-center justify-between">
          <h2
            className="text-xl font-extrabold text-[#111a2e]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Travel Package
          </h2>
          <span className="text-xs font-medium text-[#111a2e]/40">See more</span>
        </div>

        <div className="mt-4 flex flex-col gap-4">
          {filtered.map((place) => (
            <PackageCard key={place.id} place={place} />
          ))}
          {filtered.length === 0 && (
            <p className="pt-8 text-center text-sm text-[#111a2e]/40">
              No destinations match "{query}".
            </p>
          )}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
