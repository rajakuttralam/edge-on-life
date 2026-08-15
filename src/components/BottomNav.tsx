import { Home, Briefcase, MapPin, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const items = [
	{ to: "/", icon: Home, label: "Home" },
	{ to: "/packages", icon: Briefcase, label: "Packages" },
	{ to: "/philosophy", icon: MapPin, label: "Philosophy" },
	{ to: "/profile", icon: User, label: "Profile" },
];

export default function BottomNav() {
	return (
		<div className="absolute inset-x-6 bottom-6 z-20">
			<nav className="flex items-center justify-between rounded-full bg-[#111a2e] px-7 py-4 shadow-[0_20px_40px_-10px_rgba(17,26,46,0.55)]">
				{items.map(({ to, icon: Icon, label }) => (
					<NavLink
						key={to}
						to={to}
						end={to === "/"}
						aria-label={label}
						className="group relative flex items-center justify-center" >
						{({ isActive }) => (
							<span className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${isActive ? "bg-[#f5a623] text-[#111a2e]" : "text-white/60"}`} >
								<Icon size={18} strokeWidth={2.2} />
							</span>
						)}
					</NavLink>
				))}
			</nav>
		</div>
	);
}
