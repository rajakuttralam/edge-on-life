import { useState } from "react";
import {
	ChevronDown,
	Check
} from "lucide-react";
import BottomNav from "../components/BottomNav";

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
		id: "தத்துவம்",
		name: "தத்துவம்",
		blurb: "...",
		color: COLORS.sage,
		dim: COLORS.sageDim,
		factors: [
			{
				id: "taste", label: "Love is like a tree that yields fruit without expectations", done: true
			},
			{
				id: "exercise", label: "Be Happy(மகிழ்ச்சியாக இருங்கள்)Be Elite (மேன்மையாக இருங்கள்)", done: true
			},
			{ id: "mental", label: "களவும்() கற்று மற(consciousness)", done: true },
			{ id: "environment", label: "வெற்றி சுயக்கட்டுப்பாட்டில்(Self-control)  துவங்குகிறது.", done: true },
			{ id: "environment", label: "பிறரை நம்பி(Depending) வாழாதே.", done: true },
			{ id: "environment", label: "பிறரைத் தொந்தரவு செய்வதைத் தவிர்த்தால், அமைதி(Peace) நிலைக்கும்", done: true },

		],
	},
	{
		id: "joy",
		name: "Joy span",
		blurb: "The moments that make life worth it",
		color: COLORS.amber,
		dim: COLORS.amberDim,
		factors: [
			{ id: "fun", label: "Fun & Entertainment", done: true },
			{ id: "happiness", label: "Fame & Happiness", done: true },
			{ id: "happiness", label: "Desire & Fulfillment", done: true },
			{ id: "achievement", label: "Achievement & Success", done: true },
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
			{ id: "exposure", label: "Exposure", done: true },
			{ id: "wisdom", label: "Wisdom", done: true },
			{ id: "sleep", label: "Sleep and stress-free", done: true },
		],
	},
	{
		id: "resilience",
		name: "Suffering span",
		blurb: "How gently you hold the hard parts",
		color: COLORS.rust,
		dim: COLORS.rustDim,
		factors: [
			{ id: "ageing", label: "Ageing", done: true },
			{ id: "safety", label: "Accident", done: true },
			{ id: "sorrow", label: "Sorrow Incidents Happen", done: true },
			{ id: "finance", label: "Financial Problem", done: true },
		],
	},
];

function pct(factors: Factor[]) {
	if (factors.length === 0) return 0;
	return Math.round(
		(factors.filter((f) => f.done).length / factors.length) * 100
	);
}

export default function Philosophy() {
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

	return (
		<div className="flex min-h-screen items-center justify-center p-6"
			style={{ background: "#0B0D11" }}
		>
			<div className="relative w-full max-w-sm overflow-hidden rounded-3xl border"
				style={{ background: COLORS.ink, borderColor: COLORS.hairline }} >
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
			</div>
			<BottomNav />
		</div>
	);
}