import { Grid2x2, MapPin } from "lucide-react";

export default function TopBar() {
	return (
		<div className="flex items-center justify-between">
			<button
				aria-label="Menu"
				className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#111a2e] shadow-[0_6px_16px_-4px_rgba(15,23,41,0.15)]"
			>
				<Grid2x2 size={18} strokeWidth={2.3} className="text-[#f5a623]" />
			</button>
			<div className="text-right">
				<p className="text-sm font-medium text-[#111a2e]/70">Raja Kuttralam</p>
				<p className="flex items-center justify-end gap-1 text-sm font-semibold text-[#111a2e]">
					<MapPin size={13} className="text-[#3b6ef5]" />
					Kovilpatti, TN
				</p>
			</div>
		</div>
	);
}
