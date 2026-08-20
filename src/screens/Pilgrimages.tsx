import { Check, ChevronDown, BusIcon } from "lucide-react";
import { useState } from "react";

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
		id: "pilgrimages",
		name: "Pilgrimages",
		blurb: "...",
		color: COLORS.sage,
		dim: COLORS.sageDim,
		factors: [
			{ id: "environment", label: "அருள்மிகு ஸ்ரீ கழுகாசலமூர்த்தி முருகன் திருக்கோயில், கழுகுமலை", done: true },
			{ id: "environment", label: "ஸ்ரீ செண்பகவல்லி அம்மன் கோவில், கோவில்பட்டி", done: true },
			{ id: "environment", label: "அருள்மிகு திருச்செந்தூர் முருகன் கோவில்", done: true },
			{ id: "environment", label: "திருப்பதி திருமலை", done: true },
			{ id: "environment", label: "ஸ்ரீ ரங்கநாத சுவாமி கோயில்", done: true },
			{ id: "environment", label: "ஜம்புகேஸ்வரர் ஆலயம்", done: true },
			{ id: "environment", label: "தில்லை நடராஜர் கோவில், சிதம்பரம்", done: true },
			{ id: "environment", label: "கதிரேசன் கோவில், கோவில்பட்டி", done: true },
			{ id: "environment", label: "கிருஷ்ணன் கோவில், கோவில்பட்டி", done: true },
			{ id: "environment", label: "தில்லை நடராஜர் கோவில், சிதம்பரம்", done: true },
			{ id: "environment", label: "கதிரேசன் கோவில், கோவில்பட்டி", done: true },
			{ id: "environment", label: "அருள்மிகு அண்ணாமலையார் திருக்கோயில், திருவண்ணாமலை", done: true }
		],
	}
];

export default function Pilgrimages() {
	const [spans, setSpans] = useState<Span[]>(INITIAL_SPANS);
	const [expanded, setExpanded] = useState<string | null>("pilgrimages");
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

	function pct(factors: Factor[]) {
		if (factors.length === 0) return 0;
		return Math.round(
			(factors.filter((f) => f.done).length / factors.length) * 100
		);
	}

	return (
		<div className="relative w-full max-w-sm overflow-hidden">
			<div className="my-7 max-h-[780px] overflow-y-auto flex flex-col gap-3">
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
										<BusIcon />
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
	);
}
