// import image from "./../assets/Villa.png"
import image1 from "./../assets/budgetHome.png"
import Card from "../components/Card";
import TransactionRow from "../components/TransactionRow";
import { Costing, Quantity, HU2, HU3, HU4, HU5, idCard } from "../ConstructionCostCalculator";
import IdentityCard from "../components/IdentityCard";
import IFL from "../components/IFL";
export default function ExperiaVilla() {
	return (
		<div className="flex flex-col  items-center justify-center" style={{ background: "#f8f8f8" }} >
			<div className="flex flex-row justify-between items-center w-full" >
				<img
					src={image1}
					alt={"name"}
					className="h-[30vh] w-full object-cover  transition-transform duration-300 group-hover:scale-105"
				/>
			</div>
			<div className="mt-3 grid grid-cols-1 gap-3 bg-slate-900 w-[96%] p-1">
				<div className="mt-8 flex flex-wrap items-center justify-between">
					<h2 className="text-[15px] font-bold text-slate-100 px-3">Cost of Material</h2>
					<p className="text-xs font-medium text-[#111a2e]/40">
						{Costing.length} active
					</p>
				</div>
				<div className="flex flex-wrap gap-3  justify-center w-[92vw] py-2 ">
					{Costing.map((c, idx) => (
						<Card key={idx} category={c} />
					))}
				</div>
				<div className="mt-8 flex items-center justify-between">
					<h2 className="text-[15px] font-bold text-slate-100 px-3">Cost of Labour</h2>
					<p className="text-xs font-medium text-[#111a2e]/40">
						{Quantity.length} active
					</p>
				</div>
				<div className="flex flex-wrap gap-3  justify-center w-[92vw] py-2 ">
					{Quantity.map((c, idx) => (
						<Card key={idx} category={c} />
					))}
				</div>
				<div className="mt-8 flex items-center justify-between">
					<h2 className="text-[15px] font-bold text-slate-100 px-3">Work Area Calculation</h2>
					<p className="text-xs font-medium px-3">
						{HU3.length} active
					</p>
				</div>
				<div className="flex flex-wrap gap-3 justify-center w-[92vw] py-2 ">
					{HU3.map((c, idx) => (
						<Card key={idx} category={c} />
					))}
				</div>

				<div className="mt-8 flex items-center justify-between">
					<h2 className="text-[15px] font-bold text-slate-100 px-3">Home / Personal Loan EMI</h2>
					<p className="text-xs font-medium text-slate-100 px-3 ">
						{HU2.length} active
					</p>
				</div>

				<div className="flex flex-wrap gap-3 justify-center w-[92vw] py-2 ">
					{HU2.map((c, idx) => (
						<Card key={idx} category={c} />
					))}
				</div>
				<div className="mt-8 flex items-center justify-between">
					<h2 className="text-[15px] font-bold text-slate-100 px-3">Monthly Expense - 15k</h2>
					<p className="text-xs font-medium text-slate-100 px-3 ">See all</p>
				</div>
				<div className="m-1 divide-y divide-[#111a2e]/[0.06] rounded-xl bg-white px-4 shadow-[0_10px_24px_-14px_rgba(15,23,41,0.2)]">
					{HU4.map((t, idx) => {
						const category = HU2.find((c) => c.id === t.categoryId)!;
						return <TransactionRow key={idx} transaction={t} category={category} />;
					})}
				</div>
				<div className="mt-8 flex items-center justify-between">
					<h2 className="text-[15px] font-bold text-slate-100 px-3">Asset Management</h2>
					<p className="text-xs font-medium text-slate-100 px-3">
						{HU5.length} active
					</p>
				</div>
				<div className="flex flex-wrap gap-3 justify-center w-[92vw] py-2 ">
					{HU5.map((c, idx) => (
						<IFL key={idx} category={c} />
					))}
				</div>
				<div className="flex flex-wrap gap-3 mb-24">
					{idCard.map((c, idx) => (
						<IdentityCard key={idx} category={c} />
					))}
				</div>
			</div>
		</div>
	);
}