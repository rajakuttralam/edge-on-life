import { Heart } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Destination } from "../types";

export default function PlaceCard({ place }: { place: Destination }) {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/place/${place.id}`)}
      className="group flex w-full flex-col overflow-hidden rounded-3xl bg-white text-left shadow-[0_10px_24px_-10px_rgba(15,23,41,0.2)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5a623]"
    >
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={place.image}
          alt={place.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex items-center justify-between px-3 py-2.5">
        <div>
          <p className="text-[15px] font-bold leading-tight text-[#111a2e]">{place.name}</p>
          <p className="text-xs text-[#111a2e]/50">{place.location}</p>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setLiked((v) => !v);
          }}
          aria-label={liked ? "Remove from favorites" : "Add to favorites"}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f5a623]"
        >
          <Heart size={13} className={liked ? "fill-white text-white" : "text-white"} />
        </button>
      </div>
    </button>
  );
}
