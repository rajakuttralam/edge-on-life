import { useMemo, useState } from "react";
import {
	ChevronDown,
	Check,
	Flame,
} from "lucide-react";
import BottomNav from "./BottomNav";

// ---------- design tokens ----------
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
		id: "healthy",
		name: "Healthy span",
		blurb: "The years your body carries you well",
		color: COLORS.sage,
		dim: COLORS.sageDim,
		factors: [
			{ id: "taste", label: "Taste food", done: true },
			{ id: "exercise", label: "Physical exercise", done: true },
			{ id: "mental", label: "Mental health", done: false },
			{ id: "environment", label: "Environment", done: true },
		],
	},
	{
		id: "joy",
		name: "Joy span",
		blurb: "The moments that make life worth it",
		color: COLORS.amber,
		dim: COLORS.amberDim,
		factors: [
			{ id: "fun", label: "Fun and entertainment", done: true },
			{ id: "happiness", label: "Happiness and fulfillment", done: false },
			{ id: "achievement", label: "Achievement and success", done: false },
		],
	},
	{
		id: "peace",
		name: "Peace span",
		blurb: "The stillness beneath the noise",
		color: COLORS.teal,
		dim: COLORS.tealDim,
		factors: [
			{ id: "acceptance", label: "Acceptance", done: true },
			{ id: "exposure", label: "Exposure", done: false },
			{ id: "wisdom", label: "Wisdom", done: true },
			{ id: "sleep", label: "Sleep and stress-free", done: false },
		],
	},
	{
		id: "resilience",
		name: "Suffering span",
		blurb: "How gently you hold the hard parts",
		color: COLORS.rust,
		dim: COLORS.rustDim,
		factors: [
			{ id: "ageing", label: "Accepted ageing today", done: false },
			{ id: "safety", label: "Practiced a safety habit", done: true },
			{ id: "sorrow", label: "Processed a setback", done: false },
			{ id: "finance", label: "Checked in on finances", done: false },
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

export default function LifeSpanWellnessPage() {
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
		<div
			className="flex min-h-screen items-center justify-center p-6"
			style={{ background: "#0B0D11" }}
		>
			<div
				className="relative w-full max-w-sm overflow-hidden rounded-3xl border"
				style={{ background: COLORS.ink, borderColor: COLORS.hairline }}
			>
				{/* status notch */}
				<div className="flex items-center justify-between px-6 pb-1 pt-4 text-xs" style={{ color: COLORS.muted }}>
					<span>9:41</span>
					<span>Life span</span>
				</div>

				<div className="max-h-[780px] overflow-y-auto px-5 pb-24 pt-2">
					{/* header */}
					<div className="flex items-start justify-between pt-3">
						<div>
							<p className="text-xs uppercase tracking-widest" style={{ color: COLORS.muted }}>
								Good evening
							</p>
							<h1
								className="mt-1 text-2xl"
								style={{ fontFamily: DISPLAY_FONT, color: COLORS.bone }}
							>
								Your day, mapped
							</h1>
						</div>
						<div
							className="flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs"
							style={{ borderColor: COLORS.hairline, color: COLORS.amber }}
						>
							<Flame size={14} aria-hidden="true" />
							<span>{streak} day streak</span>
						</div>
					</div>

					{/* compass hero */}
					<div className="mt-6 flex flex-col items-center">
						<svg width="220" height="220" viewBox="0 0 240 240" role="img" aria-label={`Overall life balance ${overallPct} percent`}>
							{spans.map((s, i) => {
								const start = i * 90;
								const end = start + arcLen;
								const p = pct(s.factors);
								const progressEnd = start + (arcLen * p) / 100;
								return (
									<g key={s.id}>
										<path
											d={describeArc(cx, cy, rTrack, start, end)}
											stroke={s.dim}
											strokeWidth={14}
											strokeLinecap="round"
											fill="none"
										/>
										{p > 0 && (
											<path
												d={describeArc(cx, cy, rTrack, start, progressEnd)}
												stroke={s.color}
												strokeWidth={14}
												strokeLinecap="round"
												fill="none"
											/>
										)}
									</g>
								);
							})}
							<text
								x={cx}
								y={cy - 6}
								textAnchor="middle"
								style={{ fontFamily: DISPLAY_FONT, fontSize: 44, fill: COLORS.bone }}
							>
								{overallPct}
							</text>
							<text
								x={cx}
								y={cy + 20}
								textAnchor="middle"
								style={{ fontSize: 12, fill: COLORS.muted, letterSpacing: "0.08em" }}
							>
								LIFE BALANCE
							</text>
						</svg>

						<div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
							{spans.map((s) => (
								<div key={s.id} className="flex items-center gap-2 text-xs" style={{ color: COLORS.muted }}>
									<span
										className="h-2 w-2 rounded-full"
										style={{ background: s.color }}
										aria-hidden="true"
									/>
									<span>{s.name.replace(" span", "")}</span>
									<span style={{ color: COLORS.bone }}>{pct(s.factors)}%</span>
								</div>
							))}
						</div>
					</div>

					{/* span cards */}
					<div className="mt-7 flex flex-col gap-3">
						{spans.map((s) => {
							const isOpen = expanded === s.id;
							const p = pct(s.factors);
							return (
								<div
									key={s.id}
									className="overflow-hidden rounded-2xl border"
									style={{ borderColor: COLORS.hairline, background: COLORS.surface }}
								>
									<button
										onClick={() => setExpanded(isOpen ? null : s.id)}
										className="flex w-full items-center justify-between px-4 py-3.5 text-left"
										aria-expanded={isOpen}
									>
										<div className="flex items-center gap-3">
											<span
												className="flex h-9 w-9 items-center justify-center rounded-full text-xs"
												style={{ background: s.dim, color: s.color }}
											>
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
															textDecoration: f.done ? "line-through" : "none",
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
			</div>
			<BottomNav />
		</div>
	);
}