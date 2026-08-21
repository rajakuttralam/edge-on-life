import { useMemo, useState } from "react";
import BudgetRing from "../components/BudgetRing";
import CategoryCard from "../components/CategoryCard";
import TransactionRow from "../components/TransactionRow";
import MonthSwitcher from "../components/MonthSwitcher";
import { budgetCategories, transactions, monthlyIncome, idCard, interestFreeLoan } from "../budgetData";
import IdentityCard from "../components/IdentityCard";
import IFL from "../components/IFL";

const months = ["June 2026", "July 2026", "August 2026"];

export default function Budget() {
	const [monthIndex, setMonthIndex] = useState(months.length - 1);

	const totalBudget = useMemo(
		() => budgetCategories.reduce((sum, c) => sum + c.budget, 0),
		[]
	);
	const totalSpent = useMemo(
		() => budgetCategories.reduce((sum, c) => sum + c.spent, 0),
		[]
	);
	const remaining = totalBudget - totalSpent;
	const leftToSpendOfIncome = monthlyIncome - totalSpent;


	return (
		<div className="mt-3 grid grid-cols-1 gap-3 w-[90%]">
			<div className="mt-6 flex items-center justify-between">
				<p className="text-xs font-semibold uppercase tracking-wide text-[#111a2e]/35">
					Monthly overview
				</p>
				<MonthSwitcher
					label={months[monthIndex]}
					onPrev={() => setMonthIndex((i) => Math.max(0, i - 1))}
					onNext={() => setMonthIndex((i) => Math.min(months.length - 1, i + 1))}
				/>
			</div>
			<div className="mt-4 rounded-[32px] bg-white p-6 shadow-[0_16px_32px_-14px_rgba(15,23,41,0.25)]">
				<div className="flex items-center justify-center">
					<BudgetRing spent={totalSpent} total={totalBudget} />
				</div>

				<div className="mt-6 grid grid-cols-2 gap-3">
					<div className="rounded-2xl bg-[#eef0f4] p-3.5">
						<p className="text-[11px] font-medium text-[#111a2e]/45">Left to budget</p>
						<p
							className={`mt-1 text-lg font-extrabold र {
                  remaining < 0 ? "text-[#ff6b6b]" : "text-[#111a2e]"
                }`}
						>
							र {remaining.toLocaleString()}
						</p>
					</div>
					<div className="rounded-2xl bg-[#eef0f4] p-3.5">
						<p className="text-[11px] font-medium text-[#111a2e]/45">Left of income</p>
						<p
							className={`mt-1 text-lg font-extrabold र {
                  leftToSpendOfIncome < 0 ? "text-[#ff6b6b]" : "text-[#22c55e]"
                }`}
						>
							र {leftToSpendOfIncome.toLocaleString()}
						</p>
					</div>
				</div>
			</div>
			<div className="mt-8 flex items-center justify-between">
				<h2 className="text-[15px] font-bold text-[#111a2e]">Categories</h2>
				<p className="text-xs font-medium text-[#111a2e]/40">
					{budgetCategories.length} active
				</p>
			</div>
			<div className="mt-3 -mx-6 flex gap-3 overflow-x-auto px-6 pb-1">
				{budgetCategories.map((c, idx) => (
					<CategoryCard key={idx} category={c} />
				))}
			</div>
			<div className="mt-8 flex items-center justify-between">
				<h2 className="text-[15px] font-bold text-[#111a2e]">Recent Transactions</h2>
				<p className="text-xs font-medium text-[#111a2e]/40">See all</p>
			</div>
			<div className="mt-1 divide-y divide-[#111a2e]/[0.06] rounded-3xl bg-white px-4 shadow-[0_10px_24px_-14px_rgba(15,23,41,0.2)]">
				{transactions.map((t, idx) => {
					const category = budgetCategories.find((c) => c.id === t.categoryId)!;
					return <TransactionRow key={idx} transaction={t} category={category} />;
				})}
			</div>
			<div className="mt-3 -mx-6 flex gap-3 overflow-x-auto px-6 pb-1">
				{idCard.map((c, idx) => (
					<IdentityCard key={idx} category={c} />
				))}
			</div>
			<div className="mt-3 -mx-6 flex gap-3 overflow-x-auto px-6 pb-1">
				{interestFreeLoan.map((c, idx) => (
					<IFL key={idx} category={c} />
				))}
			</div>
		</div>
	);
}
