import type { ReactNode } from "react";
import TopBar from "./TopBar";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import BottomNav from "./BottomNav";

export default function PhoneFrame({ children }: { children: ReactNode }) {
	return (
		<div className="flex-1 max-h-full overflow-y-auto px-6 pb-32 pt-8">
			<TopBar />
			<div className="mt-6">
				<SearchBar withFilter />
			</div>
			<div className="mt-8 flex items-center justify-between">
				<h2 className="text-[15px] font-bold text-[#111a2e]">தத்துவவாதிகள்</h2>
				<Link to="/packages" className="text-xs font-medium text-[#111a2e]/40">
					See more
				</Link>
			</div>
			{children}
			<BottomNav />
		</div>
	);
}
