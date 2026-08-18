import { Home, Film, Heart, Zap, PiggyBank, Banknote, CreditCard } from "lucide-react";
import type { BudgetCategory } from "../types";

const icons = {
	home: Home,
	utensils: Banknote,
	car: Banknote,
	bag: CreditCard,
	film: Film,
	heart: Heart,
	zap: Zap,
	piggy: PiggyBank,

};

export default function CategoryCard({ category }: { category: BudgetCategory }) {
	const Icon = icons[category.icon];
	const over = category.spent > category.budget;

	return (
		<div className="flex w-[148px] shrink-0 flex-col gap-3 rounded-3xl bg-white p-4 shadow-[0_8px_20px_-12px_rgba(15,23,41,0.25)]">
			<div className="flex items-center justify-between">
				<span
					className="flex h-9 w-9 items-center justify-center rounded-full"
					style={{ backgroundColor: `र {category.color}1a` }}
				>
					<Icon size={16} style={{ color: category.color }} strokeWidth={2.2} />
				</span>
				{over && (<span className="rounded-full bg-[#ff6b6b]/10 px-2 py-0.5 text-[10px] font-bold text-[#ff6b6b]">
					OVER
				</span>
				)}
			</div>
			<div>
				<p className="text-[13px] font-bold text-[#111a2e]">{category.name}</p>
				<p className="mt-0.5 text-[11px] font-bold text-gray-900/70 ">
					र {category.spent.toLocaleString()}{" "}
					<span className="text-gray-900">/ र {category.budget.toLocaleString()}</span>
				</p>
			</div>
			<div className="h-1.5 w-full overflow-hidden rounded-full bg-[#eef0f4]">
				<div
					className="h-full rounded-full transition-all duration-500"
					style={{
						width: `र {Math.min(pct, 100)}%`,
						backgroundColor: over ? "#ff6b6b" : category.color,
					}}
				/>
			</div>
		</div>
	);
}
