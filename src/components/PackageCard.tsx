import { Heart } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Destination } from "../types";

export default function PackageCard({ place }: { place: Destination }) {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/place/${place.id}`)}
      className="group relative flex h-40 w-full flex-col justify-end overflow-hidden rounded-[28px] text-left shadow-[0_14px_28px_-10px_rgba(15,23,41,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5a623]"
    >
      <img
        src={place.image}
        alt={place.name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
      <button
        onClick={(e) => {
          e.stopPropagation();
          setLiked((v) => !v);
        }}
        aria-label={liked ? "Remove from favorites" : "Add to favorites"}
        className="absolute right-3.5 top-3.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/90"
      >
        <Heart
          size={14}
          className={liked ? "fill-[#f5a623] text-[#f5a623]" : "text-[#111a2e]/50"}
        />
      </button>
      <div className="relative z-10 p-4">
        <p className="text-lg font-bold leading-tight text-white">{place.name}</p>
        <p className="text-sm text-white/80">{place.location}</p>
      </div>
    </button>
  );
}
