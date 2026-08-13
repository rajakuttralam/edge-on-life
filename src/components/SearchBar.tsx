import { Search, SlidersHorizontal } from "lucide-react";

export default function SearchBar({
  withFilter = false,
  value,
  onChange,
}: {
  withFilter?: boolean;
  value?: string;
  onChange?: (v: string) => void;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-1 items-center gap-2.5 rounded-2xl bg-white px-4 py-3.5 shadow-[0_6px_16px_-6px_rgba(15,23,41,0.12)]">
        <Search size={17} className="text-[#111a2e]/35" />
        <input
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder="Search destination"
          className="w-full bg-transparent text-sm text-[#111a2e] placeholder:text-[#111a2e]/35 focus:outline-none"
        />
      </div>
      {withFilter && (
        <button
          aria-label="Filter"
          className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-[#f5a623] shadow-[0_6px_16px_-6px_rgba(245,166,35,0.5)]"
        >
          <SlidersHorizontal size={18} className="text-white" />
        </button>
      )}
    </div>
  );
}
