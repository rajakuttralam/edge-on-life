import type { ReactNode } from "react";
import TopBar from "./TopBar";
import BottomNav from "./BottomNav";

export default function PhoneFrame({ children }: { children: ReactNode }) {
	return (
		<div className="flex flex-col justify-center items-center w-full">
			<TopBar />
			{children}
			<BottomNav />
		</div>
	);
}
