import type { ReactNode } from "react";

export default function PhoneFrame({ children }: { children: ReactNode }) {
	return (
		<div className="relative flex h-auto w-auto flex-col overflow-hidden bg-[#eef0f4]">
			{children}
		</div>
	);
}
