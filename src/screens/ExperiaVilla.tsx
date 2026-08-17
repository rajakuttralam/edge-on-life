import BottomNav from "../components/BottomNav";
import image from "./../assets/Villa.png"
import { useMemo, useState } from "react";
import {
	ChevronDown,
	Check,
	Flame,
} from "lucide-react";

const COLORS = {
	ink: "#14171D",
	surface: "#1C212B",
	surfaceRaised: "#232A38",
	hairline: "#2E3543",
	bone: "#EDEAE2",
	muted: "#8B93A1",
	sage: "#6FA97C",
	sageDim: "#3A4A3F",
	amber: "#E0A83E",
	amberDim: "#4A4130",
	teal: "#3F9C97",
	tealDim: "#2C3F42",
	rust: "#C1613F",
	rustDim: "#463228",
};

const DISPLAY_FONT =
	"'Iowan Old Style', 'Palatino Linotype', Georgia, serif";

type Factor = { id: string; label: string; done: boolean };
type Span = {
	id: string;
	name: string;
	blurb: string;
	color: string;
	dim: string;
	factors: Factor[];
};

const INITIAL_SPANS: Span[] = [
	{
		id: "ServicesOffered",
		name: "Services Offered",
		blurb: "The years your body carries you well",
		color: COLORS.sage,
		dim: COLORS.sageDim,
		factors: [
			{ id: "taste", label: "Provide Experience Villa for Self-reliant living to manage the forced retirement period.", done: true },
			{ id: "exercise", label: "Swimming Pool", done: true },
			{ id: "mental", label: "Community Center", done: false },
			{ id: "environment", label: "Cleaning", done: true },
			{ id: "taste", label: "Laundry", done: true },
			{ id: "exercise", label: "Personal Care", done: true },
			{ id: "mental", label: "Food Court", done: true },
			{ id: "environment", label: "Yoga & Varma", done: true },
		],
	},
	{
		id: "STAFF_QUARTER",
		name: "Staff  Quarter",
		blurb: "The moments that make life worth it",
		color: COLORS.amber,
		dim: COLORS.amberDim,
		factors: [
			{ id: "fun", label: "Security - 3", done: true },
			{ id: "happiness", label: "Gardener - 3", done: true },
			{ id: "happiness", label: "Driver - 2", done: true },
			{ id: "achievement", label: "Supervisor - 1", done: true },
			{ id: "happiness", label: "Shop - 1", done: true },
			{ id: "achievement", label: "Manager - 1", done: true },
		],
	},
	{
		id: "MaterialManagement",
		name: "Material Management",
		blurb: "The stillness beneath the noise",
		color: COLORS.teal,
		dim: COLORS.tealDim,
		factors: [
			{ id: "acceptance", label: "Shower", done: true },
			{ id: "exposure", label: "HandWash", done: true },
			{ id: "wisdom", label: "Shadow Light", done: true },
			{ id: "exposure", label: "Plants", done: true },
			{ id: "wisdom", label: "Gardening", done: true },
			{ id: "sleep", label: "Planting Tree", done: true },
			{ id: "exposure", label: "Money Plant", done: true },
			{ id: "wisdom", label: "French Door  ", done: true },
			{ id: "sleep", label: "Modular Kitchen", done: true },
			{ id: "exposure", label: "Compound Wall", done: true },
			{ id: "wisdom", label: "Coconet Tree", done: true },
			{ id: "sleep", label: "Design", done: true },
			{ id: "exposure", label: "Stone Bench", done: true },
			{ id: "wisdom", label: "Pond (5ft x 16ft x 10ft)", done: true },
			{ id: "sleep", label: "L-Shaped Clay Roof", done: true },
			{ id: "sleep", label: "Stone Path Way", done: true },
			{ id: "exposure", label: "Grass Floor", done: true },
			{ id: "wisdom", label: "Mat Finish Floor", done: true },
			{ id: "sleep", label: "Wooden Dining Set", done: true },
		],
	},
	{
		id: "CAPEX",
		name: "Capital Expenses",
		blurb: "How gently you hold the hard parts",
		color: COLORS.rust,
		dim: COLORS.rustDim,
		factors: [
			{ id: "ageing", label: "Agri Shead", done: true },
			{ id: "safety", label: "Manufacturing", done: true },
			{ id: "sorrow", label: "Machinary, Tools & Equipment", done: true },
			{ id: "finance", label: "Library", done: true },
			{ id: "safety", label: " Office Room", done: true },
			{ id: "sorrow", label: "Meditation Center", done: true },
			{ id: "ageing", label: "Land Area - 1 Acre, 15 Lakhs", done: true },
			{ id: "safety", label: "Main Gate", done: true },
			{ id: "sorrow", label: "Bore & Water Motor", done: true },
			{ id: "finance", label: "Water Pond", done: true },
			{ id: "ageing", label: "Rain Water Storage", done: true },
			{ id: "safety", label: "Water Pump", done: true },
			{ id: "sorrow", label: "Water Tank", done: true },
			{ id: "finance", label: "Buildup Area - 3600 Sqft, 36 Lakhs", done: true },
			{ id: "ageing", label: "Athangudi Tiles -3600 sqft", done: true },
			{ id: "safety", label: "Security Room", done: true },
			{ id: "sorrow", label: "Fencing", done: true },
			{ id: "finance", label: "Carpet Area", done: true },
		],
	},
	{
		id: "OPEX",
		name: "Operational Management",
		blurb: "How gently you hold the hard parts",
		color: COLORS.rust,
		dim: COLORS.rustDim,
		factors: [
			{ id: "ageing", label: "Serviceability", done: true },
			{ id: "safety", label: "Horticulture", done: true },
			{ id: "sorrow", label: "Washing", done: true },
			{ id: "finance", label: "Cleaning", done: true },
			{ id: "safety", label: " Maintainability", done: true },
			{ id: "sorrow", label: "Affordability", done: true },
			{ id: "ageing", label: "Path Way", done: true },
			{ id: "safety", label: "Safety & Security", done: true },
			{ id: "sorrow", label: "LED Light", done: true },
			{ id: "finance", label: "Solar Panel", done: true },
			{ id: "ageing", label: "Electrical Wiring", done: true },
			{ id: "safety", label: "Plumbing", done: true },
			{ id: "safety", label: "Security Room", done: true },
			{ id: "sorrow", label: "Fencing", done: true },
			{ id: "finance", label: "CCTV", done: true },
		],
	},
];

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
	const rad = ((angleDeg - 90) * Math.PI) / 180;
	return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function describeArc(
	cx: number,
	cy: number,
	r: number,
	startAngle: number,
	endAngle: number
) {
	const start = polarToCartesian(cx, cy, r, endAngle);
	const end = polarToCartesian(cx, cy, r, startAngle);
	const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
	return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y}`;
}

function pct(factors: Factor[]) {
	if (factors.length === 0) return 0;
	return Math.round(
		(factors.filter((f) => f.done).length / factors.length) * 100
	);
}



export default function ExperiaVilla() {
	const [spans, setSpans] = useState<Span[]>(INITIAL_SPANS);
	const [expanded, setExpanded] = useState<string | null>("healthy");
	const toggleFactor = (spanId: string, factorId: string) => {
		setSpans((prev) =>
			prev.map((s) =>
				s.id !== spanId
					? s
					: {
						...s,
						factors: s.factors.map((f) =>
							f.id === factorId ? { ...f, done: !f.done } : f
						),
					}
			)
		);
	};

	const overallPct = useMemo(() => {
		const all = spans.flatMap((s) => s.factors);
		return pct(all);
	}, [spans]);

	const streak = 6;
	const gap = 10;
	const arcLen = 90 - gap;
	const cx = 120;
	const cy = 120;
	const rTrack = 96;

	return (
		<div className="flex flex-col min-h-screen items-center justify-center p-6"
			style={{ background: "#0B0D11" }} >
			<span
				className="flex w-full text-white items-start justify-start p-3 rounded-full text-3xl"
			>
				EXPERIA VILLA
			</span>
			<div className="">
				<img
					src={image}
					alt={"name"}
					className="p-3 object-cover transition-transform duration-300 group-hover:scale-105"
				/>
			</div>
			<div className="flex min-h-screen items-center justify-center"
				style={{ background: "#0B0D11" }} >
				<div className="relative w-full max-w-sm overflow-hidden rounded-3xl border"
					style={{ background: COLORS.ink, borderColor: COLORS.hairline }}>
					<div className="max-h-[780px] overflow-y-auto px-5 pb-24 pt-2">
						<div className="mt-7 flex flex-col gap-3">
							{spans.map((s) => {
								const isOpen = expanded === s.id;
								const p = pct(s.factors);
								return (
									<div key={s.id}
										className="overflow-hidden rounded-2xl border"
										style={{ borderColor: COLORS.hairline, background: COLORS.surface }} >
										<button
											onClick={() => setExpanded(isOpen ? null : s.id)}
											className="flex w-full items-center justify-between px-4 py-3.5 text-left"
											aria-expanded={isOpen} >
											<div className="flex items-center gap-3">
												<span
													className="flex h-9 w-9 items-center justify-center rounded-full text-xs"
													style={{ background: s.dim, color: s.color }} >
													{p}%
												</span>
												<div>
													<p className="text-sm" style={{ color: COLORS.bone }}>
														{s.name}
													</p>
													<p className="text-xs" style={{ color: COLORS.muted }}>
														{s.blurb}
													</p>
												</div>
											</div>
											<ChevronDown
												size={18}
												style={{
													color: COLORS.muted,
													transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
													transition: "transform 150ms ease",
												}}
												aria-hidden="true"
											/>
										</button>

										{isOpen && (
											<div
												className="flex flex-col gap-1 px-4 pb-4"
												style={{ borderTop: `1px solid ${COLORS.hairline}` }}
											>
												<div className="mb-2 mt-3 h-1 w-full overflow-hidden rounded-full" style={{ background: s.dim }}>
													<div
														className="h-full rounded-full"
														style={{ width: `${p}%`, background: s.color, transition: "width 200ms ease" }}
													/>
												</div>
												{s.factors.map((f) => (
													<button
														key={f.id}
														onClick={() => toggleFactor(s.id, f.id)}
														className="flex items-center gap-3 rounded-lg px-1 py-2 text-left"
													>
														<span
															className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border"
															style={{
																borderColor: f.done ? s.color : COLORS.hairline,
																background: f.done ? s.color : "transparent",
															}}
														>
															{f.done && <Check size={12} color={COLORS.ink} strokeWidth={3} />}
														</span>
														<span
															className="text-sm"
															style={{
																color: f.done ? COLORS.bone : COLORS.muted,
															}}
														>
															{f.label}
														</span>
													</button>
												))}
											</div>
										)}
									</div>
								);
							})}
						</div>
					</div>
					<BottomNav />
				</div>
			</div>
			<BottomNav />
		</div>
	);
}