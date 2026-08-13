import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Heart, MapPin, Ticket, Calendar, ChevronDown } from "lucide-react";
import { destinations } from "../data";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const place = destinations.find((d) => d.id === id) ?? destinations[0];

  return (
    <div className="relative flex h-full flex-col">
      <div className="relative h-[420px] shrink-0 overflow-hidden">
        <img src={place.image} alt={place.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/10" />
        <div className="absolute inset-x-5 top-6 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            aria-label="Go back"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#111a2e] shadow-md"
          >
            <ArrowLeft size={17} />
          </button>
          <button
            onClick={() => setLiked((v) => !v)}
            aria-label={liked ? "Remove from favorites" : "Add to favorites"}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md"
          >
            <Heart size={17} className={liked ? "fill-[#f5a623] text-[#f5a623]" : "text-[#111a2e]/60"} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto rounded-t-[32px] bg-[#eef0f4] px-6 pb-10 pt-6 -mt-6 relative z-10">
        <div className="flex items-start justify-between">
          <div>
            <h1
              className="text-2xl font-extrabold text-[#111a2e]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {place.name}
            </h1>
            <p className="mt-1 flex items-center gap-1 text-sm text-[#111a2e]/45">
              <MapPin size={13} className="text-[#3b6ef5]" />
              {place.location}
            </p>
          </div>
          <p className="text-2xl font-extrabold text-[#111a2e]">${place.price}</p>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#111a2e]/45">
          <span>{place.category}</span>
          <span>|</span>
          <span>
            {place.days} Day and {place.nights} nights
          </span>
          <span>|</span>
          <span>{place.hotelStars} Star Hotel</span>
          <span>|</span>
          <span>{place.people} Person</span>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-[#111a2e]/60">{place.description}</p>

        <div className="mt-6 flex gap-3">
          <button className="flex flex-1 items-center justify-between rounded-2xl border border-[#111a2e]/10 bg-white px-4 py-3.5 text-sm font-semibold text-[#111a2e]">
            <span className="flex items-center gap-2">
              <Ticket size={16} className="text-[#111a2e]/50" />
              Ticket
            </span>
            <ChevronDown size={15} className="text-[#111a2e]/40" />
          </button>
          <button className="flex flex-1 items-center justify-between rounded-2xl border border-[#111a2e]/10 bg-white px-4 py-3.5 text-sm font-semibold text-[#111a2e]">
            <span className="flex items-center gap-2">
              <Calendar size={16} className="text-[#111a2e]/50" />
              28 Feb 2027
            </span>
            <ChevronDown size={15} className="text-[#111a2e]/40" />
          </button>
        </div>

        <button
          onClick={() => setConfirmed(true)}
          className="mt-7 w-full rounded-2xl bg-[#111a2e] py-4 text-center text-[15px] font-bold text-white shadow-[0_16px_30px_-12px_rgba(17,26,46,0.6)] transition-transform active:scale-[0.98]"
        >
          {confirmed ? "Ticket reserved ✓" : "Get Ticket"}
        </button>
      </div>
    </div>
  );
}
