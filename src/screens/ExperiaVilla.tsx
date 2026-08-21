import image from "./../assets/Villa.png"

export default function ExperiaVilla() {
	return (
		<div className="flex flex-col  items-center justify-center" style={{ background: "#f8f8f8" }} >
			{/* <span className="flex w-full overflow-y-auto text-white items-start justify-start p-3 rounded-full text-3xl" >
				EXPERIA VILLA
			</span> */}
			<div className=" " >
				<img
					src={image}
					alt={"name"}
					className="h-[70vh] w-full object-cover  transition-transform duration-300 group-hover:scale-105"
				/>
			</div>
			{/* <div className="flex  items-center justify-center"
				style={{ background: "#f8f8f8" }} >
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
				</div>
			</div> */}
		</div>
	);
}