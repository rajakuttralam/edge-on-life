import type { ReactNode } from "react";
import TopBar from "./TopBar";
import BottomNav from "./BottomNav";

export default function PhoneFrame({ children }: { children: ReactNode }) {
	return (
		<div className="flex flex-col justify-center items-center w-full">
			<TopBar />
			<div className="mt-48 flex flex-col justify-center z-10 items-center w-full">
				{children}
			</div>
			<BottomNav />
		</div>
	);
}
