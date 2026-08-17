import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MonthSwitcher({
  label,
  onPrev,
  onNext,
}: {
  label: string;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={onPrev}
        aria-label="Previous month"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#111a2e]/60 shadow-sm"
      >
        <ChevronLeft size={15} />
      </button>
      <p className="w-[104px] text-center text-sm font-bold text-[#111a2e]">{label}</p>
      <button
        onClick={onNext}
        aria-label="Next month"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#111a2e]/60 shadow-sm"
      >
        <ChevronRight size={15} />
      </button>
    </div>
  );
}
