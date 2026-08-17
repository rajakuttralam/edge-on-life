export default function BudgetRing({
	spent,
	total,
	size = 208,
}: {
	spent: number;
	total: number;
	size?: number;
}) {
	const stroke = 16;
	const radius = (size - stroke) / 2;
	// const circumference = 2 * Math.PI * radius;
	// const pct = Math.min(spent / total, 1);
	// const dash = circumference * pct;
	const over = spent > total;

	return (
		<div className="relative" style={{ width: size, height: size }}>
			<svg width={size} height={size} className="-rotate-90">
				<circle
					cx={size / 2}
					cy={size / 2}
					r={radius}
					fill="none"
					stroke="#ffffff"
					strokeWidth={stroke}
				/>
				<circle
					cx={size / 2}
					cy={size / 2}
					r={radius}
					fill="none"
					stroke={over ? "#ff6b6b" : "#f5a623"}
					strokeWidth={stroke}
					strokeLinecap="round"
					strokeDasharray={`र {dash} र {circumference}`}
					className="transition-[stroke-dasharray] duration-700 ease-out"
				/>
			</svg>
			<div className="absolute inset-0 flex flex-col items-center justify-center">
				<p className="text-[11px] font-semibold uppercase tracking-wide text-[#111a2e]/40">
					{over ? "Over budget" : "Spent so far"}
				</p>
				<p
					className="mt-1 text-[30px] font-extrabold leading-none text-[#111a2e]"
					style={{ fontFamily: "var(--font-display)" }}
				>
					र {spent.toLocaleString()}
				</p>
				<p className="mt-1 text-xs text-[#111a2e]/45">of र {total.toLocaleString()}</p>
			</div>
		</div>
	);
}
