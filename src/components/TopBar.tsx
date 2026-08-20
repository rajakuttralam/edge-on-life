import { Grid2x2, MapPin } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function TopBar() {
	return (
		<div className="w-[90vw] mt-5">
			<div className="flex flex-row items-center justify-between ">
				<button aria-label="Menu" className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#111a2e] shadow-[0_6px_16px_-4px_rgba(15,23,41,0.15)]" >
					<NavLink
						key={'to'}
						to={"/pilgrimages"}
						aria-label={'Pilgrimages'}
						className="group relative flex items-center justify-center" >
						<span className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors text-white/60"
						}`} >
							<Grid2x2 size={18} strokeWidth={2.3} className="text-[#f5a623]" />
						</span>
					</NavLink>
				</button>
				<h4 className="text-[20px] font-extrabold leading-[1.08] text-[#111a2e]"
					style={{ fontFamily: "var(--font-display)" }} >
					Love is like a Tree
				</h4>
				<div className="text-right">
					<p className="text-sm font-medium text-[#111a2e]/70">Hi Raja K</p>
					<p className="flex items-center justify-end gap-1 text-sm font-semibold text-[#111a2e]">
						<MapPin size={13} className="text-[#3b6ef5]" />
						Kovilpatti, TN
					</p>
				</div>
			</div>
			<div className="mt-6">
				<SearchBar withFilter />
			</div>
			<div className="mt-8 flex items-center justify-between">
				<h2 className="text-[15px] font-bold text-[#111a2e]">தத்துவவாதிகள்</h2>
				<Link to="/packages" className="text-xs font-medium text-[#111a2e]/40">
					See more
				</Link>
			</div>
		</div>
	);
}
