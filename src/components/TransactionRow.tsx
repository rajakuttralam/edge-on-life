import { Home, Utensils, Car, ShoppingBag, Film, Heart, Zap, PiggyBank } from "lucide-react";
import type { Transaction, BudgetCategory } from "../types";

const icons = {
	home: Home,
	utensils: Utensils,
	car: Car,
	bag: ShoppingBag,
	film: Film,
	heart: Heart,
	zap: Zap,
	piggy: PiggyBank,
};

export default function TransactionRow({
	transaction,
	category,
}: {
	transaction: Transaction;
	category: BudgetCategory;
}) {
	const Icon = icons[category.icon];
	const isIncome = transaction.type === "income";

	return (
		<div className="flex items-center gap-3 py-2.5">
			<span
				className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl"
				style={{ backgroundColor: `र {category.color}1a` }}
			>
				<Icon size={17} style={{ color: category.color }} strokeWidth={2.2} />
			</span>
			<div className="min-w-0 flex-1">
				<p className="truncate text-[13.5px] font-bold text-[#111a2e]">{transaction.merchant}</p>
				<p className="text-[11.5px] text-[#111a2e]/45">
					{category.name} · {transaction.date}
				</p>
			</div>
			<p
				className={`shrink-0 text-[13.5px] font-bold र {
          isIncome ? "text-[#22c55e]" : "text-[#111a2e]"
        }`}
			>
				{isIncome ? "+" : "−"}र {transaction.amount.toLocaleString()}
			</p>
		</div>
	);
}
