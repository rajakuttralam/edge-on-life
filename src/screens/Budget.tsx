import CategoryCard from "../components/CategoryCard";
import TransactionRow from "../components/TransactionRow";
import { HU1, HU2, HU3, transactions, idCard, interestFreeLoan } from "../budgetData";
import IdentityCard from "../components/IdentityCard";
import IFL from "../components/IFL";

export default function Budget() {

	return (
		<div className="mt-3 grid grid-cols-1 gap-3 w-[90%]">
			<div className="mt-8 flex items-center justify-between">
				<h2 className="text-[15px] font-bold text-[#111a2e]">House Unit 1</h2>
				<p className="text-xs font-medium text-[#111a2e]/40">
					{HU1.length} active
				</p>
			</div>
			<div className="mt-3 -mx-6 flex gap-3 overflow-x-auto px-6 pb-1">
				{HU1.map((c, idx) => (
					<CategoryCard key={idx} category={c} />
				))}
			</div>
			<div className="mt-8 flex items-center justify-between">
				<h2 className="text-[15px] font-bold text-[#111a2e]">House Unit 2</h2>
				<p className="text-xs font-medium text-[#111a2e]/40">
					{HU3.length} active
				</p>
			</div>
			<div className="mt-3 -mx-6 flex gap-3 overflow-x-auto px-6 pb-1">
				{HU3.map((c, idx) => (
					<CategoryCard key={idx} category={c} />
				))}
			</div>
			<div className="mt-8 flex items-center justify-between">
				<h2 className="text-[15px] font-bold text-[#111a2e]">Critical Pending</h2>
				<p className="text-xs font-medium text-[#111a2e]/40">
					{HU2.length} active
				</p>
			</div>
			<div className="mt-3 -mx-6 flex gap-3 overflow-x-auto px-6 pb-1">
				{HU2.map((c, idx) => (
					<CategoryCard key={idx} category={c} />
				))}
			</div>
			<div className="mt-8 flex items-center justify-between">
				<h2 className="text-[15px] font-bold text-[#111a2e]">Recent Transactions</h2>
				<p className="text-xs font-medium text-[#111a2e]/40">See all</p>
			</div>
			<div className="mt-1 divide-y divide-[#111a2e]/[0.06] rounded-3xl bg-white px-4 shadow-[0_10px_24px_-14px_rgba(15,23,41,0.2)]">
				{transactions.map((t, idx) => {
					const category = HU2.find((c) => c.id === t.categoryId)!;
					return <TransactionRow key={idx} transaction={t} category={category} />;
				})}
			</div>
			<div className="mt-3 -mx-6 flex gap-3 overflow-x-auto px-6 pb-1">
				{idCard.map((c, idx) => (
					<IdentityCard key={idx} category={c} />
				))}
			</div>
			<div className="mt-3 -mx-6 flex gap-3 overflow-x-auto px-6 mb-18 pb-18">
				{interestFreeLoan.map((c, idx) => (
					<IFL key={idx} category={c} />
				))}
			</div>
		</div>
	);
}
