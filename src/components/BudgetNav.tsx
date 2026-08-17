import { Home, PieChart, Wallet, User, Plus } from "lucide-react";
import { NavLink } from "react-router-dom";

const items = [
  { to: "/budget", icon: Home, label: "Overview" },
  { to: "/budget/reports", icon: PieChart, label: "Reports" },
];
const rightItems = [
  { to: "/budget/wallet", icon: Wallet, label: "Wallet" },
  { to: "/budget/profile", icon: User, label: "Profile" },
];

export default function BudgetNav({ onAdd }: { onAdd?: () => void }) {
  return (
    <div className="absolute inset-x-6 bottom-6 z-20">
      <nav className="relative flex items-center justify-between rounded-full bg-[#111a2e] px-6 py-4 shadow-[0_20px_40px_-10px_rgba(17,26,46,0.55)]">
        {items.map(({ to, icon: Icon, label }) => (
          <NavLink key={to} to={to} end aria-label={label} className="flex items-center justify-center">
            {({ isActive }) => (
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
                  isActive ? "bg-[#f5a623] text-[#111a2e]" : "text-white/60"
                }`}
              >
                <Icon size={18} strokeWidth={2.2} />
              </span>
            )}
          </NavLink>
        ))}

        <div className="w-12" />

        {rightItems.map(({ to, icon: Icon, label }) => (
          <NavLink key={to} to={to} aria-label={label} className="flex items-center justify-center">
            {({ isActive }) => (
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
                  isActive ? "bg-[#f5a623] text-[#111a2e]" : "text-white/60"
                }`}
              >
                <Icon size={18} strokeWidth={2.2} />
              </span>
            )}
          </NavLink>
        ))}

        <button
          onClick={onAdd}
          aria-label="Add transaction"
          className="absolute left-1/2 top-0 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#f5a623] text-[#111a2e] shadow-[0_10px_20px_-4px_rgba(245,166,35,0.6)] ring-4 ring-[#eef0f4] transition-transform active:scale-95"
        >
          <Plus size={22} strokeWidth={2.5} />
        </button>
      </nav>
    </div>
  );
}
