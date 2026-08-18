import { Grid2x2, MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function TopBar() {
	return (
		<div className="flex items-center justify-between">
			<button
				aria-label="Menu"

				className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#111a2e] shadow-[0_6px_16px_-4px_rgba(15,23,41,0.15)]"
			><NavLink
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
			<div className="text-right">
				<p className="text-sm font-medium text-[#111a2e]/70">Hallo Fadilah</p>
				<p className="flex items-center justify-end gap-1 text-sm font-semibold text-[#111a2e]">
					<MapPin size={13} className="text-[#3b6ef5]" />
					Jakarta, INA
				</p>
			</div>
		</div>
	);
}
