import CategoryCard from "../components/CategoryCard";
import TransactionRow from "../components/TransactionRow";
import { HU, HU1, HU2, HU3, HU4, HU5, idCard } from "../budgetData";
import IdentityCard from "../components/IdentityCard";
import IFL from "../components/IFL";

export default function Budget() {

	return (
		<div className="mt-3 grid grid-cols-1 gap-3 bg-slate-900 w-[90%]">
			<div className="mt-8 flex flex-wrap items-center justify-between">
				<h2 className="text-[15px] font-bold text-slate-100 px-3">Critical Pending</h2>
				<p className="text-xs font-medium text-[#111a2e]/40">
					{HU.length} active
				</p>
			</div>
			<div className="flex flex-wrap gap-3  justify-center w-[92vw] py-2 ">
				{HU.map((c, idx) => (
					<CategoryCard key={idx} category={c} />
				))}
			</div>
			<div className="mt-8 flex items-center justify-between">
				<h2 className="text-[15px] font-bold text-slate-100 px-3">Short Term Loan</h2>
				<p className="text-xs font-medium text-[#111a2e]/40">
					{HU1.length} active
				</p>
			</div>
			<div className="flex flex-wrap gap-3  justify-center w-[92vw] py-2 ">
				{HU1.map((c, idx) => (
					<CategoryCard key={idx} category={c} />
				))}
			</div>
			<div className="mt-8 flex items-center justify-between">
				<h2 className="text-[15px] font-bold text-slate-100 px-3">Monthly Home Expense</h2>
				<p className="text-xs font-medium px-3">
					{HU3.length} active
				</p>
			</div>
			<div className="flex flex-wrap gap-3 justify-center w-[92vw] py-2 ">
				{HU3.map((c, idx) => (
					<CategoryCard key={idx} category={c} />
				))}
			</div>

			<div className="mt-8 flex items-center justify-between">
				<h2 className="text-[15px] font-bold text-slate-100 px-3">Home / Personal Loan EMI</h2>
				<p className="text-xs font-medium text-slate-100 px-3 ">
					{HU1.length} active
				</p>
			</div>

			<div className="flex flex-wrap gap-3 justify-center w-[92vw] py-2 ">
				{HU2.map((c, idx) => (
					<CategoryCard key={idx} category={c} />
				))}
			</div>
			<div className="mt-8 flex items-center justify-between">
				<h2 className="text-[15px] font-bold text-slate-100 px-3">Monthly Expense - 15k</h2>
				<p className="text-xs font-medium text-slate-100 px-3 ">See all</p>
			</div>
			<div className="mt-1 divide-y divide-[#111a2e]/[0.06] rounded-3xl bg-white px-4 shadow-[0_10px_24px_-14px_rgba(15,23,41,0.2)]">
				{HU4.map((t, idx) => {
					const category = HU1.find((c) => c.id === t.categoryId)!;
					return <TransactionRow key={idx} transaction={t} category={category} />;
				})}
			</div>
			<div className="mt-8 flex items-center justify-between">
				<h2 className="text-[15px] font-bold text-[#111a2e]">Asset Management</h2>
				<p className="text-xs font-medium text-[#111a2e]/40">
					{HU5.length} active
				</p>
			</div>
			<div className="mt-3 -mx-6 flex gap-3 overflow-x-auto px-6">
				{HU5.map((c, idx) => (
					<IFL key={idx} category={c} />
				))}
			</div>

			<div className="mt-3 -mx-6 flex gap-3 overflow-x-auto px-6 pb-1 mb-24">
				{idCard.map((c, idx) => (
					<IdentityCard key={idx} category={c} />
				))}
			</div>

		</div>
	);
}
